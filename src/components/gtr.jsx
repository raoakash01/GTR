import React, { useState, useEffect } from "react";
import "./gtr.css";

function Gtr() {
    const [activeBox, setActiveBox] = useState(-1);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setActiveBox(index);
            index = (index + 1) % 4;
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="gtr-container">
            <h1 className="gtr-heading">QUALITY ASSURANCE</h1>
            <div className="gtr-underline"></div>
            <p className="gtr-text">
                We are committed to our mission of becoming the go-to-partner for accurate,
                time-sensitive, cost-effective imaging reports and interpretations that focus
                on high quality patient care for our clients worldwide we ensure absolute
                reliability and highest quality for all customers.
            </p>
            <p className="gtr-text">
                We deliver highest standards of Image diagnosis and reporting, thereby making
                ‘Accuracy for Cure’ a reality. Our approach to quality can be described as follows
            </p>
            <div className="gtr-lower">
                {[0, 1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className={`gtr-box ${activeBox === i ? "active" : ""} ${i === 0 ? "gtr-box1" : ""} ${i === 3 ? "gtr-box4" : ""}`}
                    >
                        <h1 className="gtr-box-heading">
                            {["ACCURACY OF REPORTS", "TIMELINESS OF REPORTS", "24x7 HELPLINE", "BEST IN CLASS TECHNOLOGY"][i]}
                        </h1>
                        <div className="gtr-box-text">
                            <ul>
                                {[
                                    ["Inbound and outbound QC", "3-tier quality Process", "Experienced quality panel"],
                                    ["Customized TAT", "Efficient process flow", "Emergency handling"],
                                    ["Round the clock assistance", "Live review facility", "24/7 helpline Number"],
                                    ["Fully secured environment", "Integrated AI", "User friendly"],
                                ][i].map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gtr;
