import React, { useRef, useState } from "react";
import "./home.css";
import Whatsapp from "../assets/Whatsapp.png";
import emailjs from "emailjs-com"

function Home() {
    // const form = useRef();

    // const [formData, setFormData] = useState({
    //     email: ""
    // });

    // const handleEmailChange = (e) => {
    //     setFormData({ email: e.target.value });
    // };

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     emailjs
    //         .sendForm(
    //             'service_0na5oa3', 
    //             'template_kzqf4ls', 
    //             form.current, 
    //             'k0U8ChESXX4ryjPZZ'
    //         )
    //         .then(
    //             (result) => {
    //                 alert("Email sent successfully!");                    
    //                 console.log(result.text);
    //             },
    //             (error) => {
    //                 alert("Failed to send email.");
    //                 console.log(error.text);
    //             }
    //         );

    //     setFormData({ email: "" });
    // };

    // const textRef = useRef(null);
    // const textRef2 = useRef(null);

    // useEffect(() => {
    //     const animation1 = gsap.timeline({ repeat: -1 });
    //     const animation2 = gsap.timeline({ repeat: -1 });

    //     const updateAnimation = () => {
    //         const distance1 = textRef.current.offsetWidth;
    //         const distance2 = textRef2.current.offsetWidth;

    //         animation1.to(
    //             textRef.current,
    //             { x: `-${distance1}px`, duration: 10, ease: "linear", onComplete: () => animation1.restart() }
    //         );

    //         animation2.to(
    //             textRef2.current,
    //             { x: `-${distance2}px`, duration: 10, ease: "linear", onComplete: () => animation2.restart() }
    //         );
    //     };

    //     updateAnimation();
    //     window.addEventListener('resize', updateAnimation);
    //     return () => {
    //         animation1.kill();
    //         animation2.kill();
    //         window.removeEventListener('resize', updateAnimation);
    //     };
    // }, []);

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
                    <div className="red-text-bg">
                        <h1 className="red-text-h1">
                        We Help Reduce Your Radiology Cost upto 50% 
                        </h1>
                    </div>
                {/* <div className="arrow">
                    <img src={arrow} alt="arrow" className="arrow-icon" />
                </div> */}
                <div className="home-content-2-text">
                    <div className="content-2-text">
                        <div className="email-input">
                        <button onClick={() => window.location.href = "#contactus"} className="get-started">For Free Trial</button>
                        {/* <form ref={form} className="email-form" onSubmit={sendEmail}>
            <input
                type="email"
                name="email" 
                placeholder="Enter your email"
                className="email-home"
                value={formData.email}
                onChange={handleEmailChange}
                required
            />
            <button type="submit" className="get-started">For Free Trial</button>
        </form> */}
                        </div>
                        <a className="whatsapp-icon" href="https://api.whatsapp.com/send?phone=+919319380444&text=Hi%20I%20am%20interested%20in%20knowing%20more%20about%20Global%20Teleradiology" target="_blank" rel="noopener noreferrer">
                            <img src={Whatsapp} alt="whatsapp" className="whatsapp-icon" />
                        </a>
                    </div>
                </div>
                </div>
                <div className="home-content-2-right">
                    <a href="https://drive.google.com/file/d/1xi_KzsNLUhkHQz2Xr5QujdwtrK3-AQH9/view" target="_blank" rel="noopener noreferrer">
                        <button className="download-brochure">Download Brochure</button>
                    </a>
                </div>
            </div>
            {/* <div className="home-content-3">
                <div className="home-content-3-box" style={{ overflow: "hidden" }}>
                    <p ref={textRef} className="home-content-3-text" style={{ whiteSpace: "nowrap" }}>
                    &nbsp;&nbsp;10+ Years of Experience&nbsp;&nbsp; - &nbsp;&nbsp;4 Million Reports&nbsp;&nbsp; - &nbsp;&nbsp;10 Million Images Read&nbsp;&nbsp; - &nbsp;&nbsp;99.9 Industry Best Quality&nbsp;&nbsp; - &nbsp;&nbsp;100% Happy Customers&nbsp;&nbsp;
                    </p>
                    <p ref={textRef2} className="home-content-3-text" style={{ whiteSpace: "nowrap" }}>
                    &nbsp;&nbsp; 10+ Years of Experience&nbsp;&nbsp; - &nbsp;&nbsp;4 Million Reports&nbsp;&nbsp; - &nbsp;&nbsp;10 Million Images Read&nbsp;&nbsp; - &nbsp;&nbsp;99.9 Industry Best Quality&nbsp;&nbsp; - &nbsp;&nbsp;100% Happy Customers&nbsp;&nbsp;
                    </p>
                </div>
            </div> */}
        </div>
    );
}

export default Home;
