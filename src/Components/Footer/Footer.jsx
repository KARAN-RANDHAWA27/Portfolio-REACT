import React from 'react'
import './footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Git from '@iconscout/react-unicons/icons/uil-github'
import wave from "../../img/wave.png"

const Footer = () => {
    return (
        <div className="footer">
            <img src={wave} alt="" style={{ width: '100%' }} />
            <div className="f-content">
                <span>karandeeprandhawa27@gmail.com</span>
                <div className="f-icons">
                    <Insta color='white' size='3rem'></Insta>
                    <Facebook color='white' size='3rem'></Facebook>
                    <Git color='white' size='3rem'></Git>
                </div>
            </div>
        </div>
    )
}

export default Footer