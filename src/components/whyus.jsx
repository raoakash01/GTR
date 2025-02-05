import React from "react";
import "./whyus.css";
function WhyUs() {
    return (
        <div className="why-us">
           <div className="why-us-upper">
            <h1 className="why-us-heading">WHY TELERADIOLOGY</h1>
            <p className="why-us-text">Teleradiology is the remote interpretation of medical images by specialized radiologists who are not physically present at the imaging site.</p>
            <p className="why-us-text">This practice enables timely and accurate diagnosis, ensuring seamless healthcare delivery regardless of geographic constraints.</p>
           </div>
           <div className="why-us-lower">
            <div className="why-us-blue-part">
                <div className="why-us-blue-part-1">
                    <div className="why-us-shape">
                    <div className="why-us-circle"></div>
                    <div className="why-us-line"></div>
                    <div className="why-us-circle"></div>
                    <div className="why-us-line"></div>
                    <div className="why-us-circle"></div>
                    <div className="why-us-line"></div>
                    <div className="why-us-circle"></div>
                    </div>
                </div>
                <div className="why-us-blue-part-2">
                    <div className="why-us-right">
                        <h1 className="why-us-right-heading">Boosts Up Efficiency of Output by Remodeled Process Flow</h1>
                        <p className="why-us-right-text">It is a cost-effective solution that supports your healthcare facility with experienced radiology coverage, reduced management overhead, and greater patient satisfaction with enhanced quality.
                        </p>
                    </div>
                    <div className="why-us-right">
                        <h1 className="why-us-right-heading">Helps Redistribute the Workload</h1>
                        <p className="why-us-right-text">By helping you staff the second & third shift as well as provide weekends and vacation coverage. It also helps your existing radiologists enjoy a better work-life balance.
                        </p>
                    </div>
                    <div className="why-us-right">
                        <h1 className="why-us-right-heading">Provides Quick Access to Remote Areas</h1>
                        <p className="why-us-right-text">Ensures real time coverage to remote areas using the available technology to provide accurate and timely diagnosis through radiology interpretations.</p>
                    </div>
                    <div className="why-us-right">
                        <h1 className="why-us-right-heading">Subspecialty and Vacancy Coverage for 100% Efficiency</h1>
                        <p className="why-us-right-text">Teleradiologists act as an extension of your team by providing subspecialty coverage expertise as well as cover for vacancies and surplus volume when there is a requirement</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
}

export default WhyUs;