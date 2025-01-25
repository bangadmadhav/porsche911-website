import React from 'react'
import VideoSection from './components/VideoSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='overflow-x-hidden bg-black'>
      <Navbar />
      <VideoSection />
      <Hero />
      {/* <Hero /> */}
    </div>
  )
}

export default App