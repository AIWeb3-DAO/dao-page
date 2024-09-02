
"use client"

import React, {useState, useEffect} from 'react'
import { useUserContext } from './UserContext';
import { Button } from './ui/button';
import { truncateText, truncateText2 } from '@/utils/truncateTxt';
export default function LoginPage() {
 
 //  const [storedWallet, setstoredWallet] = useState()
    const {logout, connectWallet, storedWallet}  =  useUserContext()



  const  recipientAddress ="5FegVEWYtc8TjyLLoZinDo2Rx1VGMRNWq3gK17fEBUnm5wXM"
  const senderAddress    = "5Dw6UH9STfnjyd4pDUPgL3txaU2fRzx2BfaP1VxFQmYGKD8Z"

/*
  function toSmallestUnit(amount, decimals) {
    return amount * Math.pow(10, decimals);
}




 console.log("stored wallet", storedWallet)
const smallestUnit = toSmallestUnit(1, 12);
        const handTransferTokens  =  async ()  =>  {

          try {
            const web3API = await ApiPromise.create({ provider: wsProvider });
            web3API.isReady.then(() => {
              const transferExtrinsic = web3API.tx.balances.transferKeepAlive(recipientAddress, smallestUnit);
          
              transferExtrinsic.signAndSend(senderAddress, {signer: wallet.signer}, ({status, txHash}) => {
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
             
       
        }*/

     

   
    



      
  
  
  
  return (
    <div className='flex flex-col gap-3 items-center justify-center'>
   {
    storedWallet  ?   (
       <div className='border p-2 rounded-xl' onClick={()  => logout()}> 
       <p className='font-medium text-sm'>{   storedWallet && truncateText(storedWallet?.accounts[0]?.address, 10)}</p>
         </div>
    ): (
<Button className=''  onClick={()   => connectWallet() }>Connect wallet </Button>
    )
   }
         
       {/*}  <button className='py-3 px-6 bg-green-600  rounded-xl'  onClick={()   => handTransferTokens() }>Send tokens </button>*/}
        

        
    </div>
  )
}
