import React from "react";
import "./gtr.css";

function Gtr() {
    return (
        <div className="gtr-container">
            <h1 className="gtr-heading">GLOBAL TELERADIOLOGY QUALITY</h1>
            <div className="gtr-underline"></div>
            <p className="gtr-text">We are committed to our mission of becoming the go-to-partner for accurate, time-sensitive, cost-effective imaging reports and interpretations that focus on high quality patient care for our clients worldwide we ensure absolute reliability and highest quality for all customers.  </p>
            <p className="gtr-text">We deliver highest standards of Image diagnosis and reporting, thereby making ‘Accuracy for Cure’ a reality. Our approach to quality can be described as follows </p>    
            <div className="gtr-lower">
                <div className="gtr-box gtr-box1">
                    <h1 className="gtr-box-heading">ACCURACY OF REPORTS</h1>
                    <div className="gtr-box-text">
                        <p>3-tier quality checks</p>
                        <p>Dedicated quality panel</p>
                    </div>
                </div>
                <div className="gtr-box">
                <h1 className="gtr-box-heading">TIMELINESS OF REPORTS </h1>
                <div className="gtr-box-text">
                        <p>Customized TAT</p>
                        <p>Real time prioritization</p>
                        <p>Emergency Management</p>
                    </div>
                </div>
                <div className="gtr-box">
                <h1 className="gtr-box-heading">24x7 HELPLINE</h1>
                <div className="gtr-box-text">
                        <p>Radiologist & clinician consultation</p>
                        <p>Round the clock availability</p>
                    </div>
                </div>
                <div className="gtr-box gtr-box4">
                <h1 className="gtr-box-heading">BEST IN CLASS TECHNOLOGY</h1>
                <div className="gtr-box-text">
                        <p>Fully secured and compliant technology</p>
                        <p>Easy to learn, easy to use</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gtr;