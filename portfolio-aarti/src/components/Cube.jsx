import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Cube({ position, scale }) {
  const ref = useRef();

 useFrame(({ clock }) => {
  const t = clock.getElapsedTime();

  if (ref.current) {
    ref.current.position.y = position[1] + Math.sin(t * 0.9) * 0.25;
  }
});

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />

      <meshStandardMaterial
        color="#2b45b2"
        roughness={0.25}   // 🔥 lower = smoother
  metalness={0.4} 
      />
    </mesh>
  );
}
