import React, { useEffect, useState } from 'react'
import { ChevronDown, Award } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleVideoError = () => {
    setVideoError(true)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0">
        {!videoError ? (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            poster="/images/hero/utility-infrastructure-fallback.svg"
            onError={handleVideoError}
          >
            <source src="/images/hero/grid2.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
          </video>
        ) : (
          /* Fallback image when video fails to load */
          <img 
            src="/images/hero/utility-infrastructure-fallback.svg" 
            alt="Professional Utility Infrastructure"
            className="w-full h-full object-cover"
          />
        )}
        {/* Professional overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white/80"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge
          <div className="inline-flex items-center space-x-2 utility-card px-6 py-3">
            <Award size={20} className="text-utility-primary" />
            <span className="text-sm font-medium text-utility-text">Energy Innovator Fellow, U.S. Department of Energy</span>
          </div> */}

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-700">
            Turning Utility Data Into{' '}
            <span className="text-utility-primary">Strategic Advantage</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-body">
            Expert consulting in AMI, SCADA, and AI-driven grid modernization
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center space-x-3 utility-button text-lg px-8 py-4"
            >
              <span>Let's Discuss Your Data Strategy</span>
              <span>→</span>
            </button>
          </div>

          {/* Supporting text */}
          <div className="pt-8">
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Proven track record delivering $1M+ annual savings through strategic data transformation
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('problem')}
          className="text-utility-secondary hover:text-utility-primary transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}

export default Hero
