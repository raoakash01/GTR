import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import "./faq.css";

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const form = useRef();
    const [formData, setFormData] = useState({ name: "", email: "", question: "" });

    const handleIconClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
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
        setFormData({ name: "", email: "", question: "" });
    };

    const faqData = [
        {
            question: "What all services does Global TeleRadiology cover under Teleradiology?",
            answer: (<p>We provide a multitude of services, and are happy to customize the same for our clients. Our services include:
                <ul style={{ listStyle: "disc", paddingLeft: "2rem" }}>
                    <li>Preliminary Teleradiology Reporting</li>
                    <li>Angio Teleradiology Reporting</li>
                    <li>Subspecialty Teleradiology Reading</li>
                    <li>Nighthawk (After-hours) Teleradiology Services</li>
                </ul>
                </p>
            )
        },
        { question: "Does Global TeleRadiology verify authenticity of the Radiologist before taking them on Panel?", answer: "Yes. We have several measures in place to ensure all Radiologist listed are genuine and qualified. We verify them through the Medical council Registration and Certificates. There is process of Test cases through we check the details and the Quality of the report." },
        { question: "What kind of Radiologists do you have?", answer: "At Global TeleRadiology, we have created systems & processes to deliver close to 6 Sigma Quality. Our highly accomplished, expert Quality panel ensures the quality of the reports by performing continuous audits and exploring new ways for further improvements in processes to achieve our avowed vision of being the radiology industry game changer on accuracy of reporting." },
        { question: "Can I choose Radiologist(s) for my panel?", answer: "Yes. Once you sign up with us, you may choose from the list of existing Radiologists as per your preference. Though it will also depends on the Radiologist availability." },
        { question: "Do we need to install any software?", answer: "Yes. To push the images PACS installation is required." },
        { question: "Do we get any training?", answer: "Yes. We will train your technician to use the Software for uploading the images & receiving the reports." },
        { question: "Can we speak to the reporting Radiologist?", answer: "Yes, We have a facility wherein we arrange conference call with the reporting Radiologist to clarify doubts, if any." },
        { question: "How do you ensure security of client's diagnostic data?", answer: "We take privacy and security of diagnostic data very seriously, and you can be certain of 100% privacy and confidentiality of your data when you outsource your Teleradiology services to us. Additionally, all our employees are made to sign a confidentiality agreement before embarking on a new project to ensure complete data security" },
        { 
            question: "Why should I choose Global TeleRadiology over others?",
            answer: (<p>Partnering with us allows you to benefits from
                <ul style={{listStyle: "disc", paddingLeft: "2rem"}}>
                    <li>Exceptional data security and confidentiality measures</li>
                    <li>Reliable and accurate Teleradiology services</li>
                    <li>Best-in-class infrastructure</li>
                    <li>Significant cost savings</li>
                    <li>Fast turnaround times</li>

                </ul>
            </p>)},

        { question: "How do I get started?", answer: "Just fill up the Contact Formand let our Sales & Marketing Team do the rest.  We will get in touch with you to answer all your other questions on Teleradiology services.  We sincerely hope we were able to answer your queries with these frequently asked questions on Teleradiology services. If you have any other question or requirement, do not hesitate to get in touch with us and learn what it means to partner with the best!" },
        { question: "How much time does it take to start off?", answer: "Usually, our precise processes and turnkey solutions ensure that we can get started in as little as 24 hours*. Overall though, the timeframe varies depending on individual circumstances, credential requirements, etc." },
    ];

    return (
        <div className="faq">
            <div className="faq-left">
                <h1 className="faq-left-heading">FAQs</h1>
                <div className="faq-left-bottom">
                    <h1 className="faq-left-bottom-heading">Ask a different question</h1>
                    <form ref={form} className="faq-left-bottom-form" onSubmit={sendEmail}>
                        <input name="name" value={formData.name} onChange={handleChange} className="faq-left-bottom-form-input" type="text" placeholder="Your Name" required />
                        <input name="email" value={formData.email} onChange={handleChange} className="faq-left-bottom-form-input" type="email" placeholder="Your Email" required />
                        <textarea name="question" value={formData.question} onChange={handleChange} className="faq-left-bottom-form-input" placeholder="Your Question" required />
                        <button className="faq-left-bottom-form-button">Submit</button>
                    </form>
                </div>
            </div>
            <div className="faq-right">
                {faqData.slice(0, showMore ? faqData.length : 5).map((item, index) => (
                    <div key={index} className="faq-right-question">
                        <div className="faq-right-question-left">
                            <p className="faq-right-question-text">{item.question}</p>
                            <FontAwesomeIcon
                                onClick={() => handleIconClick(index)}
                                className="faq-right-question-icon"
                                icon={activeIndex === index ? faMinus : faPlus}
                            />
                        </div>
                        {activeIndex === index && <div className="faq-right-question-answer"><p className="faq-ans">{item.answer}</p></div>}
                    </div>
                ))}
                <button className="faq-show-more-button" onClick={toggleShowMore}>
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    );
}

export default Faq;
