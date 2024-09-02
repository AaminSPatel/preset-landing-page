// src/PresetGallery.js
import React, { useState } from "react";
import { presets } from "../presets";
import { FaArrowAltCircleRight, FaArrowLeft, FaArrowRight, FaExternalLinkSquareAlt, FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PresetGallery = () => {
  const currentPresets = presets.slice(0, 6);

  const navigate= useNavigate();
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Presets
      </h2>
      {/* Preset Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentPresets.map((preset) => (
          <div
            key={preset.id}
            className="bg-slate-200 dark:bg-slate-800  shadow-lg rounded-md overflow-hidden"
          >
            <div className="relative">
              <img
                src={preset.image}
                alt={preset.description}
                className="w-full h-64 object-cover hover:scale-105 transition-all"
              />
              <span className="absolute top-2 left-2 bg-black bg-opacity-45 text-white text-xs px-2 py-1 rounded-md">
                {preset.date}
              </span>
              <span className="absolute bottom-2 right-2  bg-gradient-to-r from-purple-800 to-pink-800 bg-opacity-80 text-white text-xs px-2 py-1 rounded-md">
                {preset.category}
              </span>
            </div>
            <div className="p-4 flex justify-between">
              <p className="text-gray-900 dark:text-gray-300">
                {preset.description}
              </p>
              <button
                className="w-28 h-8 flex justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-500 px-2 rounded-md text-white"
                onClick={() => {
                  navigate(`/preset-details/${preset.id}`);
                }}
              >
                Download
                <FaExternalLinkSquareAlt />
              </button>
            </div>
          </div>
        ))}
        
      </div>
      <button className="flex justify-end gap-3 items-center w-full my-2">
          <span className="flex items-center gap-2 bg-slate-800 text-white bg-gradient-to-r from-gray-700 via-slate-700 to-slate-800 rounded-sm p-1"  onClick={()=>{navigate('/gallery/*')}}>
            See More <FaArrowRight/>
          </span>
          
        </button>
    </div>
  );
};

export default PresetGallery;
