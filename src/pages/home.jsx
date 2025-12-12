import { useState, useEffect } from "react";
import gsap from "gsap";    
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import ScrollSection from '../components/scrollingHorizontal.jsx'
import BGShader from '../components/backgroundShader.jsx'
import './home.css'


const frames = [
  "frame1.png",
  "frame2.png",
  "frame3.png",
  "frame4.png"
];

gsap.registerPlugin(SplitText);

function Home({ dark }) {
  const [frame, setFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setFrame((f) => (f + 1) % frames.length);
        }, 300);
        return () => clearInterval(interval);
    }, []);

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
      y:-100,
      duration: 1,
      stagger: 0.03,
    })
  })

    return (
        <>
        <BGShader dark={dark} />
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
                        <p style={{fontSize: '22px'}}>Current student in Raden Umar Said, Kudus, Indonesia with 
                            experience with Android studio, Flutter and Unity. I have 
                            worked with multiple people in my field and can confidently 
                            confirm I am able to work well with others on a project. It 
                            is in my best interest that I try to deliver the Highest 
                            quality Apps/Games for users to enjoy.</p>
                    </div>
                    <img id="Hero" className="hero" src="Portfolio_Hero.png" alt="" />
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className='window'>
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
                    <div className='window' style={{ width: '100%', marginLeft: '3em' }} >
                    <div className="window_header">
                        <h2>▶ Misc.txt</h2>
                        <div>
                        <button className="window_button">–</button>
                        <button className="window_button">□</button>
                        <button className="window_button">✕</button>
                        </div>
                    </div>
                    <div className="item" style={{maxHeight: '360px', overflowY:'scroll', display: 'block'}}>
                        <h1>hello World Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.hello World Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.</h1>
                        <p>balls</p>
                    </div>
                    </div>
                </div>
                
            </main>

            <ScrollSection/>        
        </>
    );
}

export default Home;
