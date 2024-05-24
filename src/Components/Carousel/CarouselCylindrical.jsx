import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/Hero.png";

const images = [img1, img1, img1];
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
    }, []);

    return (
        <div className="relative w-full flex flex-col justify-center items-center">
            <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`gallery-${index + 1}`}
                        className={`w-full h-full object-cover absolute transition-all duration-1000 ease-in-out ${currentImage === index ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
                            }`}
                        style={{ transitionProperty: 'opacity, filter' }}
                    />
                ))}
                <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 md:p-4 bg-gray-800 bg-opacity-30 text-white rounded-full backdrop-blur-md"
                    onClick={prevImage}
                    aria-label="Previous Image"
                >
                    <FaArrowLeft size={24} />
                </button>
                <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 md:p-4 bg-gray-800 bg-opacity-30 text-white rounded-full backdrop-blur-md"
                    onClick={nextImage}
                    aria-label="Next Image"
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
                        aria-label={`Select Image ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="mt-8 text-center w-full md:w-[1240px] px-4 md:px-0 mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Nurturing Tomorrow's Leaders Today</h2>
                <p className="text-gray-700 text-justify text-base md:text-lg mb-4">
                    At Vivekananda Institute of Professional Studies - Technical Campus, we are committed to providing our students with a balanced education that combines theoretical knowledge with practical skills. We believe that this approach is essential for preparing our students for success in their chosen careers.
                </p>
                <p className="text-gray-700 text-justify text-base md:text-lg mb-4">
                    In addition to academic rigor, we also encourage our students to participate in extracurricular activities that help them develop important soft skills such as teamwork, communication, and leadership. We believe that these skills are essential for success in today's rapidly changing world.
                </p>
                <p className="text-gray-700 text-justify text-base md:text-lg mb-4">
                    While we are proud of the fact that many of our students secure successful campus placements each year, we believe that the true measure of our success is the impact that our students have on the world around them. Our students are valued for their academic achievements, personal growth, and commitment to making a positive difference in their communities. We are confident that they will go on to make valuable contributions to any organization they join, and we are proud to be a part of their journey.
                </p>
            </div>
        </div>
    );
};

export default CarouselCylindrical;