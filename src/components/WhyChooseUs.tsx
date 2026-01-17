const WhyChooseUs = () => {
  const features = [
    {
      icon: "✓",
      title: "35+ Years Experience",
      description: "Decades of expertise in plastic molding and packaging solutions"
    },
    {
      icon: "✓",
      title: "Quality Assurance",
      description: "Rigorous testing ensuring chemical compatibility and durability"
    },
    {
      icon: "✓",
      title: "Custom Solutions",
      description: "Tailor-made packaging solutions to meet your specific requirements"
    },
    {
      icon: "✓",
      title: "Multiple Manufacturing Units",
      description: "Strategic locations across India for efficient production and delivery"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-sans">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-[#f89a24] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            We combine decades of expertise with cutting-edge technology to deliver exceptional plastic packaging solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#FFF9F0] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#E6DCC8]/30"
            >
              <div className="w-16 h-16 bg-[#f89a24] rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
