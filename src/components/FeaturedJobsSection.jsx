// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import employerlogo from '../assets/assets/Employers Logo.png';

function FeaturedJobsSection() {
  return (
    <>
      <div className="px-6 mb-10 pt-20 pb-12">
        <div>
          <div className='flex justify-between px-6'>
            <h1 className='text-secondary-color text-[20px] sm:text-[35px] 
              lg:text-[40px] xl:text-[30px]'>
              Featured Jobs
            </h1>
            <div className="flex justify-between items-center border outline-none text-[#570AF1] py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300">
              <a href="" className='mr-2'>View all</a>
              <FontAwesomeIcon icon={faArrowRight} className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-12 w-[100%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        <div className="box p-6 mb-6 relative cursor-pointer hover:scale-110 hover:shadow-sm transition-transform duration-300 rounded-lg bg-gradient-to-r from-yellow-100 to-white border-2 border-gray-300">
          <h1 className='text-[25px] font-semibold mb-[0.4rem] text-[#18191C]'>Technical Support</h1>
          <div className="flex space-x-4">
            <p className='text-[#0BA02C] border border-[#E7F6EA] bg-[#E7F6EA]'>PART-TIME</p>
            <span className='text-[#767F8C]'>salary: $20,000-$25,000</span>
          </div>
          <div className="flex items-center space-x-5" data-aos="fade-up">
            <img src={employerlogo} width={40} height={40} alt="Employer Logo" />
            <div className='flex flex-col w-full'>
              <div className="flex justify-between items-center w-full">
                <h1>Googleinc</h1>
                <FontAwesomeIcon icon={faBookmark} className="ml-auto" style={{ color: '#C8CCD1' }} />
              </div>
              <div className="flex items-center mt-2"  >
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#767F8C' }}/>
                <p className="ml-2" style={{ color: '#767F8C' }}>Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat the job box as needed */}
        <div className="box p-6 mb-6 relative cursor-pointer hover:scale-110 hover:shadow-sm transition-transform duration-300 rounded-lg bg-gradient-to-r from-yellow-100 to-white border-2 border-gray-300">
          <h1 className='text-[25px] font-semibold mb-[0.4rem] text-[#18191C]'>Technical Support</h1>
          <div className="flex space-x-4">
            <p className='text-[#0BA02C] border border-[#E7F6EA] bg-[#E7F6EA]'>PART-TIME</p>
            <span className='text-[#767F8C]'>salary: $20,000-$25,000</span>
          </div>
          <div className="flex items-center space-x-5" data-aos="fade-up">
            <img src={employerlogo} width={40} height={40} alt="Employer Logo" />
            <div className='flex flex-col w-full'>
              <div className="flex justify-between items-center w-full">
                <h1>Googleinc</h1>
                <FontAwesomeIcon icon={faBookmark} className="ml-auto"  style={{ color: '#C8CCD1' }} />
              </div>
              <div className="flex items-center mt-2" style={{ color: '#767F8C' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p className="ml-2">Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box p-6 mb-6 relative cursor-pointer border hover:scale-110 hover:shadow-sm transition-transform duration-300 rounded-lg  border-gray-300">
          <h1 className='text-[25px] font-semibold mb-[0.4rem] text-[#18191C]'>Technical Support</h1>
          <div className="flex space-x-4">
            <p className='text-[#0BA02C] border border-[#E7F6EA] bg-[#E7F6EA]'>PART-TIME</p>
            <span className='text-[#767F8C]'>salary: $20,000-$25,000</span>
          </div>
          <div className="flex items-center space-x-5" data-aos="fade-up">
            <img src={employerlogo} width={40} height={40} alt="Employer Logo" />
            <div className='flex flex-col w-full'>
              <div className="flex justify-between items-center w-full">
                <h1>Googleinc</h1>
                <FontAwesomeIcon icon={faBookmark} className="ml-auto " style={{ color: '#C8CCD1' }}/>
              </div>
              <div className="flex items-center mt-2 " style={{ color: '#767F8C' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p className="ml-2">Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box p-6 mb-6 relative cursor-pointer border hover:scale-110 hover:shadow-sm transition-transform duration-300 rounded-lg  border-gray-300">
          <h1 className='text-[25px] font-semibold mb-[0.4rem] text-[#18191C]'>Technical Support</h1>
          <div className="flex space-x-4">
            <p className='text-[#0BA02C] border border-[#E7F6EA] bg-[#E7F6EA]'>PART-TIME</p>
            <span className='text-[#767F8C]'>salary: $20,000-$25,000</span>
          </div>
          <div className="flex items-center space-x-5" data-aos="fade-up">
            <img src={employerlogo} width={40} height={40} alt="Employer Logo" />
            <div className='flex flex-col w-full'>
              <div className="flex justify-between items-center w-full">
                <h1>Googleinc</h1>
                <FontAwesomeIcon icon={faBookmark} className="ml-auto " style={{ color: '#C8CCD1' }}/>
              </div>
              <div className="flex items-center mt-2 " style={{ color: '#767F8C' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p className="ml-2">Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box p-6 mb-6 relative cursor-pointer border hover:scale-110 hover:shadow-sm transition-transform duration-300 rounded-lg  border-gray-300">
          <h1 className='text-[25px] font-semibold mb-[0.4rem] text-[#18191C]'>Technical Support</h1>
          <div className="flex space-x-4">
            <p className='text-[#0BA02C] border border-[#E7F6EA] bg-[#E7F6EA]'>PART-TIME</p>
            <span className='text-[#767F8C]'>salary: $20,000-$25,000</span>
          </div>
          <div className="flex items-center space-x-5" data-aos="fade-up">
            <img src={employerlogo} width={40} height={40} alt="Employer Logo" />
            <div className='flex flex-col w-full'>
              <div className="flex justify-between items-center w-full">
                <h1>Googleinc</h1>
                <FontAwesomeIcon icon={faBookmark} className="ml-auto " style={{ color: '#C8CCD1' }}/>
              </div>
              <div className="flex items-center mt-2 " style={{ color: '#767F8C' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p className="ml-2">Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box p-6 mb-6 relative cursor-pointer border hover:scale-110 hover:shadow-sm transition-transform duration-300 rounded-lg  border-gray-300">
          <h1 className='text-[25px] font-semibold mb-[0.4rem] text-[#18191C]'>Technical Support</h1>
          <div className="flex space-x-4">
            <p className='text-[#0BA02C] border border-[#E7F6EA] bg-[#E7F6EA]'>PART-TIME</p>
            <span className='text-[#767F8C]'>salary: $20,000-$25,000</span>
          </div>
          <div className="flex items-center space-x-5" data-aos="fade-up">
            <img src={employerlogo} width={40} height={40} alt="Employer Logo" />
            <div className='flex flex-col w-full'>
              <div className="flex justify-between items-center w-full">
                <h1>Googleinc</h1>
                <FontAwesomeIcon icon={faBookmark} className="ml-auto " style={{ color: '#C8CCD1' }}/>
              </div>
              <div className="flex items-center mt-2 " style={{ color: '#767F8C' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p className="ml-2">Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box p-6 mb-6 relative cursor-pointer border hover:scale-110 hover:shadow-sm transition-transform duration-300 rounded-lg  border-gray-300">
          <h1 className='text-[25px] font-semibold mb-[0.4rem] text-[#18191C]'>Technical Support</h1>
          <div className="flex space-x-4">
            <p className='text-[#0BA02C] border border-[#E7F6EA] bg-[#E7F6EA]'>PART-TIME</p>
            <span className='text-[#767F8C]'>salary: $20,000-$25,000</span>
          </div>
          <div className="flex items-center space-x-5" data-aos="fade-up">
            <img src={employerlogo} width={40} height={40} alt="Employer Logo" />
            <div className='flex flex-col w-full'>
              <div className="flex justify-between items-center w-full">
                <h1>Googleinc</h1>
                <FontAwesomeIcon icon={faBookmark} className="ml-auto " style={{ color: '#C8CCD1' }}/>
              </div>
              <div className="flex items-center mt-2 " style={{ color: '#767F8C' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p className="ml-2">Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box p-6 mb-6 relative cursor-pointer border hover:scale-110 hover:shadow-sm transition-transform duration-300 rounded-lg  border-gray-300">
          <h1 className='text-[25px] font-semibold mb-[0.4rem] text-[#18191C]'>Technical Support</h1>
          <div className="flex space-x-4">
            <p className='text-[#0BA02C] border border-[#E7F6EA] bg-[#E7F6EA]'>PART-TIME</p>
            <span className='text-[#767F8C]'>salary: $20,000-$25,000</span>
          </div>
          <div className="flex items-center space-x-5" data-aos="fade-up">
            <img src={employerlogo} width={40} height={40} alt="Employer Logo" />
            <div className='flex flex-col w-full'>
              <div className="flex justify-between items-center w-full">
                <h1>Googleinc</h1>
                <FontAwesomeIcon icon={faBookmark} className="ml-auto " style={{ color: '#C8CCD1' }}/>
              </div>
              <div className="flex items-center mt-2 " style={{ color: '#767F8C' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p className="ml-2">Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box p-6 mb-6 relative cursor-pointer hover:scale-110 hover:shadow-sm transition-transform duration-300 rounded-lg bg-gradient-to-r from-yellow-100 to-white border-2 border-gray-300">
          <h1 className='text-[25px] font-semibold mb-[0.4rem] text-[#18191C]'>Technical Support</h1>
          <div className="flex space-x-4">
            <p className='text-[#0BA02C] border border-[#E7F6EA] bg-[#E7F6EA]'>PART-TIME</p>
            <span className='text-[#767F8C]'>salary: $20,000-$25,000</span>
          </div>
          <div className="flex items-center space-x-5" data-aos="fade-up">
            <img src={employerlogo} width={40} height={40} alt="Employer Logo" />
            <div className='flex flex-col w-full'>
              <div className="flex justify-between items-center w-full">
                <h1>Googleinc</h1>
                <FontAwesomeIcon icon={faBookmark} className="ml-auto"  style={{ color: '#C8CCD1' }} />
              </div>
              <div className="flex items-center mt-2" style={{ color: '#767F8C' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p className="ml-2">Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box p-6 mb-6 relative cursor-pointer hover:scale-110 hover:shadow-sm transition-transform duration-300 rounded-lg bg-gradient-to-r from-yellow-100 to-white border-2 border-gray-300">
          <h1 className='text-[25px] font-semibold mb-[0.4rem] text-[#18191C]'>Technical Support</h1>
          <div className="flex space-x-4">
            <p className='text-[#0BA02C] border border-[#E7F6EA] bg-[#E7F6EA]'>PART-TIME</p>
            <span className='text-[#767F8C]'>salary: $20,000-$25,000</span>
          </div>
          <div className="flex items-center space-x-5" data-aos="fade-up">
            <img src={employerlogo} width={40} height={40} alt="Employer Logo" />
            <div className='flex flex-col w-full'>
              <div className="flex justify-between items-center w-full">
                <h1>Googleinc</h1>
                <FontAwesomeIcon icon={faBookmark} className="ml-auto"  style={{ color: '#C8CCD1' }} />
              </div>
              <div className="flex items-center mt-2" style={{ color: '#767F8C' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p className="ml-2">Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box p-6 mb-6 relative cursor-pointer hover:scale-110 hover:shadow-sm transition-transform duration-300 rounded-lg bg-gradient-to-r from-yellow-100 to-white border-2 border-gray-300">
          <h1 className='text-[25px] font-semibold mb-[0.4rem] text-[#18191C]'>Technical Support</h1>
          <div className="flex space-x-4">
            <p className='text-[#0BA02C] border border-[#E7F6EA] bg-[#E7F6EA]'>PART-TIME</p>
            <span className='text-[#767F8C]'>salary: $20,000-$25,000</span>
          </div>
          <div className="flex items-center space-x-5" data-aos="fade-up">
            <img src={employerlogo} width={40} height={40} alt="Employer Logo" />
            <div className='flex flex-col w-full'>
              <div className="flex justify-between items-center w-full">
                <h1>Googleinc</h1>
                <FontAwesomeIcon icon={faBookmark} className="ml-auto"  style={{ color: '#C8CCD1' }} />
              </div>
              <div className="flex items-center mt-2" style={{ color: '#767F8C' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p className="ml-2">Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box p-6 mb-6 relative cursor-pointer hover:scale-110 hover:shadow-sm transition-transform duration-300 rounded-lg bg-gradient-to-r from-yellow-100 to-white border-2 border-gray-300">
          <h1 className='text-[25px] font-semibold mb-[0.4rem] text-[#18191C]'>Technical Support</h1>
          <div className="flex space-x-4">
            <p className='text-[#0BA02C] border border-[#E7F6EA] bg-[#E7F6EA]'>PART-TIME</p>
            <span className='text-[#767F8C]'>salary: $20,000-$25,000</span>
          </div>
          <div className="flex items-center space-x-5" data-aos="fade-up">
            <img src={employerlogo} width={40} height={40} alt="Employer Logo" />
            <div className='flex flex-col w-full'>
              <div className="flex justify-between items-center w-full">
                <h1>Googleinc</h1>
                <FontAwesomeIcon icon={faBookmark} className="ml-auto"  style={{ color: '#C8CCD1' }} />
              </div>
              <div className="flex items-center mt-2" style={{ color: '#767F8C' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p className="ml-2">Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </>
  );
}

export default FeaturedJobsSection;
