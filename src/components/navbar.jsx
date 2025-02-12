import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav">
            <div className="nav-logo">LOGO</div>

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
                    <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                    <li><a href="#whyus" onClick={toggleMenu}>FAQs</a></li>
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