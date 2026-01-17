import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="pt-25">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          {/* Animated Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9F0] via-[#FDEBD2] to-[#FFF9F0]">
            {/* Left radial gradient - enhanced */}
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(248, 154, 36, 0.4) 0%, rgba(248, 154, 36, 0.1) 40%, transparent 70%)',
                animation: 'pulse 6s ease-in-out infinite'
              }}
            ></div>
            
            {/* Right radial gradient - enhanced */}
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(248, 154, 36, 0.4) 0%, rgba(248, 154, 36, 0.1) 40%, transparent 70%)',
                animation: 'pulse 8s ease-in-out infinite',
                animationDelay: '1s'
              }}
            ></div>
            
            {/* Center accent gradient */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-20 blur-2xl"
              style={{
                background: 'radial-gradient(circle, rgba(230, 220, 200, 0.6) 0%, transparent 70%)'
              }}
            ></div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#f89a24]/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#E6DCC8]/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#f89a24]/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Glass morphism container with enhanced effects */}
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="relative">
              {/* Glass effect main container */}
              <div className="relative backdrop-blur-xl bg-white/40 rounded-[3rem] p-10 md:p-12 border border-white/60 shadow-2xl overflow-hidden">
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                
                {/* Shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 pointer-events-none"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="inline-block mb-4">
                    <span className="text-sm md:text-base font-semibold text-[#f89a24] uppercase tracking-widest bg-white/50 px-6 py-2 rounded-full backdrop-blur-sm border border-[#f89a24]/20">
                      Our Story
                    </span>
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent drop-shadow-lg">
                    About Us
                  </h1>
                  
                  {/* Enhanced underline */}
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#f89a24] rounded-full"></div>
                    <div className="w-24 h-1.5 bg-[#f89a24] rounded-full shadow-lg shadow-[#f89a24]/50"></div>
                    <div className="w-12 h-1 bg-gradient-to-l from-transparent to-[#f89a24] rounded-full"></div>
                  </div>
                  
                  {/* Subtle description */}
                  <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-6">
                    Crafting Excellence Since 1988
                  </p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#f89a24]/10 to-transparent rounded-br-full"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#f89a24]/10 to-transparent rounded-tl-full"></div>
              </div>

              {/* Outer glow rings */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f89a24]/20 via-transparent to-[#f89a24]/20 rounded-[3rem] blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Add keyframes for animation */}
          <style>{`
            @keyframes pulse {
              0%, 100% {
                opacity: 0.3;
                transform: translateY(-50%) scale(1);
              }
              50% {
                opacity: 0.5;
                transform: translateY(-50%) scale(1.1);
              }
            }
          `}</style>
        </section>

        {/* Our Journey Timeline Section */}
        <section className="py-24 bg-gradient-to-b from-white to-[#FFF9F0] relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f89a24]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E6DCC8]/30 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block bg-[#f89a24] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Our Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
                Precision in Plastic, Excellence in Performance
              </h2>
              <div className="w-24 h-1 bg-[#f89a24] mx-auto"></div>
            </div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f89a24] via-[#E6DCC8] to-[#f89a24] transform md:-translate-x-1/2"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Timeline Item 1 - Foundation */}
                <div className="relative flex items-center">
                  {/* Timeline Dot - Left */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-[#f89a24] rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Content Card - Right on desktop, full width on mobile */}
                  <div className="ml-20 md:w-1/2 md:pl-12 md:ml-auto">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#f89a24] to-[#E6DCC8] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                      <div className="relative bg-white p-8 rounded-2xl shadow-xl border-2 border-[#f89a24]/20 hover:border-[#f89a24]/40 transition-all transform hover:scale-105">
                        <div className="absolute top-4 right-4 w-16 h-16 bg-[#f89a24]/10 rounded-full blur-xl"></div>
                        <div className="relative z-10">
                          <div className="inline-block bg-[#f89a24] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                            1988
                          </div>
                          <h3 className="text-2xl font-bold text-black mb-3">The Foundation</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Perfect Group was founded by the visionary <span className="font-semibold text-[#f89a24]">Mr. Nand Kishore Ji</span> in Peeragrahi, Delhi. What began as a dedicated local manufacturing unit with a vision to master the art of high-quality plastic moulded items.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 - Evolution */}
                <div className="relative flex items-center">
                  {/* Timeline Dot - Right */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-[#f89a24] rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Content Card - Left on desktop */}
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#E6DCC8] to-[#f89a24] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                      <div className="relative bg-gradient-to-br from-[#FFF9F0] to-white p-8 rounded-2xl shadow-xl border-2 border-[#E6DCC8]/40 hover:border-[#f89a24]/40 transition-all transform hover:scale-105">
                        <div className="absolute bottom-4 left-4 w-20 h-20 bg-[#f89a24]/10 rounded-full blur-xl"></div>
                        <div className="relative z-10">
                          <div className="inline-block bg-[#E6DCC8] text-[#f89a24] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border-2 border-[#f89a24]/30">
                            1990 - 2020
                          </div>
                          <h3 className="text-2xl font-bold text-black mb-3">Three Decades of Excellence</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Over three decades, we've evolved from a local manufacturing unit into a <span className="font-semibold text-[#f89a24]">premier supplier for the Agrochemical Industry</span>, known for our precision-engineered solutions and unwavering commitment to quality.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 - Core Expertise */}
                <div className="relative flex items-center">
                  {/* Timeline Dot - Left */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-[#f89a24] rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Content Card - Right on desktop */}
                  <div className="ml-20 md:w-1/2 md:pl-12 md:ml-auto">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#f89a24] via-[#E6DCC8] to-[#f89a24] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                      <div className="relative bg-white p-8 rounded-2xl shadow-xl border-2 border-[#f89a24]/20 hover:border-[#f89a24]/40 transition-all transform hover:scale-105">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-[#f89a24]/5 to-transparent rounded-2xl pointer-events-none"></div>
                        <div className="relative z-10">
                          <div className="inline-block bg-[#f89a24] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                            Today
                          </div>
                          <h3 className="text-2xl font-bold text-black mb-3">Our Core Expertise</h3>
                          <p className="text-gray-600 leading-relaxed">
                            We specialize in manufacturing <span className="font-bold text-[#f89a24]">High-Quality Plastic Jars</span> and <span className="font-bold text-[#f89a24]">Measuring Caps</span>. In the Agrochemical sector, precision is a necessity. Our products meet the highest standards of durability, chemical resistance, and accurate measurement, ensuring safe and effective delivery to end-users.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-24  relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Mission & Vision
              </h2>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Mission Card */}
              <div className="relative group h-full">
                <div className="bg-[#f89a24] rounded-2xl p-5 md:p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
                  {/* Icon - Circular white with orange border */}
                  <div className="flex justify-center mb-3">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full border-2 border-[#f89a24] flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 md:w-8 md:h-8 text-[#f89a24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-3">
                    Our Mission
                  </h3>
                  
                  {/* Content */}
                  <p className="text-white text-sm md:text-base leading-snug text-left grow">
                    Our mission is to provide our customers with superior products that enhance their operations and contribute to their success. We strive to foster long-term relationships with our clients by understanding their unique requirements and delivering solutions that meet their expectations.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="relative group h-full">
                <div className="bg-[#f89a24] rounded-2xl p-5 md:p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
                  {/* Icon - Circular white with orange border */}
                  <div className="flex justify-center mb-3">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full border-2 border-[#f89a24] flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 md:w-8 md:h-8 text-[#f89a24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-3">
                    Our Vision
                  </h3>
                  
                  {/* Content */}
                  <p className="text-white text-sm md:text-base leading-snug text-left grow">
                    To empower industries with high-quality plastic moulded components, driven by the spirit of perfection, advanced technology and customer-centric innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Perfect Group Section */}
        <section className="py-24 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Why Choose Perfect Group?
              </h2>
              <div className="w-24 h-1 bg-[#f89a24] mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 35+ Years of Experience */}
              <div className="group relative bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                {/* Left Orange Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f89a24]"></div>
                
                <div className="p-6 flex flex-col h-full">
                  {/* Icon - Circular white with attractive icon */}
                  <div className="flex justify-start mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#f89a24] to-[#e08a1d] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2">35+ Years of Experience</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-4 grow">
                    A rich history of serving clients with dedication.
                  </p>
                  
                  {/* Learn More */}
                  {/* <div className="flex items-center text-gray-500 text-xs group-hover:text-[#f89a24] transition-colors">
                    <span className="mr-2">Learn more</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div> */}
                </div>
              </div>

              {/* Quality Focused */}
              <div className="group relative bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                {/* Left Orange Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f89a24]"></div>
                
                <div className="p-6 flex flex-col h-full">
                  {/* Icon - Circular white with attractive icon */}
                  <div className="flex justify-start mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#f89a24] to-[#e08a1d] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Quality Focused</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-4 grow">
                    As our name suggests, we aim for "Perfect" results in everything we do.
                  </p>
                  
                  {/* Learn More */}
                  {/* <div className="flex items-center text-gray-500 text-xs group-hover:text-[#f89a24] transition-colors">
                    <span className="mr-2">Learn more</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div> */}
                </div>
              </div>

              {/* Customer First */}
              <div className="group relative bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                {/* Left Orange Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f89a24]"></div>
                
                <div className="p-6 flex flex-col h-full">
                  {/* Icon - Circular white with attractive icon */}
                  <div className="flex justify-start mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#f89a24] to-[#e08a1d] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Customer First</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-4 grow">
                    Your growth and satisfaction are our primary goals.
                  </p>
                  
                  {/* Learn More */}
                  {/* <div className="flex items-center text-gray-500 text-xs group-hover:text-[#f89a24] transition-colors">
                    <span className="mr-2">Learn more</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div> */}
                </div>
              </div>

              {/* Advanced Moulding Technology */}
              <div className="group relative bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                {/* Left Orange Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f89a24]"></div>
                
                <div className="p-6 flex flex-col h-full">
                  {/* Icon - Circular white with attractive icon */}
                  <div className="flex justify-start mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#f89a24] to-[#e08a1d] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Advanced Moulding Technology</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-4 grow">
                    Using state-of-the-art machinery to ensure every product is "Perfect."
                  </p>
                  
                  {/* Learn More */}
                  {/* <div className="flex items-center text-gray-500 text-xs group-hover:text-[#f89a24] transition-colors">
                    <span className="mr-2">Learn more</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div> */}
                </div>
              </div>

              {/* Quality Assurance */}
              <div className="group relative bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                {/* Left Orange Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f89a24]"></div>
                
                <div className="p-6 flex flex-col h-full">
                  {/* Icon - Circular white with attractive icon */}
                  <div className="flex justify-start mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#f89a24] to-[#e08a1d] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Quality Assurance</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-4 grow">
                    Rigorous testing to ensure chemical compatibility and durability.
                  </p>
                  
                  {/* Learn More */}
                  {/* <div className="flex items-center text-gray-500 text-xs group-hover:text-[#f89a24] transition-colors">
                    <span className="mr-2">Learn more</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div> */}
                </div>
              </div>

              {/* Custom Moulding */}
              <div className="group relative bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                {/* Left Orange Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f89a24]"></div>
                
                <div className="p-6 flex flex-col h-full">
                  {/* Icon - Circular white with attractive icon */}
                  <div className="flex justify-start mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#f89a24] to-[#e08a1d] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Custom Moulding</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-4 grow">
                    Tailor-made solutions to meet your specific brand requirements.
                  </p>
                  
                  {/* Learn More */}
                  {/* <div className="flex items-center text-gray-500 text-xs group-hover:text-[#f89a24] transition-colors">
                    <span className="mr-2">Learn more</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div> */}
                </div>
              </div>

              {/* Regulatory Compliance */}
              {/* <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1 lg:col-start-2">
                <div className="w-16 h-16 bg-[#E6DCC8] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#f89a24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Regulatory Compliance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our manufacturing processes adhere to the strict safety and environmental guidelines required for agrochemical packaging.
                </p>
              </div> */}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-[#ffd29b] to-[#975b0d]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Let's discuss how Perfect Group can provide you with high-quality plastic solutions for your agrochemical needs.
            </p>
            <a href="/contact">
              <button className="bg-white text-[#f89a24] font-bold uppercase tracking-widest px-10 py-4 rounded-lg text-sm hover:bg-gray-100 transition-colors shadow-lg">
                Get In Touch
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
