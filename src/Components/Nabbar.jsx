import React, { useState, useEffect } from "react";
import { CiFacebook } from "react-icons/ci";
import { RiInstagramLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Nabbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 2) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div>
      {/* Mobile Menu Overlay */}
      {isOpenMenu && (
        <div className="sm:hidden fixed z-20 inset-0 bg-slate-800">
          <div className="relative text-end mr-4 mt-4">
            <button onClick={() => setIsOpenMenu(false)}>
              <ImCross color="white" size={40} />
            </button>
          </div>

          <div className="flex flex-col pt-8 text-white text-2xl font-semibold text-center gap-4">
            <Link to="/" onClick={() => setIsOpenMenu(false)}>HOME</Link>
            <Link to="/about" onClick={() => setIsOpenMenu(false)}>ABOUT</Link>
            <Link to="/blog" onClick={() => setIsOpenMenu(false)}>BLOG</Link>
            <Link to="/contactus" onClick={() => setIsOpenMenu(false)}>CONTACT US</Link>
          </div>
        </div>
      )}

      {/* Navbar */}
      <div
        className={`fixed top-0 w-full z-10 py-3 duration-300 ${
          navbar ? "bg-blue-400" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-10">
          {/* Logo / Brand */}
          <h1 className="text-2xl text-white font-bold">Fusionbyte IT Consultation & Solutions</h1>

          {/* Desktop Nav Links */}
          <div className="hidden sm:flex text-white text-sm gap-6">
            <Link to="/" className="hover:underline">HOME</Link>
            <Link to="/about" className="hover:underline">ABOUT</Link>
            <Link to="/blog" className="hover:underline">BLOG</Link>
            <Link to="/contactus" className="hover:underline">CONTACT US</Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="sm:hidden">
            <button onClick={() => setIsOpenMenu(true)}>
              <GiHamburgerMenu size={30} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nabbar;
