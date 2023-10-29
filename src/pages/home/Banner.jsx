import slider1 from "../../assets/slider1.jpg";
import SliderText from "../../components/SliderText";

const Banner = () => {
  return (
    <div className="h-[85vh]">
     <div className="relative">
          <img
            className="brightness-50 h-[85vh] w-full object-cover"
            src={slider1}
            alt="slider1"
          />
          <SliderText />
        </div>
    </div>
  );
};

export default Banner;
