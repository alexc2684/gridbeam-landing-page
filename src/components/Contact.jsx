import React, { useState, useEffect } from 'react'
import { 
  Calendar, 
  Mail, 
  Linkedin,
  Clock,
  User,
  ExternalLink,
  MessageSquare,
  CheckCircle
} from 'lucide-react'

const Contact = () => {
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

    const element = document.getElementById('contact')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/alex-gridbeam/30min', '_blank')
  }

  const benefits = [
    "Free 30-minute strategy consultation",
    "Discussion of your specific utility challenges",
    "Custom roadmap for data transformation",
    "No-obligation assessment of potential ROI"
  ]

  return (
    <section id="contact" className="py-24 lg:py-32 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-utility-text">
            Ready to Transform Your{' '}
            <span className="text-utility-primary">Utility Operations?</span>
          </h2>
          
          <p className="text-xl text-utility-textLight max-w-3xl mx-auto leading-relaxed font-body">
            Schedule a consultation to discuss how data-driven solutions can deliver 
            measurable improvements to your utility's efficiency and reliability.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendly Booking Card */}
            <div className={`utility-card-lg p-8 text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-utility-primary mb-6">
                  <Calendar size={40} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-utility-text mb-4">
                  Schedule Your Consultation
                </h3>
                
                <div className="flex items-center justify-center space-x-2 text-utility-textLight mb-6">
                  <Clock size={20} />
                  <span className="font-body">30 minutes • Free consultation</span>
                </div>
              </div>

              <button
                onClick={handleCalendlyClick}
                className="utility-button w-full mb-6 flex items-center justify-center space-x-3"
              >
                <Calendar size={20} />
                <span>Book Your Call Now</span>
                <ExternalLink size={16} />
              </button>

              <p className="text-sm text-utility-textLight font-body">
                Select a time that works for your schedule
              </p>
            </div>

            {/* What You'll Get */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-2xl font-bold text-utility-text mb-6">
                What You'll Get:
              </h3>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-utility-accent mt-1 flex-shrink-0" />
                    <p className="text-utility-textLight leading-relaxed font-body">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              {/* Alternative Contact */}
              <div className="utility-card p-6">
                <h4 className="text-lg font-semibold text-utility-text mb-4">
                  Other Ways to Connect:
                </h4>
                
                <div className="space-y-3">
                  <a 
                    href="mailto:alex@gridbeam.com" 
                    className="flex items-center space-x-3 text-utility-textLight hover:text-utility-primary transition-colors"
                  >
                    <Mail size={18} />
                    <span className="font-body">alex@gridbeam.com</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/alex-chan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-utility-textLight hover:text-utility-primary transition-colors"
                  >
                    <Linkedin size={18} />
                    <span className="font-body">LinkedIn Profile</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="utility-card p-8">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <User size={20} className="text-utility-accent" />
                  <span className="text-utility-textLight font-body">DOE Energy Innovator Fellow</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare size={20} className="text-utility-accent" />
                  <span className="text-utility-textLight font-body">$1M+ in Proven Savings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-utility-accent" />
                  <span className="text-utility-textLight font-body">Real Utility Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact