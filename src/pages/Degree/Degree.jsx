import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/gallery-1.png";
import img2 from "../../assets/gallery-2.png";
import img3 from "../../assets/gallery-3.png";

const images = [img1, img2, img3];
const intervalDuration = 5000; // Interval duration in milliseconds

const Degree = () => {
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
    }, []);

    return (
        <div className="relative w-full flex flex-col justify-center items-center" style={{ paddingTop: "10%", paddingBottom: "5%" }}>
            <div className="w-full md:w-4/5 h-[300px] md:h-[500px] relative overflow-hidden">
                {images.map((image, index) => (
                    <div key={index} className={`absolute w-full h-full ${currentImage === index ? '' : 'hidden'}`}>
                        <img
                            src={image}
                            alt={`gallery-${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
                            <h2 className="text-xl md:text-2xl font-bold text-center">Content Here</h2>
                            <p className="text-base md:text-lg text-center">Additional Content</p>
                        </div>
                    </div>
                ))}
                <button
                    className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 p-2 md:p-4 bg-gray-800 bg-opacity-30 text-white rounded-full backdrop-blur-md"
                    onClick={prevImage}
                    aria-label="Previous Image"
                >
                    <FaArrowLeft size={16} className="md:mr-2" />
                </button>
                <button
                    className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 p-2 md:p-4 bg-gray-800 bg-opacity-30 text-white rounded-full backdrop-blur-md"
                    onClick={nextImage}
                    aria-label="Next Image"
                >
                    <FaArrowRight size={16} className="md:ml-2" />
                </button>
            </div>
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-gray-600' : 'bg-gray-400'} mr-2`}
                        onClick={() => handleImageChange(index)}
                        aria-label={`Select Image ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Degree;