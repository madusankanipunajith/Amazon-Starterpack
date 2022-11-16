import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import css from '../../components/slider/Slider.module.css'


import { SliderProducts } from './../../data/products';

function Slider() {
    return (
        <div className={css.s_container}>
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
            >
               {
                SliderProducts.map((slide, i)=>(
                    <SwiperSlide>1</SwiperSlide>
                ))
               }
            </Swiper>
        </div>
    )
}

export default Slider