import React, { useEffect } from 'react'
import './WhyChoose.css';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import Aos from 'aos';
import 'aos/dist/aos.css';


const WhyChoose = () => {

    useEffect(() => {
        Aos.init({ duration: 1200 })
    }, [])
    return (
        <div className='why-choose'>
            <h3 >why choose neom ?</h3>
            <div className="chhoose-content" data-aos='fade-right'>
                <div className="img-choose">
                    <img src="https://neom.scene7.com/is/image/neom/home-b2b-content-group-investment-1?wid=512&hei=640" alt="" />
                </div>
                <div className="info-choose" data-aos='fade-right'>
                    <h1> investment</h1>
                    <p>We call ourselves 'dreamers and doers' for a reason: we can make happen not just what is possible, but what is impossible. NEOM is a unique investment opportunity, unrivalled anywhere else. This is not business as usual. Be a part of it. Invest in the new future now, invest in NEOM.</p>
                    <button>INVEST <ArrowRightAltRoundedIcon /></button>
                </div>

            </div>
        </div>
    )
}

export default WhyChoose
