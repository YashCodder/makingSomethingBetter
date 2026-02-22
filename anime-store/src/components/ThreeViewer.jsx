import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

function ThreeViewer() {
  const mountRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x03030a);

    const camera = new THREE.PerspectiveCamera(
      65,
      mountRef.current.clientWidth /
        mountRef.current.clientHeight,
      0.1,
      3000
    );
    camera.position.set(0, 3, 10);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );

    mountRef.current.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloom = new UnrealBloomPass(
      new THREE.Vector2(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      ),
      2.5,
      1.0,
      0.15
    );
    composer.addPass(bloom);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        emissive: 0x00ffff,
        emissiveIntensity: 4,
      })
    );
    scene.add(core);

    const controls = new OrbitControls(
      camera,
      renderer.domElement
    );
    controls.enableDamping = true;
    controls.autoRotate = true;

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      core.rotation.y += 0.01;
      controls.update();
      composer.render();
    };

    animate();

    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      composer.dispose();

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "550px",
        marginTop: "40px",
      }}
    />
  );
}

export default ThreeViewer;