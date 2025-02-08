import React, { useEffect, useState } from "react";
import './banner3.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";

function Banner3(){
    const [employees, setEmployees] = useState(0);
    const [clients, setClients] = useState(0);
    const [countries, setCountries] = useState(0);
    const [experience, setExperience] = useState(0);
    const [isInViewport, setIsInViewport] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsInViewport(true);
            } else {
                setIsInViewport(false);
            }
        }, { root: null, rootMargin: "0px", threshold: 1.0 });

        observer.observe(document.querySelector(".banner3"));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isInViewport) {
            const timer = setInterval(() => {
                if (employees < 100) {
                    setEmployees(employees + 2);
                }
                if (clients < 2000) {
                    setClients(clients + 50);
                }
                if (countries < 5) {
                    setCountries(countries + 1);
                }
                if (experience < 12) {
                    setExperience(experience + 1);
                }
            }, 20);
            return () => clearInterval(timer);
        }
    }, [isInViewport, employees, clients, countries, experience]);

    return(
        <>
        <div className="banner3">
            <div className="layer-light">
                <div className="icon-container">
                    <FontAwesomeIcon className="icon" icon={faUser} style={{color: "#ffffff"}} />
                    <div className="numbers">
                        <h1 className="icon-numbers">{employees}</h1>
                        <p className="number-text">Employees</p>
                    </div>
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon className="icon" icon={faUser} style={{color: "#ffffff"}} />
                    <div className="numbers">
                        <h1 className="icon-numbers">{clients}</h1>
                        <p className="number-text">+Clients</p>
                    </div>
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon className="icon" icon={faGlobe} style={{color: "#ffffff"}} />
                    <div className="numbers">
                        <h1 className="icon-numbers">{countries}</h1>
                        <p className="number-text">Countries</p>
                    </div>
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon className="icon" icon={faUser} style={{color: "#ffffff"}} />
                    <div className="numbers">
                        <h1 className="icon-numbers">{experience}</h1>
                        <p className="number-text">+Years Experience</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner3
