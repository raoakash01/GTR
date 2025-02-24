import React, { useRef, useEffect } from "react";
import "./home.css";
import arrow from "../assets/down-arrow.png";
import { gsap } from "gsap";

function Home() {
    const textRef = useRef(null);

    useEffect(() => {
        const animation = gsap.fromTo(
            textRef.current,
            { x: "60%" }, // Start completely outside from the right
            { x: "-60%", duration: 8, repeat: -1, ease: "linear" } // Move to the left completely
        );
        return () => animation.kill(); // Make sure to kill it when the component is unmounted
    }, []);

    return (
        <div className="home">
            <div className="home-content">
                <div className="Tag-line">
                    <h1 className="tag-line-text">Accuracy for Cure</h1>
                    <p className="tag-line-text-2">
                        Global TeleRadiology is India’s leading Radiology service
                        <br /> partner for Hospital and Diagnostic Centres.
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
                            We help companies design their
                            <br /> products to be ready for the web3 world
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
                    <p ref={textRef} className="home-content-3-text">
                    Coast efficient &nbsp;&nbsp;  -  &nbsp;&nbsp; Industry Best Radiologists &nbsp;&nbsp;  -  &nbsp;&nbsp; Round The Clock Technical Support &nbsp;&nbsp;  -  &nbsp;&nbsp;  Stringent 3 Tier Quality System &nbsp;&nbsp;  -  &nbsp;&nbsp; Subspeciality Experts &nbsp;&nbsp; Industry Best Radiologists &nbsp;&nbsp;
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
