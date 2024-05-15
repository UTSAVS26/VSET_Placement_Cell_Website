import React from "react";
import "daisyui/dist/full.css";
import img1 from "../../assets/gallery-1.png";
import img2 from "../../assets/gallery-2.png";
import img3 from "../../assets/gallery-3.png";

const Carousel = () => {
  return (
    <>
      <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <div className="relative w-full h-full transition duration-500 ease-in-out transform hover:scale-110">
            <img src={img1} className="rounded-box w-full h-full" />
            <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold">Content Here</h2>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="relative w-full h-full transition duration-500 ease-in-out transform hover:scale-110">
            <img src={img3} className="rounded-box w-full h-full" />
            <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold">Content Here</h2>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="relative w-full h-full transition duration-500 ease-in-out transform hover:scale-110">
            <img src={img3} className="rounded-box w-full h-full" />
            <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold">Content Here</h2>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="relative w-full h-full transition duration-500 ease-in-out transform hover:scale-110">
            <img src={img1} className="rounded-box w-full h-full" />
            <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold">Content Here</h2>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="relative w-full h-full transition duration-500 ease-in-out transform hover:scale-110">
            <img src={img2} className="rounded-box w-full h-full" />
            <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold">Content Here</h2>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="relative w-full h-full transition duration-500 ease-in-out transform hover:scale-110">
            <img src={img3} className="rounded-box w-full h-full" />
            <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold">Content Here</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;