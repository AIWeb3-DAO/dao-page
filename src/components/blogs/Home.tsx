
"use client"
import React from 'react'
import { GET_LATEST_BLOG } from '@/graphql/getLatestBlogs'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { PLACE_HOLDER } from '@/constants'
import BlogCard from './BlogCard'
export default function BlogHome() {
    const {data, loading, error} = useQuery(GET_LATEST_BLOG, {
        variables :{
            "where": {
             "space" : {
               "id_eq" : "10900"
             }
            },
            "orderBy": "createdAtTime_DESC",
            "limit": 12,
            
            
          }
        }
    
      )
    
      
  return (
    <div className='mt-28 min-h-screen  text-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center place-items-center gap-4 max-w-7xl mx-auto '>
      {data?.posts?.map((item, i) =>  (
     <BlogCard 
     key={i}
     blog={item}
     />
      ))}
    </div>
  )
}
