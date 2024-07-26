"use client"

import React, { useState,useEffect} from 'react'
import ReactPlayer from 'react-player'
import VideoPlayer3 from './VidPlayer';
import FullVideoStats from '../FullVideoStats';
import ChannelInfo from '../ChannelInfo';
import Comments from './Comments';
import HeaderNav from '../Header/HeaderNav';
import { useRouter, usePathname } from 'next/navigation';
import { FB_APP, FB_DB } from '@/lib/fbClient';
import { doc, getDoc } from 'firebase/firestore';
export default function PlayePage() {
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname()

  const id = pathname.startsWith('/videos/') ? pathname.slice(8) : pathname;



  useEffect(() => {
    const fetchData = async () => {
      if(FB_DB && id){
      try {
        const docRef = doc(FB_DB, 'youtube', id);  // Adjust 'videos' to your collection name
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setVideoData(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      } finally {
        setLoading(false);
      }
    }};

    fetchData();
  }, [id]);
    console.log("the router", videoData)


    if (loading) return <p>Loading...</p>;
  return (
    <>
    <HeaderNav  />
    <div className='w-full  min-h-screen h-full flex space-x-3'>
        <div  className='w-full xl:w-[80%] min-h-screen px-2'>
         <div className='  h-[50vh] xl:h-[90vh]'>
         <ReactPlayer url={`${videoData?.youtubeURL}`} 
           
           width={"100%"}
           height={"100%"}
           
         />

     


         </div>
         <div  className='my-4 px-3 '>
         <h1 className='text-lg sm:text-xl md:text-2xl text-text '>This  is just  testing  video we want to see</h1>
 
         <FullVideoStats  stats={videoData?.contributors}  /> 
       
    
         </div>
      
         </div>

      <h2 className='hidden xl:block'>Related videos</h2>
    </div>
    </>
  )
}
