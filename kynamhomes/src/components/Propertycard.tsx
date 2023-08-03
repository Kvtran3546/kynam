import React from 'react';
import styles from '../styles';
import {bedroom, bathroom, sqft} from '../assets';
interface propertyCardProps {
    img: string;
    buildingType : string;
    price: number;
    address: string;
    bedrooms: number;
    bathrooms: number;
    sqFootage: number;
}
const Propertycard: React.FC<propertyCardProps> = ({img, buildingType, price, address, bedrooms, bathrooms, sqFootage}) => {
    const formatPriceWithCommas = (price: number): string => {
        return price.toLocaleString();
    };
  return (
    <div className='lg:w-[300px] flex flex-col justify-start items-center md:mx-1 rounded-lg'>
        <div
            style={{
            width: '100%',
            height: '50%',
            overflow: 'hidden',
            borderTopLeftRadius: '4px',
            borderTopRightRadius: '4px',
            }}
        >
            <img src={img} alt='model_img' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className='w-full border-x-[2px] border-gray-300'>
            <h2 className={`${styles.heading2} text-[13px] font-bold text-black uppercase ml-3`} >{buildingType}</h2>
            <p className={`${styles.paragraph} text-[23px] font-normal text-[#69707B] ml-3 text-left`}>${formatPriceWithCommas(price)}</p>
            <p className={`${styles.paragraph} text-[14px] text-[#69707B] ml-3 mt-2`}>{address}</p>
        </div>
        <div style={{
            width: '100%',
            borderBottomLeftRadius: '4px',
            borderBottomRightRadius: '4px',
            }}
            className='w-[100%] flex flex-col border-[2px] border-gray-300'>
            <div className='w-[100%] flex lg:justify-start lg:flex-row md:flex-col border-2'>
                <p className={`${styles.paragraph} flex flex-row justify-start items-center pl-3 font-normal text-[#69707B] h-[40px] border-b-[2px] lg:border-r-[2px] border-gray-300 lg:w-[50%]`}><img src={bedroom} className='mr-2 w-[22px] h-[22px]'/>{bedrooms} bedrooms</p>
                <p className={`${styles.paragraph} flex flex-row justify-start items-center pl-3 font-normal text-[#69707B] h-[40px] border-b-[2px] border-gray-300 lg:w-[50%]`}><img src={bathroom} className='mr-2 w-[22px] h-[22px]'/>{bathrooms} bathrooms</p>
            </div>
            <p className={`${styles.paragraph} flex justify-start items-center pl-3 font-normal text-[#69707B] h-[40px]`}><img src={sqft} className='mr-2 w-[22px] h-[22px]'/>{formatPriceWithCommas(sqFootage)} sqft</p>
        </div>
    </div>
  )
}

export default Propertycard