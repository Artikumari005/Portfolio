import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Sphere({ position, scale }) {
  const ref = useRef();

 useFrame(({ clock }) => {
  const t = clock.getElapsedTime();

  if (ref.current) {
    ref.current.position.y = position[1] + Math.sin(t * 0.8) * 0.25;
  }
});

  return (
    <mesh ref={ref} position={position} scale={scale} >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="#a855f7" 
      roughness={0.35}   // 🔥 lower = smoother
  metalness={0.2} />
    </mesh>
  );
}