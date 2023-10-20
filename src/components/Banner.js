import React from 'react'
import {useState, useEffect} from 'react'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import { isVisible } from '@testing-library/user-event/dist/utils';



const Banner = () => {
  
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer" ];
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
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

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



  return (
    <section className='banner' id='home'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-xs-12 col-md-6 col-xl-7'>
                  <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeInLeft animate__delay-0.5s animate__repeat-1" : ""}>
                      <span className='tagline'>Welcome to my Portfolio</span>
                    </div>
                  }
                  </TrackVisibility>

                  <TrackVisibility>
                  {({ isVisible }) =>
                      <h1 className={isVisible ? "animate__animated animate__fadeInLeft animate__delay-1s" : ""}>{"Hi I'm Adebayo a "} <span className='wrap'>{text}</span></h1>
                  }
                  </TrackVisibility>
                  <TrackVisibility>
                  {({ isVisible }) =>
                      <p className={isVisible ? "animate__animated animate__fadeInLeft animate__delay-2s" : ""}>I'm a multitalented human with over a year of experiences in wide range of Front end developing. I love structure and order and I stand for quality. I'm passionate about creating interactive applications and experiences on the web.</p>
                  }
                  </TrackVisibility>
                  <TrackVisibility>
                  {({ isVisible }) =>
                      <button className={isVisible ? "animate__animated animate__backInUp animate__delay-3s" : ""} onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
                  }
                  </TrackVisibility>
                </div> 
                <div className='col-xs-12 col-md-6 col-xl-5'>
                    <img className='headerImg' src={headerImg} alt='header img'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
