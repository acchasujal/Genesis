// src/components/Scene3D.tsx
import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { MotionValue } from 'framer-motion';
import * as THREE from 'three';

// Import the petal sprite that exists in your repo.
// If you want a different sprite, replace this import with your file.
import petalSprite from '../assets/9a37286e101197d978dc518f5bf9258b949db55b.png';

interface SakuraPetalSystemProps {
  count: number;
  color: string;      // used as tint
  size: number;
  speed: number;
  windStrength: number;
  depthLayer: number;
}

/**
 * SakuraPetalSystem:
 * - uses a Points geometry + PointsMaterial with a texture map (sprite)
 * - updates BufferAttribute positions in useFrame
 * - disposes geometry/material/texture on unmount
 */
function SakuraPetalSystem({
  count,
  color,
  size,
  speed,
  windStrength,
  depthLayer,
}: SakuraPetalSystemProps) {
  const meshRef = useRef<THREE.Points | null>(null);
  const windRef = useRef({ x: 0, z: 0, phase: 0 });

  // Load petal texture via r3f's useLoader (memoized by fiber)
  const petalTexture = useLoader(THREE.TextureLoader, petalSprite);

  // Precompute particle arrays (positions, velocities, rotations, phases)
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const rotations = new Float32Array(count);
    const phases = new Float32Array(count);
    const scales = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 70;
      positions[i * 3 + 1] = Math.random() * 40 + 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 70 - depthLayer * 10;

      velocities[i * 3] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 1] = -Math.random() * speed * 0.6;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;

      rotations[i] = Math.random() * Math.PI * 2;
      phases[i] = Math.random() * Math.PI * 2;
      scales[i] = 0.7 + Math.random() * 0.6;
    }

    return { positions, velocities, rotations, phases, scales };
  }, [count, speed, depthLayer]);

  // Create geometry and material instances once
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(particles.positions, 3));
    return g;
  }, [particles, count]);

  const material = useMemo(() => {
    const mat = new THREE.PointsMaterial({
      size,
      map: petalTexture,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      // Use vertex colors if you want varied tints in future:
      // vertexColors: false,
    });

    // tint the sprite using color by multiplying a Color onto material.color
    try {
      mat.color = new THREE.Color(color);
    } catch {
      // if invalid color string, leave default
    }

    // ensure the texture uses correct alpha handling
    if (petalTexture) {
      petalTexture.encoding = THREE.sRGBEncoding;
      petalTexture.needsUpdate = true;
    }

    return mat;
  }, [size, color, petalTexture]);

  // Dispose geometry/material/texture on unmount to prevent leaks
  useEffect(() => {
    return () => {
      try {
        geometry.dispose();
      } catch {}
      try {
        material.dispose();
      } catch {}
      try {
        if (petalTexture && typeof petalTexture.dispose === 'function') {
          petalTexture.dispose();
        }
      } catch {}
    };
    // petalTexture included intentionally to dispose if it changed
  }, [geometry, material, petalTexture]);

  // Update positions each frame
  useFrame((_, delta) => {
    if (!meshRef.current) return;

    const posAttr = meshRef.current.geometry.getAttribute('position') as THREE.BufferAttribute;
    const positions = posAttr.array as Float32Array;

    windRef.current.phase += delta * 0.2;
    windRef.current.x = Math.sin(windRef.current.phase) * windStrength * 0.7;
    windRef.current.z = Math.cos(windRef.current.phase * 0.5) * windStrength * 0.4;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      particles.phases[i] += delta * 0.8;
      const swayX = Math.sin(particles.phases[i]) * 0.015;
      const swayZ = Math.cos(particles.phases[i] * 0.7) * 0.012;

      positions[i3] += particles.velocities[i3] + windRef.current.x * delta + swayX;
      positions[i3 + 1] += particles.velocities[i3 + 1] * delta * 8;
      positions[i3 + 2] += particles.velocities[i3 + 2] + windRef.current.z * delta + swayZ;

      particles.rotations[i] += delta * 0.8;
      positions[i3] += Math.sin(particles.rotations[i]) * 0.01;
      positions[i3 + 2] += Math.cos(particles.rotations[i]) * 0.01;

      if (positions[i3 + 1] < -3) {
        positions[i3] = (Math.random() - 0.5) * 70;
        positions[i3 + 1] = 40;
        positions[i3 + 2] = (Math.random() - 0.5) * 70 - depthLayer * 10;
        particles.phases[i] = Math.random() * Math.PI * 2;
      }

      if (positions[i3] > 35) positions[i3] = -35;
      if (positions[i3] < -35) positions[i3] = 35;
      if (positions[i3 + 2] > 35) positions[i3 + 2] = -35;
      if (positions[i3 + 2] < -35) positions[i3 + 2] = 35;
    }

    posAttr.needsUpdate = true;
  });

  return <points ref={meshRef} geometry={geometry} material={material} />;
}

function CameraController({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  useFrame((state) => {
    const targetX = mouseX * 1.2;
    const targetY = mouseY * 1.2;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.02;
    state.camera.position.y += (targetY + 5 - state.camera.position.y) * 0.02;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function AtmosphericSky() {
  const meshRef = useRef<THREE.Mesh | null>(null);

  // create the material instance in JS to avoid JSX prop typing issues
  const skyMaterial = useMemo(() => {
    const m = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#1a2332'),
      transparent: true,
      opacity: 0.35,
    });
    return m;
  }, []);

  // Dispose skyMaterial when component unmounts
  useEffect(() => {
    return () => {
      try {
        skyMaterial.dispose();
      } catch {}
    };
  }, [skyMaterial]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material as THREE.MeshBasicMaterial;
    if (!mat) return;

    const time = state.clock.elapsedTime * 0.05;
    const color = new THREE.Color();
    const hue = 0.55 + Math.sin(time) * 0.08;
    const saturation = 0.3 + Math.sin(time * 0.7) * 0.1;
    const lightness = 0.15 + Math.sin(time * 0.5) * 0.05;
    color.setHSL(hue, saturation, lightness);

    mat.color.copy(color);
    meshRef.current.position.y = -8 + Math.sin(time * 0.3) * 2;
  });

  return (
    <mesh ref={meshRef} position={[0, -8, -40]} material={skyMaterial}>
      <planeGeometry args={[120, 70]} />
    </mesh>
  );
}

interface Scene3DProps {
  scrollProgress?: MotionValue<number>;
}

export default function Scene3D({ scrollProgress }: Scene3DProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: -(e.clientY / window.innerHeight - 0.5) * 2,
    });
  };

  // Guard rendering on server / non-browser environments
  if (typeof window === 'undefined') return null;

  return (
    <div className="fixed inset-0 z-0" onMouseMove={handleMouseMove} style={{ pointerEvents: 'auto' }}>
      <Canvas camera={{ position: [0, 5, 15], fov: 60 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.25} color={new THREE.Color('#C33B33')} />
        <pointLight position={[-10, 5, -10]} intensity={0.15} color={new THREE.Color('#4D8B86')} />

        <CameraController mouseX={mousePosition.x} mouseY={mousePosition.y} />

        <AtmosphericSky />

        <SakuraPetalSystem count={60} color="#FFC6D0" size={0.4} speed={0.2} windStrength={0.3} depthLayer={0} />
        <SakuraPetalSystem count={70} color="#E99AAA" size={0.3} speed={0.25} windStrength={0.35} depthLayer={1} />
        <SakuraPetalSystem count={50} color="#F2B9C3" size={0.22} speed={0.3} windStrength={0.25} depthLayer={2} />
      </Canvas>
    </div>
  );
}

