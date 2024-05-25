import React from "react";
import "./FeaturedCarousel.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import shoeimg from "../assets/images/banner.png";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const FeaturedCarousel = () => {
  return (
    <div className="featuredCarousel">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        autoplay={{ delay: 7000 }}
        pagination={true}
        modules={[Pagination]}
      >
        {[0, 1, 2, 3, 4].map((item) => (
          <SwiperSlide>
            <div className="carouselContent">
              <img className="contentImage" src={shoeimg}></img>
              <div className="featuredcontent">
                <div className="description">
                  <div className="brandName">Nike</div>
                  <div className="productName">Air Jordans</div>
                  <div className="producttype">Mens</div>
                </div>
                <div className="cartfunction">
                  <div>{item}$</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedCarousel;
