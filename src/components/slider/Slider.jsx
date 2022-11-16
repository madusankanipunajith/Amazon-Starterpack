import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import './Slider.css'
import { Pagination, Navigation } from 'swiper'


import { SliderProducts } from './../../data/products';

function Slider() {
    return (
        <div className='s-container'>
            <Swiper
            modules={[Pagination, Navigation]}
            navigation ={true}
            className= 'my-swiper'
            loopFillGroupWithBlank ={true}
            slidesPerView={3} spaceBetween={40} slidesPerGroup={1} loop={true} >

                {SliderProducts.map((slide, i) => (
                    <SwiperSlide>
                        <div className='left-s'>
                            <div className='name'>
                                <span>{slide.name}</span>
                                <span>{slide.detail}</span>
                            </div>

                            <span>{slide.price}$</span>
                            <div>Shop Now</div>
                        </div>

                        <img src={slide.img} alt='' className='img-p'/>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default Slider;