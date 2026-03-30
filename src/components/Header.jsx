import { useEffect, useState  } from 'react'
import './Header.css' 

function HeaderSection({ dark, setDark }){

    const [open, setOpen] = useState(false);
    const [hideNav, setHideNav] = useState(true);

    const toggleMenu = () => {
        setOpen(!open);
    };

    const handleResize = () => {
        if (window.innerWidth < 769) {
            setHideNav(true)
        } else {
            setHideNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    
    return(
        <>
        <nav className='Navbar' id='nav'>
            <div className='sidebar' style={{display: `${open && hideNav ? "block" : "none"}`}}>
               <ul id='mobileNav'>
                    <li style={{display: 'flex', justifyContent: 'end', padding: '0'}}><button className="window_button" onClick={toggleMenu}>✕</button></li>
                    <li><a href="/MyPortfolio/">Home</a></li>
                    <li><a href="/MyPortfolio/Pages/AboutMe">About Me</a></li>
                    <li><a href="/MyPortfolio/Pages/Contact">Contact</a></li>
               </ul>
            </div>
            <div className='divNav'>
                 <ul id='desktopNav'>
                    <li><a href="/MyPortfolio/" className='tri-btn'>Home</a></li>
                    <li><a href="/MyPortfolio/Pages/AboutMe" className='tri-btn'>About Me</a></li>
                    <li><a href="/MyPortfolio/Pages/Contact" className='tri-btn'>Contact</a></li>
                 </ul>


                 <div className="hamburger" onClick={toggleMenu}>
                    ☰
                </div>
                
                <div>
                    <button className='ThemeButton' onClick={() => setDark(!dark)}>
                        {dark ? <i className="bi bi-sun-fill ThemeIcon" style={{color:"white"}}></i> : <i className="bi bi-sun ThemeIcon"></i> }
                    </button>
                </div>
            </div>
        </nav>
        </>
    )
}

export default HeaderSection