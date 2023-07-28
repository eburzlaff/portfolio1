import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <div>
      <NavBar/>
      <Hero/>
      <Timeline/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
