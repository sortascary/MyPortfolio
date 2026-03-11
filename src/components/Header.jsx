import { useEffect, useState  } from 'react'
import './Header.css' 

function HeaderSection({ dark, setDark }){

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };
    
    return(
        <>
        <nav className='Navbar' id='nav'>
            <div className='sidebar' style={{display: `${open ? "block" : "none"}`}}>
               <ul id='mobileNav'>
                    <li style={{display: 'flex', justifyContent: 'end', padding: '0 3em'}}><button className="window_button" onClick={toggleMenu}>✕</button></li>
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


                 <div class="hamburger" onClick={toggleMenu}>
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