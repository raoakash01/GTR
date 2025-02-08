import React from "react";
import "./vision.css";

function Vision() {
    return (
        <div className="vision">
            <div className="vision-left">
                <h1 className="vision-h">Our Mission</h1>
                <p className="vision-p">To revolutionize 
                    the radiology industry with accurate, 
                    time-sensitive, and cost-effective 
                    imaging reports, ensuring high-quality
                     patient care and absolute reliability.</p>
            </div>
            <div className="vision-center">
            <h1 className="vision-h">Global TeleRadiology</h1>
                <p className="vision-p">Precision, Speed, and Trust in Every Report.</p>
            </div>
            <div className="vision-right">
            <h1 className="vision-h">Our Vision</h1>
                <p className="vision-p">To be the go-to partner 
                    for diagnostic TeleRadiology, leveraging 
                    technology to enhance performance and 
                    set new standards in reporting accuracy.</p>
            </div>
        </div>
    )
}

export default Vision;