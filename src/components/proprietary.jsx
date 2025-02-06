import React from "react";
import './proprietary.css';
import arrow from '../assets/line.png'

function Proprietary() {
    return (
        <div className="proprietary">
            <div className="proprietary-upper">
                <h1 className="proprietary-heading">Proprietary Clip</h1>
                <p className="proprietary-text">At Global TeleRadiology, 
                    we ensure accuracy and efficiency through CLIP™ 
                    (Controlled Layers In Process), a structured methodology 
                    for high-quality, timely reports.</p>
            </div>
            <div className="proprietary-lower">
                <div className="proprietary-1">
                <div className="proprietary-box">
                    <div className="proprietary-square"></div>
                    <div className="proprietary-arrow">
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
                <h1 className="proprietary-box-heading">IMAGING</h1>
                <p className="proprietary-box-text">Technician Training (DICOM)</p>
                </div>
                <div className="proprietary-1">
                <div className="proprietary-box">
                    <div className="proprietary-square"></div>
                    <div className="proprietary-arrow">
                    <img src={arrow} alt="arrow" />
                    </div>
                </div>
                <h1 className="proprietary-box-heading">TRANSMITTING</h1>
                <p className="proprietary-box-text">Easy Upload; System Checks</p>
                </div>
                <div className="proprietary-1">
                <div className="proprietary-box">
                    <div className="proprietary-square"></div>
                    <div className="proprietary-arrow">
                    <img src={arrow} alt="arrow" />
                    </div>
                </div>
                <h1 className="proprietary-box-heading">REPORTING</h1>
                <p className="proprietary-box-text">Quality Panel; Peer-to-Peer Review</p>
                </div>
                <div className="proprietary-1">
                <div className="proprietary-box">
                    <div className="proprietary-square"></div>
                </div>
                <h1 className="proprietary-box-heading">DELIVERY</h1>
                <p className="proprietary-box-text">Quick Delivery; 24×7 Consultation</p>
                </div>
            </div>
        </div>
    );
}

export default Proprietary;