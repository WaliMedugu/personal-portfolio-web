import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three/examples/jsm/controls/OrbitControls";
import { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { gsap } from "gsap";

  const controlsRef = useRef<OrbitControlsImpl>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.rotation, { y: Math.PI * 2, duration: 10, repeat: -1 });
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh ref={meshRef}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="#82CAFA" />
        </mesh>
        <OrbitControls ref={controlsRef} />
      </Canvas>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <h2 className="text-xl mb-2">Web Developer</h2>
        <p className="text-gray-500">Welcome to my portfolio</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;