import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import img1 from "../../assets/slider1.jpg";
import img2 from "../../assets/slider2.jpg";
import img3 from "../../assets/slider3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "../../components/cards/ProjectCard";

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
            <ProjectCard
              image={img1}
              projectName={"Ecological Farming"}
              shortDesc={
                "orem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, voluptatum."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              image={img2}
              projectName={"Ecological Farming"}
              shortDesc={
                "orem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, voluptatum."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              image={img3}
              projectName={"Ecological Farming"}
              shortDesc={
                "orem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, voluptatum."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              image={img1}
              projectName={"Ecological Farming"}
              shortDesc={
                "orem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, voluptatum."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
