import React, { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  Zap, 
  Clock, 
  DollarSign,
  BarChart3,
  Target,
  CheckCircle2
} from 'lucide-react'

const Impact = () => {
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

    const element = document.getElementById('impact')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const metrics = [
    {
      icon: TrendingUp,
      value: "93%",
      label: "Reduction in Data Loss",
      description: "Eliminated data gaps through robust pipeline architecture",
      color: "text-utility-accent"
    },
    {
      icon: Zap,
      value: "425%",
      label: "Faster Data Processing",
      description: "Real-time insights replacing batch processing delays",
      color: "text-utility-secondary"
    },
    {
      icon: DollarSign,
      value: "$100K+",
      label: "Annual Operational Savings",
      description: "Measurable ROI through automation and optimization",
      color: "text-utility-accent"
    },
    {
      icon: Clock,
      value: "5x",
      label: "Faster Outage Response",
      description: "Immediate alerting and automated response systems",
      color: "text-utility-primary"
    }
  ]

  const achievements = [
    "Unified engineering, financial, and member operations into centralized Power BI dashboard providing real-time KPIs",
    "Automated critical processes including outage management data transfer and legacy system backups",
    "Enabled precision phase balancing and line loss reduction through advanced AMI analytics",
    "Delivered AI/data workshops to C-suite and board members, driving organizational buy-in"
  ]

  return (
    <section id="impact" className="py-24 lg:py-32 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-utility-text">
            Real Impact: <span className="text-utility-primary">Roanoke Cooperative Transformation</span>
          </h2>
          
          <p className="text-xl text-utility-textLight max-w-3xl mx-auto leading-relaxed font-body">
            Measurable results from a complete data infrastructure overhaul, 
            demonstrating the tangible value of strategic data transformation.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`utility-card-lg p-8 text-center hover:shadow-utility-lg transition-all duration-300 ${isVisible ? 'fade-in-animation' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gray-100 mb-6">
                <metric.icon size={32} className={metric.color} />
              </div>

              {/* Metric Value */}
              <div className="mb-4">
                <div className="text-4xl lg:text-5xl font-bold text-utility-text mb-2">
                  <span className={metric.color}>
                    {metric.value}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-utility-text mb-3">
                  {metric.label}
                </h3>
                <p className="text-utility-textLight text-sm leading-relaxed font-body">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Details */}
        <div className={`utility-card-lg p-8 lg:p-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center mb-8">
            <BarChart3 size={40} className="text-utility-secondary mr-4" />
            <h3 className="text-3xl font-bold text-utility-text">
              Key Transformation Achievements
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4"
              >
                <CheckCircle2 size={24} className="text-utility-accent mt-1 flex-shrink-0" />
                <p className="text-utility-textLight leading-relaxed font-body">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Callout */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="utility-card-lg p-8 max-w-4xl mx-auto">
            <Target size={48} className="text-utility-accent mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-utility-text mb-4">
              ROI Achieved in First Year
            </h3>
            <p className="text-xl text-utility-textLight leading-relaxed max-w-2xl mx-auto font-body">
              Complete transformation from legacy systems to modern data infrastructure, 
              delivering immediate operational improvements and long-term strategic advantages.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact