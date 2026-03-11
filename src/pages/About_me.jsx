import Footer from '../components/Footer.jsx'
import { useState, useEffect } from "react";
import './About_me.css'

const frames = [
    "/MyPortfolio/cat/frame2.png",
    "/MyPortfolio/cat/frame1.png",
    "/MyPortfolio/cat/frame3.png",
    "/MyPortfolio/cat/frame4.png"
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{padding: '5px'}}>
                        <div className='window cat'>
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
                    </div>
                    <div style={{padding: '5px'}}>
                        <div className='window'>
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
                                    tinkering with stuff like unity, html and such. I had become familiar with the world knowledge of programming and decided 
                                    to become one. As of now im currently still in school, but i will try my hardest to make things i can be proud of.
                                </p>
                                <h1 >Hobbies and such</h1>
                                <p>Aside from programming i often find myself doing other stuff like:</p>
                                <p>1. Playing fighting games</p>
                                <p>2. The youtube Rabbit hole...</p>
                                <p>3. going to the gym</p>
                            </div>
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