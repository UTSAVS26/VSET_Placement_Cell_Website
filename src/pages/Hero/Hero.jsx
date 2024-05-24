import React, { useState } from "react";
import { Link } from 'react-router-dom';
import dark_arrow from "../../assets/dark-arrow.png";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Hero = () => {
  const [showButtons, setShowButtons] = useState(false);

  const handleExploreClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <>
      <div>
        <div className="w-screen text-white flex items-center justify-center hero" style={{ paddingTop: "350px" }}>
          <div className="text-center max-w-[800px] px-[20px] pb-[200px] h-full flex flex-col items-center justify-center">
            <h2 className="text-[40px] md:text-[60px] font-bold mb-[20px]">
              Welcome to VSE&T Placement Cell
            </h2>
            <p className="max-w-[700px] mt-[10px] mb-[20px] mx-auto leading-6 md:leading-4">
              Most happening things occur in placement cell.
            </p>
            <button className="bg-white text-black p-[14px] font-[16px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b]" onClick={handleExploreClick}>
              Explore More
              <img src={dark_arrow} alt="" className="w-[20px] ml-[10px]" />
            </button>
            {showButtons && (
              <div className="mt-[20px] flex flex-wrap justify-center">
                <Link to="/Overview">
                  <button className="bg-white text-black p-[14px] font-[16px] rounded-[30px] m-[10px] pointer hover:bg-[#7c7d8b]">
                    Overview
                  </button>
                </Link>
                <Link to="/CDC">
                  <button className="bg-white text-black p-[14px] font-[16px] rounded-[30px] m-[10px] pointer hover:bg-[#7c7d8b]">
                    Career Development Center
                  </button>
                </Link>
                <Link to="/Recruit">
                  <button className="bg-white text-black p-[14px] font-[16px] rounded-[30px] m-[10px] pointer hover:bg-[#7c7d8b]">
                    Why Recruit from VIPS-TC
                  </button>
                </Link>
                <Link to="/Message">
                  <button className="bg-white text-black p-[14px] font-[16px] rounded-[30px] m-[10px] pointer hover:bg-[#7c7d8b]">
                    Message
                  </button>
                </Link>
                <Link to="/Degree">
                  <button className="bg-white text-black p-[14px] font-[16px] rounded-[30px] m-[10px] pointer hover:bg-[#7c7d8b]">
                    Degree Programs
                  </button>
                </Link>
                <Link to="/RecruitmentProcess">
                  <button className="bg-white text-black p-[14px] font-[16px] rounded-[30px] m-[10px] pointer hover:bg-[#7c7d8b]">
                    Recruitment Process
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Hero;