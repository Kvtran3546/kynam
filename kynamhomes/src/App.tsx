import { useState } from 'react'
import './App.css'
import {Navbar, Body, Intro} from './components'
import {home} from './assets'


function App() {

  return (
    <div className=''>
      <div className='relative'>
        <div className='relative z-10 bg-[#FFFFFF]'>
          <Navbar/>
        </div>
        <img src={home} alt='home' className='absolute lg:-top-[99px] md:-top-[20px] z-0 w-full'/>
        <div className='relative z-10'>
          <Intro />
        </div>
      </div>
    </div>
  )
}

export default App
