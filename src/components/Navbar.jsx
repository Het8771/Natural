import React, { useState } from "react";
import {
  FiSearch,
  FiShoppingBag,
  FiHeart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import Logo from "../Image/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <div className="w-full relative z-50">
      {/* Top Bar */}
      <div className="relative bg-[#00715D] text-white text-sm text-center py-2 px-4">
        <div className="text-center font-medium">FREE SHIPPING · COUPON: FREE</div>

        {/* Language Selector */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="India"
            className="w-5 h-5 rounded-full border border-gray-300 cursor-pointer"
            onClick={() => setShowLanguage(!showLanguage)}
          />
          {showLanguage && (
            <div className="absolute right-0 mt-2 bg-white text-black border rounded shadow z-50 w-40">
              <ul className="py-2 text-left text-sm">
                {[
                  { code: "de", label: "Deutsch" },
                  { code: "gb", label: "English" },
                  { code: "es", label: "Español" },
                  { code: "fr", label: "Français" },
                ].map(({ code, label }) => (
                  <li
                    key={code}
                    className="flex items-center px-4 py-1 hover:bg-gray-100 cursor-pointer"
                  >
                    <img src={`https://flagcdn.com/w20/${code}.png`} className="mr-2" alt={label} />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white px-4 py-3 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-17 w-auto object-contain" />
        </Link>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex space-x-6 text-md font-medium text-gray-700">
          <Link to="/Allproduct">COLLECTION</Link>
          <Link to="/Allproduct">BEST SELLER</Link>
          <Link to="/diamond">DIAMOND</Link>
          <Link to="/About">ABOUT</Link>
        </div>

        {/* Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-xl text-[#00715D]">
          <button onClick={() => setShowSearch(!showSearch)}><FiSearch /></button>
          <Link to="/cart"><FiShoppingBag /></Link>
          <Link to="/Wishlist"><FiHeart /></Link>
          <Link to="/Profilepage"><FiUser /></Link>
        </div>

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          {menuOpen ? (
            <FiX className="text-2xl text-[#00715D]" onClick={() => setMenuOpen(false)} />
          ) : (
            <FiMenu className="text-2xl text-[#00715D]" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Search Bar (Below navbar) */}
      {showSearch && (
        <div className="w-full px-6 py-4 bg-[#eaf3f2]">
          <div className="max-w-5xl mx-auto flex items-center px-4 py-2 rounded shadow bg-white">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            />
            <FiSearch className="text-gray-500 text-xl ml-2" />
          </div>
        </div>
      )}

     {/* Mobile Slide-in Menu */}
<div
  className={`fixed top-0 right-0 h-full w-80 bg-white z-50  transform transition-transform duration-300 ease-in-out ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="p-6 flex flex-col gap-5 text-md font-medium text-gray-800">
    {/* ❌ Close Button */}
    <div className="flex justify-between items-center mb-4">
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <img src={Logo} alt="Logo" className="h-20 w-auto" />
      </Link>
      <button onClick={() => setMenuOpen(false)}>
        <FiX className="text-2xl text-[#00715D]" />
      </button>
    </div>

    {/* Menu Items */}
    <Link to="/Allproduct" onClick={() => setMenuOpen(false)}>COLLECTION</Link>
    <Link to="/Allproduct" onClick={() => setMenuOpen(false)}>BEST SELLER</Link>
    <Link to="/diamond" onClick={() => setMenuOpen(false)}>DIAMOND</Link>
    <Link to="/About" onClick={() => setMenuOpen(false)}>ABOUT</Link>

    {/* Icons */}
    <div className="flex justify-start gap-6 pt-2 text-xl text-[#00715D]">
      <FiSearch onClick={() => { setShowSearch(!showSearch); setMenuOpen(false); }} />
      <Link to="/cart"><FiShoppingBag /></Link>
      <Link to="/Wishlist"><FiHeart /></Link>
      <Link to="/Profilepage"><FiUser /></Link>
    </div>
  </div>
</div>

      {/* Backdrop when mobile menu is open */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
