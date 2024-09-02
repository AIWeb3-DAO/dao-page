import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { ModeToggle } from '../mode-toggle'
import LoginPage from '../LoginPage'


 type  Props =  {
  isShowConnect :  boolean
 }
export default function Navbar({isShowConnect} : Props) {
  return (
    <div  className=' w-full sticky top-0 bg-background border-b border-border h-[60px] mb-2  flex items-center justify-center z-40  px-4'>
     <div className='max-w-7xl mx-auto w-full flex items-center justify-between'>
        <Link href={'/'} className='flex items-center space-x-1'>
        <Image src={`/img/logo.png`} width={60} height={60} alt='logo' className='w-10 h-10 rounded-full hidden'  />
       
<p className='font-extrabold text-pink-500 text-3xl'>Polkadot</p>
        </Link>
         <div className='flex items-center space-x-2'>
           <ModeToggle   />
           {
            isShowConnect ?  (
              <LoginPage  />
            ) : (
              <Link href={`/login`} className='border p-2 rounded-xl'>
              Get started
            </Link>
            )
           }
           
         </div>
         </div>
      
    </div>
  )
}
