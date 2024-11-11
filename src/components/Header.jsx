import { useState } from "react";
import Logo from "../assets/logo-porto.svg";
import Location from "../assets/location.webp";

import { motion } from "framer-motion";
const Header = () => {
  const [viewLocation, setViewLocation] = useState(false);

  const handleViewLocation = () => {
    setViewLocation(!viewLocation);
  };
  
  return (
    <>
    <motion.header
      className="w-full flex justify-between items-center px-4 py-2 sm:py-8 mb-0 sm:mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="w-full max-w-[1140px] flex flex-col md:flex-row justify-between items-center gap-4 mx-auto">
        <a href="https://www.porto.pt/pt/" target="_blank" rel="noopener noreferrer"><img src={Logo} alt="Logo" className="w-32" /></a>
        <div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center pt-1 gap-6">
            <p className="w-fit font-custom font-medium text-porto-500">
              <strong>12 - 14 - NOV, 2024</strong>
            </p>
            <a href="https://websummit.com/appearances/lis24/851eff96-e5b8-4351-b701-3b9a75c725ad/porto" target="_blank" rel="noopener noreferrer" className="w-fit font-custom font-normal text-porto-500">
              <strong className="font-bold">WEB SUMMIT</strong> | LISBON
            </a>
            <span className="w-fit font-custom font-semibold text-porto-500"
              onClick={handleViewLocation}
            >Booth E110 | View Location</span>
            <a
              className="w-fit font-custom font-bold text-porto-500 hover:text-white hover:bg-porto-500 transition-all duration-300 border-4 px-4 py-2 pt-3 leading-4 rounded-[30px] border-porto-500 mb-2"
              href="#calendar"
            >
              AGENDA
            </a>
          </div>
        </div>
      </div>
    </motion.header>

    {viewLocation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={handleViewLocation}
          />
          
          <div className="relative bg-white rounded-lg shadow-xl max-w-[90%] w-[600px] m-4">
            <button
              onClick={handleViewLocation}
              className="absolute -right-3 -top-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Fechar modal"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6">
              <img 
                src={Location} 
                alt="Mapa de localização"
                className="w-full max-w-[400px] h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
