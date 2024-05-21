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

    const autoScroll = () => {
      if (carousel.scrollLeft === carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 1;
      }
      requestAnimationFrame(autoScroll);
    };

    autoScroll();

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
      style={{ width: "100%", maxWidth: "1500px", height: "600px" }}
    >
      <div className="relative w-800px h-400px shrink-0 mr-4"> {/* Set fixed width and height for images */}
        <img src={img1} className="w-full h-full object-cover" alt="Gallery" /> {/* Ensure images cover the container */}
        <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50">
          <h2 className="text-2xl font-bold">Content Here</h2>
        </div>
      </div>
      <div className="relative w-800px h-400px shrink-0 mr-4"> {/* Set fixed width and height for images */}
        <img src={img2} className="w-full h-full object-cover" alt="Gallery" /> {/* Ensure images cover the container */}
        <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50">
          <h2 className="text-2xl font-bold">Content Here</h2>
        </div>
      </div>
      <div className="relative w-800px h-400px shrink-0 mr-4"> {/* Set fixed width and height for images */}
        <img src={img3} className="w-full h-full object-cover" alt="Gallery" /> {/* Ensure images cover the container */}
        <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50">
          <h2 className="text-2xl font-bold">Content Here</h2>
        </div>
      </div>
      <div className="relative w-800px h-400px shrink-0 mr-4"> {/* Set fixed width and height for images */}
        <img src={img1} className="w-full h-full object-cover" alt="Gallery" /> {/* Ensure images cover the container */}
        <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50">
          <h2 className="text-2xl font-bold">Content Here</h2>
        </div>
      </div>
      <div className="relative w-800px h-400px shrink-0 mr-4"> {/* Set fixed width and height for images */}
        <img src={img2} className="w-full h-full object-cover" alt="Gallery" /> {/* Ensure images cover the container */}
        <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50">
          <h2 className="text-2xl font-bold">Content Here</h2>
        </div>
      </div>
      <div className="relative w-800px h-400px shrink-0 mr-4"> {/* Set fixed width and height for images */}
        <img src={img3} className="w-full h-full object-cover" alt="Gallery" /> {/* Ensure images cover the container */}
        <div className="absolute inset-0 flex items-end justify-center text-center p-4 text-white bg-black bg-opacity-50">
          <h2 className="text-2xl font-bold">Content Here</h2>
        </div>
      </div>
    </div>
  );
};

export default Carousel;