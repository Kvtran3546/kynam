import { designer1, designer2, leftarrow, rightarrow } from '../assets';
import styles from '../styles';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Designer = () => {
    
  return (
    <CarouselProvider
      naturalSlideWidth={900}
      naturalSlideHeight={500}
      totalSlides={2}
    >
      <Slider>
        <Slide index={0}>
            <div className='flex flex-col justify-center items-center'>
                <img src={designer1} alt="designer1" className='-z-10 absolute w-[900px] h-[500px] top-0'/>
                <div className='absolute bg-white w-[470px] h-[300px] left-10 bottom-[70px] border-l-[8px] border-[#3AB984] rounded-md pl-10 pr-20 pt-10'>
                    <h2 className={`${styles.heading2} font-poppins text-[16px] font-semibold text-black uppercase`}>Remodeling</h2>
                    <p className={`${styles.paragraph} font-garamond text-[26px] font-medium text-black`}>We offer unique remodeling options for your home.</p>
                    <div className='w-[60%] border-b-[4px] border-[#3AB984] rounded-full mt-5 mb-5'></div>
                    <p className={`${styles.paragraph} font-lato text-[16px] font-normal text-[#69707B]`}>Our team of talented designers and architects will work closely with you to transform your vision into reality.</p>
                </div>
            </div>
        </Slide>
        <Slide index={1}>
            <div className='flex flex-col justify-center items-center'>
                <img src={designer2} alt="designer2" className='-z-10 absolute w-[900px] h-[500px] top-0'/>
                <div className='absolute bg-white w-[470px] h-[300px] left-10 bottom-[100px] border-l-[8px] border-[#3AB984] rounded-md pl-10 pr-20 pt-10'>
                    <h2 className={`${styles.heading2} font-poppins text-[16px] font-semibold text-black uppercase`}>Design</h2>
                    <p className={`${styles.paragraph} font-garamond text-[26px] font-medium text-black`}>Our designers will deliver a proposal in just few days.</p>
                    <div className='w-[60%] border-b-[4px] border-[#3AB984] rounded-full mt-5 mb-5'></div>
                    <p className={`${styles.paragraph} font-lato text-[16px] font-normal text-[#69707B]`}>Whether you're looking to revitalize your kitchen, add extra space, or create a stunning outdoor living area, we've got you covered.</p>
                </div>
            </div>
        </Slide>
      </Slider>
        <div className='absolute bottom-0 right-0 flex flex-row hover:'>
            <ButtonBack className='flex justify-center items-center bg-[#3AB984] w-[40px] h-[40px] hover:bg-[#2A8A65] transition-all duration-200'><img src={leftarrow} alt='leftarrow' className='w-[8px] h-[14px]'/></ButtonBack>
            <ButtonNext className='flex justify-center items-center bg-[#3AB984] w-[40px] h-[40px] hover:bg-[#2A8A65] transition-all duration-200'><img src={rightarrow} alt='rightarrow' className='w-[8px] h-[14px]'/></ButtonNext>
        </div>
    </CarouselProvider>
  )
}

export default Designer