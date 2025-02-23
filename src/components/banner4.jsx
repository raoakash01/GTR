import React from "react";
import "./banner4.css";

const Banner4 = () => {
    return (
        <>
        <div className="banner4">
            <div className="banner4-con1">
                <div className="banner4-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14036.59496542141!2d77.08064631659242!3d28.41476838521971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d21f3f9291983%3A0xbf6f20cc9d180076!2sSplendor%20Spectrum%20One!5e0!3m2!1sen!2sin!4v1740219314827!5m2!1sen!2sin" width="400" height="250" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
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