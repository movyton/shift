import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PostPictures from "../data.json";
// import { default as nowhere } from "../imgs/nowhere.jpg";
// @ts-ignore
import png from '../imgs/nowhere.jpg'
const data = [
  {
    "id": 1,
    "name": "Maison kitsune x and wander ss23",
    "content": "Maison kitsune x and wander ss23 Maison kitsune x and wander ss23Maison kitsune x and wander ss23Maison kitsune x and wander ss23",
    "imgs": ["/assets/img/nowhere.jpg", "/assets/img/chel.jpg"]
  },
  {
    "id": 2,
    "name": "nowhere",
    "content": "“NOWHERE”. На самом деле история достойная документалки. Магазин открыли Ниго и Такахаши, чтобы иметь площадку для продажи своей одежды + распространять по Японии одежду западных брендов по типу Supreme/Stussy.",
    "imgs": []
  }
]
let source = data[0].imgs[1]

const Slider = () => {
  const pic = PostPictures[0].imgs[0];
  console.log(pic);

  return (
    <img src={source} alt="" />
    // <Swiper spaceBetween={20} slidesPerView={2}>
    //   <SwiperSlide>{}</SwiperSlide>
    // </Swiper>
  );
};

export default Slider;
