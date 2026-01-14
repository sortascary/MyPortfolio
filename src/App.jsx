import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderSection from './components/Header.jsx';
import Home from './pages/home.jsx';
import AboutMe from './pages/About_me.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error_page.jsx';

import './App.css'

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <>
    
      <div className="texture"></div>
      <HeaderSection dark={dark} setDark={setDark} />
        
      <Router>
        <Routes>
          <Route path="/MyPortfolio" element={<Home dark={dark} />} />
          <Route path="/MyPortfolio/AboutMe" element={<AboutMe dark={dark} />} />
          <Route path="/MyPortfolio/Contact" element={<Contact dark={dark} />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

    </>
  )

}

export default App
