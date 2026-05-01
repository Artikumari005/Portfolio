import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";

import Sphere from "./Sphere";
import Cylinder from "./Cylinder";
import Pyramid from "./Pyramid";
import Cube from "./Cube";
import Hash from "./Hash";
import Octahedron from "./Octahedron";

export default function Scene() {
  const positions = {
    topLeft: [-8, 4, 0],    
    topRight: [8, 4, 0],

    midLeft: [-9, -5, 0],     
    midRight: [12, -7, 0],

    // These should now be deep in the corners
    bottomLeft: [-13, -5, 0], 
    bottomRight: [8, -5, 0],
  };

  return (
    
    <Canvas 
      // Zoomed out to 20 to keep the lowered shapes from being cut off
      camera={{ position: [0, 0, 20], fov: 55}} 
      style={{ 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: -1, 
        pointerEvents: 'none' 
      }}
    >
       <Environment preset="studio" />

      <ambientLight intensity={0.4} />

<directionalLight 
  position={[5, 5, 5]} 
  intensity={1.2} 
/>

<directionalLight 
  position={[-5, -3, -2]} 
  intensity={0.5} 
/>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}></Float>

      
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Shapes Rendering */}
      <Sphere position={positions.topLeft} scale={1.7} />
      <Cube position={positions.topRight} scale={2.4} />
      
      {/* Middle row stays at Y = 0 */}
      <Cylinder position={positions.midLeft} scale={2.4} /> 
      <Octahedron position={positions.midRight} scale={2.4} />
      
      {/* Bottom row pushed down to Y = -8.5 */}
      <Pyramid position={positions.bottomLeft} scale={2.4} /> 
      <Hash position={positions.bottomRight} scale={1.7} /> 

    </Canvas>
  );
}