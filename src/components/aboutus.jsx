import React from "react";
import "./aboutus.css";
import BannerEx from "./bannerex";
import videoA from "../assets/vid.mp4";


function AboutUs() {
    return (
        <div className="about-us">
            <h1 className="about-us-heading">ABOUT US</h1>
            <div className="about-us-line"></div>
            <div className="about-us-1">
                <div className="about-us-video">
                <div className="v-text-box">
                            <p className="v-text">
                            10+ Years Experience
                            </p>
                        </div>
                    <div className="video-about">
                        <video src={videoA} autoPlay loop muted playsInline loading="lazy"  className="videosize"/>
                    </div>
                </div>
                <div className="about-us-text">
                    <div className="text-section">
                        <h1 className="text-content-1">
                        The <strong>Health Diagnostics sector</strong> has emerged as one of the primary game-changers in the dynamic Global Healthcare Industry. Over the 
                        last decade, <strong>Radiology</strong> has witnessed a pervasive technological transformation, significantly benefitting  patient diagnosis
                        </h1>
                        <p className="text-content-1">
                        <strong>Global Tele-Radiology</strong> was born out of our belief and deep commitment to make technology deliver best patient care. The founding 
                        members brought their extensive cxo level healthcare experience and compassion to successfully create a patient & customer centric organization.
                        </p>
                    </div>
                </div>
            </div>
            <BannerEx />
        </div>
    );
}

export default AboutUs;
