import banner2 from '../assets/assets/banner.png';
import banner from '../assets/assets/banner2.png';

function CallToActionSection() {
  return (
    <div className='container mt-12 w-[100%] mx-auto grid grid-cols-2 lg:grid-cols-2 gap-4'>
      <div className="box  p-10 mb-6 relative cursor-pointer hover:shadow-sm transition-transform duration-300 rounded-lg ">
    <img src={banner} className="absolute top-0 ml-6 right-0 z-10 h-full w-full object-cover lg:block"/>
      {/* First Section */}
      <div className="relative z-10 text-left">
          <h1 className="text-[#191F33] text-[20px] sm:text-[35px] 
    lg:text-[40px] xl:text-[40px] leading-[3rem]
     lg:leading-[4rem] font-bold">Become a Candidate</h1>
          <p className="mb-4 text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.</p>
 <div className="mt-3 w-full">
                        <button className="px-4 bg-gray-900 dark:bg-white dark:text-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-[#191f99] hover:bg-gray-700  outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 dark:hover:bg-gray-100">
                            <p className="text-xl font-medium leading-5 text-[#191f99] ">See More</p>
                            <svg className="dark:text-[#191f33]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66663 16H25.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 21.3333L25.3333 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 10.6667L25.3333 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

          {/* <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Click Here</button> */}
        </div>
      </div>
      <div className="box  p-10 mb-6 relative cursor-pointer  hover:shadow-sm transition-transform duration-300 rounded-lg">
    <img src={banner2} className="absolute top-0 ml-6 right-0 z-10  h-full w-full object-cover lg:block"/>
      {/* First Section */}
      <div className="relative z-10 text-left">
          <h1 className="
          text-[#191F33] text-[20px] sm:text-[35px] 
    lg:text-[40px] xl:text-[40px] leading-[3rem]
     lg:leading-[4rem] font-bold">Become a Employer</h1>
          <p className="mb-4 text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.</p>
          
          {/* <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Click Here</button> */}
          
 <div className=" mt-3 w-full">
                        <button className="px-4 bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200  flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700  outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                            <p className="text-xl font-medium leading-5 text-[#191f33] ">See More</p>
                            <svg className="dark:text-[#191F33]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66663 16H25.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 21.3333L25.3333 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 10.6667L25.3333 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
        </div>
      </div>
      
    </div>
  );
}

export default CallToActionSection;
