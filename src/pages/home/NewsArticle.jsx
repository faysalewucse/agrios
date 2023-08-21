import { BsChat, BsChatDotsFill, BsPersonCircle } from "react-icons/bs";
import img1 from "../../assets/slider1.jpg";
import img2 from "../../assets/slider2.jpg";
import img3 from "../../assets/slider3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { newses } from "../NewsPage";
import NewsCard from "../../components/cards/NewsCard";

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
          {newses.map((news, index) => (
            <SwiperSlide
              key={index}
              className="rounded-t-2xl bg-white shadow-md"
            >
              <NewsCard news={news} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewsArticle;
