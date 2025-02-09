import React from "react";
import "./navbar.css";

function Navbar() {
    return(
        <div className='nav'>
                        <div className='nav-logo'>
                            LOGO
                        </div>
                        <div className='nav-menu'>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#whyus">Accuracy for Cure Resources</a></li>
                                <li><a href="#join">Join Us</a></li>
                            </ul>
                        </div>
                        <div className='nav-contact'>
                            <a className='nav-contact-link' href="#contact">contact Us|||</a>
                        </div>
                    </div>
    )
}

export default Navbar;