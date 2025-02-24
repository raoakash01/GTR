import React, { useRef, useEffect } from "react";
import "./home.css";
import arrow from "../assets/down-arrow.png";
import { gsap } from "gsap";

function Home() {
    const textRef = useRef(null);
    const textRef2 = useRef(null);

    useEffect(() => {
        const animation1 = gsap.timeline({ repeat: -1 });
        const animation2 = gsap.timeline({ repeat: -1 });

        const updateAnimation = () => {
            const distance1 = textRef.current.offsetWidth;
            const distance2 = textRef2.current.offsetWidth;

            animation1.to(
                textRef.current,
                { x: `-${distance1}px`, duration: 10, ease: "linear", onComplete: () => animation1.restart() }
            );

            animation2.to(
                textRef2.current,
                { x: `-${distance2}px`, duration: 10, ease: "linear", onComplete: () => animation2.restart() }
            );
        };

        updateAnimation();
        window.addEventListener('resize', updateAnimation);
        return () => {
            animation1.kill();
            animation2.kill();
            window.removeEventListener('resize', updateAnimation);
        };
    }, []);

    return (
        <div className="home">
            <div className="home-content">
                <div className="Tag-line">
                    <h1 className="tag-line-text">Accuracy for Cure</h1>
                    <p className="tag-line-text-2">
                        Global TeleRadiology is India’s Leading Radiology Service
                        <br /> Partner for Hospitals and Diagnostic Centres.
                    </p>
                </div>
            </div>
            <div className="home-content-2">
                <div className="home-content-2-left">
                <div className="arrow">
                    <img src={arrow} alt="arrow" className="arrow-icon" />
                </div>
                <div className="home-content-2-text">
                    <div className="content-2-text">
                        <p>
                        Reduce Your Radiology Cost upto
                            <br /> 50% Register For Free Trial
                        </p>
                        <div className="email-input">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="email-home"
                            />
                            <button className="get-started">Get Started</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="home-content-2-right">
                    <button className="download-brochure">Download Brochure</button>
                    </div>
            </div>
            <div className="home-content-3">
                <div className="home-content-3-box" style={{ overflow: "hidden" }}>
                    <p ref={textRef} className="home-content-3-text" style={{ whiteSpace: "nowrap" }}>
                    &nbsp;&nbsp;10+ Years of Experience&nbsp;&nbsp; - &nbsp;&nbsp;4 Million Reports&nbsp;&nbsp; - &nbsp;&nbsp;10 Million Images Read&nbsp;&nbsp; - &nbsp;&nbsp;99.9 Industry Best Quality&nbsp;&nbsp; - &nbsp;&nbsp;100% Happy Customers&nbsp;&nbsp;
                    </p>
                    <p ref={textRef2} className="home-content-3-text" style={{ whiteSpace: "nowrap" }}>
                    &nbsp;&nbsp; 10+ Years of Experience&nbsp;&nbsp; - &nbsp;&nbsp;4 Million Reports&nbsp;&nbsp; - &nbsp;&nbsp;10 Million Images Read&nbsp;&nbsp; - &nbsp;&nbsp;99.9 Industry Best Quality&nbsp;&nbsp; - &nbsp;&nbsp;100% Happy Customers&nbsp;&nbsp;
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
