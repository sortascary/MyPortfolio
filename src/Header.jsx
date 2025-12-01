import { useEffect, useState  } from 'react'
import './Header.css'

function HeaderSection({ dark, setDark }){
    
    return(
        <>
        <nav className='Navbar'>
            <div className='divNav'>
                 <ul>
                    <li><a href="#" className='tri-btn'>Home</a></li>
                    <li><a href="#" className='tri-btn'>Home</a></li>
                    <li><a href="#" className='tri-btn'>Home</a></li>
                 </ul>
                <div>
                    <button onClick={() => setDark(!dark)}>
                        {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
                    </button>
                </div>
            </div>
        </nav>
        </>
    )
}

export default HeaderSection