import React from 'react'
import './banner.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Banner() {
    return (
        <>
        <div className="banner">
            <div className='banner-left'>
            <p className='banner-text'>The banner is to inform visitors of an important message</p>
            </div>
            <div className='banner-right'>
            <p className='banner-text'>
                <FontAwesomeIcon className='social-icon-b' icon={faFacebook} style={{color: "#ffffff", marginRight: "1.1rem"}} />
                <FontAwesomeIcon className='social-icon-b'  icon={faTwitter} style={{color: "#ffffff", marginRight: "1.1rem"}} />
                <FontAwesomeIcon className='social-icon-b' icon={faLinkedin} style={{color: "#ffffff", marginRight: "1.1rem"}} />
                <FontAwesomeIcon  className='social-icon-b' icon={faInstagram} style={{color: "#ffffff"}} />
            </p>
            </div>
        </div>
        </>
    )
}

export default Banner