import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ensure to install react-icons if not installed
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`w-full text-[rgb(255,253,253)] px-4 fixed top-0 left-0 flex items-center justify-between z-10 bg-[#a2a4b6] ${scrolled ? "bg-[#a2a4b6] transition-all" : ""
        }`}
    >
      <img src={logo} alt="" className="w-[150px] md:w-[300px]" />
      <button 
        className="text-white text-2xl md:hidden" 
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`fixed md:static top-0 left-0 w-full h-full bg-[#a2a4b6] flex flex-col md:flex-row items-center justify-center transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:transform-none md:transition-none`}>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <Link to="/" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <Link to="/Overview" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]" onClick={() => setMenuOpen(false)}>
            Overview
          </Link>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <Link to="/CDC" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]" onClick={() => setMenuOpen(false)}>
            Career Development Center
          </Link>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <Link to="/Recruit" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]" onClick={() => setMenuOpen(false)}>
            Recruit
          </Link>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <Link to="/Message" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]" onClick={() => setMenuOpen(false)}>
            Message
          </Link>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <Link to="/Degree" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]" onClick={() => setMenuOpen(false)}>
            Programs
          </Link>
        </li>
        <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
          <Link to="/RecruitmentProcess" className="bg-white text-black p-[14px] font-[20px] rounded-[30px] pointer inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc]" onClick={() => setMenuOpen(false)}>
            Recruitment Process
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;