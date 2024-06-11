import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import poster1 from "../assets/image/poster1.svg";
import poster2 from "../assets/image/poster2.svg";
import poster3 from "../assets/image/poster3.svg";
import poster4 from "../assets/image/poster4.svg";
import poster5 from "../assets/image/poster5.svg";

const PosterSlider = () => {
  return (
    <div className="box-poster-slider">
      <h2 className="poster-slider-title">movie that`s popular right now</h2>
      <div className="box-content-slider">
        <Swiper
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            768: {
              slidesPerViewL: 3,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          slidesPerView={5}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={poster1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={poster2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={poster3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={poster5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={poster4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={poster5} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PosterSlider;
