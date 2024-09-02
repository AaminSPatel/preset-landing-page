// src/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
const linkCls= ` bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-3 hover:bg-orange-500 rounded-full transition duration-300`;
    return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-slate-800 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <div className="bg-white p-0.5 rounded-full">
            <img src="/bg1.jpg" alt="Logo" className="h-12 w-12 rounded-full" /> {/* Replace with your logo path */}
          </div>
          <h2 className="text-2xl font-bold">Sakil Khan</h2>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="#"
            className={linkCls}
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className={linkCls}
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className={linkCls}
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className={linkCls}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-700"></div>

      {/* Copyright Information */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center text-gray-400">
        <p>© 2024 Sakil Khan. All rights reserved.</p>
        <p className="mt-4 md:mt-0">
          Designed with Amin.S by <a href="#" className="text-orange-400 hover:underline">Aamin Patel</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
