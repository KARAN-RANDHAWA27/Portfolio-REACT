import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Insta from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import Glasses from '../../img/glassesimoji.png'
import Karan from '../../img/Karan.png'
import FloatingdDiv from '../FloatingDiv/FloatingdDiv'
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion'

const Intro = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const trasition = { duration: 2, type: 'spring' }

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }}>Hi! I am</span>
                    <span>Karan Randhawa</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maiores quia velit eveniet harum reiciendis aliquam quibusdam suscipit, modi quidem amet! Maxime, nam expedita sapiente quod ipsum repudiandae magni maiores.</span>
                </div>
                <button className=" button i-button">Hire Me</button>
                <div className="i-icons">
                    <a href="">
                        <img src={Github} alt="Git" />
                    </a>
                    <a href="">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                    <a href="">
                        <img src={Insta} alt="Insta" />
                    </a>


                </div>
            </div>
            <div className="i-right">

                <img src={Vector1} alt="Vector1" />
                <img src={Vector2} alt="Vector2" />
                <img src={Boy} alt="Boy" />
                {/* <img src={Karan} alt="Boy" width={'35%'} /> */}
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-13%' }}
                    transition={trasition}
                    src={Glasses} alt="Glasses" />

                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={trasition}
                    style={{ top: '-4%', left: '68%' }}>
                    <FloatingdDiv image={crown} txt1={'Full Stack'} txt2={"Developer"} />
                </motion.div>

                <motion.div
                    initial={{ top: '15rem', left: '6rem' }}
                    whileInView={{ left: '0' }}
                    transition={trasition}
                    style={{ top: '18rem', left: '4rem' }}>
                    <FloatingdDiv image={Thumbup}
                        txt1="Best" txt2="Designs"
                    />
                </motion.div>
                {/* Blur Divs */}
                <div className="blur" style={{ background: "rgb(238 210 255" }}></div>
                <div className="blur" style={{ background: "#C1F5FF", top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
            </div>
        </div>
    )
}

export default Intro