import Featured from './Featured';
import About from './About';
import Designer from './Designer';
import Professional from './Professional';
import Newsletter from './Newsletter';
import Team from './Team';
import All_properties from './All_properties';
import Stats from './Stats';
import Testimonials from './Testimonials';
import { home_logo, logo,  } from '../assets';
const Body = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='lg:w-[95%] md:w-[95%] w-[95%] flex flex-col justify-center items-center lg:px-[100px] md:px-[20px]'>
            <Featured />
        </div>
        <div className='lg:w-[95%] md:w-[95%] w-[95%] rounded-full border-b-[4px] border-gray-300 my-10 lg:px-[100px] md:px-[20px]'></div>
        <div className='lg:w-[1000px] md:w-[95%] w-[95%] flex flex-col justify-center items-center '>
            <About />
        </div>
        <div className='w-[1000px] rounded-full border-b-[4px] border-gray-300 my-10 lg:px-[100px] md:px-[20px]'></div>
        <div className='relative w-[900px]'>
            <Designer />
        </div>
        <div className='w-[1000px] rounded-full border-b-[4px] border-gray-300 my-10 lg:px-[100px] md:px-[20px]'></div>
        <div className='lg:w-[1000px] md:w-[95%] w-[95%] flex flex-col justify-center items-center'>
            <Professional />
        </div>
        <div className='w-[1000px] rounded-full border-b-[4px] border-gray-300 my-10 lg:px-[100px] md:px-[20px]'></div>
        <div className='relative lg:w-[100%] md:w-[100%] w-[100%] flex flex-col justify-center items-center'>
            <Newsletter />
        </div>
        <div className='lg:w-[1000px] md:w-[95%] w-[95%] flex flex-col justify-center items-center mt-3'>
            <Team />
        </div>
        <div className='lg:w-[90%] md:w-[95%] w-[95%] flex flex-col justify-center items-center mt-[100px]'>
            <All_properties />
        </div>
        <div className='lg:w-[100%] md:w-[100%] w-[100%] flex flex-col justify-center items-center mt-[100px]'>
            <Stats />
        </div>
        <div className='lg:w-[100%] md:w-[100%] w-[100%] flex flex-col justify-center items-center mt-[100px]'>
            <Testimonials />
        </div>
        <img src={home_logo} alt='home' className='h-[404px] object-cover w-full py-[50px]'/>
        <div className='w-full flex flex-row justify-center items-center mt-[20px]'>
            <div className='border-b-[2px] border-gray-400 w-full flex justify-center items-center'>
                <img src={logo} alt='logo' className='absolute w-[70px] h-[21px] bg-[#f0f0f5] px-[22px]'/>
            </div>
        </div>
    </div>
  );
};

export default Body;