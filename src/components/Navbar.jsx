// import './index.css';
import { useState } from 'react';
import logo from '../assets/assets/Logo (1).png';
// import 'swiper/css';
// import 'swiper/css/bundle';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'flowbite';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <div className="bg-gray-100">
        {/* Top Bar */}
        <div className="container mx-auto py-3 hidden md:flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-primary border-b-2">Home</a>
            <a href="#" className="text-gray-700">Find Job</a>
            <a href="#" className="text-gray-700">Employers</a>
            <a href="#" className="text-gray-700">Candidates</a>
            <a href="#" className="text-gray-700">Pricing Plans</a>
            <a href="#" className="text-gray-700">Customer Supports</a>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div>
              <i className="fa-solid fa-phone"></i>
              <span className="font-medium">+237 620 205 447</span>
            </div>
            <div className="flex items-center justify-center">
              <img src="https://flagcdn.com/w20/us.png" srcSet="https://flagcdn.com/w40/us.png 2x" width="20" alt="United States" />
              <select className="bg-transparent focus:outline-none text-gray-700">
                <option value="en">
                  <img src="https://flagcdn.com/w20/us.png" alt="Icon" /> English
                </option>
                <option value="fr">
                  <img src="path_to_your_icon" alt="Icon" /> French
                </option>
              </select>
            </div>
          </div>
        </div>
        {/* Top Bar End */}

        {/* Nav Bar */}
        <nav className="bg-white py-4 px-4 sticky top-0 z-50">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-6">
                <img src={logo} alt="Logo" />
                <div className="hidden md:flex items-center space-x-2">
                  <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-sm flex items-center px-4 py-2">
                    <img src="https://flagcdn.com/w320/cm.png" alt="Cameroon Flag" className="w-6 h-4 mr-2" />
                    <select className="bg-transparent text-gray-700 text-sm focus:outline-none mr-4">
                      <option value="Cameroon">Cameroon</option>
                    </select>
                    <div className="flex items-center border-l border-gray-200 pl-4">
                      <svg className="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10A7 7 0 1110 3a7 7 0 017 7z"></path>
                      </svg>
                      <input type="text" placeholder="Job title, keyword, company" className="bg-transparent text-gray-700 text-sm focus:outline-none flex-initial" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button className="border border-purple-600 bg-transparent text-primary px-4 py-2 rounded">Sign In</button>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded">Post A Job</button>
                </div>
              </div>
              <div className="md:hidden">
                <button data-collapse-toggle="navbar-default" id="menu-toggle" type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-default" aria-expanded={isMenuOpen} onClick={toggleMenu}>
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div id="navbar-default" className={`${isMenuOpen ? '' : 'hidden'} md:hidden`}>
            <a href="#" className="block px-4 py-2 text-primary border-b-2">Home</a>
            <a href="#" className="block px-4 py-2 text-gray-700">Find Job</a>
            <a href="#" className="block px-4 py-2 text-gray-700">Employers</a>
            <a href="#" className="block px-4 py-2 text-gray-700">Candidates</a>
            <a href="#" className="block px-4 py-2 text-gray-700">Pricing Plans</a>
            <a href="#" className="block px-4 py-2 text-gray-700">Customer Supports</a>
          </div>
        </nav>
        {/* Nav Bar End */}
      </div>
    </>
  );
}

export default Navbar;
