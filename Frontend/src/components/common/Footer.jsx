import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import footerLogo from "../../assets/img/new-logo.png";

const Footer = () => {
  return (
    // Changed bg-black to bg-red-950
    <div className="site-footer relative w-full bg-red-950 mt-32">
      
      {/* --- Animated Parallax Waves (Japanese Flow) --- */}
      <style>{`
        .parallax > use { animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite; }
        .parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
        .parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
        .parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
        .parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; }
        @keyframes move-forever {
          0% { transform: translate3d(-90px,0,0); }
          100% { transform: translate3d(85px,0,0); }
        }
      `}</style>

      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none" style={{ transform: 'translateY(-98%)' }}>
        <svg
          className="relative block w-full h-[100px] md:h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            {/* Color Logic: Red-950 is #450a0a (RGB: 69, 10, 10) 
                We use RGBA to create the transparency layers using this base color.
            */}
            
            {/* Layer 1: Lightest/Furthest */}
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(69, 10, 10, 0.3)" />
            
            {/* Layer 2: Medium */}
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(69, 10, 10, 0.5)" />
            
            {/* Layer 3: Darker */}
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(69, 10, 10, 0.7)" />
            
            {/* Layer 4: Solid Red-950 (Merges with Footer background) */}
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#450a0a" />
          </g>
        </svg>
      </div>

      {/* --- Main Content --- */}
      <div className="site-footer-content relative z-10 container mx-auto px-6 pb-12 pt-10 text-white">
        <div className="site-footer-grid flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Left Section */}
          <div className="site-footer-left w-full md:w-1/3 space-y-6">
            <div className="flex flex-col items-start">
              <h1 className="text-5xl font-bold font-serif tracking-wide mb-1">
                <img src={footerLogo} alt="Jarsea Logo" className="w-32 h-32 object-contain" />
              </h1>
              <p className="text-red-200 text-sm italic">
                Discover the ocean of jerseys
              </p>
            </div>

            <div className="site-footer-newsletter space-y-2">
               <p className="text-red-200 text-sm">Get the latest updates</p>
               <div className="flex items-center border-b border-red-800 py-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-red-300"
                  />
                  <button className="flex-shrink-0 text-white hover:text-red-300 transition-colors duration-300">
                    <ArrowRight size={20} />
                  </button>
               </div>
            </div>

             <div className="flex space-x-4 pt-4">
                <a href="#" className="text-red-200 hover:text-white transition-colors"><Facebook size={20}/></a>
                <a href="#" className="text-red-200 hover:text-white transition-colors"><Instagram size={20}/></a>
                <a href="#" className="text-red-200 hover:text-white transition-colors"><Twitter size={20}/></a>
             </div>
          </div>

          {/* Right Section */}
          <div className="site-footer-links w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left md:pl-20">
            <h3 className="text-xl font-semibold mb-6">
              Quick links
            </h3>
            <ul className="w-full max-w-xs space-y-4 text-red-100">
              {['About Us', 'Contact Us', 'Terms and Conditions', 'Cancellation and Shipping Policy', 'Return & Refund Policy', 'FAQs'].map((item) => (
                <li key={item} className="flex justify-center md:justify-start">
                  {item === 'About Us' ? (
                    <Link to="/about" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                      {item}
                    </Link>
                  ) : (
                    <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        {/* Changed border to red-900 to match the theme */}
        <div className="border-t border-red-900 mt-12 pt-8 text-center text-red-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Jarsea. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
