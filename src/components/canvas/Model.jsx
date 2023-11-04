import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Model = ({ isMobile }) => {
  const model = useGLTF("./mymodel/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.05} groundColor='black' />
      <spotLight
        position={[1500, 800,1200]}
        angle={0.12}
        penumbra={1.5}
        intensity={0.7}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={model.scene}
        scale={isMobile ? 1.25 : 2.30}
        position={isMobile ? [0, -2.2, 0] : [0, -2.5, -2.8]}
        rotation={[-0.00, 45.0, -0.0]}
      />
    </mesh>
  );
};

const ModelCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ModelCanvas;