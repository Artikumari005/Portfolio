import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Scube = () => {
  const meshRef = useRef(null); // ✅ important (initialize)

  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} /> {/* ✅ must be array */}
      <meshStandardMaterial
        color="#ffffff"
        transparent
        opacity={0.1}
        roughness={0.2}
        metalness={0.7}
      />
    </mesh>
  );
};

export default Scube;