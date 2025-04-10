import React from "react";
import "./gtr.css";

function Gtr() {
    return (
        <div className="gtr-container">
            <h1 className="gtr-heading">QUALITY ASSURANCE</h1>
            <div className="gtr-underline"></div>
            <p className="gtr-text">We are committed to our mission of becoming the go-to-partner for accurate, time-sensitive, cost-effective imaging reports and interpretations that focus on high quality patient care for our clients worldwide we ensure absolute reliability and highest quality for all customers.  </p>
            <p className="gtr-text">We deliver highest standards of Image diagnosis and reporting, thereby making ‘Accuracy for Cure’ a reality. Our approach to quality can be described as follows </p>    
            <div className="gtr-lower">
                <div className="gtr-box gtr-box1">
                    <h1 className="gtr-box-heading">ACCURACY OF REPORTS</h1>
                    <div className="gtr-box-text">
                        <ul>
                            <li>Inbound and outbound QC</li>
                            <li>3-tier quality Process</li>
                            <li>Experienced quality panel</li>
                        </ul>
                    </div>
                </div>
                <div className="gtr-box">
                <h1 className="gtr-box-heading">TIMELINESS OF REPORTS </h1>
                <div className="gtr-box-text">
                <ul>
                    <li>Customized TAT</li>
                    <li>Efficient process flow </li>
                    <li>Emergency handling</li>
                </ul>
                    </div>
                </div>
                <div className="gtr-box">
                <h1 className="gtr-box-heading">24x7 HELPLINE</h1>
                <div className="gtr-box-text">
                <ul>
                            <li>Round the clock assistance</li>
                            <li>Live review facility</li>
                            <li>24/7 helpline Number</li>
                        </ul>
                    </div>
                </div>
                <div className="gtr-box gtr-box4">
                <h1 className="gtr-box-heading">BEST IN CLASS TECHNOLOGY</h1>
                <div className="gtr-box-text">
                <ul>
                            <li>Fully secured environment</li>
                            <li>Integrated AI</li>
                            <li>User friendly</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gtr;