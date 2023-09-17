import React, { useEffect, useState } from 'react';
import './Subscribe.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState(false);
    const [text, setText] = useState('sign up');

    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length > 5) {

            setText('wait..')
            setTimeout(() => {
                setText('SIGN UP')
                setMsg(true)
            }, 2000)

            setTimeout(() => {
                setMsg(false)
                setEmail('')
            }, 4000)
        }
    }
    return (
        <div className='subscribe'>
           
            <div className="input" data-aos="fade-right">
                <div className='heading-input'>
                    <span style={{ fontSize: '48px', fontWeight: 500 }}>GET NEWS & UPDATES</span> <br />
                    <span>Sign up for the latest news on how we are shaping a new future.</span>
                </div>

                <form className='input-field' onSubmit={handleSubmit} >
                    <input type="text" placeholder='exmaple@gmaill.com'
                        required value={email} onChange={(e) => setEmail(e.target.value)} />

                    <button type='submit'
                        style={{ cursor: email.length > 10 ? 'pointer' : 'not-allowed' }}
                    >
                        {text}
                    </button>



                </form>
                <h1 style={{ color: 'green', display: msg ? 'block' : 'none', position: 'absolute' }}>YOUR REQUEST HAS BEEN SENT SUCCESSFULLY</h1>
            </div>
        </div>
    )
}

export default Subscribe
