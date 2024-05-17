import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/Hero.png";

const images = [img1, img1, img1]; // Assuming you have three images
const intervalDuration = 5000; // Interval duration in milliseconds

const CarouselCylindrical = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleImageChange = (index) => {
        setCurrentImage(index);
    };

    const nextImage = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, intervalDuration);

        return () => clearInterval(interval);
    }, []); // Runs only once when the component mounts

    return (
        <div className="relative w-full flex flex-col justify-center items-center">
            <div className="relative w-full h-[500px] overflow-hidden">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`gallery-${index + 1}`}
                        className={`w-full h-full object-cover absolute transition-all duration-1000 ease-in-out ${
                            currentImage === index ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
                        }`}
                        style={{ transitionProperty: 'opacity, filter' }}
                    />
                ))}
                <button 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 bg-opacity-30 text-white rounded-full backdrop-blur-md"
                    onClick={prevImage}
                >
                    <FaArrowLeft size={24} />
                </button>
                <button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 bg-opacity-30 text-white rounded-full backdrop-blur-md"
                    onClick={nextImage}
                >
                    <FaArrowRight size={24} />
                </button>
            </div>
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-gray-600' : 'bg-gray-400'} mr-2`}
                        onClick={() => handleImageChange(index)}
                    ></button>
                ))}
            </div>
            <div className="mt-4 text-center text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatibus quam quaerat ad aspernatur odit! Impedit iste cum quaerat repudiandae deleniti expedita ratione tempore suscipit, aliquid tempora numquam a eius!
            </div>
        </div>
    );
};

export default CarouselCylindrical;