import { useEffect, useState  } from 'react'
import './Header.css'

function HeaderSection({ dark, setDark }){
    
    return(
        <>
        <nav className='Navbar' id='nav'>
            <div className='divNav'>
                 <ul>
                    <li><a href="/MyPortfolio" className='tri-btn'>Home</a></li>
                    <li><a href="/MyPortfolio/AboutMe" className='tri-btn'>About Me</a></li>
                    <li><a href="/MyPortfolio/Contact" className='tri-btn'>Contact</a></li>
                 </ul>
                <div>
                    <button className='ThemeButton' onClick={() => setDark(!dark)}>
                        {dark ? <img className='ThemeIcon' src="/icons\Dark_Mode.png" alt="" /> : <img className='ThemeIcon' src="/icons\Light_Mode.png" alt="" /> }
                    </button>
                </div>
            </div>
        </nav>
        </>
    )
}

export default HeaderSection