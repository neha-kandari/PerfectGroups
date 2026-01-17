const Hero = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col lg:grid lg:grid-cols-2 pt-20 overflow-hidden bg-white">
      {/* Desktop Background */}
      <div
        className="absolute top-0 right-0 w-[45%] h-full bg-[#ffecd6] hidden lg:block"
        style={{ clipPath: "ellipse(100% 70% at 100% 20%)" }}
      />

      {/* Mobile Background - Top Right Curve */}
      <div
        className="absolute top-0 right-0 w-[85%] h-[80%] bg-[#ffecd6] lg:hidden -z-0"
        style={{ borderBottomLeftRadius: '100% 70%' }}
      />

      {/* Left Content */}
      <div className="w-full relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-22 lg:pt-0">
        <span className="block text-[14px] md:text-[24.8px] font-bold tracking-[0.4em] text-black uppercase mb-1 md:mb-2 ml-1">
          T H E &nbsp; P E R F E C T
        </span>
        <h1 className="text-[42px] md:text-6xl lg:text-7xl font-black text-black leading-none mb-6 tracking-tight">
          PACKAGING
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8 text-[13px] md:text-base max-w-lg font-medium">
          At Perfect Group, we specialize in manufacturing high-quality plastic molded packaging solutions for the agro-chemical industry. With over three decades of expertise, state-of-the-art manufacturing, and strict quality control, we deliver reliable, high-performance products tailored to your business needs.
        </p>
      </div>

      {/* Right Image Content - Desktop */}
      <div className="h-full items-end justify-end hidden lg:flex overflow-hidden pt-20 relative z-10">
        <img
          src="/HeroImage.png"
          alt="Packaging Products"
          className="w-auto h-[600px] object-contain flex-shrink-0"
        />
      </div>

      {/* Mobile Image Content - Bottom Right */}
      <div className="absolute bottom-0 right-0 flex items-end justify-end lg:hidden z-10 pointer-events-none">
        <img
          src="/HeroImage.png"
          alt="Packaging Products"
          className="w-[90%] max-w-[400px] object-contain translate-x-4 translate-y-4"
        />
      </div>
    </section>
  );
};

export default Hero;
