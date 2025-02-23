import React from "react";
import "./career.css";
import Banner from "./banner";
import Navbar from "./navbar";
import Home from "./home";
import Footer from "./footer";


function Career() {
    return (
        <div>
            <Banner />
            <Navbar />
            <div id="home" className="homeC">
            <Home />
            </div>
            <div className="career">
                <div className="career1">
                    <h1 className="career1-h">
                    PARTNER WITH GRS - WE SERVE BETTER
                    </h1>
                    <div className="career1-line"></div>
                    <p className="career1-sh">Join us as a business associate</p>
                    <p className="career1-p">You can be our advocate and help us grow the business in many ways. Just drop us your contact details at the below email address and we will get in touch</p>
                    <p className="career1-sh">Join our team of energetic and motivated staff</p>
                    <p className="career1-p">We are always in need of people who can participate in our vision and work with us shoulder to shoulder. If you have any experience in Information Technology, managing operations, doing market research, doing business development or medical transcriptionist, write to us at the below email address to explore the opportunity</p>
                    <p className="career1-p top-2">Write to us at <b>info@global-teleradiology.com</b> for more details.</p>
                </div>
                <div className="careemid">
                  <h1 className="career1-h">CURRENT OPENING</h1>
                  <div className="career1-line"></div>
                  <div className="career-search">
                    <select className="dropdown">
                        <option className="job-type" value="" disabled selected>Job Type</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Intern</option>
                    </select>
                    <input className="job-title" type="name" placeholder="Job Title or Skills" />
                  <button className="search-btn" type="submit">Search</button>
                  </div>
                </div>
                <div className="career2">
                <h1 className="career1-h">CARRER OPPORTUNITIES</h1>
                <div className="career1-line"></div>
                <form className="form-container">
      <div className="form-groupc">
        <input type="text" id="name" name="name" placeholder="Your Name" required />
        <input type="email" id="email" name="email" placeholder="Email" required />
        <input type="number" id="contact" name="contact" placeholder="Contact No" required />
      </div>

      <div className="form-groupc">
        <input type="text" id="qualification" name="qualification" placeholder="Highest Qualification" required />
        <input type="text" id="experience" name="experience" placeholder="Years of Experience" required />
        <input type="text" id="specialization" name="specialization" placeholder="Specialization" required />
      </div>

      <div className="form-groupc full-width">
        <textarea id="message" name="message" placeholder="Message"></textarea>
      </div>
      <h1 className="career1-sh top2">UPLOAD YOUR CV</h1>
      <div className="form-groupc full-width">
        <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" required />
      </div>

      <button type="submit">Submit</button>
    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Career