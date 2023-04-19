import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PostPictures from "../data.json";
import "swiper/css";

const Slider = () => {
  const pic = PostPictures[0].imgs[0];

  return (
    <Swiper spaceBetween={0} slidesPerView={1}>
      <SwiperSlide>
        <img src={pic} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pic} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
