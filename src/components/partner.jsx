import React from "react";
import './partner.css'
import P1 from '../assets/p1.png'
import P2 from '../assets/p2.png'
import P3 from '../assets/p3.png'

function Partner() {
    return (
        <div className="partner">
            <h1 className="partner-h">PARTNER WITH US</h1>
            <div className="text-and-button">
                <p className="partner-p">For seamless, technology-driven radiology solutions that elevate patient care and diagnostic precision. 🚀</p>
                <button className="partner-button" onClick={() => window.location.href = '#contact'}>Contact Us</button>
            </div>
            <div className="partner-top-line"></div>
            <div className="partner-boxes">
                <div className="partner-box">
                    <div>
                        <img src={P1} alt="p1" className="img-partner" />
                    </div>
                    <div className="text-partner">
                        <div className="text-partner-H">
                            <h1 className="text-partner-H1">Imaging Centers and  Individual Radiologists</h1>
                        </div>
                        <div className="text-partner-P">
                            <p className="text-partner-P1">We offer expert teleradiology services for Individual Radiology and Imaging Centers, ensuring accurate, timely, and reliable diagnostic reporting.</p>
                        </div>
                    </div>
                </div>
                <div className="partner-box">
                <div >
                        <img src={P2} alt="p2" className="img-partner" />
                    </div>
                    <div className="text-partner">
                        <div className="text-partner-H">
                            <h1 className="text-partner-H1">Hospitals and Diagnostics Centre</h1>
                        </div>
                        <div className="text-partner-P">
                            <p className="text-partner-P1">Delivering expert teleradiology reporting support to hospitals and diagnostic centers for seamless, accurate, and timely diagnostics.</p>
                        </div>
                    </div>
                </div>
                <div className="partner-box">
                <div>
                        <img src={P3} alt="p3" className="img-partner" />
                    </div>
                    <div className="text-partner">
                        <div className="text-partner-H">
                            <h1 className="text-partner-H1">Medical Groups of Imaging Centre</h1>
                        </div>
                        <div className="text-partner-P">
                            <p className="text-partner-P1">We provide expert teleradiology services to Public-Private Partnerships and health organizations, ensuring accurate and timely diagnostics.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner