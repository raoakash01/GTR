import React from "react";
import "./aboutus.css";
import BannerEx from "./bannerex";
import videoA from "../assets/vid.mp4";

function AboutUs() {
    return (
        <div className="about-us">
            <div className="about-us-1">
                <div className="about-us-video">
                    <div className="video-about">
                        <video src={videoA} autoPlay loop muted playsInline  className="videosize"/>
                    </div>
                </div>
                <div className="about-us-text">
                    <div className="text-section">
                        <h3 className="text-title">ABOUT US</h3>
                        <h1 className="text-content-1">
                        Global TeleRadiology is India’s leading Radiology service partner for Hospitals and Diagnostic Centers.
                        </h1>
                        <p className="text-content-1">
                        We offer cost-effective solutions with experienced radiology coverage, reduced management overheads and greater patient satisfaction.
                        </p>
                    </div>
                </div>
            </div>
            <BannerEx />
        </div>
    );
}

export default AboutUs;
