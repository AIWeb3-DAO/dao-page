"use client"

import React from 'react'
import ReactPlayer from 'react-player'
import VideoPlayer3 from './VidPlayer';
import FullVideoStats from '../FullVideoStats';
import ChannelInfo from '../ChannelInfo';
import Comments from './Comments';
import HeaderNav from '../Header/HeaderNav';
export default function PlayePage() {


  return (
    <>
    <HeaderNav  />
    <div className='w-full  min-h-screen h-full flex space-x-3'>
        <div  className='w-full xl:w-[80%] min-h-screen px-2'>
         <div className='  h-[50vh] xl:h-[90vh]'>
         <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' 
           
           width={"100%"}
           height={"100%"}
           
         />

     


         </div>
         <div  className='my-4 px-3 '>
         <h1 className='text-lg sm:text-xl md:text-2xl text-text '>This  is just  testing  video we want to see</h1>

         <FullVideoStats  />
       
      <Comments   />
         </div>
      
         </div>

      <h2>Related videos</h2>
    </div>
    </>
  )
}
