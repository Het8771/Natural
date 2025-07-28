import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../image/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#00715D] text-white px-6 md:px-16 pt-10 pb-6">
      {/* Top section */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="mb-8">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-20 w-auto object-contain" />
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-medium mb-4 leading-snug">
              Subscribe to our
              <br />
              newsletter
            </h2>
            <div className="flex mt-6">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 rounded-l-md w-full bg-transparent border border-white placeholder-white text-white outline-none"
              />
              <button className="bg-white text-[#025D57] px-4 py-2 rounded-r-md">
                <FiArrowRight />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/90 text-md">
              <li><Link to="/Allproduct">Collection</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Diamond">About Diamond</Link></li>
              <li><Link to="/Profilepage">Profile</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <ul className="space-y-2 text-white/90 text-md">
              <li><a href="#">Ring</a></li>
              <li><a href="#">Bracelet</a></li>
              <li><a href="#">Neckless</a></li>
              <li><a href="#">Earing</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-medium mb-4">Help</h3>
            <ul className="space-y-2 text-white/90 text-md">
              <li><a href="#">Privacy & Policy</a></li>
              <li><Link to="/Contactus">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 mb-6" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-center md:text-left">
            © 2025 Company Name. All rights reserved. Developed by Godhani technology
          </p>
          <div className="flex space-x-4 text-white text-xl">
            <a
              href="https://www.facebook.com/trifonjewels"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FiFacebook />
            </a>
            <a
              href="https://twitter.com/trifonjewels"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FiTwitter />
            </a>
            <a
              href="https://www.instagram.com/trifonjewels"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
