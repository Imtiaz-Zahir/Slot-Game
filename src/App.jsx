import React from 'react'
import Connect from './component/Connect'
import Details from './component/Details'
import Machine from './component/Machine'

function App() {
  return (
    <>
    <Connect/>
    <div className='flex px-20'>
      <Details/>
      <Machine/>
    </div>
    </>
  )
}

export default App
