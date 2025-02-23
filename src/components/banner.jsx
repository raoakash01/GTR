import React from 'react'
import './banner.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin}from "@fortawesome/free-brands-svg-icons";
import Bmap from '../assets/bmap.png'

function Banner() {
    return (
        <>
        <div className="banner">
            <div className='banner-left'>
            <img className='bmap' src={Bmap} alt="Bmap" />
            <p className='banner-text'>South Asia  I  Pacific  I  islands  I  Caribbeans  I  South Africa  I  Ghana  I  Uganda</p>
            </div>
            <div className='banner-right'>
            <p className='banner-text'>
                <a href="https://www.linkedin.com/company/global-teleradiology/" target="_blank" rel="noopener noreferrer" className='social-icon-b'>
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white'}}/>
                </a>
            </p>
            </div>
        </div>
        </>
    )
}

export default Banner