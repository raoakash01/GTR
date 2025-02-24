import React, { useRef, useEffect } from "react";
import "./home.css";
import arrow from "../assets/down-arrow.png";
import { gsap } from "gsap";

function Home() {
    const textRef = useRef(null);

    useEffect(() => {
        const animation = gsap.timeline({ repeat: -1 });
        animation.to(
            textRef.current,
            { x: "-100%", duration: 25, ease: "linear", onComplete: () => animation.restart() }
        );
        return () => animation.kill();
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
                    <p ref={textRef} className="home-content-3-text" style={{ whiteSpace: "nowrap" }}>
                    Coast efficient &nbsp;&nbsp;  -  &nbsp;&nbsp; Industry Best Radiologists &nbsp;&nbsp;  -  &nbsp;&nbsp; Round The Clock Technical Support &nbsp;&nbsp;  -  &nbsp;&nbsp;  Stringent 3 Tier Quality System &nbsp;&nbsp;  -  &nbsp;&nbsp; Subspeciality Experts &nbsp;&nbsp;- &nbsp;&nbsp;Coast efficient &nbsp;&nbsp;  -  &nbsp;&nbsp; Industry Best Radiologists &nbsp;&nbsp;  -  &nbsp;&nbsp; Round The Clock Technical Support &nbsp;&nbsp;  -  &nbsp;&nbsp;  Stringent 3 Tier Quality System &nbsp;&nbsp;  -  &nbsp;&nbsp; Subspeciality Experts &nbsp;&nbsp;- &nbsp;&nbsp;Coast efficient &nbsp;&nbsp;  -  &nbsp;&nbsp; Industry Best Radiologists &nbsp;&nbsp;  -  &nbsp;&nbsp; Round The Clock Technical Support &nbsp;&nbsp;  -  &nbsp;&nbsp;  Stringent 3 Tier Quality System &nbsp;&nbsp;  -  &nbsp;&nbsp; Subspeciality Experts &nbsp;&nbsp;- &nbsp;&nbsp;Coast efficient &nbsp;&nbsp;  -  &nbsp;&nbsp; Industry Best Radiologists &nbsp;&nbsp;  -  &nbsp;&nbsp; Round The Clock Technical Support &nbsp;&nbsp;  -  &nbsp;&nbsp;  Stringent 3 Tier Quality System &nbsp;&nbsp;  -  &nbsp;&nbsp; Subspeciality Experts &nbsp;&nbsp;
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
