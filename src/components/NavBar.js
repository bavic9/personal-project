import React from 'react';
import { useRef, useState, useEffect } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github-96.png';
import navIcon3 from '../assets/img/icons8-twitterx-100.png';
import { FaBars } from "react-icons/fa6";
import { FaTimes, FaGithub } from "react-icons/fa";





const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
  }



  

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])



  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <h3 className='fs-2 text-uppercase'>Adebayo</h3>
      <nav  ref={navRef}>
        <div className='link'>
          <a href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</a>
          <a href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</a>
          <a href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</a>
          <a href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</a>
        </div>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="#" target='blank'><img src={navIcon1} alt="" /></a>
            <a href="https://github.com/bavic9" target='blank'><img className='nav-img2' src={navIcon2} alt="" /></a>
            <a href="#" target='blank'><img src={navIcon3} alt="" /></a>
          </div>
          <div>
            <button className="vvd"><span>Let’s Connect</span></button>
          </div>
        </span>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes className='icon'/>
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars className='icon'/>
      </button>
    </header>
  );
}

export default NavBar;