import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ImgProp {
  imgId: number;
  imgSrc: string;
}

interface Props {
  imgs: ImgProp[];
}

const Slider = ({ imgs }: Props) => {
  return (
    <Swiper spaceBetween={20} slidesPerView={1}>
      {imgs.map((img) => (
        <SwiperSlide key={img.imgId}>
          <img src={img.imgSrc} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
