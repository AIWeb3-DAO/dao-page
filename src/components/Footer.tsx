
//@ts-nocheck
import { logo, polkadot_logo } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsDiscord, BsTelegram } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div className='border-t border-gray-800 p-10'>
  <div className='w-full max-w-7xl mx-auto flex-col md:flex-row flex justify-between'>
   <div className='flex gap-5'>
    <Image  src={logo}  width={200} height={200} alt='logo' className='rounded-full w-36 h-36 hidden md:block'  />
    <div>
    <h2 className='max-w-md font-medium my-3 text-gray-300 '>Ai web3 is a decentralized media initiative that offers the platform for creators to earn tokens for their content.</h2>
     <div className='flex items-center gap-2 my-4'>
         <h3 className='uppercase font-medium text-2xl'>Powered by <span className='text-pink-600'>polkadot</span></h3>
         <Image  src={polkadot_logo} width={40} height={40} className='w-11 rounded-full' />
     </div>
     
     
    </div>
   </div>
   <div>
      <ul>
      <li className=' capitalize my-2'><Link href={`/about`}>About us</Link></li>
      <li className=' capitalize my-2'><Link href={`/events`}>Events</Link></li>
      <li className=' capitalize my-2'><Link href={`/blog`}>Blog</Link></li>
   </ul>
   <div className='flex items-center gap-5 my-3'>
        <FaXTwitter className='cursor-pointer' />
        <BsDiscord className='cursor-pointer' />
        <BsTelegram className='cursor-pointer' />
      </div>
      </div>

     
  </div>
    </div>
  )
}
