import React from "react";
import "./banner4.css";

const Banner4 = () => {
    return (
        <>
        <div className="banner4">
            <div className="banner4-con1">
                <div className="banner4-heading">
                    <p className="contact-info">Contact Info</p>
                    <h1 className="contact-info-heading">We are always<br/> happy to assist you</h1>
                </div>
            </div>
            <div className="banner4-con2">
                <div className="banner4-email">
                    <p className="banner4-con2-heading">Email Address</p>
                    <div className="underline"></div>
                    <p className="banner4-con2-heading">info@global-teleradiology.com</p>
                    <p className="banner4-con2-text">Assistance hours:<br/> 
                    Monday - Friday<br/>9 am to 8 pm EST</p>
                </div>
                <div className="banner4-number">
                <p className="banner4-con2-heading">Contact</p>
                <div className="underline"></div>
                <p className="banner4-con2-heading">91 9667226960</p>
                <p className="banner4-con2-text">Assistance hours:<br/> 
                    Monday - Friday<br/>9 am to 8 pm EST</p>
                </div>
            </div>
        </div>
        </>
    )
};

export default Banner4