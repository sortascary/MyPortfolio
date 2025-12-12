import { useEffect, useState  } from 'react'
import './Header.css'

function HeaderSection({ dark, setDark }){
    
    return(
        <>
        <nav className='Navbar'>
            <div className='divNav'>
                 <ul>
                    <li><a href="#" className='tri-btn'>Home</a></li>
                    <li><a href="#" className='tri-btn'>About Me</a></li>
                    <li><a href="#test" className='tri-btn'>Contact</a></li>
                 </ul>
                <div>
                    <button className='ThemeButton' onClick={() => setDark(!dark)}>
                        {dark ? <img className='ThemeIcon' src="Dark Mode.png" alt="" /> : <img className='ThemeIcon' src="Light Mode.png" alt="" /> }
                    </button>
                </div>
            </div>
        </nav>
        </>
    )
}

export default HeaderSection