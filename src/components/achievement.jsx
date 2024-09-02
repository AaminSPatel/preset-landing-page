// src/components/Achievements.js
import React from 'react';
import { FaEdit, FaUsers, FaImages } from 'react-icons/fa'; // Icons from react-icons

const Achievements = () => {
  // Achievement data array
  const achievements = [
    {
      id: 1,
      title: 'Editing Mastery',
      description: 'Achieved excellence in photo editing with 50+ edited presets.',
      icon: <FaEdit className="text-4xl text-white" />,
      gradient: 'from-gray-900 via-gray-900 to-gray-800 ',
    },
    {
      id: 2,
      title: 'Happy Customers',
      description: 'Serving over 1,00 satisfied customers worldwide.',
      icon: <FaUsers className="text-4xl text-white" />,
      gradient: 'from-gray-900 via-gray-900 to-gray-800 ',
    },
    {
      id: 3,
      title: 'Preset Collection',
      description: 'Created a library of 30+ unique presets for all types of photos.',
      icon: <FaImages className="text-4xl text-white" />,
      gradient: 'from-gray-900 via-gray-900 to-gray-800 ',
    },
  ];

  return (
    <div className="py-12 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-black mb-10">Our Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`bg-gradient-to-r ${achievement.gradient} p-6 rounded-xl shadow-lg shadow-black transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center`}
          >
            {/* Icon */}
            <div className="mb-4">{achievement.icon}</div>
            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
            {/* Description */}
            <p className="text-white text-sm">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
