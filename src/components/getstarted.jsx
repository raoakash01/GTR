import React from "react";
import "./getstarted.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import Logo from "../assets/logo.png";

function GetStarted() {
    return (
        <div className="getstarted">
            {/* <div className="getstarted-upper"> */}
                {/* <img src={Logo} alt="logo" className="getstarted-logo" /> */}
                {/* <button className="contact-button" onClick={() => window.location.href = '#contact'}>Contact Us</button> */}
            {/* </div> */}
            <div className="getstarted-middle">
                <div className="getstarted-text-container">
                    {/* <p className="getstarted-text">Get Started</p> */}
                    {/* <h1 className="getstarted-bigheading">Get in touch or join us. 
                    As a Business Associate.</h1> */}
                    <h1 className="getstarted-bigheading">Let’s Get In Touch.</h1>
                    <h1 className="getstarted-heading">If you’re looking to be part of a dynamic and progressive organization that values innovation, growth, and excellence, we encourage you to get in touch with us. </h1>
                </div>
                {/* <div className="getstarted-social-container">
                    <a href="https://www.linkedin.com/company/global-teleradiology/" target="_blank" rel="noopener noreferrer">
                        <div className="icon-getstarted"><FontAwesomeIcon icon={faLinkedin}  className="icon-gs"/></div>
                    </a>
                </div> */}
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
                        <p className="contact-pp">Assistance hours: Monday - Friday 9 am to 8 pm IST</p>
                        <p className="contact-pp">Contact us with : </p>
                        <div className="icons-gtr-line">
                            <a href="https://api.whatsapp.com/send?phone=+919667226960&text=Hi%20I%20am%20interested%20in%20knowing%20more%20about%20Global%20Teleradiology" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="icons-gtr-line-a" icon={faWhatsapp}/>
                            </a>
                            <a href="https://www.instagram.com/globalteleradiology/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="icons-gtr-line-a" icon={faLinkedin} ></FontAwesomeIcon>
                            </a>
                            <a href="https://www.linkedin.com/company/global-teleradiology/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="icons-gtr-line-a" icon={faFacebook} ></FontAwesomeIcon>
                            </a>
                            <a href="https://twitter.com/GlobalTelrad" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="icons-gtr-line-a" icon={faInstagram} ></FontAwesomeIcon>
                            </a>                            
                        </div>
                    </div>
                    <form className="getstarted-form">
                    <div className="getstarted-form-container">
                    <div className="getstarted-form-inputs">
                        <input type="text" id="Role" name="role" placeholder="I am a Radiologist" />
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
                {/* <form className="getstarted-form">
                    <div className="getstarted-form-container">
                    <div className="getstarted-form-inputs">
                        <input type="text" id="name" name="name" placeholder="Your Name" />
                    </div>
                    <div className="getstarted-form-inputs">
                        <input type="text" id="country-code" name="country-code" placeholder="+XX" style={{width:"4rem"}} />
                        <input type="text" id="number" name="number" placeholder="Phone Number" style={{width:"calc(100% - 4rem)"}} />
                    </div>
                    <div className="getstarted-form-inputs">
                        <input type="text" id="email" name="email" placeholder="Your Email" />
                    </div>
                    </div>
                    <div className="getstarted-form-textarea">
                        <textarea id="message" name="message" placeholder="Your Message" />
                    </div>
                    
                    <button type="submit" className="getstarted-submit">Leave us a message</button>
                </form> */}
            </div>
        </div>
    )
}

export default GetStarted;