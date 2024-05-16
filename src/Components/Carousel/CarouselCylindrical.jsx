import React, { useState } from "react";
import img1 from "../../assets/Hero.png";

const CarouselCylindrical = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleImageChange = (index) => {
        setCurrentImage(index);
    };

    return (
        <div className="relative w-full flex flex-col justify-center items-center">
            <div className="relative w-full max-w-[1024px]">
                <div className="flex justify-center items-center space-x-4">
                    <img src={img1} alt="gallery-1" className={`w-full h-[500px] object-cover ${currentImage === 0 ? '' : 'hidden'}`} />
                    <img src={img1} alt="gallery-2" className={`w-full h-[500px] object-cover ${currentImage === 1 ? '' : 'hidden'}`} />
                    <img src={img1} alt="gallery-3" className={`w-full h-[500px] object-cover ${currentImage === 2 ? '' : 'hidden'}`} />
                </div>
                <div className="flex justify-center mt-4">
                    <button className={`w-3 h-3 rounded-full ${currentImage === 0 ? 'bg-gray-600' : 'bg-gray-400'} mr-2`} onClick={() => handleImageChange(0)}></button>
                    <button className={`w-3 h-3 rounded-full ${currentImage === 1 ? 'bg-gray-600' : 'bg-gray-400'} mr-2`} onClick={() => handleImageChange(1)}></button>
                    <button className={`w-3 h-3 rounded-full ${currentImage === 2 ? 'bg-gray-600' : 'bg-gray-400'}`} onClick={() => handleImageChange(2)}></button>
                </div>
            </div>
            <div className="mt-4 text-center text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatibus quam quaerat ad aspernatur odit! Impedit iste cum quaerat repudiandae deleniti expedita ratione tempore suscipit, aliquid tempora numquam a eius!
            </div>
        </div>
    );
};

export default CarouselCylindrical;