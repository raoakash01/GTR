import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./navbar.css";
import Logoimg from "../assets/logo.png";
import Serve from "../assets/betterserve.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav">
            <div className="nav-logo">
                <Link to="/">
                    <img src={Logoimg} alt="Logo" className="nav-logo-img" />
                </Link>
            </div>

            {/* Hamburger Menu */}
            <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Navigation Menu */}
            <div className={`nav-menu ${isOpen ? "active" : ""}`}>
                <ul>
                    <li><a href="#" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
                    <li><a href="#spservices" onClick={toggleMenu}>Services</a></li>
                    <li><a href="#qa" onClick={toggleMenu}>Quality Assurance</a></li>
                    <li><a href="#faq" onClick={toggleMenu}>FAQs</a></li>
                    {window.location.pathname !== "/career" ? (
                        <li><Link to="/career" onClick={toggleMenu}>Career</Link></li>
                    ) : (
                        <li><a href="javascript:window.history.back()" onClick={toggleMenu}>Back</a></li>
                    )}
                    <li><a href="#join" onClick={toggleMenu}>Join Us</a></li>
                </ul>
            </div>

            {/* Contact Button */}
            <div className="nav-contact">
                <img src={Serve} alt="Logo" className="nav-logo-img2" />
            </div>
        </nav>
    );
}

export default Navbar;
