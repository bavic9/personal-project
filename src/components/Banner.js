import React from 'react'
import { useState, useEffect } from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import AOS from 'aos'
import 'aos/dist/aos.css'



const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])


  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 0) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])



  return (
    <section className='banner' id='home'>
      <div className='container'>
        <div className='row align-items-center mx-2'>
          <div className='col-xs-12 col-md-6 col-xl-7'>
            <div>
              <span className='tagline' data-aos="fade-right">Welcome to my Portfolio</span>
            </div>

            <h1 data-aos="fade-up" data-aos-delay="800">{"Hi I'm Adebayo a "} <span className='wrap'>{text}</span></h1>

            <p data-aos="zoom-in" data-aos-delay="2000" data-aos-duration="3000">I'm a multitalented human with over 3 years of experiences in wide range of Front end developing. I love structure and order and I stand for quality. I'm passionate about creating interactive applications and experiences on the web.</p>

            <TrackVisibility>
              {({ isVisible }) =>
                <button className={isVisible ? "animate__animated animate__backInUp animate__delay-2s animate__slow" : ""} onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25} /></button>
              }
            </TrackVisibility>
          </div>
          <div className='col-xs-12 col-md-6 col-xl-5 mt-4'>
            <img className='headerImg' src={headerImg} alt='header img' />
          </div>
        </div>
      </div>
    </section >
  )
}

export default Banner
