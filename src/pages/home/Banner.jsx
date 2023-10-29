import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import SliderText from "../../components/SliderText";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Pagination, Autoplay]}
      className="mySwiper h-[85vh]"
    >
      <SwiperSlide>
        <div className="relative">
          <img
            className="brightness-50 h-[85vh] w-full object-cover"
            src={slider1}
            alt="slider1"
          />
          <SliderText />
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className="relative">
          <img
            className="brightness-50 h-[85vh] w-full object-cover"
            src={slider2}
            alt="slider2"
          />
          <SliderText />
        </div>
      </SwiperSlide> */}
      <SwiperSlide>
        <div className="relative">
          <img
            className="brightness-50 h-[85vh] w-full object-cover"
            src={slider3}
            alt="slider3"
          />
          <SliderText />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
