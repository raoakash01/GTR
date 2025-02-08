import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./faq.css";

function Faq() {
    const [answersVisible, setAnswersVisible] = React.useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
    });

    const handleIconClick = (index) => {
        setAnswersVisible((prevAnswersVisible) => ({
            ...prevAnswersVisible,
            [index]: !prevAnswersVisible[index],
        }));
    };
    return (
        <div className="faq">
            <div className="faq-left">
                <div className="faq-left-top">
                    <p className="faq-left-top-faq">-FAQS</p>
                    <h1 className="faq-left-top-heading">Questions Or Concerns on your mind ?</h1>
                    <p className="faq-left-top-text">Our dedicated team is here to provide the
                        assistance you need. Feel free to reach out - we’re ready to help!</p>
                    <p className="faq-left-top-contact-text">C : +91-9667226960 <br/>
                     E : info@global-teleradiology.com</p>
                    
                </div>
                <div className="faq-left-bottom">
                    <h1 className="faq-left-bottom-heading">Ask a different question</h1>
                    <form className="faq-left-bottom-form">
                        <input className="faq-left-bottom-form-input" type="text" placeholder="Your Name" />
                        <input className="faq-left-bottom-form-input" type="email" placeholder="Your Email" />
                        <textarea className="faq-left-bottom-form-input" placeholder="Your Question" />
                        <button className="faq-left-bottom-form-button">Submit</button>
                    </form>
                </div>
            </div>
            <div className="faq-right">
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">What all services does Global TeleRadiology cover
                            under Teleradiology?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(1)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[1] && <div className="faq-right-question-answer">
                        <p className="faq-ans">This is the answer to the first question.</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">Who will be reading the scans?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(2)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[2] && <div className="faq-right-question-answer">
                        <p className="faq-ans">This is the answer to the second question.</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">Does Global TeleRadiology verify authenticity of the Radiologist before taking them on Panel?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(3)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[3] && <div className="faq-right-question-answer">
                        <p className="faq-ans">This is the answer to the third question.</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">What kind of Radiologists do you have?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(4)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[4] && <div className="faq-right-question-answer">
                        <p className="faq-ans">This is the answer to the fourth question.</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">Can I choose Radiologist(s) for my panel?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(5)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[5] && <div className="faq-right-question-answer">
                        <p className="faq-ans">This is the answer to the fourth question.</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">Do we need to install any software?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(6)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[6] && <div className="faq-right-question-answer">
                        <p className="faq-ans">This is the answer to the fourth question.</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">Do we get any training?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(7)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[7] && <div className="faq-right-question-answer">
                        <p className="faq-ans">This is the answer to the fourth question.</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">Can we speak to the reporting Radiologist?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(8)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[8] && <div className="faq-right-question-answer">
                        <p className="faq-ans">This is the answer to the fourth question.</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">How do you ensure security of client's diagnostic data?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(9)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[9] && <div className="faq-right-question-answer">
                        <p className="faq-ans">This is the answer to the fourth question.</p>
                    </div>}
                </div>
                {/* <button className="faq-right-button">Contact Us</button> */}
            </div>
        </div>
    );
}

export default Faq;
