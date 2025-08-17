import React, { useEffect, useState } from 'react'
import { AlertTriangle, Database, Cpu } from 'lucide-react'

const Problem = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('problem')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const problems = [
    {
      icon: AlertTriangle,
      title: "Untapped Potential",
      description: "Valuable insights locked in load profiles, outage patterns, and operational data waiting to be leveraged",
      color: "text-yellow-600"
    },
    {
      icon: Database,
      title: "Disconnected Systems",
      description: "AMI and SCADA systems operating in silos, limiting operational visibility and decision-making capabilities",
      color: "text-red-600"
    },
    {
      icon: Cpu,
      title: "Modernization Without Disruption",
      description: "Need for digital transformation and AI adoption without risking critical grid operations",
      color: "text-utility-secondary"
    }
  ]

  return (
    <section id="problem" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-utility-text">
            Your Utility's <span className="text-utility-primary">Data Challenge</span>
          </h2>
          
          <p className="text-xl text-utility-textLight max-w-3xl mx-auto leading-relaxed font-body">
            Modern utilities face complex data challenges that prevent them from realizing 
            the full potential of their infrastructure investments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`utility-card-lg p-8 h-full hover:shadow-utility-lg transition-all duration-300 ${
                isVisible ? 'fade-in-animation' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gray-100 mb-6`}>
                <problem.icon size={32} className={problem.color} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-utility-text">
                  {problem.title}
                </h3>
                
                <p className="text-utility-textLight leading-relaxed font-body">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl text-utility-textLight mb-8 font-body">
            Sound familiar? You're not alone. These challenges are why utilities need specialized expertise.
          </p>
          
          <button 
            onClick={scrollToServices}
            className="utility-card px-8 py-4 inline-block hover:shadow-utility-lg transition-all duration-300 cursor-pointer hover:bg-gray-50"
          >
            <span className="text-utility-secondary font-semibold">
              See how we solve these challenges ↓
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Problem
