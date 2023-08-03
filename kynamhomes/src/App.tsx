import { useState, useRef } from 'react'
import './App.css'
import {Navbar, Body, Intro} from './components'
import {home} from './assets'


function App() {
  const Body_ref = useRef<HTMLHeadingElement>(null);
  return (
    <div className='relative flex flex-col'>
      <div className='relative z-20 bg-[#FFFFFF]'>
        <Navbar/>
      </div>
      <div className='relative z-10 w-full'>
        <Intro body_ref={Body_ref} />
      </div>
      <div ref={Body_ref} className='relative w-full lg:px-[100px] md:px-[20px]'>
        <Body/>
      </div>
    </div>
  )
}

export default App
