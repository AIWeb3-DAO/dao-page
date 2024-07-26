"use client"


import React, {useState, useEffect} from 'react'
import { collection, query, orderBy, limit, getDocs, startAfter } from "firebase/firestore";
import { FB_DB } from '@/lib/fbClient';

export default function NewsPage() {
    const [news, setNews] = useState([])
    const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);



  const fetchNews = async (page) => {
    setLoading(true);
    let q;
  

    if (page === 1) {
      q = query(collection(FB_DB, "news"), orderBy("timestamp", "desc"), limit(10));
    } else {
      q = query(
        collection(FB_DB, "news"),
        orderBy("timestamp", "desc"),
        startAfter(lastDoc),
        limit(10)
      );
    }

    const querySnapshot = await getDocs(q);
    const newsList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
    setNews(newsList);
    setLoading(false);
  };

  useEffect(() => {
    fetchNews(page);
  }, []);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };


    console.log("the news ", news)


    if (loading){
        return(
            <p>Loading ....</p>
        )
    }

  return (
    <div>
        <div  className='h-[30vh] flex items-center justify-center'>
            <h1  className='text-2xl font-semibold'>Curated  news  list for  polkadot eco</h1>
        </div>

        <div  className='mt-8 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 space-x-3'>
              {news?.map((item, i)  =>  (
                <div  key={i}>
                    <div className='border h-44 w-full border-red-500 rounded-xl flex items-center justify-center'> 
                         <p>News cover img</p>
                         </div>

                         <div> 
                            <p>{item?.otherINFO}</p>
                             </div>
                  </div>
              ))}
        </div>
    </div>
  )
}
