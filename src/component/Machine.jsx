import React from 'react'
import { useState } from 'react'

export default function Machine() {
  const [bit,setBit]=useState("")
  const changeHandel = (event)=>{
    if(event.target.value>0.0000005){
      setBit(0.0000005)
    }else{setBit(event.target.value)}
  }

  return (
    <div className='w-3/5 px-10'>
      <div className='h-[482.17px] w-full ibg flex justify-center items-center'>
        <div className='flex pt-[58px] -ml-[15px] gap-6'>
        <p className='bg-white text-6xl font-bold p-4'>A</p>
        <p className='bg-white text-6xl font-bold p-4'>A</p>
        <p className='bg-white text-6xl font-bold p-4'>A</p>
        </div>
      </div>
      <div className='flex my-5 w-3/5 mx-auto'>
        <input onChange={changeHandel} value={bit} className="focus:outline-none focus:ring-1 focus:ring-gray-100 rounded w-3/4 text-xl text-gray-300 border border-gray-400 placeholder-gray-400 bg-transparent pl-10" type="text" placeholder="Bit Amount" />
        <button className='py-2 bg-red-600 w-1/4 text-xl text-white font-semibold rounded'>ROLL</button>
      </div>
    </div>
  )
}
