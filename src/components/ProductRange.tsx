import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Alu M Caps 1",
    image: "/Products/Measuring Caps/Alu M Caps 1.png",
  },
  {
    id: 2,
    name: "Alu M Caps 2",
    image: "/Products/Measuring Caps/Alu_M_Caps_2.png",
  },
  {
    id: 3,
    name: "Alu M Caps",
    image: "/Products/Measuring Caps/Alu_M_Caps.png",
  },
  {
    id: 4,
    name: "Clothianidin Jarss",
    image: "/Products/PP,HDPE Jars/Clothianidin_Jars.png",
  },
  {
    id: 5,
    name: "Thia Jars",
    image: "/Products/PP,HDPE Jars/Thia_Jars.png",
  },
  {
    id: 6,
    name: "Troll_Jars",
    image: "/Products/PP,HDPE Jars/Troll_Jars.png",
  },
];

const ProductRange = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [shuffledProducts, setShuffledProducts] = useState(products);

  useEffect(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    setShuffledProducts(shuffled);

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, shuffledProducts.length - itemsToShow);
      const current = Math.min(prev, maxIndex);
      return current === 0 ? maxIndex : current - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, shuffledProducts.length - itemsToShow);
      const current = Math.min(prev, maxIndex);
      return current === maxIndex ? 0 : current + 1;
    });
  };

  return (
    <section id="products" className="py-20 bg-[#FFF9F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-12 mb-16">
          <div className="lg:w-1/3">
            <h2 className="text-5xl font-bold text-black mb-2 lg:mb-6 font-sans leading-tight">Product<br />Range</h2>
          </div>
          <div className="lg:w-2/3 pt-0 lg:pt-2">
            <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
              At Perfect Group, we offer a comprehensive range of high-quality plastic molded packaging solutions designed for the agro-chemical industry. Each product is manufactured with precision and quality control to meet your specific business needs.
            </p>
          </div>
        </div>

        <div className="relative px-4 lg:px-12">
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-8 bg-[#C69C2E] text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-lg z-10 hover:bg-[#b08b29] transition-colors flex items-center justify-center"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-8 bg-[#C69C2E] text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-lg z-10 hover:bg-[#b08b29] transition-colors flex items-center justify-center"
          >
            <ChevronRight size={24} />
          </button>

          {/* Product Grid - Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${Math.min(
                  currentIndex,
                  Math.max(0, shuffledProducts.length - itemsToShow)
                ) * (100 / itemsToShow)}%)`,
              }}
            >
              {shuffledProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="flex-shrink-0 w-full lg:w-1/3 px-4 group flex flex-col items-center"
                >
                  {/* Equal width and height container */}
                  <div className="w-full aspect-square bg-[#FFDAB9] flex items-center justify-center mb-6 rounded-lg transition-transform duration-300 hover:scale-105 shadow-sm">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-3/5 h-3/5 object-contain"
                    />
                  </div>
                  <div className="relative pb-2 hidden lg:block">
                    <h3 className="text-xl font-semibold text-gray-800 text-center">{product.name}</h3>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#C69C2E] rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: shuffledProducts.length - itemsToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#C69C2E] w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
