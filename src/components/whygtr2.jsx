import React from "react";
import "./whygtr2.css";
import p1 from "../assets/picon1.png";
import p2 from "../assets/picon2.png";
import p3 from "../assets/picon3.png";
import p4 from "../assets/picon4.png";
import p5 from "../assets/picon5.png";

function WhyGtr2() {
    return (
        <div className="whygtr2-container">
            <h1 className="whygtr2-heading">WHY GLOBAL TELERADIOLOGY</h1>
            <div className="half-underline"></div>
<div className="whygtr2-grid">
    <div className="whygtr2-left">
    <div className="whygtr2-box">
        <div style={{display:"flex", alignItems:"center"}}>
        <h1 className="whygtr2-box-heading">Service Quality & TAT</h1>
        <img src={p1} alt="p1" className="whygtr2-icon backG" /></div>
        <div className="half-underline"></div>
        <ul className="whygtr2-list">
            <li className="whygtr2-list-item">Over a decade of reporting experience</li>
            <li className="whygtr2-list-item">365 Days Coverage</li>
            <li className="whygtr2-list-item">Industry Best Quality</li>
            <li className="whygtr2-list-item">Quicker TAT</li>
        </ul>
    </div>
    <div className="whygtr2-box">
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
    <h1 className="whygtr2-box-heading">Radiology Team</h1>
    <img src={p2} alt="p2" className="whygtr2-icon backG" /></div>
        <div className="half-underline"></div>
        <ul className="whygtr2-list">
            <li className="whygtr2-list-item">Industry Best Radiologists</li>
            <li className="whygtr2-list-item">Experienced in Remote Reporting</li>
            <li className="whygtr2-list-item">Subspeciality Experts</li>
            <li className="whygtr2-list-item">Stringent Selection & Screening Process</li>
            <li className="whygtr2-list-item">Competent In Handling Client Concerns And Reviews</li>
        </ul>
    </div>
    </div>
    <div className="whygtr2-center">
    <div className="whygtr2-box">
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
    <h1 className="whygtr2-box-heading">Quality Control</h1>
    <img src={p3} alt="p3" className="whygtr2-icon backG" /></div>
        <div className="half-underline"></div>
        <ul className="whygtr2-list">
            <li className="whygtr2-list-item">Industry Best Quality Delivery</li>
            <li className="whygtr2-list-item">Stringent 3 Tier Quality System</li>
            <li className="whygtr2-list-item">Peer To Peer</li>
            <li className="whygtr2-list-item">Inbound Quality</li>
            <li className="whygtr2-list-item">Outbound Reporting Quality</li>
            <li className="whygtr2-list-item">Accurate And Close To Zero Defect Reports </li>
            <li className="whygtr2-list-item">Dedicated Quality Team</li>
            <li className="whygtr2-list-item">Supervised By Quality Head & Quality Director</li>
            <li className="whygtr2-list-item">Continuous Quality Tracking </li>
            <li className="whygtr2-list-item">Rad Peer Score Marking</li>
        </ul>
    </div>
    </div>
    <div className="whygtr2-right">
    <div className="whygtr2-box">
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
    <h1 className="whygtr2-box-heading">Reporting Pacs </h1>
    <img src={p4} alt="p4" className="whygtr2-icon backG" /></div>
        <div className="half-underline"></div>
        <ul className="whygtr2-list">
            <li className="whygtr2-list-item">AI Enabled World Class Pacs</li>
            <li className="whygtr2-list-item">Customer Friendly</li>
            <li className="whygtr2-list-item">Accessible Anytime - Anywhere</li>
            <li className="whygtr2-list-item">Secure Image Transfer & Storage</li>
            <li className="whygtr2-list-item">Instant Integration & Installation</li>
            <li className="whygtr2-list-item">Round The Clock Technical Support</li>
        </ul>
    </div>
    <div className="whygtr2-box">
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
    <h1 className="whygtr2-box-heading">Customer Relations</h1>
    <img src={p5} alt="p5" className="whygtr2-icon backG" /></div>
        <div className="half-underline"></div>
        <ul className="whygtr2-list">
            <li className="whygtr2-list-item">Patient Centric Approach</li>
            <li className="whygtr2-list-item">24X7 Customer Support</li>
            <li className="whygtr2-list-item">Dedicated Accounts Manager</li>
            <li className="whygtr2-list-item">Live Interface Between Clinician & Radiologist</li>
            <li className="whygtr2-list-item">Extensive Technician Training & Support</li>
            <li className="whygtr2-list-item">Monthly Client Review & Updates</li>
        </ul>
    </div>
    </div>
</div>

        </div>
    );
}

export default WhyGtr2;