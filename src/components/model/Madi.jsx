import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Stand } from "./Stand";
import { Glassdome } from "./Glassdome";

const Madi = () => {
  return (
    <Canvas
      orthographic
      style={{
        width: "100%",
        height: "80vh",
      }}
      camera={{ position: [0, 0, 15], zoom: 30 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <directionalLight
          position={[10, 10, 10]}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <OrbitControls 
            enableZoom={false}/>
        <PerspectiveCamera />
        <Glassdome
            scale={[0.3, 0.3, 0.3]} 
            position={[-5.4, -6, -7.9]} 
        />
        <Stand
            position={[-5.6, -6, -10]}
            scale={[0.3, 0.3, 0.3]}
            rotation={[0, 0, 0]}
        />
      </Suspense>
    </Canvas>
  );
};

export default Madi;
