import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ensure to install react-icons if not installed
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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
      className={`w-full text-white px-4 fixed top-0 left-0 flex items-center justify-between z-10 bg-[#a2a4b6] ${scrolled ? "bg-[#a2a4b6] transition-all" : ""}`}
    >
      <img src={logo} alt="logo" className="w-[150px] md:w-[300px]" />
      <button 
        className="text-white text-2xl md:hidden z-20" 
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`fixed md:static top-0 left-0 w-full h-full md:h-auto bg-[#a2a4b6] flex flex-col md:flex-row items-center justify-center transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:transform-none md:transition-none z-10`}>
        <NavItem to="/" text="Home" isActive={location.pathname === '/'} />
        <NavItem to="/Overview" text="Overview" isActive={location.pathname === '/Overview'} />
        <NavItem to="/CDC" text="Career Development Center" isActive={location.pathname === '/CDC'} />
        <NavItem to="/Recruit" text="Recruit" isActive={location.pathname === '/Recruit'} />
        <NavItem to="/Message" text="Message" isActive={location.pathname === '/Message'} />
        <NavItem to="/Degree" text="Programs" isActive={location.pathname === '/Degree'} />
        <NavItem to="/RecruitmentProcess" text="Recruitment Process" isActive={location.pathname === '/RecruitmentProcess'} />
      </ul>
    </nav>
  );
};

const NavItem = ({ to, text, isActive }) => {
  return (
    <li className="inline-block list-none m-[5px_20px] font-[20px] pt-[20px]">
      <Link to={to} className={`text-white p-[14px] font-[50px] rounded-[30px] inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc] ${isActive ? 'border-b-2 border-white' : ''}`}>
        {text}
      </Link>
    </li>
  );
};

export default Navbar;