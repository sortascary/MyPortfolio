import { useEffect, useState  } from 'react'
import './Header.css'

function HeaderSection({ dark, setDark }){
    
    return(
        <>
        <nav className='Navbar' id='nav'>
            <div className='divNav'>
                 <ul>
                    <li><a href="/MyPortfolio/" className='tri-btn'>Home</a></li>
                    <li><a href="/MyPortfolio/AboutMe" className='tri-btn'>About Me</a></li>
                    <li><a href="/MyPortfolio/Contact" className='tri-btn'>Contact</a></li>
                 </ul>
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