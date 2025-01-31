import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
                <div className='footer-lower-2'></div>
                <div className='footer-lower-3'></div>
                <div className='footer-lower-4'></div>
                <div className='footer-lower-5'></div>
                </div>
                <div className='footer-lower-lower'>

                </div>
            </div>
        </div>
        </>
    )

}

export default Footer