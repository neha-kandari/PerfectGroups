import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const measuringCaps = [
  { name: "Alu M Caps 1", image: "/Products/Measuring Caps/Alu M Caps 1.png" },
  { name: "Alu", image: "/Products/Measuring Caps/Alu.png" },
  { name: "Alu M Caps", image: "/Products/Measuring Caps/Alu_M_Caps.png" },
  { name: "Alu M Caps 2", image: "/Products/Measuring Caps/Alu_M_Caps_2.png" },
  { name: "Dome M Caps", image: "/Products/Measuring Caps/Dome_M_Caps.png" },
  { name: "Imida", image: "/Products/Measuring Caps/Imida.png" },
  { name: "Imida Dome", image: "/Products/Measuring Caps/Imida_Dome.png" },
  { name: "Imida Tring", image: "/Products/Measuring Caps/Imida_Tring.png" },
  { name: "Pet Dome", image: "/Products/Measuring Caps/Pet_Dome.png" },
  { name: "Pet M Caps", image: "/Products/Measuring Caps/Pet_M_Caps.png" },
  { name: "Targa M Caps", image: "/Products/Measuring Caps/Targa_M_Caps_on_Alu_Bottle.png" },
];

const jars = [
  { name: "Clothianidin Jars", image: "/Products/PP,HDPE Jars/Clothianidin_Jars.png" },
  { name: "DT Jars", image: "/Products/PP,HDPE Jars/DT_Jars.png" },
  { name: "Ema Jars", image: "/Products/PP,HDPE Jars/Ema_Jars.png" },
  { name: "Ema Jars Bottom Thread", image: "/Products/PP,HDPE Jars/Ema_Jars_Bottom_Thread.png" },
  { name: "Ema Jars 2", image: "/Products/PP,HDPE Jars/Ema_Jars__2.png" },
  { name: "Pymetro Jars", image: "/Products/PP,HDPE Jars/Pymetro_Jars.png" },
  { name: "Square Jars", image: "/Products/PP,HDPE Jars/Square_Jars.png" },
  { name: "Thia Jars", image: "/Products/PP,HDPE Jars/Thia_Jars.png" },
  { name: "Thia Jars 2", image: "/Products/PP,HDPE Jars/Thia_Jars__2.png" },
  { name: "Troll Jars", image: "/Products/PP,HDPE Jars/Troll_Jars.png" },
];

const spoons = [
  { name: "Spoon 1", image: "/Products/Spoon/spoon 1.jpeg" },
  { name: "Spoon 2", image: "/Products/Spoon/Spoon 2.jpeg" },
  { name: "Spoon 3", image: "/Products/Spoon/Spoon 3.jpeg" },
  { name: "Spoon 4", image: "/Products/Spoon/Spoon4.jpeg" },
];

const ProductCategory = ({ title, products }: { title: string, products: { name: string, image: string }[] }) => (
  <section className="py-8 animate-fade-in">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-black mb-8 font-sans pl-4 border-l-4 border-[#C69C2E]">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="group flex flex-col items-center h-full">
            <div className="w-full aspect-square bg-[#FFDAB9] flex items-center justify-center mb-4 rounded-lg transition-transform duration-300 hover:scale-105 shadow-sm p-8 relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center min-h-[3.5rem] flex items-start justify-center">{product.name}</h3>
            <div className="w-8 h-1 bg-[#C69C2E] rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Products = () => {
  const productSections = [
    { title: 'Measuring Caps', products: measuringCaps },
    { title: 'Jars', products: jars },
    { title: 'Spoons', products: spoons },
  ];

  const [activeCategory, setActiveCategory] = useState(productSections[0].title);

  const categories = productSections.map(section => section.title);

  const displayedSections = productSections.filter(section => section.title === activeCategory);

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
                      Explore Our Range
                    </span>
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent drop-shadow-lg">
                    Our Products
                  </h1>
                  
                  {/* Enhanced underline */}
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#f89a24] rounded-full"></div>
                    <div className="w-24 h-1.5 bg-[#f89a24] rounded-full shadow-lg shadow-[#f89a24]/50"></div>
                    <div className="w-12 h-1 bg-gradient-to-l from-transparent to-[#f89a24] rounded-full"></div>
                  </div>
                  
                  {/* Subtle description */}
                  <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-6">
                    Precision-Engineered Packaging Solutions
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

        {/* Products Section */}
        <section className="pt-12 pb-12 bg-[#FFF9F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
           <div className="flex flex-wrap justify-center gap-4 mb-8">
             {categories.map((category) => (
               <button
                 key={category}
                 onClick={() => setActiveCategory(category)}
                 className={`px-6 py-2 rounded-full border-2 font-semibold transition-all duration-300 ${
                   activeCategory === category 
                     ? 'bg-[#C69C2E] border-[#C69C2E] text-white' 
                     : 'border-[#C69C2E] text-[#C69C2E] hover:bg-[#C69C2E] hover:text-white'
                 }`}
               >
                 {category}
               </button>
             ))}
           </div>
          </div>
        
          {displayedSections.map((section) => (
            <ProductCategory key={section.title} title={section.title} products={section.products} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
