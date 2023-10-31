import React from 'react'
import { useState } from 'react';
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import getlinked from '../assets/img/getlinked-img.jpg'
import loopstudio from '../assets/img/loopstudio landing page.jpg'
import ecom from '../assets/img/ecommerce-product-page.jpg'
import simplyRecipe from '../assets/img/Simply-recipe design.jpg'
import sunnySide from '../assets/img/Sunnyside agency.jpg'
import airbnb from '../assets/img/airbnb.jpg'
import { FaLink } from "react-icons/fa";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



const Projects = () => {
    const projects = [
        {
          title: "Getlinked",
          icon:  <a href="#"><FaLink/></a>,
          imgUrl: getlinked,
        },
        {
          title: "Simply Recipe",
          icon:  <a href="https://simply-recipes-mu.vercel.app/" target='blank'><FaLink/></a>,
          imgUrl: simplyRecipe,
        },
        {
          title: "Ecommerce Page",
          icon:  <a href="https://ecommerce-iota-fawn.vercel.app/" target='blank'><FaLink/></a>,
          imgUrl: ecom,
        },
        {
          title: "Loop Studio",
          icon:  <a href="https://loop-studio-phi.vercel.app/" target='blank'><FaLink/></a>,
          imgUrl: loopstudio,
        },
        {
          title: "Sunnyside",
          icon:  <a href="#" target='blank'><FaLink/></a>,
          imgUrl: sunnySide,
        },
        {
          title: "Air bnb",
          icon:  <a href="#" target='blank'><FaLink/></a>,
          imgUrl: airbnb,
        },
      ];


      const re = [
        {
          title: "Business Startup",
          icon:  <a href="#"><FaLink/></a>,
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          icon:  <a href="#"><FaLink/></a>,
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          icon:  <a href="#"><FaLink/></a>,
          imgUrl: projImg3,
        },
        // {
        //   title: "Business Startup",
        //   description: "Design & Development",
        //   imgUrl: projImg1,
        // },
        // {
        //   title: "Business Startup",
        //   description: "Design & Development",
        //   imgUrl: projImg2,
        // },
        // {
        //   title: "Business Startup",
        //   description: "Design & Development",
        //   imgUrl: projImg3,
        // },
      ];










      const [activeLink, setActiveLink] = useState('Tab 1');
      const [toggle, setToggle] = useState(1)

      function updateToggle(id) {
        setToggle(id)
      }

      const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
    
      return (
        <section className="project" id="projects">
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                {/* <TrackVisibility>
                  {({ isVisible }) => 
                  
                  className={isVisible ? "animate__animated animate__fadeIn": ""}

                  className={isVisible ? "animate__animated animate__slideInUp" : ""} */}
                 
                  <div>
                    <TrackVisibility>
                    {({ isVisible }) =>
                      <h2 className={isVisible ? "animate__animated animate__bounce animate__delay-0.5s": ""}>Projects</h2>
                    }
                    </TrackVisibility>
                    <div className='tab-Container' id="projects-tabs" defaultActiveKey="first">
                      <ul className=" nav nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" variant="pills" >
                        <li className='nav-item'>
                            <button className={activeLink === 'tabs' ? 'nav-link active' : 'nav-link'} eventKey="first" onClick={()=> { updateToggle(1); onUpdateActiveLink('tabs') }}>Projects</button>
                        </li>
                        <li className='nav-item'>
                          <button className={activeLink === 'tab2' ? 'nav-link active' : 'nav-link'} eventKey="second" onClick={()=> { updateToggle(2); onUpdateActiveLink('tab2') }}>Recent</button>
                        </li>
                        <li className='nav-item'>
                          <button className={activeLink === 'tab3' ? 'nav-link active' : 'nav-link'} eventKey="third" onClick={()=> { updateToggle(3); onUpdateActiveLink('tab3') }}>HTML & CSS</button>
                        </li>
                      </ul>
                      <div className="tab-content" id="slideInUp">
                        <div className={toggle === 1 ? 'show-content' : 'content'} eventKey="first">
                          <div className='row'>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                  />
                                )
                              })
                            }
                          </div>
                        </div>
                        <div className={toggle === 2 ? 'show-content' : 'content'} eventKey="second">
                          <div className='row'>
                              {
                                re.map((project, index) => {
                                  return (
                                    <ProjectCard
                                      key={index}
                                      {...project}
                                    />
                                  )
                                })
                              }
                            </div>
                        </div>
                        <div className={toggle === 3 ? 'show-content' : 'content'} eventKey="third">
                          <div className='row'>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                  />
                                )
                              })
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* </TrackVisibility> */}
              </div>
            </div>
          </div>
          <img className="background-image-right" src={colorSharp2}></img>
        </section>
      )
    }

    export default Projects;