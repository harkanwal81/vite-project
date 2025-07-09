import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className='bg-[#0e0c1e]'>
     <Navbar />
     <Hero/>
     <About/>
     <Services/>
     <Work/>
     <Contact/>
    </div>
  )
}

export default App
