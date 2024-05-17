import React from "react";
import data from './StoriesData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const Stories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // show only 2 records initially
    slidesToScroll: 2, // scroll 2 records at a time
  };

  return (
    <div>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full"></img>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-xl font-semibold">{d.postion}</p>
                <p className="text-xl font-semibold">{d.place}</p>
                <p className="text-xl font-semibold">{d.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Stories;