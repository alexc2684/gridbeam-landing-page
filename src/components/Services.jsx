import React, { useEffect, useState } from 'react'
import { 
  Server, 
  Brain, 
  TrendingUp, 
  CheckCircle
} from 'lucide-react'

const Services = () => {
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

    const element = document.getElementById('services')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Brain,
      title: "Predictive Analytics & AI",
      description: "Transform your data into predictive insights",
      features: [
        "Load forecasting and demand modeling",
        "Outage prediction and management systems",
        "Weather-based grid impact analysis",
      ],
      iconColor: "text-purple-600"
    },
    {
        icon: Server,
        title: "Data Pipeline Architecture",
        description: "Unify your utility data for maximum operational insight",
        features: [
          "AMI/SCADA integration and unification",
          "Real-time data processing at scale",
          "Cloud-native scalable infrastructure",
        ],
        iconColor: "text-blue-600"
      },
    {
      icon: TrendingUp,
      title: "Strategic Advisory",
      description: "Navigate your AI transformation with confidence",
      features: [
        "AI roadmap development and planning",
        "Executive workshops on AI transformation",
        "Change management consulting"
      ],
      iconColor: "text-utility-accent"
    }
  ]

  return (
    <section id="services" className="py-16 lg:py-20 section-light min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-utility-text">
            Data Infrastructure & AI Solutions for{' '}
            <span className="text-utility-primary">Modern Utilities</span>
          </h2>
          
          <p className="text-xl text-utility-textLight max-w-3xl mx-auto leading-relaxed font-body">
            Comprehensive consulting services that transform your utility data 
            from operational overhead into strategic competitive advantage.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`utility-card-lg p-6 h-full hover:shadow-utility-lg transition-all duration-300 ${isVisible ? 'fade-in-animation' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gray-100 mb-4">
                  <service.icon size={32} className={service.iconColor} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-utility-text">
                  {service.title}
                </h3>
                
                <p className="text-utility-textLight leading-relaxed mb-4 font-body">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle size={16} className="text-utility-accent mt-1 flex-shrink-0" />
                    <span className="text-utility-textLight leading-relaxed font-body text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Metric */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="utility-card-lg p-8 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-utility-accent mb-2">
                $1M+ Annual Savings
              </p>
              <p className="text-utility-textLight text-lg font-body">
                Delivered to our utility partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
