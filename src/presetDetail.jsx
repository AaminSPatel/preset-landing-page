// src/components/PresetDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { SiAdobelightroom } from 'react-icons/si';
import { presets } from './presets'; // Importing the mock presets data
import { FaLightbulb } from 'react-icons/fa';

const PresetDetail = () => {
  const { id } = useParams(); // Capture the ID from the URL
  //const  id  = 1; // Capture the ID from the URL
  const preset = presets.find((preset) => preset.id === id); // Find the preset matching the ID
//console.log(id,preset);

  // If no preset is found, show an error message
  if (!preset) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <h1 className="text-2xl">Preset not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      {/* Preset Image */}
      <div className="w-full max-w-3xl mb-8">
        <img
          src={preset.image}
          alt={preset.name}
          className="w-full h-screen rounded-xl shadow-lg"
        />
      </div>

      {/* Preset Description and Lightroom Icon */}
      <div className="text-left w-full lg:w-3/4">
        <div className="flex items-center mb-4 w-full">
          <SiAdobelightroom className="text-4xl text-blue-500 mr-3 w-16" />
          <h1 className="text-3xl font-bold w-full">{preset.name}</h1>
          <p className='text-right w-full'>{preset.date}</p>
        </div>
        <p className="text-gray-300 mb-6">{preset.description}</p>

        {/* Download Preset Button */}
        <a
          href={preset.downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Download Preset
        </a>
      </div>
    </div>
  );
};

export default PresetDetail;
