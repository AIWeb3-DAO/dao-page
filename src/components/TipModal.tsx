


"use client"


import React, {useState, useEffect} from 'react'
import { tipTier } from '@/constants'
import { FB_DB } from '@/lib/fbClient'
import { doc, updateDoc, arrayUnion } from "firebase/firestore"; 
import {ApiPromise, WsProvider,} from '@polkadot/api';
import { useUserContext } from './UserContext';
import { Button } from './ui/button';
type Props = {
  videoId : any,
 contributorAddress : any
}
export default function TipModal({videoId, contributorAddress} : Props) {
  const {connectWallet, wallet, storedWallet}  = useUserContext()
    const [state, setstate] = useState("tip")
    const wsProvider = new WsProvider('wss://fraa-flashbox-4274-rpc.a.stagenet.tanssi.network');

    function toSmallestUnit(amount, decimals) {
      return amount * Math.pow(10, decimals);
    }
    

    console.log("wallet from tip modal", wallet)
    console.log(" stored wallet from tip modal", storedWallet)


    const handTransferTokens  =  async (amount, recipientAddress)  =>  {

      const smallestUnit = toSmallestUnit(amount, 12);

      try {
        const web3API = await ApiPromise.create({ provider: wsProvider });
        web3API.isReady.then(() => {
          const transferExtrinsic = web3API.tx.balances.transferKeepAlive(recipientAddress, smallestUnit);
      
          transferExtrinsic.signAndSend(wallet?.accounts[0]?.address, {signer: wallet?.signer}, ({status, txHash}) => {
            if (status.isInBlock) {
              console.log("the tx hash",txHash.toString());
              console.log(`Completed at block hash #${status.asInBlock.toString()}`);
            } else {
              console.log(`Current status: ${status.type}`);
            }
          })
        })

        
      } catch (error) {

         console.log(`something went wrong`, error)
        
      }
         
   
    }
    
    
         const  recipientAddress ="5FegVEWYtc8TjyLLoZinDo2Rx1VGMRNWq3gK17fEBUnm5wXM"


    const addContributors = async (videoId, newContributors) => {
      try {
        if (FB_DB) {

          // transfer  tokens  for  contribuutions 

          await handTransferTokens(1, recipientAddress)
          // Reference to the document you want to update
      //    const videoDocRef = doc(FB_DB, 'youtube', videoId);
          
          // Update the 'contributors' array by adding new contributors
        /*  await updateDoc(videoDocRef, {
            contributors: arrayUnion(...newContributors)
          });*/
          
          console.log('Contributors added successfully');
        }
      } catch (error) {
        console.error('Error adding contributors:', error);
      }
    };
  return (
    <div>
         {/*<div className='flex justify-around mb-5'>
             <div className='flex items-center bg-text-primary text-text-on-primary py-2 px-3 rounded-lg cursor-pointer text-center'>Tip</div>
             <div className='flex items-center bg-text-primary text-text-on-primary py-2 px-3 rounded-lg cursor-pointer text-center'>Buy token</div>

  </div>*/}
   <h1 className='font-sans  mb-7 text-2xl text-center'>Support The creator</h1>
      <p className='my-4 text-sm text-center'>💡 Your <span className='text-text-primary font-semibold'>$AIWEB </span> balance is 0  you need some $AIWEB to Tip </p>
    <div  className=' flex  gap-3 flex-wrap items-center justify-center '>
       {! wallet &&  (
        <Button onClick={()  =>  connectWallet()}>Connect wallet</Button>
       )} 
         {tipTier?.map((tip, i) => (

            <div className='inline-flex  flex-col space-y-2 border cursor-pointer border-gray-400 hover:border-text-primary h-20 w-24 py-2 px-2 rounded-lg  items-center' key={i}
            onClick={() => addContributors(videoId, [contributorAddress])}
            > 
                <h2 className='text-xl'>{tip.emoji}</h2>
                 <h2 className='text-sm'>{tip.amount} $AIWEB</h2>
         </div>
         ))}
    </div>
    </div>
  )
}
