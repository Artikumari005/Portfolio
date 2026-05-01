import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Cylinder({ position, scale }) {
  const ref = useRef();

 useFrame(({ clock }) => {
  const t = clock.getElapsedTime();

  if (ref.current) {
    ref.current.position.y = position[1] + Math.sin(t * 0.8) * 0.25;
  }
});

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <cylinderGeometry args={[0.4, 0.4, 1.4, 64]} />
      <meshStandardMaterial color="#3b82f6"
      roughness={0.25}   // 🔥 lower = smoother
  metalness={0.4}  />
    </mesh>
  );
}