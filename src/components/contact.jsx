// src/ContactSection.js
import React from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaLocationArrow, FaInstagram, FaPhone, FaEnvelopeOpen, FaInstagramSquare } from 'react-icons/fa';

const ContactSection = () => {
    const iconCls = `bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-md shadow-md hover:from-pink-600 hover:to-purple-600 w-8 h-8`;
  return (
    <div className="py-8 px-4 flex justify-center items-center flex-row flex-wrap w-full" id='contact'>
      <div className="md:w-1/2 w-full h-[450px] sm:mx-auto bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-3">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
          We would love to hear from you! Please fill out the form below to send us a message.
        </p>

        <form className="space-y-3">
          {/* Name Field */}
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-10 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 dark:focus:ring-pink-500 outline-none dark:bg-slate-700 dark:text-white"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400 dark:text-gray-500" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-10 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 dark:focus:ring-pink-500 outline-none dark:bg-slate-700 dark:text-white"
              required
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <FaCommentDots className="absolute top-3 left-3 text-gray-400 dark:text-gray-500" />
            <textarea
              placeholder="Your Message"
              className="w-full pl-10 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 dark:focus:ring-pink-500 outline-none dark:bg-slate-700 dark:text-white resize-none h-24"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-md shadow-md hover:from-pink-600 hover:to-purple-600 transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className='md:w-1/2 w-full mx-auto md:h-[450px] sm:h-72 text-white bg-slate-800 p-12 flex justify-center items-start flex-col gap-6 rounded-lg shadow-lg'>
        <h2 className='text-4xl font-semibold'>
        Get in Touch with Us
        </h2>
        <p className='text-gray-100'>
        We're here to help you with any questions, feedback, or support you may need. Reach out to us, and we'll get back to you as soon as possible!
        </p>
        <ul className='flex items-start justify-center flex-col gap-2'>
            <li className='flex justify-center items-center gap-2'><FaLocationArrow className={iconCls}/>Indore</li>
            <li className='flex justify-center items-center gap-2'><FaInstagramSquare className={iconCls}/>sakilkhan...</li>
            <li className='flex justify-center items-center gap-2'><FaPhone className={iconCls}/>91 930539503</li>
            <li className='flex justify-center items-center gap-2'><FaEnvelopeOpen className={iconCls}/>sakilkahan@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSection;
