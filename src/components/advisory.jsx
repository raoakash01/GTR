import React, { useEffect, useRef, useState } from "react";
import "./advisory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import algills from "../assets/Al-Gillis.jpg";
import vijai from "../assets/vijai.jpg"
import namita from "../assets/namita.jpg"

const advisoryMembers = [
    {
        name: "Al Gillis",
        title: "Director, Healthcare Facilities Development, Harvard Medical International / Partners Healthcare, Boston, USA.",
        experience: "🏥 Al – 16+ years at Harvard Medical International/Partners Healthcare<br/>🏗️ Expertise: Facilities Planning, Hospital Management, SOP Development<br/>🌍 International experience in 20+ countries<br/>🏢 Previous Roles:<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Director, Adam & Associates<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Senior Director, Healthcare International<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Director, Brigham & Women’s Hospital<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Vice President, Treasurer at HMS-PBBH-SFCC Radiology Foundation, Inc",
        image: algills
    },
    {
        name: "Dr. Vijai Kumar",
        title: "Chief Medical Advisor, Global Health Institute.",
        experience: "🏥 20+ years in global healthcare management<br/>🏗️ Specialized in telemedicine and hospital digital transformation<br/>🌍 Worked across 15 countries in policy and development",
        image: vijai
    }
];

function Advisory() {
    const headerRef = useRef(null);
    const teamRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-border");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        if (teamRef.current) {
            observer.observe(teamRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % advisoryMembers.length);
        }, 20000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % advisoryMembers.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + advisoryMembers.length) % advisoryMembers.length);
    };

    return (
        <div className="advisory">
            <div ref={headerRef} className="advisory-header">
                <div className="advisory-header-right">
                    <h2 className="advisory-header-title">Board<br /> of Advisory</h2>
                </div>
                <div className="advisory-header-left">
                    <p className="advisory-header-text">Our Board of Advisors comprises healthcare industry stalwarts from across the world. Alumni of some of the most prestigious healthcare facilities globally, known for their remarkable achievements, their expertise and opinion is highly sought after. Their association with Global TeleRadiology is an affirmation of our high standards of quality and world-class practices.</p>
                </div>
            </div>
            <div className="advisory-body">
                <div className="advisory-members">
                    <button className="nav-button left" onClick={handlePrev}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div className="advisory-member">
                        <img className="advisory-member-image" src={advisoryMembers[currentIndex].image} alt={advisoryMembers[currentIndex].name} />
                        <div className="advisory-member-content">
                            <h3 className="advisory-member-name">{advisoryMembers[currentIndex].name}</h3>
                            <p className="advisory-member-title">{advisoryMembers[currentIndex].title}</p>
                            <h3 className="advisory-member-name">{advisoryMembers[currentIndex].name} Experience</h3>
                            <p className="advisory-member-text"dangerouslySetInnerHTML={{ __html: advisoryMembers[currentIndex].experience }}></p>
                        </div>
                    </div>
                    <button className="nav-button right" onClick={handleNext}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
            <div ref={teamRef} className="know_our_team extra-top-1">
            <div className="advisory-header-right">
                    <h2 className="team-header-title">YOUR  SUBTITLE  GOES  HERE</h2>
                    <h2 className="team-heading">MEET OUR TEAM</h2>
            </div>
                <div className="advisory-header-left">
                    <p className="team-header-text">The Global TeleRadiology management team consists of industry experts in healthcare management, operations, marketing, and process development, with four founder members.</p>
                </div>
            </div>
            <div className="advisory-body">
                <div className="advisory-members">
                   
                    <div className="advisory-member">
                        <img className="advisory-member-image remove_border" src={namita} alt="managing director" />
                        <div className="advisory-member-content">
                            <h3 className="advisory-member-name">Namita Chowdhary </h3>
                            <p className="managing-director-title">Managing Director</p>
                            <div className="half_underline"></div>
                            <p className="managing-director-text">
                            Over 25 years of expertise in strategic business management, marketing, product launches, brand positioning, research, field marketing, event management, and public relations
                            </p>
                            <p className="managing-director-text">Focused experience in driving initiation and growth strategies for Healthcare businesses over the past 15 years.</p>
                            <p className="managing-director-text">Proven track record with leading global organizations across various industries.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advisory;
