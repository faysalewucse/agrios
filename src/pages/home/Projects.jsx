import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import img1 from "../../assets/slider1.jpg";
import img2 from "../../assets/slider2.jpg";
import img3 from "../../assets/slider3.jpg";
import Container from "../../shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Projects = () => {
  return (
    <div className="p-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center">
          <h5 className="font-cursive text-secondary">Recently Completed</h5>
          <h2 className="font-bold">Explore Projects</h2>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 20000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1268: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-[85vh] mt-10"
        >
          <SwiperSlide>
            <div className="group/project relative h-[70vh]">
              <img
                className="rounded-2xl h-full object-cover"
                src={img1}
                alt="project"
              />
              <div className="rounded-2xl absolute top-0 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute font-semibold bottom-5 left-5 text-white flex flex-col gap-3">
                <h3 className="w-1/2 transition-300 group-hover/project:opacity-100 mb-5">
                  Ecological Farming
                </h3>
                <p className="opacity-0 transition-300 group-hover/project:opacity-100 group-hover/project:mb-5 -mb-16 text-white text-xs font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, earum.
                </p>
              </div>
              <BsArrowRight className="group-hover/project:opacity-100 transition-300 opacity-0 absolute top-5 right-5 bg-white text-6xl p-5 rounded-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group/project relative h-[70vh]">
              <img
                className="rounded-2xl h-full object-cover"
                src={img2}
                alt="project"
              />
              <div className="rounded-2xl absolute top-0 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute font-semibold bottom-5 left-5 text-white flex flex-col gap-3">
                <h3 className="w-1/2 transition-300 group-hover/project:opacity-100 mb-5">
                  Ecological Farming
                </h3>
                <p className="opacity-0 transition-300 group-hover/project:opacity-100 group-hover/project:mb-5 -mb-16 text-white text-xs font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, earum.
                </p>
              </div>
              <BsArrowRight className="group-hover/project:opacity-100 transition-300 opacity-0 absolute top-5 right-5 bg-white text-6xl p-5 rounded-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group/project relative h-[70vh]">
              <img
                className="rounded-2xl h-full object-cover"
                src={img3}
                alt="project"
              />
              <div className="rounded-2xl absolute top-0 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute font-semibold bottom-5 left-5 text-white flex flex-col gap-3">
                <h3 className="w-1/2 transition-300 group-hover/project:opacity-100 mb-5">
                  Ecological Farming
                </h3>
                <p className="opacity-0 transition-300 group-hover/project:opacity-100 group-hover/project:mb-5 -mb-16 text-white text-xs font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, earum.
                </p>
              </div>
              <BsArrowRight className="group-hover/project:opacity-100 transition-300 opacity-0 absolute top-5 right-5 bg-white text-6xl p-5 rounded-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group/project relative h-[70vh]">
              <img
                className="rounded-2xl h-full object-cover"
                src={img1}
                alt="project"
              />
              <div className="rounded-2xl absolute top-0 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute font-semibold bottom-5 left-5 text-white flex flex-col gap-3">
                <h3 className="w-1/2 transition-300 group-hover/project:opacity-100 mb-5">
                  Ecological Farming
                </h3>
                <p className="opacity-0 transition-300 group-hover/project:opacity-100 group-hover/project:mb-5 -mb-16 text-white text-xs font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, earum.
                </p>
              </div>
              <BsArrowRight className="group-hover/project:opacity-100 transition-300 opacity-0 absolute top-5 right-5 bg-white text-6xl p-5 rounded-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
