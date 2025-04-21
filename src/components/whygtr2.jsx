import React, { useState } from "react";
import "./whygtr2.css";
import p1 from "../assets/picon1.png";
import p2 from "../assets/picon2.png";
import p3 from "../assets/picon3.png";
import p4 from "../assets/picon4.png";
import p5 from "../assets/picon5.png";

function WhyGtr2() {
    const [text, setText] = useState("Service Quality & TAT");
    const [activeId, setActiveId] = useState("1");

    const handleClick = (e) => {
        const id = e.target.getAttribute("data-id");
        setActiveId(id);
        switch (id) {
            case "1":
                setText("Service Quality & TAT");
                break;
            case "2":
                setText("Radiology Team");
                break;
            case "3":
                setText("Quality Control");
                break;
            case "4":
                setText("Reporting Pacs");
                break;
            case "5":
                setText("Customer Relations");
                break;
            default:
                break;
        }
    };

    return (
        <div className="whygtr2-container">
            <h1 className="whygtr2-heading">WHY GOBAL TELERADIOLOGY</h1>
            <div className="half-underline"></div>

            <div className="gtr2-content">
                <div className="gtr2-left">
                    <div className="gtr2-grid">
                        {[{ id: "1", img: p1, label: "Service Quality & TAT" },
                          { id: "4", img: p4, label: "Radiology Team" },
                          { id: "2", img: p2, label: "Quality Control" },
                          { id: "3", img: p3, label: "Reporting Pacs" },
                          { id: "5", img: p5, label: "Customer Relations" }].map(({ id, img, label }) => (
                            <div
                                key={id}
                                className={`gtr2-grid-item ${activeId === id ? 'active' : ''}`}
                                data-id={id}
                                onClick={handleClick}
                            >
                                <img src={img} alt={`p${id}`} className="gtr2-grid-img" />
                                <h1 className="gtr2-grid-text">{label}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gtr2-right">
                    <div className="gtr2-right-box">
                        <ul className="whygtr2-list">
                            {text === "Service Quality & TAT" && (
                                <>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Experienced in remote reporting</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Industry best radiologists</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Quicker TAT</li>
                                </>
                            )}
                            {text === "Radiology Team" && (
                                <>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Experienced in remote reporting</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Industry best radiologists</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Subspeciality experts</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Stringent selection & screening process</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Competent in handling client concerns and reviews</li>                                    
                                </>
                            )}
                            {text === "Quality Control" && (
                                <>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Industry - best quality delivery</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Stringent 3 tier quality control system</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Peer to peer review</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Inbound quality screening</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Outbound quality checks</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Dedicated quality team</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Led by quality directors</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Continuous quality tracking</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Rad peer score marking</li>
                                </>
                            )}
                            {text === "Reporting Pacs" && (
                                <>
                                    <li className="whygtr2-list-item"><span className="disc"></span>AI enabled world class pacs</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Customer friendly </li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Accessible anytime - anywhere</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Secure image transfer & storage</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Instant integration & installation</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Round the clock technical support</li>
                                </>
                            )}
                            {text === "Customer Relations" && (
                                <>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Patient centric approach</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>24/7 Customer support</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Dedicated accounts manager</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Live interface between clinician & radiologist</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Extensive technician training & support</li>
                                    <li className="whygtr2-list-item"><span className="disc"></span>Monthly client review & updates</li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyGtr2;

