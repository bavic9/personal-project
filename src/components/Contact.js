import React from 'react'
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import contactImg from '../assets/img/contact-img.svg'
import TrackVisibility from 'react-on-screen';


const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }
      
      const [formDetails, setFormDetails] = useState(formInitialDetails);
      const [buttonText, setButtonText] = useState('Send');
      const [status, setStatus] = useState({});
    
      const onFormUpdate = (category, value) => {
          setFormDetails({
            ...formDetails,
            [category]: value
          })
      }

      
    const form = useRef();
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c0dj21u', 'template_j4qn2gu', form.current, 's1_5Cs1nhqssZ5VY1')
        
        .then((result) => {
            setStatus({ success: true, message: 'Message sent successfully'}, setButtonText("Sent"));
        }, (error) => {
            setStatus({ success: false, message: 'Something went wrong, please try again later.'});
        });

        
      };


    return (
        <section className="contact" id="contact">
            <div className='container'>
                <div className="row align-items-center">
                    <div className=' col-12 col-md-6'>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeInRight animate__delay-0.5s" : ""}>
                                <img src={contactImg} alt="Contact Us"/>
                            </div>
                        }
                        </TrackVisibility>
                    </div>
                    <div className='col-12 col-md-6'>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <h2 className={isVisible ? "animate__animated animate__rubberBand animate__delay-1s" : ""}>Get In Touch</h2>
                        }
                        </TrackVisibility>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <form className={isVisible ? "animate__animated animate__fadeInLeft animate__delay-0.5s" : ""} ref={form} onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className=" col-12 col-sm-6 px-1">
                                        <input type="text" name="first_name" value={formDetails.firstName} placeholder="First Name" required onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                    </div>
                                    <div className=" col-12 col-sm-6 px-1">
                                        <input type="text" name="last_name" value={formDetails.lasttName} placeholder="Last Name" required onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                    </div>
                                    <div className="col-12 col-sm-6 px-1">
                                        <input type="email" name="user_email" value={formDetails.email} placeholder="Email Address" required onChange={(e) => onFormUpdate('email', e.target.value)} />
                                    </div>
                                    <div className=" col-12 col-sm-6 px-1">
                                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                    </div>
                                    <div className="col-12 px-1">
                                        <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" required onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                        <button type="submit"><span>{buttonText}</span></button>
                                    </div>
                                    {
                                    status.message &&
                                    <div className='col'>
                                        <p className={status.success === false ? "unsuccessfull" : "success"}>{status.message}</p>
                                    </div>
                                    }
                                </div>
                            </form>
                        }
                        </TrackVisibility>

                    </div>
                </div>
            </div>
        </section>
    )
}


export default Contact
