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
                <FontAwesomeIcon className='social-icon-b' icon={faLinkedin}/>
            </p>
            </div>
        </div>
        </>
    )
}

export default Banner