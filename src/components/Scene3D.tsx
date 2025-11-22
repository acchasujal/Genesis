import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MotionValue } from 'motion/react';
import * as THREE from 'three';

interface SakuraPetalSystemProps {
  count: number;
  color: string;
  size: number;
  speed: number;
  windStrength: number;
  depthLayer: number;
}

function SakuraPetalSystem({ count, color, size, speed, windStrength, depthLayer }: SakuraPetalSystemProps) {
  const meshRef = useRef<THREE.Points>(null);
  const windRef = useRef({ x: 0, z: 0, phase: 0 });

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const rotations = new Float32Array(count);
    const phases = new Float32Array(count);
    const scales = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Spread petals across space with depth
      positions[i * 3] = (Math.random() - 0.5) * 70;
      positions[i * 3 + 1] = Math.random() * 40 + 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 70 - depthLayer * 10;

      // Slow, graceful falling
      velocities[i * 3] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 1] = -Math.random() * speed * 0.6;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;

      rotations[i] = Math.random() * Math.PI * 2;
      phases[i] = Math.random() * Math.PI * 2;
      scales[i] = 0.7 + Math.random() * 0.6; // Varying sizes
    }

    return { positions, velocities, rotations, phases, scales };
  }, [count, speed, depthLayer]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
    
    // Gentle, realistic wind simulation
    windRef.current.phase += delta * 0.2;
    windRef.current.x = Math.sin(windRef.current.phase) * windStrength * 0.7;
    windRef.current.z = Math.cos(windRef.current.phase * 0.5) * windStrength * 0.4;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Natural floating motion
      particles.phases[i] += delta * 0.8;
      const swayX = Math.sin(particles.phases[i]) * 0.015;
      const swayZ = Math.cos(particles.phases[i] * 0.7) * 0.012;
      
      // Apply gentle wind and sway
      positions[i3] += particles.velocities[i3] + windRef.current.x * delta + swayX;
      positions[i3 + 1] += particles.velocities[i3 + 1] * delta * 8;
      positions[i3 + 2] += particles.velocities[i3 + 2] + windRef.current.z * delta + swayZ;

      // Slow rotation like real petals
      particles.rotations[i] += delta * 0.8;
      positions[i3] += Math.sin(particles.rotations[i]) * 0.01;
      positions[i3 + 2] += Math.cos(particles.rotations[i]) * 0.01;

      // Reset petals that fall below ground
      if (positions[i3 + 1] < -3) {
        positions[i3] = (Math.random() - 0.5) * 70;
        positions[i3 + 1] = 40;
        positions[i3 + 2] = (Math.random() - 0.5) * 70 - depthLayer * 10;
        particles.phases[i] = Math.random() * Math.PI * 2;
      }

      // Wrap particles horizontally for seamless flow
      if (positions[i3] > 35) positions[i3] = -35;
      if (positions[i3] < -35) positions[i3] = 35;
      if (positions[i3 + 2] > 35) positions[i3 + 2] = -35;
      if (positions[i3 + 2] < -35) positions[i3 + 2] = 35;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

function CameraController({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  useFrame((state) => {
    // Subtle parallax - slow, cinematic movement
    const targetX = mouseX * 1.2;
    const targetY = mouseY * 1.2;
    
    state.camera.position.x += (targetX - state.camera.position.x) * 0.02;
    state.camera.position.y += (targetY + 5 - state.camera.position.y) * 0.02;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

// Sky gradient atmosphere - slow shifting colors
function AtmosphericSky() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && meshRef.current.material instanceof THREE.MeshBasicMaterial) {
      // Slow color shift simulating dawn/dusk atmosphere
      const time = state.clock.elapsedTime * 0.05;
      const color = new THREE.Color();
      
      // Blend between soft blue and warm orange
      const hue = 0.55 + Math.sin(time) * 0.08; // Blue to orange
      const saturation = 0.3 + Math.sin(time * 0.7) * 0.1;
      const lightness = 0.15 + Math.sin(time * 0.5) * 0.05;
      
      color.setHSL(hue, saturation, lightness);
      meshRef.current.material.color = color;
      
      // Gentle vertical movement
      meshRef.current.position.y = -8 + Math.sin(time * 0.3) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -8, -40]}>
      <planeGeometry args={[120, 70]} />
      <meshBasicMaterial
        color="#1a2332"
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

interface Scene3DProps {
  scrollProgress: MotionValue<number>;
}

export default function Scene3D({ scrollProgress }: Scene3DProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: -(e.clientY / window.innerHeight - 0.5) * 2,
    });
  };

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      onMouseMove={handleMouseMove}
      style={{ pointerEvents: 'auto' }}
    >
      <Canvas
        camera={{ position: [0, 5, 15], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.25} color="#C33B33" />
        <pointLight position={[-10, 5, -10]} intensity={0.15} color="#4D8B86" />
        
        <CameraController mouseX={mousePosition.x} mouseY={mousePosition.y} />
        
        {/* Atmospheric sky gradient */}
        <AtmosphericSky />
        
        {/* Sakura petal systems - multiple layers for realistic depth */}
        {/* Front layer - larger, more visible */}
        <SakuraPetalSystem
          count={60}
          color="#FFC6D0"
          size={0.4}
          speed={0.2}
          windStrength={0.3}
          depthLayer={0}
        />
        
        {/* Mid layer - medium size */}
        <SakuraPetalSystem
          count={70}
          color="#E99AAA"
          size={0.3}
          speed={0.25}
          windStrength={0.35}
          depthLayer={1}
        />
        
        {/* Back layer - smaller, depth effect */}
        <SakuraPetalSystem
          count={50}
          color="#F2B9C3"
          size={0.22}
          speed={0.3}
          windStrength={0.25}
          depthLayer={2}
        />
      </Canvas>
    </div>
  );
}