import React, { useEffect } from 'react'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Hero.css'

const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])
    return (
        <div className="hero">
            <div className="hero-video">
                <video autoPlay loop muted >
                    <source src="https://neom.scene7.com/is/content/neom/home-b2b-hero-win-teaser-v2" type="video/mp4" />
                </video>
            </div>
            <div className="hero-heading" data-aos='fade-down'>
                <h1>what is neom ?</h1>
                <div className='more-icon'>
                    <button className='play'>
                        <PlayArrowRoundedIcon className='play-icon' />
                    </button>
                    <button className='learn'>learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
