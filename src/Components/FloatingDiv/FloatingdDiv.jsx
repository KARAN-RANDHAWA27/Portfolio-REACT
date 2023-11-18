import React from 'react'
import './floatingDiv.css'
const FloatingdDiv = (props) => {
    return (
        <div className="floatingdiv">
            <img src={props.image} alt="" />
            <span>
                {props.txt1}
                <br />
                {props.txt2}
            </span>
        </div>
    )
}

export default FloatingdDiv