import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/918882473038';

const Contact = () => {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const manufacturingUnits = [
    {
      id: "unit1",
      name: "Unit-1: Perfect Packaging (Delhi)",
      address: "H-18, DSIDC Industrial Complex, Nangloi, Delhi – 110041 (INDIA)"
    },
    {
      id: "unit2",
      name: "Unit-2: Perfect Ecopack LLP (Delhi)",
      address: "D-31, DSIDC Industrial Complex, Nangloi, Delhi – 110041 (INDIA)"
    },
    {
      id: "unit3",
      name: "Unit-3: Sunstar Propack Pvt. Ltd. (Samba, J&K)",
      address: "Industrial Growth Centre, SIDCO, Samba – 184121, J&K (INDIA)"
    },
    {
      id: "unit4",
      name: "Unit-4: Perfect Plastotech Pvt. Ltd. (Samba, J&K)",
      address: "Industrial Growth Centre, SIDCO, Samba – 184121, J&K (INDIA)"
    },
    {
      id: "unit5",
      name: "Unit-5: Perfect Next-Gen Pvt. Ltd. (Panoli - Gujarat)",
      address: "C1B- 110/10, GIDC Panoli, Ankleshwar Distt. Bharuch, Gujarat – 394115 (INDIA)"
    }
  ];

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const digits = event.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(digits);

    if (phoneError && digits.length === 10) {
      setPhoneError('');
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = (formData.get('name') || '').toString().trim();
    const phoneValue = (formData.get('phone') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    const digits = phoneValue.replace(/\D/g, '');
    if (digits.length !== 10) {
      setPhoneError('Please enter a valid 10 digit phone number');
      return;
    }

    const textLines = [
      'Hello! I would like to know more about your products.',
      '',
      name ? `Name: ${name}` : '',
      `Phone: ${phoneValue}`,
      message ? `Message: ${message}` : '',
      '',
      'Please get back to me.',
    ].filter(Boolean);

    const encodedMessage = encodeURIComponent(textLines.join('\n'));
    const whatsappUrl = `${WHATSAPP_URL}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    event.currentTarget.reset();
    setPhone('');
    setPhoneError('');
  };

  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Get in <span className="text-[#E88D14]">Touch</span>
          </h1>
          <h2 className="text-2xl font-bold text-gray-600 mb-6">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our packaging solutions? Need assistance with your order? 
            Our expert team is here to help you with all your packaging needs.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Contact <span className="text-[#E88D14]">Information</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Reach out to us through any of these channels. We're here to assist you with all your needs.
            </p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#E88D14] rounded-full flex items-center justify-center mb-6 text-white shadow-md">
                <Phone size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Phone Number</h3>
              <p className="text-gray-600 text-sm font-medium">+91-11-47093392</p>
              <p className="text-gray-600 text-sm font-medium mt-2">+91-9999703392</p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#E88D14] rounded-full flex items-center justify-center mb-6 text-white shadow-md">
                <Mail size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Email Address</h3>
              <p className="text-gray-600 text-sm break-all">info@perfectplastotech.com</p>
            </div>

            {/* Office Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#E88D14] rounded-full flex items-center justify-center mb-6 text-white shadow-md">
                <MapPin size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Corporate Office</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                H-18, DSIDC Industrial Complex, Nangloi, Delhi – 110041, INDIA
              </p>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#E88D14] rounded-full flex items-center justify-center mb-6 text-white shadow-md">
                <Clock size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Business Hours</h3>
              <p className="text-gray-600 text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600 text-sm mt-1">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Units Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Our <span className="text-[#E88D14]">Manufacturing Units</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manufacturingUnits.map((unit) => (
              <div key={unit.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#E88D14] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#E88D14] shadow-sm shrink-0 border border-gray-100 group-hover:bg-[#E88D14] group-hover:text-white transition-colors">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">{unit.name}</h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{unit.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Form Section */}
              <div className="p-8 sm:p-12 lg:p-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-2 font-sans">Send us a <span className="text-[#E88D14]">Message</span></h2>
                <p className="text-gray-600 mb-8 text-sm">
                  We'd love to hear from you. Please fill out the form below.
                </p>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name *" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E88D14] focus:ring-1 focus:ring-[#E88D14] outline-none transition-colors bg-gray-50 text-gray-700 placeholder-gray-400 text-sm"
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone number *" 
                    maxLength={10}
                    pattern="\d{10}"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E88D14] focus:ring-1 focus:ring-[#E88D14] outline-none transition-colors bg-gray-50 text-gray-700 placeholder-gray-400 text-sm"
                    value={phone}
                    onChange={handlePhoneChange}
                    onInvalid={(event) => event.currentTarget.setCustomValidity('Please enter 10 digit number')}
                    onInput={(event) => event.currentTarget.setCustomValidity('')}
                  />
                  {phoneError && (
                    <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                  )}
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E88D14] focus:ring-1 focus:ring-[#E88D14] outline-none transition-colors bg-gray-50 text-gray-700 appearance-none cursor-pointer text-sm">
                      <option>How Can We Help You</option>
                      <option>Product Inquiry</option>
                      <option>Custom Order</option>
                      <option>Support</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                    </div>
                  </div>
                  <textarea 
                    rows={4}
                    name="message"
                    placeholder="Message" 
                    maxLength={50}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E88D14] focus:ring-1 focus:ring-[#E88D14] outline-none transition-colors bg-gray-50 text-gray-700 placeholder-gray-400 text-sm resize-none"
                  ></textarea>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#E88D14] text-white py-3.5 rounded-lg font-bold hover:bg-[#d67e0e] transition-colors shadow-lg shadow-orange-200 mt-2 tracking-wide uppercase text-sm flex items-center justify-center"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>

              {/* Image Section */}
              <div className="relative h-full min-h-[400px] hidden lg:block bg-[#FFF9F0]">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <img 
                    src="/ContactUs.png" 
                    alt="Contact Support" 
                    className="w-full h-full object-contain object-center z-10"
                  />
                </div>
                {/* Decorative circle */}
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#E88D14] opacity-10 rounded-full translate-x-1/3 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#E88D14] opacity-5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
