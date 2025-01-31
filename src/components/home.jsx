import React from 'react'
import Banner from './banner'
import './home.css'
import arrow from '../assets/down-arrow.png'

function Home() {
    return (
        <>
            
            <div className='home'>
            <Banner />
                <div className='nav'>
                    <div className='nav-logo'>
                        LOGO
                    </div>
                    <div className='nav-menu'>
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Accuracy for Cure Resources</li>
                            <li>Join Us</li>
                        </ul>
                    </div>
                    <div className='nav-contact'>
                        contact Us|||
                    </div>
                </div>
                <div className='home-content'>
                    <div className='Tag-line'>
                        <h1 className='tag-line-text'>Accuracy for Cure</h1>
                        <p className='tag-line-text-2'>Grow smarter, grow faster as we need Solutions at the right place and at Smarttrak we are<br/> empowering all your digital twin needs</p>
                    </div>
                </div>
                <div className='home-content-2'>
                    <div className='arrow'>
                        <img src={arrow} alt="arrow" className='arrow-icon' />
                    </div>
                    <div className='home-content-2-text'>
                        <div className='content-2-text'>
                            <p>We help companies design their<br/> products to be ready for web3 world</p>
                            <div className='email-input'>
                                <input type="email" placeholder='Enter your email' className='email-home' />
                                <button className='get-started'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-content-3'>
                    <div className='home-content-3-box'>
                        <div className='home-content-3-right'>
                            <p className='home-content-3-right-text'>Trusted by 100K+</p>
                        </div>
                        <div className='home-content-3-left'>
                            <ul className='home-content-3-left-list-icons'>
                                <li className='home-content-3-left-list-icon'>1</li>
                                <li className='home-content-3-left-list-icon'>2</li>
                                <li className='home-content-3-left-list-icon'>3</li>
                                <li className='home-content-3-left-list-icon'>4</li>
                                <li className='home-content-3-left-list-icon'>5</li>
                                <li className='home-content-3-left-list-icon'>6</li>
                                <li className='home-content-3-left-list-icon'>7</li>
                                <li className='home-content-3-left-list-icon'>8</li>
                                <li className='home-content-3-left-list-icon'>9</li>
                                <li className='home-content-3-left-list-icon'>10</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home