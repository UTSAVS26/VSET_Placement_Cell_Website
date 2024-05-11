import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full text-[rgb(255,253,253)] px-4 fixed top-0 left-0 flex items-top justify-between z-10 bg-[#a2a4b6] ${
        scrolled ? "bg-[#a2a4b6] transition-all" : ""
      }`}
    >
      <img src={logo} alt="" className="w-[300px]" />
      <ul>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <a href="#" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            Home
          </a>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <a href="#" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            Overview
          </a>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <a href="#" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            CDC
          </a>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <a href="#" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            Recruit
          </a>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <a href="#" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            Message
          </a>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <a href="#" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            Programs
          </a>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <a href="#" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            Recruitment Process
          </a>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <a href="#" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            Coordinators
          </a>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <a href="#" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            Stories
          </a>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <button className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b]">
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
