// src/PresetGallery.js
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaExternalLinkSquareAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { presets } from '../presets';

// Sample preset data

const PresetGallery = () => {
    const [searchedQuery,setSearchedQuery] = useState('')
    const [preset,setPreset] = useState([]);
    const {query} = useParams();
    //const query = 'evening';
    useEffect(()=>{
            setSearchedQuery(query);
            searchFunction(query)

           // console.log(searchedQuery);
    },[query])
     useEffect(()=>{
            setPreset(presets);
           // console.log(searchedQuery);
    },[])
    
function searchFunction(query){
    let newArrrayToSearch = [];
  
        newArrrayToSearch = presets.filter((item)=>
            {
               if( item.description.toLowerCase().indexOf(query) !== -1) return true;
               if( item.name.toLowerCase().indexOf(query) !== -1) return true;
               if( item.image.toLowerCase().indexOf(query) !== -1) return true;
               if( item.date.toLowerCase().indexOf(query) !== -1) return true;
               if( item.id.toLowerCase().indexOf(query) !== -1) return true;
               if( item.category.toLowerCase().indexOf(query) !== -1) return true;
             })
           setPreset(newArrrayToSearch)
             console.log(newArrrayToSearch,query)
}
    let arry = preset.filter((item)=>item.description.toLowerCase().indexOf(query) !== -1)
    //console.log(arry);
 
    
  const [currentPage, setCurrentPage] = useState(1);
  const presetsPerPage = 6; // Number of presets per page

  // Calculate total pages
  const totalPages = Math.ceil(preset.length / presetsPerPage);

  // Get current page presets
  const indexOfLastPreset = currentPage * presetsPerPage;
  const indexOfFirstPreset = indexOfLastPreset - presetsPerPage;
  const currentPresets = preset.slice(indexOfFirstPreset, indexOfLastPreset);

  // Change page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
const navigate = useNavigate();
  return (
    <div className="p-4 min-h-[500px]" id='gallery'>
<h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          All Presets
        </h2>
      {/* Preset Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentPresets.map((preset) => (
          <div
            key={preset.id}
            className="bg-slate-200 dark:bg-slate-800  shadow-lg rounded-md overflow-hidden"
          >
            <div className="relative">
              <img src={preset.image} alt={preset.description} className="w-full h-64 object-cover hover:scale-105 transition-all" />
              <span className="absolute top-2 left-2 bg-black bg-opacity-45 text-white text-xs px-2 py-1 rounded-md">
                {preset.date}
              </span>
              <span className="absolute bottom-2 right-2  bg-gradient-to-r from-purple-800 to-pink-800 bg-opacity-80 text-white text-xs px-2 py-1 rounded-md">
                {preset.category}
              </span>
            </div>
            <div className="p-4 flex justify-between">
              <p className="text-gray-900 dark:text-gray-300">{preset.description}</p>
              <button className='w-28 h-8 flex justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-500 px-2 rounded-md text-white'
              onClick={()=>{navigate(`/preset-details/${preset.id}`)}}
              >
                Download
                <FaExternalLinkSquareAlt/>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className={`p-2 bg-gradient-to-r from-gray-900 via-gray-800 to-slate-800  text-white dark:text-white rounded-full hover:bg-gray-400 dark:hover:bg-gray-600 transition ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <FaArrowLeft />
        </button>
        <span className="text-gray-700 dark:text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`p-2 bg-gradient-to-r from-gray-900 via-gray-800 to-slate-800  text-white dark:text-white rounded-full hover:bg-gray-400 dark:hover:bg-gray-600 transition ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PresetGallery;
