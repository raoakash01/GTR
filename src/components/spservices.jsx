import React, { useEffect } from "react";
import './spservices.css'

function Spservices() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const leftItems = document.querySelectorAll('.spservices-grid-left .spservices-grid-item');
                    leftItems.forEach((item, index) => {
                        item.style.transform = 'translateX(-100%)';
                        item.style.opacity = 0;
                        item.style.transition = 'none'; // Reset transition
                        setTimeout(() => {
                            item.style.transform = 'translateX(0)';
                            item.style.opacity = 1;
                            item.style.transition = 'transform 0.5s ease-out, opacity 0.5s';
                        }, (index + 1) * 200); // Increment delay to prevent initial display
                    });
                    const rightItems = document.querySelectorAll('.spservices-grid-right .spservices-grid-item');
                    rightItems.forEach((item, index) => {
                        item.style.transform = 'translateX(100%)';
                        item.style.opacity = 0;
                        item.style.transition = 'none'; // Reset transition
                        setTimeout(() => {
                            item.style.transform = 'translateX(0)';
                            item.style.opacity = 1;
                            item.style.transition = 'transform 0.5s ease-out, opacity 0.5s';
                        }, (index + 1) * 200); // Increment delay to prevent initial display
                    });
                }
            });
        }, { rootMargin: '0px 0px -100px 0px' });
        observer.observe(document.querySelector('.spservices-grid-left'));
        observer.observe(document.querySelector('.spservices-grid-right'));
    }, []);

    return (
        <div className="spservices">
            <h1 className="spservices-h">SPECIALIZED SERVICES</h1>
            <div className="half-underline-sp"></div>
            <p className="spservices-p">Throughout the year we are 
                dedicated to meeting your needs and customize the 
                solutions accordingly. We also provide high-quality, 
                accurate preliminary reads across the globe. Our complete 
                teleradiology coverage provides staffing flexibility and 
                saves money by converting fixed professional costs into variable costs. </p>
            <p className="spservices-p">We provide a variety of reports and 
                reading options to meet your everyday coverage requirements 
                including:</p>
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
