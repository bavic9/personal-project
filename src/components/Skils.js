import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  html from '../assets/img/html.png'
import  css from '../assets/img/css.png'
import  javascript from '../assets/img/javascript.webp'
import  bootstrap from '../assets/img/bootstrap.png'
import  react from '../assets/img/react.png'
import  nextJs from '../assets/img/nextJs.png'
import  figma from '../assets/img/figma.png'
import  sass from '../assets/img/Sass.png'
import  tailwind from '../assets/img/tailwind.svg'
import  wordpress from '../assets/img/wordpress.png'
import  git from '../assets/img/github.png'
import  colorSharp from '../assets/img/color-sharp.png'
import TrackVisibility from 'react-on-screen';




const Skils = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">

              <TrackVisibility>
              {({ isVisible }) =>
                <h2 className={isVisible ? "animate__animated animate__flipInY animate__delay-0.5s" : ""}>Skills</h2>
              }
              </TrackVisibility>
             
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={tailwind } alt="Image" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>react</h5>
                </div>
                <div className="item">
                  <img src={nextJs} alt="Image" />
                  <h5>next.js</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image" />
                  <h5>git</h5>
                </div>
                <div className="item">
                  <img src={wordpress} alt="Image" />
                  <h5>wordpress</h5>
                </div>
                <div className="item">
                  <img src={sass} alt="Image" />
                  <h5>sass</h5>
                </div>
                <div className="item">
                  <img src={figma} alt="Image" />
                  <h5>figma</h5>
                </div>
                
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skils

                