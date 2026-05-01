import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
export default function Octahedron({ position, scale }) {
  const ref = useRef();

 useFrame(({ clock }) => {
  const t = clock.getElapsedTime();

  if (ref.current) {
    ref.current.position.y = position[2] + Math.sin(t * 0.8) * 0.25;
  }
});

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <octahedronGeometry args={[0.8, 0]} />

      <meshStandardMaterial
        color="#38bdf8"
        roughness={0.5}
        metalness={0.15}
      />
    </mesh>
  );
}