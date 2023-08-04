import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import styles from '../styles';
import { newsletter, logo } from '../assets';
type Inputs = {
    name : string,
    email : string,
}
const Newsletter = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<Inputs>();
    const onSubmit : SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className='relative w-full md:h-[444px] lg:h-[550px] bg-[#3AB984] flex flex-row justify-between'>
        <div className='absolute left-0 z-20 w-[60%] md:h-[444px] lg:h-[550px] bg-[#3AB984] -skew-x-[14deg] flex justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[400px] skew-x-[14deg] flex flex-col justify-center items-start'>
                <img src={logo} alt='logo' className='w-[37px] h-[30px]'/>
                <h1 className={`${styles.heading1} w-full font-garamond text-[46px] font-medium text-left my-4`}>Subscribe to our<br/>Newsletter</h1>
                <p className={`${styles.paragraph} font-oswald text-[15px] font-semibold uppercase w-full mb-5`}>Receive updates on our works!</p>
                <div className='h-[47px]'>
                    <input placeholder='Name' {...register("name", {required:true})} 
                    style={{
                        overflow: 'hidden',
                        borderTopLeftRadius: '4px',
                        }} 
                    className='w-[200px] h-full bg-[#FFF] border-r-[3px] border-[#469E79] px-5 text-black font-oswald'></input>
                    <input placeholder='Email' {...register("email",{required:true})} 
                    style={{
                        overflow: 'hidden',
                        borderTopRightRadius: '4px',
                        }} 
                    className='w-[200px] h-full bg-[#FFF] px-5 text-black font-oswald'></input>
                </div>
                <input 
                    style={{
                        overflow: 'hidden',
                        borderBottomLeftRadius: '4px',
                        borderBottomRightRadius: '4px',
                    }}
                    type='submit' className='w-full h-[47px] flex justify-center items-center bg-[#469E79] hover:bg-[#15382a] transition-all duration-200'/>
            </form>
        </div>
        <img src={newsletter} alt='newsletter' className='absolute lg:right-0 md:-right-10 lg:w-[50%] md:w-[763px] md:h-[444px] lg:h-[550px] z-10 object-cover'/>
    </div>
  )
}

export default Newsletter