import React from 'react'
import styles from '../styles';
import { sqft, bathroom, bedroom } from '../assets';

interface dealProps {
    img: string;
    property_type: string;
    price: number;
    address: string;
    bedrooms: number;
    bathrooms: number;
    sqfoot: number;
}
const DealCard: React.FC<dealProps> = ({img, property_type, price, address, bedrooms, bathrooms, sqfoot}) => {
    const formatPriceWithCommas = (number: number): string => {
        return number.toLocaleString();
    }
  return (
    <div className='relative w-[440px] h-[280px] flex flex-row justify-start items-center md:mx-3 rounded-lg my-5'>
        <div
            style={{
            borderTopLeftRadius: '4px',
            borderBottomLeftRadius: '4px',
            }} className='relative w-[230px] h-full overflow-hidden'
        >
            <img src={img} alt='model_img' className='absolute left-0 top-0 object-cover w-full h-full transition-transform duration-500 hover:scale-110'/>
        </div>
        <div className='h-full w-[270px] flex flex-col border-y-[1px] border-r-[1px] border-gray-400 justify-start items-center' style={{
            borderTopRightRadius: '4px',
            borderBottomRightRadius: '4px',
            }} >
            <div className='w-full mt-2 mb-3'>
                <h2 className={`${styles.heading2} text-[13px] font-bold text-black uppercase ml-3`} >{property_type}</h2>
                <p className={`${styles.paragraph} text-[23px] font-normal text-[#69707B] ml-3 text-left`}>${formatPriceWithCommas(price)}</p>
                <p className={`${styles.paragraph} text-[14px] text-[#69707B] ml-3 mt-2`}>{address}</p>
            </div>
            <div style={{
                width: '100%',
                borderBottomLeftRadius: '4px',
                borderBottomRightRadius: '4px',
                }}
                className='w-[100%] flex flex-col justify-center '>
                <div className='w-[100%] flex lg:justify-start flex-col'>
                    <p className={`${styles.paragraph} flex flex-row justify-start items-center pl-3 font-normal text-[#69707B] h-[50px] border-t-[1px] border-gray-400`}><img src={bedroom} className='mr-2 w-[22px] h-[22px]'/>{bedrooms} bedrooms</p>
                    <p className={`${styles.paragraph} flex flex-row justify-start items-center pl-3 font-normal text-[#69707B] h-[50px] border-y-[1px] border-gray-400`}><img src={bathroom} className='mr-2 w-[22px] h-[22px]'/>{bathrooms} bathrooms</p>
                </div>
                <p className={`${styles.paragraph} flex justify-start items-center pl-3 font-normal text-[#69707B] h-[50px]`}><img src={sqft} className='mr-2 w-[22px] h-[22px]'/>{formatPriceWithCommas(sqfoot)} sqft</p>
            </div>
        </div>
    </div>
  )
}

export default DealCard