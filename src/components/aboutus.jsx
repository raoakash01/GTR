import React from "react";
import "./aboutus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import WhyGtr from './whygtr';

function AboutUs() {
    return (
        <div className="about-us">
            <div className="about-us-1">
                <div className="about-us-video">
                    <div className="video-about">
                        {/* Add video or content here if required */}
                    </div>
                </div>
                <div className="about-us-text">
                    <div className="text-section">
                        <h3 className="text-title">ABOUT US</h3>
                        <h1 className="text-content-1">
                            At Global TeleRadiology we believe that technology should provide the key to improving performance.
                        </h1>
                        <p className="text-content-2">
                            We are committed to our mission of becoming your go-to partner for accurate, time-sensitive, cost-effective
                            imaging reports and interpretations that focus on high-quality patient care.
                        </p>
                        <p className="text-content-2">
                            Ensuring absolute reliability and high quality for all customers. Global TeleRadiology is dedicated to providing
                            diagnostic TeleRadiology interpretations with a mission of becoming the radiology industry game changer on
                            accuracy of reporting.
                        </p>
                        <button className="learn-more">
                            Learn More <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} />
                        </button>
                    </div>
                </div>
            </div>
            <WhyGtr />
        </div>
    );
}

export default AboutUs;
