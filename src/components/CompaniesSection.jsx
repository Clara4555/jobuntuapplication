// import React from 'react';
import dribble from '../assets/assets/dribble.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function CompaniesSection() {
  return (
    <>
      <div className="pt-28 pb-[12] mb-12"> 
        <div className='flex px-12'>
          <h1 className='text-secondary-color text-[20px] sm:text-[35px] lg:text-[40px] xl:text-[40px] leading-[3rem] lg:leading-[4rem]'>Top Companies</h1>
        </div>
        <div className="mt-12 relative container w-[100%]  mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="p-4 mb-6 border-2 rounded-lg hover:shadow-2xl hover:scale-110 transition-all duration-700 border-opacity-10 border-gray-500 ">
            <div className="flex items-center space-x-3">
              <img src={dribble} alt="job" width={40} height={40} />
              {/* Content */}
              <div className='flex flex-col'>
                <div className='flex gap-3 items-center'>
                  <h1 className='text-17px font-bold mb-0.4rem text-[#191F33]'>Dribble</h1>
                  <span className='text-[#E05151] border border-[#FCEEEE] rounded bg-[#FCEEEE]'>featured</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#767F8C' }}/>
                  <p className="ml-2" style={{ color: '#767F8C' }}>Dhaka,, Bangladesh</p>
                </div>
              </div>
            </div>
            {/* Button */}
            <button className="mt-4 bg-[#E7F0FA] border-[#E7F0FA] text-[#570AF1] rounded-md py-2 w-full hover:bg- hover:border-[#E7F0FA] transition-colors duration-300">
              Click me
            </button>
          </div>
          <div className="p-4 mb-6 border-2 rounded-lg hover:shadow-2xl hover:scale-110 transition-all duration-700 border-opacity-10 border-gray-500 ">
            <div className="flex items-center space-x-3">
              <img src={dribble} alt="job" width={40} height={40} />
              {/* Content */}
              <div className='flex flex-col'>
                <div className='flex gap-3 items-center'>
                  <h1 className='text-17px font-bold mb-0.4rem text-[#191F33]'>Dribble</h1>
                  <span className='text-[#E05151] border border-[#FCEEEE] rounded bg-[#FCEEEE]'>featured</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#767F8C' }}/>
                  <p className="ml-2" style={{ color: '#767F8C' }}>Dhaka,, Bangladesh</p>
                </div>
              </div>
            </div>
            {/* Button */}
            <button className="mt-4 bg-[#E7F0FA] border-[#E7F0FA] text-[#570AF1] rounded-md py-2 w-full hover:bg- hover:border-[#E7F0FA] transition-colors duration-300">
              Click me
            </button>
          </div>
          <div className="p-4 mb-6 border-2 rounded-lg hover:shadow-2xl hover:scale-110 transition-all duration-700 border-opacity-10 border-gray-500 ">
            <div className="flex items-center space-x-3">
              <img src={dribble} alt="job" width={40} height={40} />
              {/* Content */}
              <div className='flex flex-col'>
                <div className='flex gap-3 items-center'>
                  <h1 className='text-17px font-bold mb-0.4rem text-[#191F33]'>Dribble</h1>
                  <span className='text-[#E05151] border border-[#FCEEEE] rounded bg-[#FCEEEE]'>featured</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#767F8C' }}/>
                  <p className="ml-2" style={{ color: '#767F8C' }}>Dhaka,, Bangladesh</p>
                </div>
              </div>
            </div>
            {/* Button */}
            <button className="mt-4 bg-[#E7F0FA] border-[#E7F0FA] text-[#570AF1] rounded-md py-2 w-full hover:bg- hover:border-[#E7F0FA] transition-colors duration-300">
              Click me
            </button>
          </div>
          <div className="p-4 mb-6 border-2 rounded-lg hover:shadow-2xl hover:scale-110 transition-all duration-700 border-opacity-10 border-gray-500 ">
            <div className="flex items-center space-x-3">
              <img src={dribble} alt="job" width={40} height={40} />
              {/* Content */}
              <div className='flex flex-col'>
                <div className='flex gap-3 items-center'>
                  <h1 className='text-17px font-bold mb-0.4rem text-[#191F33]'>Dribble</h1>
                  <span className='text-[#E05151] border border-[#FCEEEE] rounded bg-[#FCEEEE]'>featured</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#767F8C' }}/>
                  <p className="ml-2" style={{ color: '#767F8C' }}>Dhaka,, Bangladesh</p>
                </div>
              </div>
            </div>
            {/* Button */}
            <button className="mt-4 bg-[#E7F0FA] border-[#E7F0FA] text-[#570AF1] rounded-md py-2 w-full hover:bg- hover:border-[#E7F0FA] transition-colors duration-300">
              Click me
            </button>
          </div>
          <div className="p-4 mb-6 border-2 rounded-lg hover:shadow-2xl hover:scale-110 transition-all duration-700 border-opacity-10 border-gray-500 ">
            <div className="flex items-center space-x-3">
              <img src={dribble} alt="job" width={40} height={40} />
              {/* Content */}
              <div className='flex flex-col'>
                <div className='flex gap-3 items-center'>
                  <h1 className='text-17px font-bold mb-0.4rem text-[#191F33]'>Dribble</h1>
                  <span className='text-[#E05151] border border-[#FCEEEE] rounded bg-[#FCEEEE]'>featured</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#767F8C' }}/>
                  <p className="ml-2" style={{ color: '#767F8C' }}>Dhaka,, Bangladesh</p>
                </div>
              </div>
            </div>
            {/* Button */}
            <button className="mt-4 bg-[#E7F0FA] border-[#E7F0FA] text-[#570AF1] rounded-md py-2 w-full hover:bg- hover:border-[#E7F0FA] transition-colors duration-300">
              Click me
            </button>
          </div>
          <div className="p-4 mb-6 border-2 rounded-lg hover:shadow-2xl hover:scale-110 transition-all duration-700 border-opacity-10 border-gray-500 ">
            <div className="flex items-center space-x-3">
              <img src={dribble} alt="job" width={40} height={40} />
              {/* Content */}
              <div className='flex flex-col'>
                <div className='flex gap-3 items-center'>
                  <h1 className='text-17px font-bold mb-0.4rem text-[#191F33]'>Dribble</h1>
                  <span className='text-[#E05151] border border-[#FCEEEE] rounded bg-[#FCEEEE]'>featured</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#767F8C' }}/>
                  <p className="ml-2" style={{ color: '#767F8C' }}>Dhaka,, Bangladesh</p>
                </div>
              </div>
            </div>
            {/* Button */}
            <button className="mt-4 bg-[#E7F0FA] border-[#E7F0FA] text-[#570AF1] rounded-md py-2 w-full hover:bg- hover:border-[#E7F0FA] transition-colors duration-300">
              Click me
            </button>
          </div>
      
        </div>
      </div>
    </>
  );
}

export default CompaniesSection;
