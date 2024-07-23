"use client"

import React from 'react'
import ReactPlayer from 'react-player'
import { Modal, ModalBody, ModalContent,ModalTrigger,useModal } from '../ui/animated-modal'
import TipModal from '../TipModal'
import HeaderNav from '../Header/HeaderNav'
import { testVideos } from '@/constants'
import VideoCard from './VideoCard'

export default function Watach() {

  return (
    <>
    <HeaderNav   />
    
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 my-3'>

        {testVideos.map((item, i)  =>  (
           <VideoCard key={i} video={item}  />
        ))}
     
      </div>











     {/*} <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' 

        
        width={800}
        height={600}
          />
   <Modal >
    <ModalTrigger className='my-5 w-full max-w-7xl'>

    <button className='py-4 bg-pink-600 w-full max-w-3xl my-4 rounded-xl text-white' >Tip creator</button>
    </ModalTrigger>
    <ModalBody >
      <ModalContent>

      <TipModal  />
      </ModalContent>
    </ModalBody>
   </Modal>*/}
      
   
    </>
  )
}
