import React, { useEffect, useState } from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.css'
import { NavLink } from 'react-router-dom';
import data from '../../SliderData.json';



const Nav = () => {
    const [navbarVisible, setNavbarVisible] = useState(false);
    const [about, setAbout] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {

                setNavbarVisible(true);
            } else {

                setNavbarVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='nav-container' >
            <nav className={navbarVisible ? 'navbar' : ''} >
                <div className="logo">
                    <img src="https://neom.scene7.com/is/image/neom/logo-neom-en-spaced?fmt=png-alpha&scl=1" alt="" />
                </div>
                <div className="nav-items">
                    <div className="about" onMouseMove={() => setNavbarVisible(true)}>
                        <NavLink className='about-text nav-link' onMouseOver={() => setAbout(true)}>
                            <span>about</span>
                        </NavLink>
                        <div className="about-content">
                            <span>01 WHAT IS NEOM</span>
                            <span>02 NEOM LEADERSHIP TEAM</span>
                        </div>

                    </div>
                    <div className="regions" onMouseOver={() => setNavbarVisible(true)}>
                        <NavLink className='regions-text nav-link'>
                            <span>regions</span>
                        </NavLink>
                        <div className="regions-content">
                            {
                                data?.map((item) => {
                                    return (
                                        <div className='regions-item'>
                                            <img src={item.url} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="business" onMouseOver={() => setNavbarVisible(true)}>
                        <NavLink className='business-text nav-link'>
                            <span>our business</span>
                        </NavLink>
                        <div className="business-content">
                            <span> 01 SECTORS</span>
                            <span> 02 PARTNERS</span>
                            <span> 03 SUPPLIERS</span>
                            <span> 04 NEOM HOTEL DEVELOPMENT</span>
                            <span> 05 PORT OF NEOM</span>
                        </div>
                    </div>
                    <div className="news" onMouseOver={() => setNavbarVisible(true)}>
                        <NavLink className='news-text nav-link'>
                            <span>news</span>
                        </NavLink>
                        <div className="news-content">
                            <span> 01 NEWSROOM</span>
                            <span>02 MEDIA GALLERY</span>
                            <span>03 CONTACT US</span>
                        </div>
                    </div>
                    <div className="invest">
                        <NavLink className='invest-text nav-link'>
                            <span>invest in neom</span>
                        </NavLink>

                    </div>
                    <div className="careers" onMouseOver={() => setNavbarVisible(true)}>
                        <NavLink className='career-text nav-link'>
                            <span>careers</span>
                        </NavLink>
                        <div className="careers-content">
                            <span> 01 WORKING AT NEOM</span>
                            <span> 02 JOB SEARCH</span>
                        </div>
                    </div>


                </div>
                <div className="log-lg">
                    <div className="search">
                        <span>
                            <SearchSharpIcon className='search-icon' />
                        </span>
                    </div>
                    <div className="language">
                        <span>language</span>
                    </div>
                    <div className="invest-btn">
                        <button type='button'>invest in neom</button>
                    </div>
                    <div className="menu-icon">
                        <MenuIcon />
                    </div>
                </div>
            </nav>
            <div className='all-navItems-info'>

                <div className='regions-info'>
                    <img src="" alt="" />
                </div>
                <div className='business-info'></div>
                <div className='news-info'></div>
                <div className='career-info'></div>

            </div>
        </div>

    )
}

export default Nav
