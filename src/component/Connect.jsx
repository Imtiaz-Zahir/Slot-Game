import React from 'react'
import { useState , useEffect } from 'react'
import Web3 from 'web3'
import ABI from '../ABI.json'

export default function Connect({saveState}) {
  const [connected,setConnected]=useState(false);
  const connection = async()=>{
    try{
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({method:"eth_requestAccounts"});
      const contract = new web3.eth.Contract(
        ABI,"0x59eb1ef3cb9b4ddc7560b65debb0d9096036c9df"
      );
      saveState({web3:web3,contract:contract});
      setConnected(true);
    }catch(error){
      alert("Please Install Metamusk")
    }
  }
  useEffect(()=>{
    connection();
  },[])

  return (
    <div className='flex justify-between items-center px-20 h-16 bg-sky-500'>
      <h1 className='text-3xl font-bold'>Slot Game</h1>
      <button onClick={connection} className='bg-green-600 px-6 py-2 text-xl'disabled={connected}>{connected? "Connected":"Connect"}</button>
    </div>
  )
}
