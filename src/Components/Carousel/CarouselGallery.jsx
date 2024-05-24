import React, { useEffect, useRef } from "react";
import img1 from "../../assets/gallery-1.png";
import img2 from "../../assets/gallery-2.png";
import img3 from "../../assets/gallery-3.png";

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let isDragging = false;
    let startX, scrollLeft;

    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 3;
      carousel.scrollLeft = scrollLeft - walk;
    };

    carousel.addEventListener("mousedown", handleMouseDown);
    carousel.addEventListener("mouseup", handleMouseUp);
    carousel.addEventListener("mousemove", handleMouseMove);

    return () => {
      carousel.removeEventListener("mousedown", handleMouseDown);
      carousel.removeEventListener("mouseup", handleMouseUp);
      carousel.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={carouselRef}
      className="flex overflow-x-auto scroll-smooth no-scrollbar mx-auto"
      style={{ maxWidth: "100%", height: "auto" }}
    >
      <div className="relative flex-shrink-0 w-full md:w-1/3 lg:w-1/4 mr-4">
        <img src={img1} className="w-full h-auto object-cover rounded-xl" alt="Gallery" />
        <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50 rounded-xl">
          <h2 className="text-2xl font-bold">Content Here</h2>
        </div>
      </div>
      <div className="relative flex-shrink-0 w-full md:w-1/3 lg:w-1/4 mr-4">
        <img src={img2} className="w-full h-auto object-cover rounded-xl" alt="Gallery" />
        <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50 rounded-xl">
          <h2 className="text-2xl font-bold">Content Here</h2>
        </div>
      </div>
      <div className="relative flex-shrink-0 w-full md:w-1/3 lg:w-1/4 mr-4">
        <img src={img3} className="w-full h-auto object-cover rounded-xl" alt="Gallery" />
        <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50 rounded-xl">
          <h2 className="text-2xl font-bold">Content Here</h2>
        </div>
      </div>
      <div className="relative flex-shrink-0 w-full md:w-1/3 lg:w-1/4 mr-4">
        <img src={img1} className="w-full h-auto object-cover rounded-xl" alt="Gallery" />
        <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50 rounded-xl">
          <h2 className="text-2xl font-bold">Content Here</h2>
        </div>
      </div>
      <div className="relative flex-shrink-0 w-full md:w-1/3 lg:w-1/4 mr-4">
        <img src={img2} className="w-full h-auto object-cover rounded-xl" alt="Gallery" />
        <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50 rounded-xl">
          <h2 className="text-2xl font-bold">Content Here</h2>
        </div>
      </div>
      <div className="relative flex-shrink-0 w-full md:w-1/3 lg:w-1/4 mr-4">
        <img src={img3} className="w-full h-auto object-cover rounded-xl" alt="Gallery" />
        <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50 rounded-xl">
          <h2 className="text-2xl font-bold">Content Here</h2>
        </div>
      </div>
    </div>
  );
};

export default Carousel;