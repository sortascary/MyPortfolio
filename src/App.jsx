import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderSection from './components/Header.jsx'
import Home from './pages/home.jsx'
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
      <Router>
        <div className="texture"></div>
        <HeaderSection dark={dark} setDark={setDark} />
        
        <Routes>
          <Route path="/MyPortfolio/" element={<Home dark={dark} />} />
          {/* <Route path="/MyPortfolio/About_me" element={<AboutMe dark={dark} />} />
          <Route path="/MyPortfolio/Contact" element={<Contact dark={dark} />} />             */}
        </Routes>
      </Router>

    </>
  )

}

export default App
