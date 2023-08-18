import p1 from "../../assets/partners/p1.webp";
import p2 from "../../assets/partners/p2.webp";
import p3 from "../../assets/partners/p3.webp";
import p4 from "../../assets/partners/p4.webp";
import p5 from "../../assets/partners/p5.webp";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Container from "../../shared/Container";

const Partners = () => {
  return (
    <div className="p-10 bg-cream">
      <Container>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 20000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1268: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper mt-10"
        >
          <SwiperSlide>
            <img className="w-52" src={p1} alt="partenr-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-52" src={p2} alt="partenr-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-52" src={p3} alt="partenr-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-52" src={p4} alt="partenr-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-52" src={p5} alt="partenr-1" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Partners;
