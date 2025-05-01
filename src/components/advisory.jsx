import React, { useEffect, useRef, useState } from "react";
import "./advisory.css";
import algills from "../assets/AI-Gillis.webp";
import vijai from "../assets/vijai.png";
import namita from "../assets/namita.webp";
import Irshad from "../assets/IrshadGTR.webp";
import Mash from "../assets/MashGTR.png";
import Ruchi from "../assets/RuchiGTR.png";
import Sadique from "../assets/SadiqueGTR.png";
import Manager2 from "../assets/manger2.webp";
import Manager3 from "../assets/manger3.webp";
import Bd3 from "../assets/bd3.webp";
import Ankur from "../assets/Ankur.webp";
import Sumeet from "../assets/sumeet.png";
import Kavita from "../assets/kavita.webp";
const advisoryMembers = [
    {
        name: "Al Gillis",
        title: "Director, Healthcare Facilities Development, Harvard Medical International / Partners Healthcare, Boston, USA.",
        experience: "Al is an industry veteran and has been with Harvard Medical International/Partners Healthcare since last 16 years now. His expertise ranges from overall facilities planning (including medical equipment) to Organizational Development, HIS, Hospital Management, SOP’s development & commission et al. His international experience spans over 20 countries in multiple continents. Prior to joining HMI/Partners Healthcare, Al was Director of Healthcare Facility Development at Adam & Associates in MA (USA), Senior Director Clinical & Diagnostic Services, Healthcare International in Scotland and Director Administration & Finance at Brigham & Women’s Hospital, Harvard Medical School, Dept. of Radiology. Al was also the Vice President, Treasurer, HMS-PBBH-SFCC Radiology Foundation, Inc. USA.",
        image: algills,
    },
    {
        name: "Dr. Vijai Kumar",
        title: "President and Chief Medical Officer of Excel Life Sciences, Inc., USA",
        experience: "Dr. Kumar is a seasoned Healthcare Industry Management veteran with over 40 years experience in multiple facets of the industry. He is currently the President and Chief Medical Officer of Excel Life Sciences, Inc., a leading US based company providing trial management services & consulting services to global biopharmaceutical and device industries. Dr. Kumar’s experience includes clinical research, business strategy, clinical trial logistics and supply chain management, regulatory affairs. He has also held senior executive positions at Sandoz and the Upjohn Company for 16 years. Dr. Kumar is a thought leader featured on NPR and BBC TV on issues related to globalization of clinical research. Pharma Voice recognized Dr. Kumar as one of the 100 inspiring leaders in the Life Sciences Industry in 2010.",
        image: vijai,
    },
    {
        name: "Dr. D. S. Rana",
        title: "Chairman, Board of Management, Sir Ganga Ram Hospital, New Delhi, India.",
        experience: "Dr. Rana is the Chairman of Board of Management in one of the most prestigious multi-specialty state of the art hospitals in India. Dr. Rana is known for his remarkable achievements in the field of Nephrology. Apart from his M.B.B.S, MD & MNAMS degrees, he also holds an international scholarship from Cleveland Clinic, Ohio, USA. Always going few extramiles above his professional responsibilities, Dr. Rana has made valuable contribution to the growth of Healthcare in India, and has also been conferred one of the highest state awards of India the 'Padma Shree'.",
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
            
            {/* <div ref={headerRef} className="advisory-header">
                <div className="advisory-header-right">
                    <h2 className="advisory-header-title">
                        Board<br /> of Advisory
                    </h2>
                </div>
                <div className="advisory-header-left">
                    <p className="advisory-header-text">
                    Our Board of Advisors, top global healthcare leaders, uphold Global TeleRadiology’s excellence.
                    </p>
                </div>
            </div> */}
            <div className="advisory-tittle">
                <h1 className="advisory-tittle-text">ADVISORY BOARD</h1>
            </div>
            <div className="advisory-body">
                <div className="advisory-member">
                    <img
                        className="advisory-member-image"
                        src={algills}/>
                        <h1 className="advisory-member-name">AL gills</h1>
                        <h1 className="advisory-member-name2">Former Director</h1>
                        <p className="advisory-member-title">Harvard Medical International, USA / Partner Group</p>
                </div>
                <div className="advisory-member">
                    <img
                        className="advisory-member-image"
                        src={vijai}/>
                        <h1 className="advisory-member-name">DR. Vijai Kumar</h1>
                        <h1 className="advisory-member-name2">President</h1>
                        <p className="advisory-member-title">Excel Life Sciences, USA</p>                        
                </div>
                <div className="advisory-member">
                    <img
                        className="advisory-member-image"
                        src={Bd3}/>
                        <h1 className="advisory-member-name">Dr. D. S. Rana</h1>
                        <h1 className="advisory-member-name2">Chairman</h1>
                        <p className="advisory-member-title">Sir Ganga Ram Hospital, India</p>                        
                </div>
                </div>
                <div className="advisory-tittle" id="quality-panel">
                <h1 className="advisory-tittle-text">QUALITY PANEL</h1>
            </div>
            <div className="advisory-body">
                <div className="advisory-member">
                    <img
                        className="advisory-member-image"
                        src={Ankur}/>
                        <h1 className="advisory-member-name">Dr. Ankur Gadodia</h1>
                        <h1 className="advisory-member-name2">Radiology Head</h1>
                        <p className="advisory-member-title">(MBBS, MD-AIIMS, DNB,FRCR [UK])<br/>
                        20 years experience</p>
                </div>
                <div className="advisory-member">
                    <img
                        className="advisory-member-image"
                        src={Sumeet}/>
                        <h1 className="advisory-member-name">Dr. Sumeet Bhargava</h1>
                        <h1 className="advisory-member-name2">Quality Director</h1>
                        <p className="advisory-member-title">(MBBS, DNB, FCGP, FICR, FIAMS, FIMSA, FRCR)<br/>
20 years experience
</p>
                </div>
                <div className="advisory-member">
                    <img
                        className="advisory-member-image"
                        src={Kavita}/>
                        <h1 className="advisory-member-name">Dr. Kavita Mittal</h1>
                        <h1 className="advisory-member-name2">Quality Director</h1>
                        <p className="advisory-member-title">(MBBS, MD)<br/>
                        10 years experience</p>
                </div>
                </div>
                <div className="advisory-tittle" id="management-team">
                <h1 className="advisory-tittle-text">MANAGEMENT TEAM</h1>
            </div>
            <div className="advisory-body">
                <div className="advisory-member">
                    <img
                        className="advisory-member-image"
                        src={namita}/>
                        <h1 className="advisory-member-name">Namita Chowdhary</h1>
                        <h1 className="advisory-member-name2">Managing Director</h1>
                        <p className="advisory-member-title">Strategy and Management Expert</p>
                </div>
                <div className="advisory-member">
                    <img
                        className="advisory-member-image"
                        src={Manager2}/>
                        <h1 className="advisory-member-name">Ritti Jarg</h1>
                        <h1 className="advisory-member-name2">Executive Director</h1>
                        <p className="advisory-member-title">Operation and Process Specialist</p>
                </div>
                <div className="advisory-member">
                    <img
                        className="advisory-member-image"
                        src={Manager3}/>
                        <h1 className="advisory-member-name">Vishal Chowdhary</h1>
                        <h1 className="advisory-member-name2">Executive Director</h1>
                        <p className="advisory-member-title">Healthcare And Management 
                        Professional</p>
                </div>
                </div>
                {/* <div className="advisory-members">
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
                </div> */}
            
            {/* <div ref={teamRef} className="know_our_team extra-top-1">
                <div className="advisory-header-right">
                    <h2 className="team-header-title">YOUR SUBTITLE GOES HERE</h2>
                    <h2 className="team-heading">MEET OUR TEAM</h2>
                </div>
                <div className="advisory-header-left">
                    <p className="team-header-text">
                    Global TeleRadiology's management team, founded by 
                    four members, comprises industry experts in healthcare, operations, marketing, and process development.
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
            </div> */}
            <div className="advisory-body slide">
                <div className="advisory-member">
                    <img
                        className="advisory-member-image"
                        src={Mash}/>
                        <h1 className="advisory-member-name">Mahesh Malhotra</h1>
                        <p className="advisory-member-title">VP,
                        Corporate Sales</p>
                </div>
                <div className="advisory-member">
                    <img
                        className="advisory-member-image"
                        src={Ruchi}/>
                        <h1 className="advisory-member-name">Ruchi Sharma</h1>
                        <p className="advisory-member-title">Head – Customer Relations</p>
                </div>
                <div className="advisory-member">
                    <img
                        className="advisory-member-image"
                        src={Irshad}/>
                        <h1 className="advisory-member-name">Irshad Ahmad</h1>
                        <p className="advisory-member-title">Head – Operations</p>
                </div>
                <div className="advisory-member noRightMargin">
                    <img
                        className="advisory-member-image"
                        src={Sadique}/>
                        <h1 className="advisory-member-name">Sadique Khan</h1>
                        <p className="advisory-member-title">Head – Corporate Sales</p>
                </div>
                </div>
            {/* <div className="team">
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
            </div> */}
        </div>
    );
}

export default Advisory;

