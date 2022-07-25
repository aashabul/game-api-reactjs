import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../Slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <div id="poster-div">
      <h2>Available Posters</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        pagination={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination]}
        id="poster"
      >
        <SwiperSlide>
          <img
            src="https://imgc.allpostersimages.com/img/posters/five-nights-at-freddy-s-special-delivery-collage-premium-poster_u-L-F9PHFL0.jpg"
            alt="five-nights"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgc.allpostersimages.com/img/posters/halo-infinite-primary-vertical-premium-poster_u-L-F9TOC40.jpg"
            alt="halo-infinite"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgc.allpostersimages.com/img/posters/star-wars-battlefront-2-game-cover_u-L-F9DH1T0.jpg"
            alt="star-wars-battlefront-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgc.allpostersimages.com/img/posters/assassins-creed-odyssey_u-L-F9DH0A0.jpg"
            alt="assassins-creed-odyssey"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgc.allpostersimages.com/img/posters/mortal-kombat-11-key-art_u-L-F9HNHP0.jpg"
            alt="mortal-kombat-11"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgc.allpostersimages.com/img/posters/call-of-duty-wwii-key-art_u-L-F9DGPH0.jpg"
            alt="call-of-duty-wwii"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgc.allpostersimages.com/img/posters/minecraft-dragon-premium-poster_u-L-F9LZT90.jpg"
            alt="minecraft-dragon"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgc.allpostersimages.com/img/posters/playerunknown-s-battlegrounds-hope_u-L-F9DFN40.jpg"
            alt="pubg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgc.allpostersimages.com/img/posters/gears-of-war-5-group_u-L-F9G0I90.jpg"
            alt="gears-of-war-5"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
