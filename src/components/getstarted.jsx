import React from "react";
import "./getstarted.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faW } from "@fortawesome/free-solid-svg-icons";

function GetStarted() {
    return (
        <div className="getstarted">
            <div className="getstarted-upper">
                <h1 className="getstarted-heading">Global Teleradiology Services</h1>
                <button className="contact-button">Contact Us</button>
            </div>
            <div className="getstarted-middle">
                <div className="getstarted-text-container">
                    <p className="getstarted-text">Get Started</p>
                    <h1 className="getstarted-bigheading">Get in touch with us.<br/> We're here to assist you.</h1>
                </div>
                <div className="getstarted-social-container">
                    <div className="icon-getstarted"><FontAwesomeIcon icon={faFacebook}  className="icon-gs"/></div>
                    <div className="icon-getstarted"><FontAwesomeIcon icon={faWhatsapp}  className="icon-gs"/></div>
                    <div className="icon-getstarted"><FontAwesomeIcon icon={faTwitter}  className="icon-gs"/></div>
                    <div className="icon-getstarted"><FontAwesomeIcon icon={faInstagram}  className="icon-gs"/></div>
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