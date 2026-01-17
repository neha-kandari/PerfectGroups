const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#ffd29b] to-[#975b0d] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
          Let's discuss how Perfect Group can provide you with high-quality plastic packaging solutions tailored to your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/919999703392"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-[#f89a24] font-bold uppercase tracking-widest px-10 py-4 rounded-lg text-sm hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto">
              Contact Us
            </button>
          </a>
          <a href="/products">
            <button className="bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest px-10 py-4 rounded-lg text-sm hover:bg-white/10 transition-colors w-full sm:w-auto">
              View Products
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
