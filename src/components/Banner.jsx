import React from 'react';
import ban from '../assets/ban.png';

const Banner = () => {
  return (
    <div
      className='relative w-full h-screen flex items-center justify-center bg-white'
    >
      {/* Content container */}
      <div className='relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-12'>
        {/* Left Text */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left md:w-1/3 space-y-6 mb-6 md:mb-0'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 leading-snug'>
            Buy your course at the Best Prices.
          </h2>
          <p className='text-sm md:text-lg font-serif text-gray-600'>
            Discover top-quality courses tailored to your interests. Unlock knowledge and skills with our diverse range of offerings!
          </p>
        </div>

        {/* Center Image */}
        <div className='flex justify-center w-full md:w-1/3 my-4 md:my-0'>
          <img
            src={ban}
            alt="Banner"
            className='w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain'
          />
        </div>

        {/* Right Text */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left md:w-1/3 space-y-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 leading-snug'>
            Enhance your learning experience today!
          </h2>
          <p className='text-sm md:text-lg font-serif text-gray-600'>
            Choose from a curated selection of courses to advance your career, enrich your knowledge, or explore new hobbies.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      {/* <div className='absolute bottom-10 w-full flex justify-center'>
        <div className='relative'>
          <input
            type="text"
            placeholder='Search your course'
            className='w-48 md:w-64 h-10 md:h-12 pl-4 pr-12 rounded-full text-gray-700 outline-none text-sm border border-gray-300 shadow-md'
          />
          <button
            type='submit'
            className='absolute right-1 top-1 bg-blue-700 w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-all ease-in duration-200'
          >
            🔍
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
