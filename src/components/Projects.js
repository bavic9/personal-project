import React from 'react'
import { useState } from 'react';
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import getlinked from '../assets/img/getlinked-img.jpg'
import taskManager from '../assets/img/taskManager.png'
import loopstudio from '../assets/img/loopstudio landing page.jpg'
import ecom from '../assets/img/ecommerce-product-page.jpg'
import estate from '../assets/img/estate.png'
import simplyRecipe from '../assets/img/Simply-recipe design.jpg'
import sunnySide from '../assets/img/Sunnyside agency.jpg'
import manage from '../assets/img/manage.png'
import stakenet from '../assets/img/stakenet.png'
import { FaExternalLinkAlt } from "react-icons/fa";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



const Projects = () => {
    const projects = [
        
        {
          title: "Task Manager",
          icon:  <a href="https://tasks-theta-nine.vercel.app/" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: taskManager,
          content: 'React, Typescript, Tailwind Css'
        },
        {
          title: "StakeNet",
          icon:  <a href="https://cryptoapp-olive.vercel.app/" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: stakenet,
          content: 'React, Tailwind Css'
        },
        {
          title: "Real Estate Page",
          icon:  <a href="https://real-estate-app-d1f.pages.dev/" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: estate,
          content: 'React, Typescript, Tailwind Css'
        },
        {
          title: "Getlinked",
          icon:  <a href="#"><FaExternalLinkAlt /></a>,
          imgUrl: getlinked,
          content: 'React, Typescript, Tailwind Css'
        },
        {
          title: "Simply Recipe",
          icon:  <a href="https://simply-recipes-mu.vercel.app/" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: simplyRecipe,
          content: 'HTML, Javascript, Css'
        },
        {
          title: "Sneakers",
          icon:  <a href="https://ecommerce-iota-fawn.vercel.app/" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: ecom,
          content: 'HTML, Javascript, Css'
        },
        {
          title: "Manage Page",
          icon:  <a href="https://manage-coral.vercel.app/" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: manage,
          content: 'HTML, Javascript, Tailwind Css'
        },
        {
          title: "Loop Studio",
          icon:  <a href="https://loop-studio-phi.vercel.app/" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: loopstudio,
          content: 'HTML, Javascript, Css'
        },
        {
          title: "Sunnyside",
          icon:  <a href="#" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: sunnySide,
          content: 'HTML, Javascript, Css'
        },
      ];


      const recent = [
        {
          title: "StakeNet",
          icon:  <a href="https://cryptoapp-olive.vercel.app/" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: stakenet,
          content: 'React, Tailwind Css'
        },
        {
          title: "Real Estate Page",
          icon:  <a href="https://real-estate-app-d1f.pages.dev/" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: estate,
          content: 'React, Typescript, Tailwind Css'
        },
        {
          title: "Task Manager",
          icon:  <a href="https://tasks-theta-nine.vercel.app/" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: taskManager,
          content: 'React, Typescript, Tailwind Css'
        },
        {
          title: "Manage Page",
          icon:  <a href="https://manage-coral.vercel.app/" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: manage,
          content: 'HTML, Javascript, Tailwind Css'
        },
        {
          title: "Business Startup",
          icon:  <a href="#"><FaExternalLinkAlt /></a>,
          imgUrl: projImg3,
          content: 'HTML, Javascript, Css'
        },
      ];

      
      const previous = [
        {
          title: "Simply Recipe",
          icon:  <a href="https://simply-recipes-mu.vercel.app/" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: simplyRecipe,
          content: 'HTML, Javascript, Css'
        },
        {
          title: "Loop Studio",
          icon:  <a href="https://loop-studio-phi.vercel.app/" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: loopstudio,
          content: 'HTML, Javascript, Css'
        },
        {
          title: "Ecommerce Page",
          icon:  <a href="https://ecommerce-iota-fawn.vercel.app/" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: ecom,
          content: 'HTML, Javascript, Css'
        },
        {
          title: "Manage Page",
          icon:  <a href="https://manage-coral.vercel.app/" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: manage,
          content: 'HTML, Javascript, Tailwind Css'
        },
        {
          title: "Sunnyside",
          icon:  <a href="#" target='blank'><FaExternalLinkAlt /></a>,
          imgUrl: sunnySide,
          content: 'HTML, Javascript, Css'
        },
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
                          <button className={activeLink === 'tab3' ? 'nav-link active' : 'nav-link'} eventKey="third" onClick={()=> { updateToggle(3); onUpdateActiveLink('tab3') }}>Previous</button>
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
                                recent.map((project, index) => {
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
                            previous.map((project, index) => {
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