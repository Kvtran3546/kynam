import React from 'react';
import Featured from './Featured';
import About from './About';
import Designer from './Designer';
import Professional from './Professional';
import Newsletter from './Newsletter';
import Team from './Team';
import All_properties from './All_properties';
import Stats from './Stats';

const Body = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='lg:w-[1400px] md:w-[1000px] flex flex-col justify-center items-center lg:px-[100px] md:px-[20px]'>
            <Featured />
        </div>
        <div className='w-[1000px] rounded-full border-b-[4px] border-gray-300 my-10 lg:px-[100px] md:px-[20px]'></div>
        <div className='w-[1000px] flex flex-col justify-center items-center '>
            <About />
        </div>
        <div className='w-[1000px] rounded-full border-b-[4px] border-gray-300 my-10 lg:px-[100px] md:px-[20px]'></div>
        <div className='relative w-[900px]'>
            <Designer />
        </div>
        <div className='w-[1000px] rounded-full border-b-[4px] border-gray-300 my-10 lg:px-[100px] md:px-[20px]'></div>
        <div className='w-[1000px] flex flex-col justify-center items-center'>
            <Professional />
        </div>
        <div className='w-[1000px] rounded-full border-b-[4px] border-gray-300 my-10 lg:px-[100px] md:px-[20px]'></div>
        <div className='w-full flex flex-col justify-center items-center'>
            <Newsletter />
        </div>
        <div className='w-full flex flex-col justify-center items-center mt-3'>
            <Team />
        </div>
        <div className='md:w-[1000px] lg:w-[1500px] flex flex-col justify-center items-center mt-[100px]'>
            <All_properties />
        </div>
        {/* <div className='md:w-[1000px] lg:w-[1500px] flex flex-col justify-center items-center mt-[100px]'>
            <Stats />
        </div> */}
    </div>
  );
};

export default Body;