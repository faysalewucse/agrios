import { BiCheckCircle, BiShareAlt } from "react-icons/bi";
import about1 from "../assets/about/about-01.webp";
import farmer1 from "../assets/farmers/team-03.webp";

import PageBanner from "../components/PageBanner";
import Container from "../shared/Container";
import Button from "../components/Button";
import Video from "./home/Video";
import Testimonials from "./home/Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tooltip } from "antd";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import Partners from "./home/Partners";

const AboutPage = () => {
  return (
    <div>
      <PageBanner title={"ABOUT"} path={"HOME / ABOUT"} />
      <Container>
        <div className="p-20 lg:flex">
          <div className="relative lg:ml-0 lg:w-1/2 ml-16">
            <img className="rounded-lg" src={about1} alt="about-01" />
            <img
              className="absolute -bottom-16 -left-16 rounded-lg w-60"
              src={farmer1}
              alt="farmer"
            />
          </div>
          <div className="lg:flex-1 mt-20 lg:mt-0">
            <h4 className="text-secondary font-cursive">Get to Know Us</h4>
            <h2
              className="font-semibold
            ..020"
            >
              The Best Agriculture Market
            </h2>
            <h5 className="text-primary font-semibold my-6">
              There are many variations of passa of lorem available, but the
              majority have suffered alteration.
            </h5>
            <h6 className="text-dark/50 my-6">
              There are many variations of passa of lorem available, but the
              majority have suffered alteration.
            </h6>
            <ul className="mb-10">
              <li className="flex items-center text-2xl gap-2">
                <BiCheckCircle className="text-primary" />
                Lorem ipsum dolor sit.
              </li>
              <li className="flex items-center text-2xl gap-2">
                <BiCheckCircle className="text-primary" />
                Lorem ipsum dolor sit.
              </li>
              <li className="flex items-center text-2xl gap-2">
                <BiCheckCircle className="text-primary" />
                Lorem ipsum dolor sit.
              </li>
            </ul>

            <Button>Discover More</Button>
          </div>
        </div>
      </Container>

      <div className="my-10">
        <Video />
        <Testimonials />
      </div>

      {/* Farmers */}
      <Container>
        <div className="p-20">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 20000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1268: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="relative">
                <img
                  className="h-[45vh] w-full object-cover"
                  src={farmer1}
                  alt="slider1"
                />
                <div className="bg-white shadow-md w-fit p-5 rounded-md absolute -bottom-5 -right-5">
                  <h6 className="font-semibold">David Martin</h6>
                  <p>Farmer</p>
                </div>
                <div className="absolute  left-1/2 -translate-x-1/2 bottom-0">
                  <div className="text-white bg-secondary">
                    <Tooltip
                      color="white"
                      placement="top"
                      title={
                        <div className="bg-secondary flex flex-col gap-3 p-3 rounded">
                          <BsTwitter className="hover:text-dark transition-200" />
                          <BsFacebook className="hover:text-dark transition-200" />
                          <MdMail className="hover:text-dark transition-200" />
                        </div>
                      }
                    >
                      <BiShareAlt className=" bg-primary text-white p-3 rounded-md text-5xl" />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative">
                <img
                  className="h-[45vh] w-full object-cover"
                  src={farmer1}
                  alt="slider1"
                />
                <div className="bg-white shadow-md w-fit p-5 rounded-md absolute -bottom-5 -right-5">
                  <h6 className="font-semibold">David Martin</h6>
                  <p>Farmer</p>
                </div>
                <div className="absolute  left-1/2 -translate-x-1/2 bottom-0">
                  <div className="text-white bg-secondary">
                    <Tooltip
                      color="white"
                      placement="top"
                      title={
                        <div className="bg-secondary flex flex-col gap-3 p-3 rounded">
                          <BsTwitter className="hover:text-dark transition-200" />
                          <BsFacebook className="hover:text-dark transition-200" />
                          <MdMail className="hover:text-dark transition-200" />
                        </div>
                      }
                    >
                      <BiShareAlt className=" bg-primary text-white p-3 rounded-md text-5xl" />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative">
                <img
                  className="h-[45vh] w-full object-cover"
                  src={farmer1}
                  alt="slider1"
                />
                <div className="bg-white shadow-md w-fit p-5 rounded-md absolute -bottom-5 -right-5">
                  <h6 className="font-semibold">David Martin</h6>
                  <p>Farmer</p>
                </div>
                <div className="absolute  left-1/2 -translate-x-1/2 bottom-0">
                  <div className="text-white bg-secondary">
                    <Tooltip
                      color="white"
                      placement="top"
                      title={
                        <div className="bg-secondary flex flex-col gap-3 p-3 rounded">
                          <BsTwitter className="hover:text-dark transition-200" />
                          <BsFacebook className="hover:text-dark transition-200" />
                          <MdMail className="hover:text-dark transition-200" />
                        </div>
                      }
                    >
                      <BiShareAlt className=" bg-primary text-white p-3 rounded-md text-5xl" />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
      <Partners />
    </div>
  );
};

export default AboutPage;
