import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Hash({ position, scale  }) {
  const ref = useRef();

 const baseY = useRef(0);

useFrame(({ clock }) => {
  const t = clock.getElapsedTime();

  if (ref.current) {
    ref.current.position.y = position[1] + Math.sin(t * 0.8) * 0.25;
  }
});
  // ⭐ Create star shape
  const shape = new THREE.Shape();
  const spikes = 5;
  const outerRadius = 1;
  const innerRadius = 0.45;

  for (let i = 0; i < spikes * 2; i++) {
    const angle = (i * Math.PI) / spikes;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }

  shape.closePath();

  return (
    <mesh ref={ref} position={position} scale={scale}>
      
      {/* ⭐ Extruded REAL star */}
      <extrudeGeometry
        args={[
          shape,
          {
            depth: 0.4,
            bevelEnabled: true,
            bevelThickness: 0.08,
            bevelSize: 0.08,
            bevelSegments: 16,
          },
        ]}
      />

      {/* ✨ Premium Material */}
      <meshStandardMaterial
        color="#00a8e8"        // sky blue
        roughness={0.35}       // smooth clay
        metalness={0.2}
        emissive="#ffffff"     // soft glow
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}