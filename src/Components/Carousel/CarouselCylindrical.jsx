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
                        className={`w-full h-full object-cover absolute transition-all duration-1000 ease-in-out ${currentImage === index ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
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
            <div className="mt-8 text-center w-[1240px] mx-auto">
                <h2 className="text-4xl font-bold mb-4">Nurturing Tomorrow's Leaders Today</h2>
                <p className="text-gray-700 text-justify text-lg mb-4">
                    At VSE&T, we believe in nurturing tomorrow's leaders today. With a focus on providing quality education and holistic development, we prepare our students to face the challenges of the future. Our dedicated faculty, state-of-the-art infrastructure, and emphasis on practical learning ensure that our students are well-equipped to excel in their chosen fields. With a rich history of academic excellence and a commitment to innovation, VSE&T is more than just an educational institution; it's a community where students are encouraged to explore their passions, expand their horizons, and reach their full potential. Join us at VSE&T and embark on a journey of discovery, growth, and success.
                </p>
                <p className="text-gray-700 text-justify text-lg mb-4">
                    Our diverse range of programs caters to students of all interests and backgrounds. Whether you're passionate about science, arts, technology, or humanities, VSE&T provides a supportive environment where you can thrive and pursue your passions. Our hands-on approach to learning, coupled with opportunities for research and internships, ensures that our graduates are well-prepared for the demands of the modern workforce.
                </p>
                <p className="text-gray-700 text-justify text-lg mb-4">
                    Additionally, we prioritize the personal growth and well-being of our students. Through mentorship programs, counseling services, and extracurricular activities, we foster a sense of community and belonging on campus. At VSE&T, we're not just shaping minds; we're nurturing the leaders of tomorrow who will make a positive impact on society.
                </p>
            </div>
        </div>
    );
};

export default CarouselCylindrical;