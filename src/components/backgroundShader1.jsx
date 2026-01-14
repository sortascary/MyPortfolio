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
          vec2 fragCoord = gl_FragCoord.xy;
          vec2 uv = fragCoord / iResolution.xy;
          uv.x *= iResolution.x / iResolution.y;

          float angle = 0.3;
          mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
          uv = rot * uv;

          float frequency = 25.0;
          float speed = 0.01;
          float amplitude = 0.1;
          float lineThickness = 0.3;

          float yOffset = sin(uv.x * frequency - iTime * (speed * 10.0)) * amplitude;
          float waveY = uv.y + yOffset + iTime * speed;

          float lines = fract(waveY * 9.0);
          float brightness = 1.0 - step(lineThickness, lines);

          vec3 lineColor = vec3(0.0, 0.0, 0.0);
          vec3 bgColor = darkMode > 0.5 ? vec3(1.0 - uv.y,0.0,0.0) : vec3(1.0,1.0,1.0);
          vec3 color = mix(bgColor, lineColor, brightness);
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });

    const materialP = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0.0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;

        void main() {
          vec2 uv = (gl_FragCoord.xy* 2.0 - iResolution.xy) / iResolution.y;
    
          float d = length(uv);
          
          float rings = 8.0;
          
          float wave = sin(d*rings- iTime *2.0)/rings ;
          
          float ringMask = step(0.1, wave);

          float currentRingIndex = d * rings;
          float appearMask = step(currentRingIndex, iTime* 1.5);
          float finalMask = ringMask * appearMask;

          gl_FragColor = vec4(finalMask, 0.0, 0.0, 1.0);
        }
      `
    });

    materialRef.current = material; // store it in ref for later updates

    const geometry = new THREE.PlaneGeometry( 11, 11 );
    geometry.rotateZ(0.3);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // const geometryP = new THREE.PlaneGeometry(10, 10);
    // const meshP = new THREE.Mesh(geometryP, materialP);
    // meshP.position.setZ(7);
    // scene.add(meshP);


    const clock = new THREE.Clock();
    function animate() {
      material.uniforms.iTime.value = clock.getElapsedTime();
      materialP.uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();
    
    
    gsap.to(camera.position, {
      z: 80,
      scrollTrigger: {
        trigger: "#introduction",
        endTrigger: "#filler",
        start: "10% top",
        end: `center top`,
        scrub: true
      },
    });

    gsap.fromTo(
      camera.rotation,
      { y: 0 },
      {
        y: Math.PI,
        immediateRender:false,
        scrollTrigger: {
          //markers:true,
          trigger: "#introduction",
          endTrigger:"#filler",
          start: "center",
          end: "bottom",
          scrub: true
        }
      }
    );

    gsap.fromTo(
      camera.rotation,
      { y: Math.PI },
      {
        y: Math.PI * 2,
        immediateRender:false,
        scrollTrigger: {
          trigger: "#footer",
          start: "top center",
          end: "bottom bottom",
          scrub: true
        }
      }
    );

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight ;
      camera.updateProjectionMatrix();
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
