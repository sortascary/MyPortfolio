import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import BGShader from '../components/backgroundShader1.jsx'
import Projects from '../components/Projects.jsx'
import Footer from '../components/Footer.jsx'
import './home.css'




gsap.registerPlugin(SplitText);

function Home({ dark }) {
    

    useGSAP(() => {

        let split = SplitText.create(".item div h1", {
            type: "chars, words, lines"
        });
        gsap.from(split.chars.reverse(), {
            filter: "blur(1rem)",
            autoAlpha: 0,
            x: -100,
            duration: 1,
            stagger: 0.03,
        })


        gsap.from(".window", {
            y: -100,
            duration: 1,
            stagger: 0.03,
        })

        gsap.to("#ProjectHeader", {
            y:600,
            scrollTrigger: {
                //markers:true,
                trigger: ".windowProject",
                start: "top center",
                end: "80% center",
                scrub: true
            }
        })
    })

    return (
        <>
            <BGShader dark={dark} />
            <div className="frame" id="introduction">
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
                            <h1 style={{ fontFamily: "helvetica, sans-serif", fontSize: '3em', fontWeight: "bold", textTransform: 'uppercase', color: 'red' }}>Dzaky Ihsan Rasyid</h1>
                            <p style={{ fontSize: '22px' }}>Current student in Raden Umar Said, Kudus, Indonesia with
                                experience with Android studio, Flutter and Unity. I have
                                worked with multiple people in my field and can confidently
                                confirm I am able to work well with others on a project. It
                                is in my best interest that I try to deliver the Highest
                                quality Apps/Games for users to enjoy.</p>
                        </div>
                        <img id="Hero" className="hero" src="Portfolio_Hero.png" alt="" />
                    </div>
                </div>
                {/*  */}
            </div>

            <div id="filler" className="windowPage" style={{flexDirection:"column", lineHeight: '0px'}}>
                <h1>"If you just accept the way things are, then you'll never move forward."</h1>
                <p>-Natsuki P3R</p>
            </div>

            <Projects/>
            
            {/* Shows my Experiences/Schools */}
            {/* <div className='windowPage'>
                <div>
                    <p>oooo </p>
                </div>  
                <div className="window">
                    <div className="window_header">
                        <h2>▶ My Experiences</h2>
                        <div>
                            <button className="window_button">–</button>
                            <button className="window_button">□</button>
                            <button className="window_button">✕</button>
                        </div>
                    </div>
                    <div className="item">
                        <p>test</p>
                    </div>
                </div>
            </div> */}
            <Footer/>
        </>
    );
}

export default Home;
