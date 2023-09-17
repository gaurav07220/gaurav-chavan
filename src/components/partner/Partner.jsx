import React, { useEffect } from 'react'
import './Partner.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Partner = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])

    return (
        <div className='partner'>
            <div className="partner-info">
                <h1 data-aos="fade-up">OUR PARTNERS</h1>
                <p data-aos="fade-up">All of our partners are working towards progressive goals, just like
                    NEOM. By building relationships based on our core principles, we
                    create partnerships that are meaningful.</p>
                <button data-aos="fade-up">learn more</button>
            </div>
        </div>
    )
}

export default Partner
