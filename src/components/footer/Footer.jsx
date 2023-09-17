import React, { useEffect } from 'react';
import './Footer.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])
    return (
        <footer>
            <div className="footer-container-1" data-aos='fade-right'>
                <div className='footer-about' data-aos='fade-right'>
                    <h2>ABOUT</h2>
                    <div className="footer-about-content">
                        <span>What is NEOM</span>
                        <span>NEOM leadership team</span>
                    </div>
                    <div className="footer-invest">
                        <h2>INVEST</h2>
                        <span style={{ color: 'rgb(218, 216, 216)' }}>Invest in NEOM</span>
                    </div>
                </div>
                <div className='footer-regions' data-aos='fade-right'>
                    <h2>REGIONS</h2>
                    <div className="footer-regions-content">
                        <span>Sindalah</span>
                        <span>THE LINE</span>
                        <span>Trojena</span>
                        <span>Oxagon</span>
                    </div>

                </div>
                <div className='footer-service' data-aos='fade-right'>
                    <h2>OUR BUSINESS</h2>
                    <div className="footer-service-content">
                        <span>Sectors</span>
                        <span>Partners</span>
                        <span>Suppliers  </span>
                        <span>NEOM Hotel Development</span>
                        <span>Port of NEOM</span>
                    </div>

                </div>
                <div className='footer-news' data-aos='fade-right'>
                    <h2>NEWS & SOCIAL</h2>
                    <div className="footer-news-content">
                        <span>News </span>
                        <span>Media Gallery </span>
                    </div>
                    <div className="footer-carrier">
                        <h2>CAREERS</h2>
                        <span style={{ color: 'rgb(218, 216, 216)' }}>Working at NEOM</span>
                    </div>
                </div>


            </div>

            <div className="footer-container-2" data-aos='fade-right'>
                <h2>FOLLOW NEOM ON SOCIAL MEDIA</h2>
                <div className="social-icons">
                    <span>
                        <YouTubeIcon />
                    </span>
                    <span>
                        <TwitterIcon />
                    </span>
                    <span>
                        <InstagramIcon />
                    </span>
                    <span>
                        <LinkedInIcon />
                    </span>
                    <span>
                        <FacebookIcon />
                    </span>

                </div>
            </div>
            <div className="footer-container-3">
                <div className="footer-container-3-content">
                    <span> Terms of Use</span>
                    <span>Cookie Policy</span>
                    <span>Cookie Policy</span>
                    <span>Crypto Disclaimer </span>
                    <span> © 2023 NEOM</span>
                </div>
                <span>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
            </div>
        </footer>
    )
}

export default Footer
