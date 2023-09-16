import React from 'react'
import './Partner.css'

const Partner = () => {

    return (
        <div className='partner'>

            <video autoPlay loop muted >
                <source src="https://neom.scene7.com/is/content/neom/home-b2b-our-partners-teaser-new-gradient" type="video/mp4" />
            </video>

            <div className="partner-info">
                <h1>OUR PARTNERS</h1>
                <p>All of our partners are working towards progressive goals, just like
                    NEOM. By building relationships based on our core principles, we
                    create partnerships that are meaningful.</p>
                <button>learn more</button>
            </div>
        </div>
    )
}

export default Partner
