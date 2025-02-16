import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./faq.css";

function Faq() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID", 
                "YOUR_TEMPLATE_ID", 
                form.current, 
                "YOUR_PUBLIC_KEY"
            )
            .then(
                (result) => {
                    alert("Email sent successfully!");
                    console.log(result.text);
                },
                (error) => {
                    alert("Failed to send email.");
                    console.log(error.text);
                }
            );

        e.target.reset();
    };


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
                    <form ref={form} className="faq-left-bottom-form" onSubmit={sendEmail} method="POST">
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
                        <p className="faq-ans">We provide a multitude of services, and are happy to customize the same for our clients. Our services include:<br/>
 <span className="faq-point">&#8226;</span>&nbsp;Preliminary Teleradiology Reporting<br/>
  <span className="faq-point">&#8226;</span>&nbsp;Angio Teleradiology Reporting<br/>
  <span className="faq-point">&#8226;</span>&nbsp;Subspecialty Teleradiology Reading<br/>
  <span className="faq-point">&#8226;</span>&nbsp;Nighthawk (After-hours) Teleradiology Services</p>
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
                        <p className="faq-ans">Yes. We have several measures in place to ensure all Radiologist listed are genuine and qualified. We verify them through the Medical council Registration and Certificates. There is process of Test cases through we check the details and the Quality of the report.</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">What kind of Radiologists do you have?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(4)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[4] && <div className="faq-right-question-answer">
                        <p className="faq-ans">At Global TeleRadiology, we have created systems & processes to deliver close to 6 Sigma Quality. 
                        Our highly accomplished, expert Quality panel ensures the quality of the reports by performing continuous audits and exploring new ways for further improvements in processes to achieve our avowed vision of being the radiology industry game changer on accuracy of reporting.</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">Can I choose Radiologist(s) for my panel?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(5)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[5] && <div className="faq-right-question-answer">
                        <p className="faq-ans">Yes. Once you sign up with us, you may choose from the list of existing Radiologists as per your preference. Though it will also depends on the Radiologist availability.</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">Do we need to install any software?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(6)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[6] && <div className="faq-right-question-answer">
                        <p className="faq-ans">Yes. To push the images PACS installation is required.</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">Do we get any training?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(7)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[7] && <div className="faq-right-question-answer">
                        <p className="faq-ans">Yes. We will train your technician to use the Software for uploading the images & receiving the reports.</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">Can we speak to the reporting Radiologist?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(8)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[8] && <div className="faq-right-question-answer">
                        <p className="faq-ans">Yes, We have a facility wherein we arrange conference call with the reporting Radiologist to clarify doubts, if any.</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">How do you ensure security of client's diagnostic data?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(9)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[9] && <div className="faq-right-question-answer">
                        <p className="faq-ans">We take privacy and security of diagnostic data very seriously, and you can be certain of 100% privacy and confidentiality of your data when you outsource your Teleradiology services to us. Additionally, all our employees are made to sign a confidentiality agreement before embarking on a new project to ensure complete data security.</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">Why should I choose Global TeleRadiology over others?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(10)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[10] && <div className="faq-right-question-answer">
                        <p className="faq-ans">Partnering with us allows you to benefits from:<br/>
 <span className="faq-point">&#8226;</span>&nbsp;Exceptional data security and confidentiality measures<br/>
 <span className="faq-point">&#8226;</span>&nbsp;Reliable and accurate Teleradiology services<br/>
 <span className="faq-point">&#8226;</span>&nbsp;Best-in-class infrastructure<br/>
 <span className="faq-point">&#8226;</span>&nbsp;Significant cost savings<br/>
 <span className="faq-point">&#8226;</span>&nbsp;Fast turnaround times</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">How do I get started?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(11)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[11] && <div className="faq-right-question-answer">
                        <p className="faq-ans">Just fill up the Contact Formand let our Sales & Marketing Team do the rest. 
We will get in touch with you to answer all your other questions on Teleradiology services. 
We sincerely hope we were able to answer your queries with these frequently asked questions on Teleradiology services. 
If you have any other question or requirement, do not hesitate to get in touch with us and learn what it means to partner with the best!</p>
                    </div>}
                </div>
                <div className="faq-right-question">
                    <div className="faq-right-question-left">
                        <p className="faq-right-question-text">How much time does it take to start off?</p>
                        <FontAwesomeIcon onClick={() => handleIconClick(12)} className="faq-right-question-icon" icon={faPlus} />
                    </div>
                    {answersVisible[12] && <div className="faq-right-question-answer">
                        <p className="faq-ans">Usually, our precise processes and turnkey solutions ensure that we can get started in as little as 24 hours*. Overall though, the timeframe varies depending on individual circumstances, credential requirements, etc.</p>
                    </div>}
                </div>
                {/* <button className="faq-right-button">Contact Us</button> */}
            </div>
        </div>
    );
}

export default Faq;
