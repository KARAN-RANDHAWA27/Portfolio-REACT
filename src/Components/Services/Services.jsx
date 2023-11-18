import React from 'react'
import './Services.css'
import Heart from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from '../../CV/CV.pdf'
import { motion } from 'framer-motion'
import { Popup } from 'devextreme-react/popup';
import ScrollView from 'devextreme-react/scroll-view';
import { useState } from 'react'
const Services = () => {

    const transition = {
        duration: 1,
        type: "spring",
    };

    const [showCv, setShowCv] = useState(false);

    const handleChange = () => {
        console.log("k");
        setShowCv(true);
    }

    const hidePopup = () => {
        setShowCv(false);
    }
    return (
        <div className="services">
            <div className="s-left">
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit incidunt saepe eos hic nam reprehenderit.
                    <br />
                    Laudantium, officia commodi. Ut maxime minima dignissimos necessitatibus corrupti laborum obcaecati non labore, architecto ab.</span>
                <button className="button s-button" onClick={handleChange}> View CV</button>

            </div>

            <div className="s-right">
                <div style={{ left: "14rem" }}>
                    <Card
                        emoji={Heart}
                        heading={'Design'}
                        detail={'Designer'}
                    />
                </div>
                <div style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={'Designer'}
                    />
                </div>
                <div style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={Humble}
                        heading={'Tester'}
                        detail={'Designer'}
                    />
                </div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
            {showCv && <Popup
                visible={setShowCv}
                onHiding={hidePopup}
                dragEnabled={false}
                showTitle={true}
                title='Karan Randhawa Resume'
                width="auto"
                height="auto"
            ><ScrollView width='100%' height='100%'>
                    <Resume
                    ></Resume>
                </ScrollView>

            </Popup>}
        </div>)
}

export default Services