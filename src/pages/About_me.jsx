import Footer from '../components/Footer.jsx'
import { useState, useEffect } from "react";

const frames = [
    "/cat/frame2.png",
    "/cat/frame1.png",
    "/cat/frame3.png",
    "/cat/frame4.png"
];

function AboutMe({ dark }) {
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrame((f) => (f + 1) % frames.length);
        }, 300);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <main className="frameC" style={{ backgroundColor: "var(--scrollSec)" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className='window' >
                        <div className="window_header" >
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
                                style={{ width: 360, }}
                            />
                        </div>
                    </div>
                    <div className='window' style={{ width: '100%', marginLeft: '3em' }} >
                        <div className="window_header">
                            <h2>▶ About me.txt</h2>
                            <div>
                                <button className="window_button">–</button>
                                <button className="window_button">□</button>
                                <button className="window_button">✕</button>
                            </div>
                        </div>
                        <div className="item about" style={{ maxHeight: '360px', overflowY: 'scroll', display: 'block' }}>
                            <h1 >Hi my name is Dzaky!</h1>
                            <p >
                                as a kid ive always wondered how some things work, i would sometimes just take apart some of my toys just to see how they worked.
                                Sadly more often than not they always end up broken or it just didnt feel right, this ultimately got me in a bit of trouble 
                                from my parents. However this laid the foundation of my interest in problem solving and curoisity.
                            </p>
                            <p>
                                As i grew up i kept seeing the advancement of technology and was curious as to how they worked, i enjoyed 
                                tinkering with stuff like unity, html and such. I had become acquainted with the vast knowledge of programming and decided 
                                to become one. Upon deciding on my career path my parent were very supportive. I am thankful to have such great people to support me!
                            </p>
                            <h1 >Hobbies and such</h1>
                            <p>Aside from programming i often find myself doing other stuff like:</p>
                            <p>1. Playing fighting games</p>
                            <p>2. The youtube Rabbit hole...</p>
                            <p>3. going to the gym</p>
                        </div>
                    </div>
                </div>
            </main>
            <div style={{ backgroundColor: "var(--bg)" }} >
                <Footer />
            </div>

        </>
    );
}
export default AboutMe;