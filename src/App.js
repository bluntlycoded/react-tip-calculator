import React from 'react'
import Navbar from './components/Navbar'
import TipCalculator from './components/TipCalculator'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  return (
    <div className='App'>
     <div className='container123'>
     <Navbar/>
     <br />
     <Hero/>
      <br />
      <h1>Tip Calculator</h1>
      <div className='center'>
      
      <TipCalculator/>
     
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default App
