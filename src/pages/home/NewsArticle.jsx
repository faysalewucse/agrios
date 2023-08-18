import { BsChat, BsChatDotsFill, BsPersonCircle } from "react-icons/bs";
import img1 from "../../assets/slider1.jpg";
import img2 from "../../assets/slider2.jpg";
import img3 from "../../assets/slider3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const NewsArticle = () => {
  return (
    <div className="p-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center">
          <h4 className="font-cursive text-secondary">From the Blog</h4>
          <h2 className="font-bold">News & Articles</h2>
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
          className="mySwiper mt-10"
        >
          <SwiperSlide className="rounded-t-2xl bg-white shadow-md">
            <div className="group/project relative h-80">
              <img
                className="rounded-t-2xl h-full object-cover"
                src={img1}
                alt="project"
              />
              <h6 className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white w-fit mx-auto py-2 px-6 rounded-md">
                5 July 2022
              </h6>
            </div>
            <div className="p-10 text-center">
              <div className="mb-5 flex items-center justify-center gap-5">
                <div className="flex items-center gap-1">
                  <BsPersonCircle className="bg-secondary text-white text-lg p-1 rounded-full" />
                  <small>Kevin Martin</small>
                </div>
                <div className="flex items-center gap-1">
                  <BsChatDotsFill className="text-secondary text-2xl p-1 rounded-full" />
                  <small>0 Comment</small>
                </div>
              </div>
              <Link className="hover:text-primary text-3xl font-semibold">
                Bringing Food Production Back to Cities
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-t-2xl bg-white shadow-md">
            <div className="group/project relative h-80">
              <img
                className="rounded-t-2xl h-full object-cover"
                src={img3}
                alt="project"
              />
              <h6 className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white w-fit mx-auto py-2 px-6 rounded-md">
                5 July 2022
              </h6>
            </div>
            <div className="p-10 text-center">
              <div className="mb-5 flex items-center justify-center gap-5">
                <div className="flex items-center gap-1">
                  <BsPersonCircle className="bg-secondary text-white text-lg p-1 rounded-full" />
                  <small>Kevin Martin</small>
                </div>
                <div className="flex items-center gap-1">
                  <BsChatDotsFill className="text-secondary text-2xl p-1 rounded-full" />
                  <small>0 Comment</small>
                </div>
              </div>
              <Link className="hover:text-primary text-3xl font-semibold">
                Bringing Food Production Back to Cities
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-t-2xl bg-white shadow-md">
            <div className="group/project relative h-80">
              <img
                className="rounded-t-2xl h-full object-cover"
                src={img2}
                alt="project"
              />
              <h6 className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white w-fit mx-auto py-2 px-6 rounded-md">
                5 July 2022
              </h6>
            </div>
            <div className="p-10 text-center">
              <div className="mb-5 flex items-center justify-center gap-5">
                <div className="flex items-center gap-1">
                  <BsPersonCircle className="bg-secondary text-white text-lg p-1 rounded-full" />
                  <small>Kevin Martin</small>
                </div>
                <div className="flex items-center gap-1">
                  <BsChatDotsFill className="text-secondary text-2xl p-1 rounded-full" />
                  <small>0 Comment</small>
                </div>
              </div>
              <Link className="hover:text-primary text-3xl font-semibold">
                Bringing Food Production Back to Cities
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-t-2xl bg-white shadow-md">
            <div className="group/project relative h-80">
              <img
                className="rounded-t-2xl h-full object-cover"
                src={img1}
                alt="project"
              />
              <h6 className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white w-fit mx-auto py-2 px-6 rounded-md">
                5 July 2022
              </h6>
            </div>
            <div className="p-10 text-center">
              <div className="mb-5 flex items-center justify-center gap-5">
                <div className="flex items-center gap-1">
                  <BsPersonCircle className="bg-secondary text-white text-lg p-1 rounded-full" />
                  <small>Kevin Martin</small>
                </div>
                <div className="flex items-center gap-1">
                  <BsChatDotsFill className="text-secondary text-2xl p-1 rounded-full" />
                  <small>0 Comment</small>
                </div>
              </div>
              <Link className="hover:text-primary text-3xl font-semibold">
                Bringing Food Production Back to Cities
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewsArticle;
