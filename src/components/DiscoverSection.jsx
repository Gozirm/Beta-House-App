import React from "react";
import Slider from "react-slick";
import locationIcon from "../assets/locationWhite.svg";
import { discover } from "./discover";
import dicLeft from "../assets/dicLeft.svg";
import dicRight from "../assets/dicRight.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DiscoverSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main>
      <div className="px-4 md:px-14 mx-auto py-5">
        <h1 className="text-2xl md:text-[50px] font-bold text-center mb-8">
          Discover Our Popular Properties
        </h1>
        <Slider {...settings}>
          {discover.map((items) => (
            <div key={items.id} className="p-2">
              <div className="relative">
                <img
                  alt="Special Duplex with modern white exterior"
                  className="w-full h-[412px] object-cover rounded-lg"
                  height="400"
                  src={items.imgUrl}
                  width="600"
                />
                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-xs backdrop-brightness-75 p-4 rounded-b-lg space-y-2">
                  <h2 className="text-white text-[18px] font-semibold">
                    {items.title}
                  </h2>
                  <p className="text-white text-[18px] font-bold">
                    {items.price}
                  </p>
                  <p className="text-white text-sm font-light">
                    {items.bed} Bed | {items.bath} Bath | {items.sqft} sq ft
                  </p>
                  <p className="text-white text-sm flex items-center gap-2 font-light">
                    <img src={locationIcon} alt="" className="fill-white" />
                    {items.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
};

const SampleNextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className={`absolute right-0 top-1/2 transform -translate-y-1/2 md:translate-x-1/2 z-50`}
      style={{ ...style, display: "block", width: "auto", height: "auto" }}
      onClick={onClick}
    >
      <img src={dicRight} alt="Next" />
    </button>
  );
};

const SamplePrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className={`absolute left-0 top-1/2 transform -translate-y-1/2 md:-translate-x-1/2 z-50`}
      style={{ ...style, display: "block", width: "auto", height: "auto" }}
      onClick={onClick}
    >
      <img src={dicLeft} alt="Previous" />
    </button>
  );
};

export default DiscoverSection;
