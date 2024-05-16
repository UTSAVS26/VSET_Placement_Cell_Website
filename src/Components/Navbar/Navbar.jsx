import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
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
      className={`w-full text-[rgb(255,253,253)] px-4 fixed top-0 left-0 flex items-top justify-between z-10 bg-[#a2a4b6] ${scrolled ? "bg-[#a2a4b6] transition-all" : ""
        }`}
    >
      <img src={logo} alt="" className="w-[300px]" />
      <ul>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <Link to="/" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            Home
          </Link>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <Link to="/Overview" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            Overview
          </Link>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <Link to="/CDC" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            Career Development Cell
          </Link>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <Link to="/Recruit" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            Recruit
          </Link>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <Link to="/Message" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            Message
          </Link>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <Link to="/Degree" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            Programs
          </Link>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <Link to="/RecruitmentProcess" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]">
            Recruitment Process
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
