import React from "react";
import "./getstarted.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.png";

function GetStarted() {
    return (
        <div className="getstarted">
            <div className="getstarted-upper">
                <img src={Logo} alt="logo" className="getstarted-logo" />
                {/* <button className="contact-button" onClick={() => window.location.href = '#contact'}>Contact Us</button> */}
            </div>
            <div className="getstarted-middle">
                <div className="getstarted-text-container">
                    <p className="getstarted-text">Get Started</p>
                    <h1 className="getstarted-bigheading">Get in touch or join us. 
                    As a Business Associate.</h1>
                </div>
                <div className="getstarted-social-container">
                    <a href="https://www.linkedin.com/company/global-teleradiology/" target="_blank" rel="noopener noreferrer">
                        <div className="icon-getstarted"><FontAwesomeIcon icon={faLinkedin}  className="icon-gs"/></div>
                    </a>
                </div>
            </div>
            <div className="getstarted-lower">
                <form className="getstarted-form">
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
                </form>
            </div>
        </div>
    )
}

export default GetStarted;