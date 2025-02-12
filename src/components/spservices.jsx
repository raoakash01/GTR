import React from "react";
import './spservices.css'

function Spservices() {
    return (
        <div className="spservices">
            <h1 className="spservices-h">OUR SPECIALIZED SERVICES</h1>
            <div className="half-underline-sp"></div>
            <p className="spservices-p">Throughout the year we are
                 dedicated to meeting your needs and customize
                  solutions accordingly. We also provide high-quality,
                accurate preliminary reads across the globe.
             Our complete teleradiology coverage provides
             staffing flexibility and saves money by converting
             fixed professional costs into variable costs and accurate
             reporting for best patient care.</p>
            <p className="spservices-p">We provide a variety of
                 reports and reading options to meet your
                  daytime daytime coverage requirements including:</p>
            <div className="spservices-grid">
                <div className="spservices-grid-left">
                    <div className="spservices-grid-item">
                        <p className="spservices-grid-p"> 
                            <span className="spservices-grid-point">&#8226;</span>&nbsp;
                            Routine Services
                        </p>
                        </div>
                    <div className="spservices-grid-item">
                        <p className="spservices-grid-p"> 
                            <span className="spservices-grid-point">&#8226;</span>&nbsp;
                            Over Flow Management
                        </p>
                    </div>
                    <div className="spservices-grid-item">
                        <p className="spservices-grid-p"> 
                            <span className="spservices-grid-point">&#8226;</span>&nbsp;
                            Vacation Services
                        </p>
                    </div>
                    <div className="spservices-grid-item">
                        <p className="spservices-grid-p"> 
                            <span className="spservices-grid-point">&#8226;</span>&nbsp;
                            Night Services
                        </p>
                    </div>
                    <div className="spservices-grid-item">
                        <p className="spservices-grid-p"> 
                            <span className="spservices-grid-point">&#8226;</span>&nbsp;
                            Emergency Services
                        </p>
                    </div>
                </div>
                <div className="spservices-grid-right">
                <div className="spservices-grid-item">
                    <p className="spservices-grid-p"> 
                            <span className="spservices-grid-point">&#8226;</span>&nbsp;
                            Subspecialty Coverage
                        </p>
                </div>
                <div className="spservices-grid-item">
                    <p className="spservices-grid-p"> 
                            <span className="spservices-grid-point">&#8226;</span>&nbsp;
                            Unplanned Outages Coverage
                        </p>
                </div>
                <div className="spservices-grid-item">
                    <p className="spservices-grid-p"> 
                            <span className="spservices-grid-point">&#8226;</span>&nbsp;
                            Preliminary Interpretations
                        </p>
                </div>
                <div className="spservices-grid-item">
                    <p className="spservices-grid-p"> 
                            <span className="spservices-grid-point">&#8226;</span>&nbsp;
                            Audit Reporting
                        </p>
                </div>
                <div className="spservices-grid-item">
                    <p className="spservices-grid-p"> 
                            <span className="spservices-grid-point">&#8226;</span>&nbsp;
                            Second Opinion for Complex Cases
                        </p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Spservices;