import React from "react";
import Button from "./Button";

const SliderText = () => {
  return (
    <div className="absolute top-1/2 md:left-1/2 left-5 transform md:-translate-x-1/2 -translate-y-1/2 text-white">
      <p className="text-lg">WELCOME TO AGRIOS FARMING</p>
      <h1 className="md:text-8xl md:w-full w-1/2 text-5xl my-2 font-cursive leading-snug">
        Agriculture ECO Farming
      </h1>
      <p className="my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        laudantium nobis aut esse quia molestias modi, quae magni sapiente
        ratione!
      </p>

      <Button>Discover More</Button>
    </div>
  );
};

export default SliderText;
