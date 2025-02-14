import React, { useEffect, useRef, useState } from "react";
import "./advisory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import algills from "../assets/Al-Gillis.jpg";
import vijai from "../assets/vijai.jpg";
import namita from "../assets/namita.jpg";
import Irshad from "../assets/IrshadGTR.jpg";
import Mash from "../assets/MashGTR.jpg";
import Ruchi from "../assets/RuchiGTR.jpg";
import Sadique from "../assets/SadiqueGTR.jpg";
import Manager2 from "../assets/manger2.png";
import Manager3 from "../assets/manger3.png";
import Bd3 from "../assets/bd3.png";

const advisoryMembers = [
    {
        name: "Al Gillis",
        title: "Director, Healthcare Facilities Development, Harvard Medical International / Partners Healthcare, Boston, USA.",
        experience: "🏥 Al – 16+ years at Harvard Medical International/Partners Healthcare<br/>🏗️ Expertise: Facilities Planning, Hospital Management, SOP Development<br/>🌍 International experience in 20+ countries<br/>🏢 Previous Roles:<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Director, Adam & Associates<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Senior Director, Healthcare International<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Director, Brigham & Women’s Hospital<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - Vice President, Treasurer at HMS-PBBH-SFCC Radiology Foundation, Inc",
        image: algills,
    },
    {
        name: "Dr. Vijai Kumar",
        title: "President and Chief Medical Officer of Excel Life Sciences, Inc., USA",
        experience: "Healthcare Industry Veteran with 40+ years of experience.<br/>President & Chief Medical Officer at Excel Life Sciences, Inc., a leading US-based trial management and consulting firm.<br/>Expertise in clinical research, business strategy, clinical trial logistics, supply chain management, and regulatory affairs.<br/>Former Senior Executive at Sandoz & The Upjohn Company for 16 years.<br/>Recognized Thought Leader, featured on NPR & BBC TV for insights on clinical research globalization.<br/>Honored by Pharma Voice as one of the 100 inspiring leaders in Life Sciences (2010).",
        image: vijai,
    },
    {
        name: "Dr. D. S. Rana",
        title: "Chairman, Board of Management, Sir Ganga Ram Hospital, New Delhi, India.",
        experience: "25+ years of experience in building and shaping successful organizations and brands across multiple industries.<br/>15+ years in the healthcare industry, assisting healthcare delivery and pharmaceutical companies in long-term business strategy.<br/>Founding member of India’s first multi-location integrated healthcare chain, contributing to the transformation of the healthcare landscape",
        image: Bd3,
    },
];

const directors = [
    {
        name: "Namita Chowdhary",
        title: "Managing Director",
        description: [
            "Over 25 years of expertise in strategic business management, marketing, product launches, brand positioning, research, field marketing, event management, and public relations.",
            "Focused experience in driving initiation and growth strategies for Healthcare businesses over the past 15 years.",
            "Proven track record with leading global organizations across various industries.",
        ],
        image: namita,
    },
    {
        name: "Ritti Jarg",
        title: "Executive Director",
        description: [
            "With over 23 years of global experience, I have worked extensively with Fortune 500 companies across multiple industries. As an operations expert, I have led process initiation, migration, and optimization, ensuring seamless transitions and efficiency.",
            "I specialize in setting up and developing new Operations Centers, driving growth across various industry verticals. My expertise lies in back-office management, utilizing the latest technologies to enhance productivity and streamline operations.",
            "Leading and managing large teams, I focus on operational excellence, scalability, and innovation to deliver impactful business results.",
        ],
        image: Manager2,
    },
    {
        name: "Vishal Chowdhary",
        title: "Executive Director",
        description: [
            "With over 25 years of experience, I have built and shaped multiple successful organizations and brands across various industry verticals.",
            "For the past 15 years, I have been deeply involved in the healthcare industry, assisting healthcare delivery and pharmaceutical companies in establishing long-term business strategies.",
            "As a founding member of India’s first multi-location integrated healthcare chain, I have played a key role in transforming the healthcare landscape.",
        ],
        image: Manager3,
    }
];

function Advisory() {
    const headerRef = useRef(null);
    const teamRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [directorIndex, setDirectorIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
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
        const advisoryInterval = setInterval(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % advisoryMembers.length
            );
        }, 8000);

        const directorInterval = setInterval(() => {
            setDirectorIndex(
                (prevIndex) => (prevIndex + 1) % directors.length
            );
        }, 8000);

        return () => {
            clearInterval(advisoryInterval);
            clearInterval(directorInterval);
        };
    }, []);

    const handleNextMember = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % advisoryMembers.length
        );
    };

    const handlePrevMember = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + advisoryMembers.length) % advisoryMembers.length
        );
    };

    const handleNextDirector = () => {
        setDirectorIndex((prevIndex) => (prevIndex + 1) % directors.length);
    };

    const handlePrevDirector = () => {
        setDirectorIndex(
            (prevIndex) => (prevIndex - 1 + directors.length) % directors.length
        );
    };

    return (
        <div className="advisory">
            <div ref={headerRef} className="advisory-header">
                <div className="advisory-header-right">
                    <h2 className="advisory-header-title">
                        Board<br /> of Advisory
                    </h2>
                </div>
                <div className="advisory-header-left">
                    <p className="advisory-header-text">
                        Our Board of Advisors comprises healthcare industry
                        stalwarts from across the world. Alumni of some of the
                        most prestigious healthcare facilities globally, known
                        for their remarkable achievements, their expertise and
                        opinion is highly sought after. Their association with
                        Global TeleRadiology is an affirmation of our high
                        standards of quality and world-class practices.
                    </p>
                </div>
            </div>
            <div className="advisory-body">
                <div className="advisory-members">
                    <button className="nav-button left" onClick={handlePrevMember}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div className="advisory-member">
                        <img
                            className="advisory-member-image"
                            src={advisoryMembers[currentIndex].image}
                            alt={advisoryMembers[currentIndex].name}
                        />
                        <div className="advisory-member-content">
                            <h3 className="advisory-member-name">
                                {advisoryMembers[currentIndex].name}
                            </h3>
                            <p className="advisory-member-title">
                                {advisoryMembers[currentIndex].title}
                            </p>
                            <h3 className="advisory-member-name">
                                {advisoryMembers[currentIndex].name} Experience
                            </h3>
                            <p
                                className="advisory-member-text"
                                dangerouslySetInnerHTML={{
                                    __html: advisoryMembers[currentIndex].experience,
                                }}
                            ></p>
                        </div>
                    </div>
                    <button className="nav-button right" onClick={handleNextMember}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
            <div ref={teamRef} className="know_our_team extra-top-1">
                <div className="advisory-header-right">
                    <h2 className="team-header-title">YOUR SUBTITLE GOES HERE</h2>
                    <h2 className="team-heading">MEET OUR TEAM</h2>
                </div>
                <div className="advisory-header-left">
                    <p className="team-header-text">
                        The Global TeleRadiology management team consists of
                        industry experts in healthcare management, operations,
                        marketing, and process development, with four founder
                        members.
                    </p>
                </div>
            </div>
            <div className="advisory-body">
                <div className="advisory-members" id="management">
                    <button className="nav-button left" onClick={handlePrevDirector}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div className="advisory-member">
                        <img
                            className="advisory-member-image remove_border"
                            src={directors[directorIndex].image}
                            alt={directors[directorIndex].name}
                        />
                        <div className="advisory-member-content">
                            <h3 className="advisory-member-name">
                                {directors[directorIndex].name}
                            </h3>
                            <p className="managing-director-title">
                                {directors[directorIndex].title}
                            </p>
                            <div className="half_underline"></div>
                            {directors[directorIndex].description.map((desc, index) => (
                                <p key={index} className="managing-director-text">
                                    {desc}
                                </p>
                            ))}
                        </div>
                    </div>
                    <button className="nav-button right" onClick={handleNextDirector}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
            <div className="team">
                <div className="team-members">
                    <div className="member-card">
                        <img className="img-team" src={Mash} alt="Mahesh Malhotra"></img>
                        <div className="content-team">
                            <h2 className="name-team">Mahesh Malhotra</h2>
                            <p className="role-team">
                                Vice President, Head <br />
                                Sales & Marketing
                            </p>
                        </div>
                    </div>
                    <div className="member-card">
                        <img className="img-team" src={Ruchi} alt="Ruchi Sharma"></img>
                        <div className="content-team">
                            <h2 className="name-team">Ruchi Sharma</h2>
                            <p className="role-team">Head – Customer Relations</p>
                        </div>
                    </div>
                    <div className="member-card">
                        <img className="img-team" src={Irshad} alt="Irshad Ahmad"></img>
                        <div className="content-team">
                            <h2 className="name-team">Irshad Ahmad</h2>
                            <p className="role-team">Head – Customer Relations</p>
                        </div>
                    </div>
                    <div className="member-card">
                        <img className="img-team" src={Sadique} alt="Sadique Khan"></img>
                        <div className="content-team">
                            <h2 className="name-team">Sadique Khan</h2>
                            <p className="role-team">Head – Customer Relations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advisory;

