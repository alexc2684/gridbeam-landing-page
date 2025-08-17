import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden hero-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Proven Builder of AI & Data Solutions</span>
              <span className="block gradient-text mt-2">for Complex Operations</span>
            </h1>
            <p className="mt-4 text-lg font-semibold text-blue-600">
              DOE Energy Innovator Fellow developing AMI/SCADA infrastructure at Roanoke Electric Cooperative
            </p>
            <p className="mt-6 max-w-4xl mx-auto text-xl text-gray-600">
              Track record: <strong>$100K+ documented utility cost savings</strong> • <strong>30K+ product installs</strong> • <strong>Enterprise ML at HubSpot</strong> • <strong>Multiple successful exits</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left Column with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Experience</h2>
              <div className="space-y-8">
                
                {/* Operational Data Visibility */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Data Visibility</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Enhanced real-time monitoring from 5-minute to 1-minute intervals</strong> for 170K+ asset network</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Built AMI/SCADA pipelines reducing outage response times</strong> and enabling precise phase balancing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Automated critical operational processes</strong> with documented $100K+ annual savings</span>
                    </li>
                  </ul>
                </div>

                {/* Product Development at Scale */}
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Development at Scale</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Ghostwrite AI:</strong> 30K+ Chrome installs, 5% conversion to paid, acquired by Ghost AI</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Better Sports:</strong> Led product from concept to $250K funding + Berkeley Skydeck acceptance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Delivered live beta tests</strong> and product iterations based on real user feedback</span>
                    </li>
                  </ul>
                </div>

                {/* Enterprise Machine Learning Production */}
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Machine Learning Production</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>HubSpot:</strong> Deployed models serving millions daily, 28% AUROC improvement, 43% faster response times</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Deliverr:</strong> Built technologies central to Shopify acquisition</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Proven ability to scale</strong> from prototype to production systems</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="sticky top-24">
                <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src="/me-utility.jpeg"
                    alt="Silicon Valley AI Innovation"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 relative">
              <div className="sticky top-24">
                <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src="/mission-image.jpg"
                    alt="Utility Operations"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Energy Market Needs</h2>
              <div className="space-y-6">
                <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-400">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Current DOE Fellow Leadership</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Presenting AI strategy to utility C-suite and board leadership</strong> as part of the DOE Energy Innovator Fellowship
                  </p>
                  <p className="text-gray-600">
                    Direct engagement with utility executives on modernization challenges, regulatory requirements, and strategic technology adoption
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-World Research & Implementation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>LUMA Puerto Rico research:</strong> Load forecasting models using weather data integration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Direct experience</strong> with regulatory reporting automation and compliance workflows</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>7 years building data infrastructure</strong> for high-stakes, always-on operations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Progression: Small to Enterprise Scale</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center">
                      <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">Consumer</span>
                      <span>Started with consumer products (30K+ installs)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-300 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">Enterprise</span>
                      <span>Moved to enterprise (HubSpot millions of daily predictions)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-400 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">Infrastructure</span>
                      <span>Now doing infrastructure (170K+ assets, utility operations)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              Leadership
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About the Team</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              GridBeam is led by experienced professionals who understand both cutting-edge technology and the unique challenges facing today's utilities.
            </p>
          </div>
          
          {/* Expanded Profile Layout */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Profile Image Column */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 flex flex-col items-center justify-center">
                <div className="relative w-48 h-48 mb-6">
                  <Image
                    src="/profile-pic.jpeg"
                    alt="Alex Chan - CEO and Founder"
                    fill
                    className="object-cover rounded-full border-4 border-white shadow-lg"
                    priority
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Alex Chan</h3>
                <p className="text-blue-600 font-semibold text-lg mb-6">Founder & CEO</p>
                
                {/* Contact Links */}
                <div className="flex space-x-4">
                  <a href="mailto:alexc2684@gmail.com" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-700">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/alex-chan" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-700">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-4">alexc2684@gmail.com</p>
              </div>

              {/* Bio Content Column */}
              <div className="lg:col-span-2 p-12">
                <div className="space-y-8 text-gray-600">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">About Alex</h4>
                    <p className="text-lg leading-relaxed">
                      Hi, I'm Alex — a UC Berkeley Computer Science graduate who's passionate about 
                      solving real problems for utility companies. Over the past 7+ years, I've been 
                      deep in the world of AI and data engineering, but what really drives me is seeing 
                      the tangible impact technology can have on keeping the lights on for millions of people.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Why GridBeam?</h4>
                    <p className="leading-relaxed">
                      I started GridBeam because I believe utilities deserve technology partners who 
                      understand their unique challenges. When a transformer fails or an outage hits, 
                      it's not just about data points — it's about communities, businesses, and families 
                      who depend on reliable power.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Mission Statement</h4>
                    <p className="text-gray-700 italic text-lg">
                      "Technology should solve real problems. My mission is to help utilities 
                      strengthen grid reliability and modernize their infrastructure with AI 
                      solutions that deliver measurable results."
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Beyond Work</h4>
                    <p className="leading-relaxed">
                      When I'm not working with utility teams, you'll find me exploring new developments 
                      in machine learning, contributing to open source projects, or thinking about how 
                      we can make the grid more resilient for the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Available for Strategic Partnerships</h2>
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <p className="text-xl text-gray-600">
              Currently developing next-generation utility infrastructure through DOE fellowship.
            </p>
            <p className="text-xl text-gray-600">
              <strong>Proven track record delivering products that scale from thousands to millions of users.</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Washington DC</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>alexc2684@gmail.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>415-625-3110</span>
              </div>
            </div>
          </div>
          <a
            href="/#contact"
            className="btn-primary md:py-4 md:text-lg md:px-10"
          >
            Discuss Partnership Opportunities
          </a>
        </div>
      </section>
    </div>
  );
} 