import {Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-light-orange/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <span className="font-bold text-2xl tracking-tighter text-brand-dark">
                PERFECT<span className="text-brand-orange">GROUP</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Perfect Group specializes in manufacturing high-quality plastic molded packaging solutions for the agro-chemical industry. With over 35 years of expertise, we deliver precision-engineered products tailored to your business needs.
            </p>
            {/* Social Media */}
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-brand-orange hover:bg-white/80 transition-colors shadow-sm">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-brand-orange hover:bg-white/80 transition-colors shadow-sm">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-brand-orange hover:bg-white/80 transition-colors shadow-sm">
                <Instagram size={18} />
              </a>
            </div> */}
          </div>

          {/* Quick Links / Navigation */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-brand-dark mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-orange transition-colors text-sm block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-orange transition-colors text-sm block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-brand-orange transition-colors text-sm block">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-orange transition-colors text-sm block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-brand-dark mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-orange mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm leading-relaxed">
                  H-18, DSIDC Industrial Complex, Nangloi, Delhi – 110041, INDIA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-orange flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+911147093392" className="text-gray-600 hover:text-brand-orange transition-colors text-sm">
                    +91-11-47093392
                  </a>
                  <a href="tel:+918882473038" className="text-gray-600 hover:text-brand-orange transition-colors text-sm">
                    +91-9999703392
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-orange flex-shrink-0" />
                <a href="mailto:info@perfectplastotech.com" className="text-gray-600 hover:text-brand-orange transition-colors text-sm break-all">
                  info@perfectplastotech.com
                </a>
              </li>
            </ul>
          </div>

          {/* Manufacturing Units */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-brand-dark mb-6">Manufacturing Units</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 text-sm">
                <span className="font-semibold text-brand-dark">Delhi:</span> H-18, DSIDC Industrial Complex, Nangloi
              </li>
              <li className="text-gray-600 text-sm">
                <span className="font-semibold text-brand-dark">J&K:</span> Industrial Growth Centre, SIDCO, Samba
              </li>
              <li className="text-gray-600 text-sm">
                <span className="font-semibold text-brand-dark">Gujarat:</span> GIDC Panoli, Ankleshwar
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="bg-brand-dark py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 text-xs">
            © 2025 Perfect Group. All rights reserved.
          </p>
          <p className="text-[#f89a24] text-sm sm:text-base mt-1">
            <span className="font-semibold">Website developed by</span>{' '}
            <a
              href="https://www.xpanix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2"
            >
              Xpanix
            </a>{' '}
            (
            <a
              href="tel:+918930005190"
              className="font-bold"
            >
              +91 8930005190
            </a>
            )
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
