import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Footer(){
    return (
        <>
        <div className="footer">
            <div className="footer-upper">
                <div className='footer-upper-left'>
                    <h1 className='footer-heading'>Subcribe to our Newsletter</h1>
                    <p className='footer-text'>Subscribe for Updates: Stay informed about the latest investor updates,<br/> financial results, and announcements by subscribing to our newsletter. </p>
                </div>
                <div className='footer-upper-right'>
                    <div className='footer-email'>
                    <input className='footer-input' placeholder='Enter your email address'></input>
                    <button className='footer-button'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='footer-center'>
            <div className='footer-center-btn'>
                <button className='footer-center-button'>
                    <FontAwesomeIcon className='footer-center-icon' icon={faChevronUp}/>
                </button>
            </div>
            </div>
            <div className="footer-lower">
                <div className='footer-lower-upper'>
                <div className='footer-lower-1'>
                    <h1 className='footer-lower-heading'>Global Teleradiology Services</h1>
                    <p className='footer-lower-text'>Building Number 145, Ground Floor, Sector 44<br/>Gurgaon (Delhi NCR) – 122003, India,<br/><br/><br/>
                    Phone: + 91  9871130839 / +91 9810002910 <br/><br/>
                    Email: info@global-teleradiology.com</p>
                    <div className='footer-social-icon'>
                        <FontAwesomeIcon className='social-icon' icon={faFacebook} style={{color: "#ffffff", marginRight: "1.1rem"}} />
                        <FontAwesomeIcon className='social-icon'  icon={faTwitter} style={{color: "#ffffff", marginRight: "1.1rem"}} />
                        <FontAwesomeIcon className='social-icon' icon={faLinkedin} style={{color: "#ffffff", marginRight: "1.1rem"}} />
                        <FontAwesomeIcon  className='social-icon' icon={faInstagram} style={{color: "#ffffff"}} />
                    </div>
                </div>
                <div className='footer-lower-2'>
                    <h3 className='footer-links-heading'>About</h3>
                    <ul className='footer-links'>
                        <li className='footer-link'>Mission & Vision</li>
                        <li className='footer-link'>Board of Advisor</li>
                        <li className='footer-link'>Management Team</li>
                    </ul>
                </div>
                <div className='footer-lower-3'><h3 className='footer-links-heading'>Cure</h3>
                <ul className='footer-links'>
                        <li className='footer-link'>Proprietary Clip</li>
                        <li className='footer-link'>Work Flow</li>
                        <li className='footer-link'>Quality Panel</li>
                    </ul></div>
                <div className='footer-lower-4'><h3 className='footer-links-heading'>Quick Links</h3> 
                <ul className='footer-links'>
                        <li className='footer-link'>Services</li>
                        <li className='footer-link'>Contact</li>
                        <li className='footer-link'>FAQs</li>
                    </ul></div>
                <div className='footer-lower-5'><h3 className='footer-links-heading'>Company</h3> <ul className='footer-links'>
                        <li className='footer-link'>About us</li>
                        <li className='footer-link'>Contact us</li>
                        <li className='footer-link'>Careers</li>
                    </ul></div>
                </div>
                <div className='footer-lower-lower'>
                    <p className='footer-lower-text-2'>© Copyright  Global Teleradiology.. All Rights Reserved </p>
                </div>
            </div>
        </div>
        </>
    )

}

export default Footer