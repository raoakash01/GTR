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
                        Welcome to Global TeleRadiology, your trusted partner in comprehensive Radiology Reporting Services.
                        </h1>
                        <p className="text-content-2">
                        We specialize in high-quality interpretations across multiple imaging modalities, including CT scans, MRI scans, CBCT, Ultrasound, X-rays, and Mammography.
                        </p>
                        <p className="text-content-2">
                        Serving Imaging Centers, Diagnostic Centers, Radiology Clinics, and Hospitals across India and overseas, we operate 24/7 across all time zones, ensuring accurate, timely, and expert reporting whenever you need it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
