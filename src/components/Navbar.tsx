import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Close menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-6 md:px-12 lg:px-24">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" onClick={handleLinkClick}>
          <img 
            src="/Logo.png" 
            alt="Perfect Group Logo" 
            className="h-12 w-auto sm:h-18"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 lg:space-x-14">
        <Link
          to="/"
          className={`relative text-[13px] font-bold uppercase tracking-widest transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#f89a24] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 ${
            isActive('/') ? 'text-[#f89a24] after:scale-x-100' : 'text-black hover:text-[#f89a24] hover:after:scale-x-100'
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`relative text-[13px] font-bold uppercase tracking-widest transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#f89a24] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 ${
            isActive('/about') ? 'text-[#f89a24] after:scale-x-100' : 'text-black hover:text-[#f89a24] hover:after:scale-x-100'
          }`}
        >
          About Us
        </Link>
        <Link
          to="/products"
          className={`relative text-[13px] font-bold uppercase tracking-widest transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#f89a24] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 ${
            isActive('/products') ? 'text-[#f89a24] after:scale-x-100' : 'text-black hover:text-[#f89a24] hover:after:scale-x-100'
          }`}
        >
          Products
        </Link>
        <Link
          to="/contact"
          className={`relative text-[13px] font-bold uppercase tracking-widest transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#f89a24] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 ${
            isActive('/contact') ? 'text-[#f89a24] after:scale-x-100' : 'text-black hover:text-[#f89a24] hover:after:scale-x-100'
          }`}
        >
          Contact Us
        </Link>
      </div>

      {/* Desktop Contact Us Button */}
      <div className="hidden md:flex items-center">
        <a
          href="https://wa.me/918882473038"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#f89a24] hover:bg-[#e08a1d] text-white font-bold uppercase tracking-widest px-6 lg:px-8 h-11 rounded-lg text-[11px] border-none shadow-none transition-colors">
            Contact Us
          </button>
        </a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="text-gray-800 hover:text-[#f89a24] focus:outline-none p-2 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Opens from Right */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Slide-in Menu from Right */}
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto">
            <div className="flex flex-col h-full">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <img 
                  src="/Logo.png" 
                  alt="Perfect Group Logo" 
                  className="h-12 w-auto"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-[#f89a24] focus:outline-none p-2 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-6 space-y-2">
                <Link 
                  to="/" 
                  onClick={handleLinkClick}
                  className={`block px-4 py-3 font-bold uppercase tracking-wider text-sm rounded-lg transition-all ${
                    isActive('/') 
                      ? 'text-[#f89a24] bg-[#f89a24]/5 border-b-2 border-[#f89a24]' 
                      : 'text-gray-700 hover:text-[#f89a24] hover:bg-[#f89a24]/5'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  onClick={handleLinkClick}
                  className={`block px-4 py-3 font-bold uppercase tracking-wider text-sm rounded-lg transition-all ${
                    isActive('/about') 
                      ? 'text-[#f89a24] bg-[#f89a24]/5 border-b-2 border-[#f89a24]' 
                      : 'text-gray-700 hover:text-[#f89a24] hover:bg-[#f89a24]/5'
                  }`}
                >
                  About Us
                </Link>
                <Link 
                  to="/products" 
                  onClick={handleLinkClick}
                  className={`block px-4 py-3 font-bold uppercase tracking-wider text-sm rounded-lg transition-all ${
                    isActive('/products') 
                      ? 'text-[#f89a24] bg-[#f89a24]/5 border-b-2 border-[#f89a24]' 
                      : 'text-gray-700 hover:text-[#f89a24] hover:bg-[#f89a24]/5'
                  }`}
                >
                  Products
                </Link>
                <Link 
                  to="/contact" 
                  onClick={handleLinkClick}
                  className={`block px-4 py-3 font-bold uppercase tracking-wider text-sm rounded-lg transition-all ${
                    isActive('/contact') 
                      ? 'text-[#f89a24] bg-[#f89a24]/5 border-b-2 border-[#f89a24]' 
                      : 'text-gray-700 hover:text-[#f89a24] hover:bg-[#f89a24]/5'
                  }`}
                >
                  Contact Us
                </Link>
              </div>

              {/* Contact Us Button */}
              <div className="p-6 border-t border-gray-200">
                <a
                  href="https://wa.me/919999703392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  onClick={handleLinkClick}
                >
                  <button className="w-full bg-[#f89a24] hover:bg-[#e08a1d] text-white font-bold uppercase tracking-widest px-6 py-3 rounded-lg text-sm shadow-lg transition-colors">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
