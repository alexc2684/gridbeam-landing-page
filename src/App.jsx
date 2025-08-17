import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Services from './components/Services'
import Credentials from './components/Credentials'
import DataVisualization from './components/DataVisualization'
import Impact from './components/Impact'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-utility-text overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Services />
        {/* <Credentials /> */}
        <DataVisualization />
        <Contact />
      </main>
    </div>
  )
}

export default App
