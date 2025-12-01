import { useState, useEffect } from "react";
import HeaderSection from './Header.jsx'
import BGShader from './backgroundShader.jsx'
import ScrollSection from './scrollingHorizontal.jsx'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import './App.css'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const frames = [
  "/frame1.png",
  "/frame2.png",
  "/frame3.png",
  "/frame4.png"
];

function App() {
  const [frame, setFrame] = useState(0);
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useGSAP(() => {

    let split = SplitText.create(".item div h1", {
      type:"chars, words, lines"
    });
    gsap.from(split.chars.reverse(), {
      filter: "blur(1rem)",
      autoAlpha: 0,
      x:-100,
      duration: 1,
      stagger: 0.03,
    })

    
    gsap.from(".window", {
      duration: 3,
      y:-100,
      duration: 1,
      stagger: 0.03,
    })
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % frames.length);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className="texture"></div>
        <BGShader dark={dark} />
        <HeaderSection dark={dark} setDark={setDark} />
        <main className="frame">
          <div className="window">
            <div className="window_header">
              <h2 >▶ Who am I.exe</h2>
              <div>
                <button className="window_button">–</button>
                <button className="window_button">□</button>
                <button className="window_button">✕</button>
              </div>
            </div>
            <div className="item">
              <div style={{ alignItems: "stretch", alignContent: 'space-between' }}>
                <h1 style={{ fontFamily: "helvetica, sans-serif", fontSize: '100px', fontWeight: "bold", textTransform: 'uppercase', color: 'red' }}>Dzaky Ihsan Rasyid</h1>
                <p>hello World Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <img className="hero" src="Portfolio_Hero.png" alt="" />
            </div>
          </div>
          <div className='window' style={{ width: "fit-content" }}>
            <div className="window_header">
              <h2>▶ Little guy.mp4</h2>
              <div>
                <button className="window_button">–</button>
                <button className="window_button">□</button>
                <button className="window_button">✕</button>
              </div>
            </div>
            <div className="item">
              <img
                id="sprite"
                src={frames[frame]}
                style={{ width: 360, height: 360 }}
              />
            </div>
          </div>
        </main>
        <ScrollSection/>          
      </div>

    </>
  )

}

export default App
