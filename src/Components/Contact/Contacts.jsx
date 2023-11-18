import React from 'react'
import "./contact.css"

const Contact = () => {

    return (
        <div className="contact-form">

            <div className="c-left">
                <div className="span">
                    <span>Get in touch</span>
                    <br />
                    <span>Contact Me</span>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>
            </div>
            <div className="c-right">
                <form action="">
                    <input type="text" name="user_name" className='user' placeholder='Name' />
                    <input type="email" name="email" className='user' placeholder='E-mail' />
                    <textarea type="message" name="user_name" className='user' placeholder='Message' />
                    <input type="submit" value="Send" className="button" />
                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>

            </div>
        </div>


    )
}


export default Contact