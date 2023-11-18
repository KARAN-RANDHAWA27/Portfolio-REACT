import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import Music from "../../img/musicapp.png"
import "swiper/css"
import './works.css'

const Works = () => {
    return (
        <div className="works">
            <span>My Recent Projects</span>
            <Swiper
                spaceBetween={40}
                slidesPerView={2}
                grabCursor={true}
                className='works-slider'
            >

                <SwiperSlide>
                    <img src={sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Music} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>


    )
}

export default Works