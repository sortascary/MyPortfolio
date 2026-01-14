import * as THREE from 'three';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import './backgroundShader.css';

gsap.registerPlugin(ScrollTrigger);

function BGShader({ dark }) { 
  const mountRef = useRef(null);
  const materialRef = useRef(null); 
  const sceneRef = useRef(null); 

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: mountRef.current,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    camera.position.setZ(3);
    sceneRef.current = scene;
    
    //helpers
    // const lightHelper = new THREE.PointLightHelper(pointLight);
    // const gridHelper = new THREE.GridHelper(200, 50);
    // scene.add(lightHelper, gridHelper);

    scene.background =  dark ?new THREE.Color(0x000000): new THREE.Color(0xf0f8ff);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0.0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        darkMode: { value: dark ? 1.0 : 0.0 } // initial value
      },
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;
        uniform float darkMode;

        void main() {
          vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / iResolution.y;
          float d = length(uv);
          
          float rings = 8.0;
          
          d = sin(d*rings - iTime * 0.3)/rings;
          
          d = abs(d);
          
          d = step(0.1, d);
          gl_FragColor = darkMode == 1.0? vec4(d, 0.0, 0.0, 1.0) : vec4(vec3(d), 1.0);
        }
      `
    });

    materialRef.current = material; // store it in ref for later updates

    const geometry = new THREE.PlaneGeometry( 10, 10 );
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // const geometryP = new THREE.PlaneGeometry(10, 10);
    // const meshP = new THREE.Mesh(geometryP, materialP);
    // meshP.position.setZ(7);
    // scene.add(meshP);


    const clock = new THREE.Clock();
    function animate() {
      material.uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();


    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
    });
  }, []);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.darkMode.value = dark ? 1.0 : 0.0;
    }
    if (sceneRef.current) {
      sceneRef.current.background =  dark ?new THREE.Color(0x000000): new THREE.Color(0xdE8E8E8);
    }
  }, [dark]);

  return <canvas ref={mountRef} id="bg" />;
}

export default BGShader;
