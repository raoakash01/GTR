import React from "react";
import "./radiology.css"

function Radiology(){
    return(
        <div className="radiology">
            <div className="radiology-upper">
                <h1 className="radiology-heading">Radiology Panel</h1>
                <p className="radiology-text"><span className="radiology-span">At Global Teleradiology,</span> we prioritize collaboration and quality, offering exceptional radiology reporting services through a highly experienced team. </p>         
                <p className="radiology-text">Here’s why you should partner with us:</p>  
            </div>
            <div className="radiology-lower">
                <div className="radiology-1">
                <div className="radiology-box">
                    <h1 className="radio-heading">Expert Panel of Radiologists</h1>
                    <div className="radio-text">
                        <p className="radiology-text">We bring together a handpicked group of highly skilled radiologists from various geographic locations and sub-specialties to deliver accurate and reliable interpretations of medical images</p>
                    </div>
                </div>
                <div className="radiology-box">
                    <h1 className="radio-heading">Stringent Quality Testing</h1>
                    <div className="radio-text">
                        <p className="radiology-text">All our radiologists undergo rigorous selection and quality testing to ensure they meet the highest standards in diagnostic excellence.</p>
                    </div>
                </div>
                <div className="radiology-box">
                    <h1 className="radio-heading">Clinically Relevant Reporting</h1>
                    <div className="radio-text">
                        <p className="radiology-text">Our process is designed to deliver precise, clinically relevant reports, ensuring that every diagnosis is supported by clear and actionable insights.</p>
                    </div>
                </div>
                </div>
                <div className="radiology-1">
                <div className="radiology-box-1">
                    <h1 className="radio-heading">Strict Adherence to Turnaround Times</h1>
                    <div className="radio-text">
                        <p className="radiology-text">We understand the urgency of timely diagnoses and ensure that all reports are delivered within stringent timelines, without compromising on accuracy or quality.</p>
                    </div>
                </div>
                <div className="radiology-box-1">
                    <h1 className="radio-heading">Dedicated Quality Panel</h1>
                    <div className="radio-text">
                        <p className="radiology-text">We have a specialized Quality Panel consisting of our five most senior radiologists, whose sole responsibility is to:
                            <ul className="radio-list-p">
                                <li className="radio-l-p">Perform regular audits to assess report quality.</li>
                                <li className="radio-l-p">Identify areas for continuous improvement.</li>
                                <li className="radio-l-p">Provide individual feedback and error assessments to each radiologist.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Radiology;