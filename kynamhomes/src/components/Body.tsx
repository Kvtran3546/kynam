import React from 'react';
import Featured from './Featured';
import About from './About';
import Designer from './Designer';

const Body = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='lg:w-[1200px] md:w-[1000px] flex flex-col justify-center items-center'>
            <Featured />
        </div>
        <div className='w-[1000px] rounded-full border-b-[4px] border-gray-300 my-10'></div>
        <div className='w-[1000px] flex flex-col justify-center items-center'>
            <About />
        </div>
        <div className='w-[1000px] rounded-full border-b-[4px] border-gray-300 my-10'></div>
        <div className='relative w-[900px]'>
            <Designer />
        </div>
        <div className='w-[1000px] rounded-full border-b-[4px] border-gray-300 my-10'></div>
    </div>
  );
};

export default Body;