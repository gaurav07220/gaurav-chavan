import { useEffect, useState } from 'react';
import data from '../../SliderData.json';
import './Slider.css'
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Slider = () => {
    const [images, setImages] = useState(
        data.filter(item => item.category === 'new')
    );

    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])

    const handleSetNewData = () => {
        setImages(
            data.filter(item => item.category === 'new')
            );
    }

    const handleSetOldData = () => {
        setImages(
            data.filter(item => item.category === 'old')
        );
    
      
    };

    return (
        <div className='container-images'>
            <h1 data-aos='fade-right'>WHAT'S HAPPENING AT NEOM</h1>
            <div className='filter-btns'>
                <button onClick={handleSetNewData}>newest</button>
                <button onClick={handleSetOldData}>oldest</button>

            </div>
            <div className="images" data-aos='zoom-in' >

                {
                    images?.map((item, index) => {
                        return (
                            <div className="item-img" key={index}>
                                <img src={item.url} alt="" style={{ transition: '0.5s' }} />
                                <p>{item.description}</p>
                                <span>
                                    read more  <ArrowRightAltRoundedIcon />
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slider
