import React, { useState } from "react";
import "./navbar.css";
import Logoimg from "../assets/logo.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav">
            <div className="nav-logo">
                <a href="#">
                    <img src={Logoimg} alt="Logo"  className="nav-logo-img"/>
                </a>
            </div>

            {/* Hamburger Menu Icon */}
            <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Navigation Menu */}
            <div className={`nav-menu ${isOpen ? "active" : ""}`}>
                <ul>
                    <li><a href="#" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#spservices" onClick={toggleMenu}>Services</a></li>
                    <li><a href="#faq" onClick={toggleMenu}>FAQs</a></li>
                    <li><a href="#join" onClick={toggleMenu}>Join Us</a></li>
                </ul>
            </div>

            {/* Contact Button (Hidden on Mobile) */}
            <div className="nav-contact">
                <a className="nav-contact-link" href="#contact">Contact Us</a>
            </div>
        </nav>
    );
}

export default Navbar;