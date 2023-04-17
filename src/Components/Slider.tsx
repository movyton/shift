import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PostPictures from "../data.json";
// import { default as nowhere } from "../imgs/nowhere.jpg";

const Slider = () => {
  const pic = PostPictures[0].imgs[0];
  console.log(pic);

  return (
    <img src={pic} alt="" />
    // <Swiper spaceBetween={20} slidesPerView={2}>
    //   <SwiperSlide>{}</SwiperSlide>
    // </Swiper>
  );
};

export default Slider;
