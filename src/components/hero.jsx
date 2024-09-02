// src/HeroSection.js
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Using react-icons for navigation
//import './HeroSection.css'; // Optional CSS file if needed for custom styles

const images = [
  './travel1.jpg', // Replace with your actual image paths
  './travel2.jpg',
  './travel3.jpg',
  './travel4.jpg',
  './sunset.jpg',
  './pin9.jpeg',
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [ animateState,setAnimateState] = useState(false);
  // Function to handle the next image click
  const handleNext = () => {
    let bgStyle =     document.getElementById('heroBgImage').style;
    let imageStyle1 =     document.getElementById('images1').style;
    let imageStyle2 =     document.getElementById('images2').style;
    let imageStyle3 =     document.getElementById('images3').style;
    setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    bgStyle.animationName='herobg';
    imageStyle1.animationName='image1';
    imageStyle2.animationName='image2';
    imageStyle3.animationName='image3';
   // document.getElementById('image0').style.animationName='herobg';
   setAnimateState(true)
   setTimeout(()=>{
    setAnimateState(false)
   },500)
     setTimeout(() => {
      imageStyle1.animationName='unset';
      imageStyle2.animationName='unset';
      imageStyle3.animationName='unset';
      bgStyle.animationName='unset';
      bgStyle.backgroundSize='cover';
    }, 1001); 
 
  };
const handlePrev = () => {
    setCurrent(current === 0 ? (images.length - 1) : (current - 1) % images.length);
    let bgStyle =     document.getElementById('heroBgImage').style;
    let imageStyle1 =     document.getElementById('images1').style;
    let imageStyle2 =     document.getElementById('images2').style;
    let imageStyle3 =     document.getElementById('images3').style;
    bgStyle.animationName='herobg1';
    imageStyle1.animationName='image11';
    imageStyle2.animationName='image21';
    imageStyle3.animationName='image31';
   setAnimateState(true)
   setTimeout(()=>{
    setAnimateState(false)
   },500)
     setTimeout(() => {
      imageStyle1.animationName='unset';
      imageStyle2.animationName='unset';
      imageStyle3.animationName='unset';
      bgStyle.animationName='unset';
      bgStyle.backgroundSize='cover';
      }, 1001); 
 
  };

  // Determine the images to display in the carousel
  const visibleImages = [
    //images[current + 1],
    images[(current + 1) % images.length],
    images[(current + 2) % images.length],
    images[(current + 3) % images.length],
  ];

  useEffect(() => {
    // Set up the interval to call handleNext every 4 seconds
    const rightClick = setInterval(() => {
      handleNext();
    }, 6000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(rightClick);
    };
  }); // Empty dependency array to ensure the effect runs only once when the component mounts


  return (
    <section id='heroBgImage'
      className="h-[500px]  relative flex items-center justify-center overflow-hidden transition-all"
      style={{ backgroundImage: `url(${images[(current ) % images.length]})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex "></div>
      <div>
      <div className="relative z-10 text-center text-white p-4 w-full">
        <h1 className="text-5xl font-bold mb-4">Discover Our <span className='text-orange-400'>Free</span>  Lightroom Presets</h1>
        <p className="text-xl mb-6">Enhance your photos with our unique presets.</p>
      </div>
      <div className="relative flex space-x-4 z-20 text-white w-screen justify-end pr-8 ">
       
        <img
            src={images[(current ) % images.length]}
            alt={` ${current}`}
            id='images0'
            className={`h-48 absolute ${animateState?'' : 'hidden'} w-56 rounded-md shadow-lg  transform  hover:scale-105`}
          />
          <img
            src={visibleImages[0]}
            alt={` ${current}`}
            id={`${animateState?'images1' : 'images1'}`}
            className={`h-48 max-w-48 w-48 rounded-md shadow-lg  transform  hover:scale-105`}
          />
          <img
            src={visibleImages[1]}
            alt={` ${current}`}
            id='images2'
            className={`h-48 max-w-48 w-48 rounded-md shadow-lg  transform  hover:scale-105`}
          /> 
          <img
            src={visibleImages[2]}
            alt={` ${current}`}
            id='images3'
            className={`h-48 max-w-48 w-48 rounded-md shadow-lg  transform  hover:scale-105`}
          />
      </div>
      <div className='w-full flex justify-center mt-8'>
         <button
        onClick={handlePrev}
        className="absolute right-1/2 mr-3 p-2 bg-white text-black rounded-full shadow hover:bg-gray-300"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute p-2 ml-6 bg-white text-black rounded-full shadow hover:bg-gray-300"
      >
        <FaArrowRight />
      </button>
      </div>
     
      </div>
      
    </section>
  );
};

export default HeroSection;
