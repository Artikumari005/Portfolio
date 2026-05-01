import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
export default function Pyramid({ position, scale }) {
  const ref = useRef();

  useFrame(({ clock }) => {
  const t = clock.getElapsedTime();

  if (ref.current) {
    ref.current.position.y = position[2] + Math.sin(t * 0.8) * 0.25;
  }
});

  return (
     <mesh ref={ref} position={position} scale={scale}  rotation={[0.2, 0.3, 0.1]}>
     
      <coneGeometry args={[0.7, 1.4, 4]} />

      <meshStandardMaterial
        color="#f97316"
        roughness={0.7}
        metalness={0.05}
      />
    </mesh>
  );
}