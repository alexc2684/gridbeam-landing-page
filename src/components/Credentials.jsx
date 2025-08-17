import React, { useEffect, useState } from 'react'
import { 
  Award, 
  Building, 
  GraduationCap, 
  Star,
  Zap
} from 'lucide-react'

const Credentials = () => {
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

    const element = document.getElementById('credentials')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const credentials = [
    {
      icon: Award,
      organization: "U.S. Department of Energy",
      role: "Energy Innovator Fellow",
      period: "2024-Present",
      description: "Leading comprehensive data transformation initiatives for rural electric cooperatives, bridging the gap between cutting-edge technology and practical utility operations",
      iconColor: "text-utility-primary"
    },
    {
      icon: GraduationCap,
      organization: "Technology & Industry Experience",
      role: "UC Berkeley Computer Science + ML Engineering",
      period: "Career Highlights",
      description: "Former ML Engineer at HubSpot, Head of Engineering at Lydian AI, successful exit to Ghost AI. Deep expertise in Python, cloud architecture, and production ML systems",
      iconColor: "text-utility-secondary"
    }
  ]

  const achievements = [
    "$100,000+ annual operational savings delivered",
    "93% reduction in data loss, 425% faster processing",
    "10M+ daily AMI/SCADA data points processed in real-time",
    "13,000 member accounts unified in centralized dashboard",
    "170,000+ IoT devices integrated in production pipelines",
    "Reduced data visibility from 5 minutes to 1 minute",
    "C-suite and board-level AI strategy workshops delivered",
    "Complete utility digital transformation from legacy to cloud"
  ]

  return (
    <section id="credentials" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-utility-text">
            Proven Track Record in{' '}
            <span className="text-utility-primary">Utility Innovation</span>
          </h2>
          
          <p className="text-xl text-utility-textLight max-w-3xl mx-auto leading-relaxed font-body">
            Bringing together DOE fellowship experience, real-world utility implementation, 
            and cutting-edge technology expertise.
          </p>
        </div>

        {/* Cred */}

        {/* Key Achievements */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-3xl font-bold mb-12 text-utility-text">
            Key Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="utility-card p-6 hover:shadow-utility-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <Star size={24} className="text-utility-accent mt-1 flex-shrink-0" />
                  <p className="text-utility-textLight leading-relaxed font-body">
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Signal */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="utility-card-lg p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <Zap size={40} className="text-utility-secondary" />
              <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-utility-text mb-2">
                  Ready to Transform Your Utility's Data Strategy?
                </p>
                <p className="text-utility-textLight text-lg font-body">
                  Let's discuss how this proven expertise can solve your specific challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Credentials