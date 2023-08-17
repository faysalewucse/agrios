import React from "react";
import Button from "./Button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useSwiper } from "swiper/react";
import SlideChangerArrow from "./SlideChangerArrow";

const SliderText = () => {
  const swiper = useSwiper();

  return (
    <div className="w-full absolute top-1/2 md:left-1/2 left-5 transform md:-translate-x-1/2 md:px-10 -translate-y-1/2 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <p className="text-lg">WELCOME TO AGRIOS FARMING</p>
          <h1 className="md:text-8xl md:w-1/2 text-6xl my-2 font-cursive leading-snug">
            Agriculture ECO Farming
          </h1>
          <p className="my-5 md:w-1/2 w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            laudantium nobis aut esse quia molestias modi, quae magni sapiente
            ratione!
          </p>

          <Button>Discover More</Button>
        </div>
        <div className="sm:flex flex-col gap-2 hidden">
          <SlideChangerArrow
            clickEvent={() => swiper.slidePrev()}
            icon={<BsArrowLeft />}
            hover={"group/leftArrow"}
            afterHover={"group-hover/leftArrow:animate-fade-left"}
          />
          <SlideChangerArrow
            clickEvent={() => swiper.slideNext()}
            icon={<BsArrowRight />}
            hover={"group/rightArrow"}
            afterHover={"group-hover/rightArrow:animate-fade-right"}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderText;
