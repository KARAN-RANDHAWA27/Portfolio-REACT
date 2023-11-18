import React from 'react'
import './Experience.css'
import { useContext } from 'react';
import { themeContext } from '../../Context';


const Experience = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className="experience" style={{ color: darkMode ? 'var(--orange)' : '' }}>
            <div className="achievements" >
                <div className="circle">1+</div>
                <span>Year</span>
                <span>Experience</span>
            </div>
            <div className="achievements">
                <div className="circle">10+</div>
                <span>Completed</span>
                <span>Projects</span>
            </div>
            <div className="achievements">
                <div className="circle">5+</div>
                <span>Programming</span>
                <span>Languages</span>

            </div>
        </div>
    )
}

export default Experience