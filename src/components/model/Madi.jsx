import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Stand } from "./Stand";
import { Glassdome } from "./Glassdome";
import { useTheme, useMediaQuery } from "@mui/material";

const Madi = () => {
  const theme = useTheme();
  const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Canvas
      orthographic
      style={{
        width: "100%",
        height: lessThanSmall ? "50vh" : "70vh",
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
            scale={lessThanSmall ? 0.19 : 0.28} 
            position={lessThanSmall ? [-3.52, -4.10, -8.5] : [-5.2, -6, -7.9]} 
        />
        <Stand
            position={lessThanSmall ? [-3.65, -4.10, -10] : [-5.4, -6, -10]}
            scale={lessThanSmall ? 0.19 : 0.28}
            rotation={[0, 0, 0]}
        />
      </Suspense>
    </Canvas>
  );
};

export default Madi;
