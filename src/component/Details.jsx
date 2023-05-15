import React from 'react'
import { useState } from 'react'
import Ethereum from '../assets/Ethereum.png'

export default function Details() {
  const [add,setAdd]=useState("")
  const [wid,setWid]=useState("")
  const clickHandelerAdd = ()=>{
    console.log("clicked")
  }
  const clickHandelerWid = ()=>{
    console.log("clicked")
  }
  return (
    <div className='w-2/5 my-4 px-4'>
      <div className='rounded-2xl h-72 p-5 relative sdk'>
        <div className='flex items-center justify-between'>
          <div className='rounded-full border-2 border-white p-2'>
            <img className='h-16 w-16' src={Ethereum} alt="Ethereum Logo" />
          </div>
          <p className='text-white text-3xl font-medium'>0.0000005 ETH</p>
        </div>
        <p className='text-white text-2xl mt-auto absolute bottom-0 mb-5'>0x71C7656EC7ab88b098defB751B7401B5f6d8976F</p>
      </div>
      <div className='flex my-5 mx-5'>
        <input onChange={(event)=>{setAdd(event.target.value)}} value={add} className="focus:outline-none focus:ring-1 focus:ring-gray-100 rounded w-3/4 text-xl text-gray-300 border border-gray-400 placeholder-gray-400 bg-transparent pl-10" type="text" placeholder="Add Amount" />
        <button onClick={clickHandelerAdd} className='py-2 bg-gray-500 w-1/4 text-xl text-gray-400 font-medium rounded'>Add Balance</button>
      </div>
      <div className='flex my-5 mx-5'>
        <input onChange={(event)=>{setWid(event.target.value)}} value={wid} className="focus:outline-none focus:ring-1 focus:ring-gray-100 rounded w-3/4 text-xl text-gray-300 border border-gray-400 placeholder-gray-400 bg-transparent pl-10" type="text" placeholder="Withdrawal Amount" />
        <button onClick={clickHandelerWid} className='py-2 bg-gray-500 w-1/4 text-xl text-gray-400 font-medium rounded'>Withdrawal</button>
      </div>
    </div>
  )
}
