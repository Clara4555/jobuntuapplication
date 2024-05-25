import hero from '../assets/assets/Illustration (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
function HeroSection() {
  return (
   <>
   <div className="bg-gray-100"> 
   {/* <!-- Hero section  --> */}
  <div className="container flex flex-col py-4 px-4 mx-auto space-y-6 md:py-16 md:flex-row md:items-center md:space-x-6">
    <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
      <div className="max-w-lg">
        <h1 className="text-4xl mt-10 md:mt-0 font-bold tracking-wide text-gray-800 md:text-6xl">
          Find a job that suits your interest & skills.
        </h1>
        <p className="mt-4 text-gray-600">
          Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
          in scelerisque leo, eget sollicitudin velit bestibulum.
        </p>
        <div className="mt-6">
          <div className="block md:flex border py-4 md:py-2 space-y-6 md:space-y-0 rounded-lg shadow-lg bg-white md:w-fit">
            <div className="flex items-center pl-4">
              <svg className="text-purple-500 mr-2" width="24" height="24" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 21l-4.35-4.35M17 10A7 7 0 1110 3a7 7 0 017 7z"></path>
              </svg>
              <input type="text" placeholder="Job title, Keyword..." className="flex-grow text-gray-700 outline-none" />
            </div>

            <div className="flex items-center pl-4 pr-4 border-l">
              <svg className="mr-2" width="20" height="24" viewBox="0 0 20 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                  stroke="#570AF1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input type="text" placeholder="Your Location" className="flex-grow text-gray-700 outline-none" />
            </div>
            <div className="flex items-center">
              <button type="submit"
                className="flex-grow text-center justify-center object-contain text-white bg-primary mx-2 my-2 font-medium rounded-md text-md px-8 py-3 w-full">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-inline">
          <h6 className="text-sm text-[#9199A3]">Suggestion:</h6>
          <span className="text-sm">Designer, <span className="text-primary">Programming</span>, Digital
            Marketing, Video, Animation</span>
        </div>
      </div>
    </div>

    <div className="items-center justify-center w-full h-full md:w-1/2 hidden lg:block">
      <img className="object-cover w-full h-full max-w-2xl rounded-md" src={hero} alt="hero Image" />
    </div>
  </div>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6 mb-10">
    <div className="bg-white border-none rounded-lg p-5 hover:shadow-2xl">
      <div className="flex flex-row space-x-4">
        <div className="p-4 bg-[#E7F0FA] rounded-sm hover:bg-primary">
          {/* <i className="fa-solid fa-suitcase fa-lg text-primary hover:text-white"></i> */}
          <FontAwesomeIcon icon={faSuitcase} className="text-primary hover:text-white" />
          
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-[24px]">1234</h1>
          <p className="text-sm">Live Job</p>
        </div>
      </div>
    </div>
    {/* <!-- ... --> */}
    <div className="bg-white border-none rounded-lg p-5 hover:shadow-2xl">
      <div className="flex flex-row space-x-4">
        <div className="p-4 bg-[#E7F0FA] rounded-sm hover:bg-primary">
          <i className="fa-solid fa-suitcase fa-lg text-primary hover:text-white"></i>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-[24px]">10,000</h1>
          <p className="text-sm">Companies</p>
        </div>
      </div>
    </div>
    <div className="bg-white border-none rounded-lg p-5 hover:shadow-2xl">
      <div className="flex flex-row space-x-4">
        <div className="p-4 bg-[#E7F0FA] rounded-sm hover:bg-primary">
          <i className="fa-solid fa-suitcase fa-lg text-primary hover:text-white"></i>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-[24px]">10,000</h1>
          <p className="text-sm">Candidates</p>
        </div>
      </div>
    </div>
    <div className="bg-white border-none rounded-lg p-5 hover:shadow-2xl">
      <div className="flex flex-row space-x-4">
        <div className="p-4 bg-[#E7F0FA] rounded-sm hover:bg-primary">
          <i className="fa-solid fa-suitcase fa-lg text-primary hover:text-white"></i>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-[24px]">10,000</h1>
          <p className="text-sm">New Jobs</p>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Hero Section End --> */}

   </div>

   </>
  )
}

export default HeroSection