const WhoWeAre = () => {
  return (
    <section id="about" className="py-24 bg-[#FFF9F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <img 
              src="/HeroImage.png" 
              alt="Plastic Packaging Products" 
              className="relative w-full h-auto object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-black font-sans">Who We Are</h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
              Perfect Group, established in 1988 by the visionary Mr. Nand Kishore Ji in Peeragarhi, Delhi, is a trusted name in the manufacturing of high-quality plastic moulded products. With over three decades of expertise, we have grown from a local manufacturing unit into a leading supplier for the Agrochemical Industry.
              </p>
              Guided by our vision of perfection and advanced technology, we strive to empower industries with high-quality plastic components that add value to their operations and brand.
            </div>

            <div className="flex flex-nowrap justify-between items-start gap-2 sm:gap-4 md:gap-6 pt-8">
              <div className="flex flex-col items-center flex-1 min-w-0">
                <div className="w-full max-w-[100px] sm:max-w-[110px] md:max-w-[130px] h-28 sm:h-32 md:h-36 bg-[#E6DCC8] flex items-center justify-center relative overflow-hidden" style={{ borderRadius: '80% 80% 0 0 / 100% 100% 0 0' }}>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">35+</span>
                </div>
                <div className="text-center mt-3 sm:mt-4">
                  <div className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">Years</div>
                  <div className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">Experiecne</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center flex-1 min-w-0">
                <div className="w-full max-w-[100px] sm:max-w-[110px] md:max-w-[130px] h-28 sm:h-32 md:h-36 bg-[#E6DCC8] flex items-center justify-center relative overflow-hidden" style={{ borderRadius: '80% 80%  0 0 / 100% 100% 0 0' }}>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">5</span>
                </div>
                <div className="text-center mt-3 sm:mt-4">
                  <div className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">Manufacturing</div>
                  <div className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">Units</div>
                </div>
              </div>
              
              {/* <div className="flex flex-col items-center flex-1 min-w-0">
                <div className="w-full max-w-[100px] sm:max-w-[110px] md:max-w-[130px] h-28 sm:h-32 md:h-36 bg-[#E6DCC8] flex items-center justify-center relative overflow-hidden" style={{ borderRadius: '80% 80% 0 0 / 100% 100% 0 0' }}>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">500+</span>
                </div>
                <div className="text-center mt-3 sm:mt-4">
                  <div className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">Trusted</div>
                  <div className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">Clients</div>
                </div>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
