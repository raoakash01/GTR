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
            <img src={Serve} alt="Logo" className="nav-logo-img2" />
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
                    <li className="dropdown">
                        <a href="#about" onClick={toggleMenu} className="dropbtn">About Us</a>
                        <div className="dropdown-content">
                            <a href="#whygtr" onClick={toggleMenu}>Why GTR</a>
                            <a href="#vision" onClick={toggleMenu}>Vision Mission</a>
                            <a href="#advisory" onClick={toggleMenu}>Advisory Board</a>
                            <a href="#management" onClick={toggleMenu}>Management Team</a>
                            <a href="#accuracy" onClick={toggleMenu}>Quality Pannel</a>
                        </div>
                    </li>
                    <li><a href="#spservices" onClick={toggleMenu}>Services</a></li>
                    <li><a href="#qa" onClick={toggleMenu}>Quality Control</a></li>
                    {window.location.pathname !== "/career" ? (
                        <li><Link to="/career" onClick={toggleMenu}>Career</Link></li>
                    ) : (
                        <li><a href="javascript:window.history.back()" onClick={toggleMenu}>Back</a></li>
                    )}
                    <li><a href="#join" onClick={toggleMenu}>Contact Us</a></li>
                    <li><a href="#faq" onClick={toggleMenu}>FAQs</a></li>
                </ul>
            </div>

            {/* Contact Button */}
            <div className="nav-contact nav-logo">
                <Link to="/">
                    <img src={Logoimg} alt="Logo" className="nav-logo-img" />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
