// src/components/Scene3D.tsx
import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { MotionValue } from "framer-motion";
import * as THREE from "three";

interface Scene3DProps {
  scrollProgress?: MotionValue<number>;
}

/** Create a soft circular sprite as a THREE.CanvasTexture */
function createCircleTexture(size = 64, innerColor = "rgba(255,182,193,1)", outerColor = "rgba(255,182,193,0)") {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2;

  const grd = ctx.createRadialGradient(cx, cy, r * 0.08, cx, cy, r);
  grd.addColorStop(0, innerColor);
  grd.addColorStop(1, outerColor);

  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();

  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.encoding = THREE.sRGBEncoding;
  tex.needsUpdate = true;
  return tex;
}

type PetalLayerProps = {
  count: number;
  area: number; // spread radius
  size: number;
  speed: number;
  depthOffset: number;
  texture: THREE.Texture;
};

function PetalLayer({ count, area, size, speed, depthOffset, texture }: PetalLayerProps) {
  const pointsRef = useRef<THREE.Points | null>(null);

  // initial positions
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * area; // x
      arr[i * 3 + 1] = Math.random() * (area / 2);   // y
      arr[i * 3 + 2] = (Math.random() - 0.5) * area - depthOffset; // z
    }
    return arr;
  }, [count, area, depthOffset]);

  // geometry & material created once
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size,
      map: texture,
      alphaMap: texture,
      transparent: true,
      depthWrite: false,
      sizeAttenuation: true,
      opacity: 0.95,
      color: new THREE.Color("#FFB6C1"),
    });
  }, [size, texture]);

  // update loop — gentle downward movement + small horizontal drift
  useFrame((_, delta) => {
    const pts = pointsRef.current;
    if (!pts) return;
    const posAttr = pts.geometry.getAttribute("position") as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // fall
      arr[i3 + 1] -= speed * delta;

      // gentle horizontal drift using a slow sine based on x,z
      const drift = Math.sin((arr[i3] + arr[i3 + 2]) * 0.01 + performance.now() * 0.0002) * 0.01;
      arr[i3] += drift * delta * 30;

      // wrap / reset when below floor
      if (arr[i3 + 1] < -6) {
        arr[i3 + 1] = 12 + Math.random() * (area / 4);
        arr[i3] = (Math.random() - 0.5) * area;
        arr[i3 + 2] = (Math.random() - 0.5) * area - depthOffset;
      }
    }
    posAttr.needsUpdate = true;
  });

  // dispose on unmount
  useEffect(() => {
    return () => {
      try {
        geometry.dispose();
      } catch {}
      try {
        material.dispose();
      } catch {}
    };
  }, [geometry, material]);

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

function CameraParallax({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  useFrame((state) => {
    // subtle parallax, keep camera looking at origin
    state.camera.position.x += (mouseX * 4 - state.camera.position.x) * 0.02;
    state.camera.position.y += (mouseY * 2 + 2 - state.camera.position.y) * 0.02;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D(_: Scene3DProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // create a single reusable pink round texture
  const circleTexture = useMemo(() => createCircleTexture(64), []);

  // dispose texture on unmount
  useEffect(() => {
    return () => {
      try {
        circleTexture.dispose();
      } catch {}
    };
  }, [circleTexture]);

  const handleMove = (e: React.MouseEvent) => {
    setMouse({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: -(e.clientY / window.innerHeight - 0.5) * 2,
    });
  };

  // guard: only render in browser
  if (typeof window === "undefined") return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10"
      onMouseMove={handleMove}
      aria-hidden
    >
      <Canvas camera={{ position: [0, 4, 10], fov: 60 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 5, 10]} intensity={0.3} />

        <CameraParallax mouseX={mouse.x} mouseY={mouse.y} />

        {/* three layered particle systems for depth */}
        <PetalLayer count={120} area={32} size={0.18} speed={0.9} depthOffset={0} texture={circleTexture} />
        <PetalLayer count={90} area={40} size={0.14} speed={0.6} depthOffset={8} texture={circleTexture} />
        <PetalLayer count={60} area={48} size={0.11} speed={0.4} depthOffset={16} texture={circleTexture} />
      </Canvas>
    </div>
  );
}



