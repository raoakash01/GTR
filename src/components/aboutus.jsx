import React from "react";
import "./aboutus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
            <div className="about-us-2">
                <div className="text-section-2">
                    <h3 className="text-title">OUR SERVICES</h3>
                    <h1 className="text-content-1 text-content-3">Redefine the way you<br/> do business with<br/> Smart Solutions</h1>
                    <p className="text-content-4">Our purpose is to deliver excellence in service and execution</p>
                    <button className="learn-more">
                        Learn More <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} />
                    </button>
                </div>
                <div className="cards-section">
                    <div className=" card-a card_1">
                        <div className="img-container">
                        </div>
                        <p className="card-text">Preliminary and Final Interpretations</p>
                    </div>
                    <div className="card-a"><div className="img-container"></div>
                    <p className="card-text">Emergency Nighthawk</p>
                    </div>
                    <div className="card-a"><div className="img-container"></div>
                    <p className="card-text">Audit Reporting</p>
                    </div>
                    <div className="card-a"><div className="img-container"></div>
                    <p className="card-text">Audit Reporting</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
