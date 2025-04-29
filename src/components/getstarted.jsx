import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./getstarted.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function GetStarted() {
    const formRef = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          'service_0na5oa3', 
          'template_eljvohd',
          formRef.current,
          'k0U8ChESXX4ryjPZZ'
        )
        .then((result) => {
          console.log(result.text);
          alert(" Message sent successfully!");
        })
        .catch((error) => {
          console.error(error.text);
          alert(" Something went wrong. Please try again.");
        });

      e.target.reset(); // Optional: reset the form after submission
    };
    return (
        <div className="getstarted">
            <div className="getstarted-middle">
                <div className="getstarted-text-container">
                    <h1 className="getstarted-bigheading">Let’s Get In Touch.</h1>
                    <h1 className="getstarted-heading">If you’re looking to be part of a dynamic and progressive organization that values innovation, growth, and excellence, we encourage you to get in touch with us. </h1>
                </div>
            </div>
            <div className="getstarted-lower">
                <div className="getstated-component">
                    <div className="contact-box">
                        <h1 className="contact-h">Contact Us</h1>
                        <p className="contact-p">Explore opportunities to collaborate, 
                            contribute, and grow with a team committed to making a difference.</p>
                        <div className="contact-b">
                            <p className="contact-pb"><FontAwesomeIcon icon={faEnvelope} style={{ color: 'white'}}/> info@global-teleradiology.com</p>
                        </div>
                        <div className="contact-b">
                            <p className="contact-pb">Call for FREE demo and free trial reporting</p>
                        </div>
                        <div className="contact-b">
                            <p className="contact-pb"><FontAwesomeIcon icon={faPhone} style={{ color: 'white'}}/> +91 9667226960</p>
                        </div>
                        <p className="contact-ppp">Assistance hours: Monday - Friday 9 am to 8 pm IST</p>
                        <p className="contact-pp">Contact us with : </p>
                        <div className="icons-gtr-line">
                            <a href="https://api.whatsapp.com/send?phone=+919319380444&text=Hi%20I%20am%20interested%20in%20knowing%20more%20about%20Global%20Teleradiology" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="icons-gtr-line-a" icon={faWhatsapp}/>
                            </a>
                            <a href="https://www.linkedin.com/company/global-teleradiology/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="icons-gtr-line-a" icon={faLinkedin} ></FontAwesomeIcon>
                            </a>
                            <a href="https://www.facebook.com/ctscansmrimammogramsxrays" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="icons-gtr-line-a" icon={faFacebook} ></FontAwesomeIcon>
                            </a>
                            <a href="https://www.instagram.com/global.teleradiology/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="icons-gtr-line-a" icon={faInstagram} ></FontAwesomeIcon>
                            </a>                            
                        </div>
                    </div>
                    <form ref={formRef} onSubmit={sendEmail} className="getstarted-form">
                    <div className="getstarted-form-container">
                    <div className="getstarted-form-inputs">
                        <select className="getstarted-select" id="Role" name="role">
                            <option value="" disabled selected>I am a...</option>
                            <option value="Radiologist">Radiologist</option>
                            <option value="Healthcare Professional">Demo Customer</option>
                            <option value="Demo Customer">Demo Customer</option>
                        </select>
                    </div>
                    <div className="getstarted-form-inputs">
                        <input type="text" id="name" name="name" placeholder="Your Name" style={{width: 'calc(33.33% - 1rem)'}} />
                        <input type="text" id="number" name="number" placeholder="Phone Number" style={{width: 'calc(33.33% - 1rem)'}} />
                        <input type="text" id="email" name="email" placeholder="Your Email" style={{width: 'calc(33.33% - 1rem)'}} />
                    </div>
                    </div>
                    <div className="getstarted-form-textarea">
                        <textarea id="message" name="message" placeholder="Your Message" />
                    </div>
                    
                    <button type="submit" className="getstarted-submit">Leave us a message</button>
                </form>
                    
                </div>
            </div>
        </div>
    )
}

export default GetStarted;
