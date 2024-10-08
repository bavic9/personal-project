import React from 'react'
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/icons8-github-96.png';
import navIcon3 from '../assets/img/icons8-twitterx-100.png';

const Footer = () => {
  return (
    <footer className="footer">
    <div className='container'>
      <div className="row align-items-center">
        <div className='col-12 col-sm-6'>
            <h3 className='text-uppercase fs-2'>Adebayo</h3>
        </div>
        <div className="col-12 col-sm-6 mt-5 text-center text-sm-end">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/adeyeye-adebayo-63583b267/" target='blank'><img src={navIcon1} alt="Icon" /></a>
            <a href="https://github.com/bavic9" target='blank'><img src={navIcon2} alt="Icon" /></a>
            <a href="https://x.com/bavic_?s=21&t=HVvZ6f8dvZuAlIpWRG2RIg" target='blank'><img src={navIcon3} alt="Icon" /></a>
          </div>
          <p>Copyright 2024. All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
