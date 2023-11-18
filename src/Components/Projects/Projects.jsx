import React from 'react'
import "./projects.css"
import Tic_Tac_Toe from "../Tic Tac Toe/Game"
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"


const Projects = () => {
    return (
        <div className="projects">
            <div className="p-left">
                <p>Educational And Work</p>
                {/* <span>And </span>
                <span>Work </span> */}
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Nulla sunt laudantium laborum quam qui hic officiis eum autem facilis eos! Unde, odio.
                    <br /> Nulla, expedita quae repellat reiciendis aperiam ullam necessitatibus.</span>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="p-right">
                <div className="p-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>
            </div>


        </div>


    )
}

export default Projects