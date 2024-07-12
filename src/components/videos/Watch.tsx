"use client"

import React from 'react'
import ReactPlayer from 'react-player'
import { Modal, ModalBody, ModalContent,ModalTrigger,useModal } from '../ui/animated-modal'
import TipModal from '../TipModal'

export default function Watach() {

  return (
    <div className='w-full h-screen flex items-center justify-center flex-col'>
      <div>
      <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' 
        
    width={800}
    height={600}
      />
      </div>
   <Modal >
    <ModalTrigger className='my-5 w-full max-w-7xl'>

    <button className='py-4 bg-pink-600 w-full max-w-3xl my-4 rounded-xl text-white' >Tip creator</button>
    </ModalTrigger>
    <ModalBody >
      <ModalContent>

      <TipModal  />
      </ModalContent>
    </ModalBody>
   </Modal>
      
    </div>
  )
}
