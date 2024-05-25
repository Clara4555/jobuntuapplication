// import design from '../assets/assets/design.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
// src/icons.js
import { faSuitcase, faArrowRight } from '@fortawesome/free-solid-svg-icons';




function VacanciesSection() {
  return (
    <>
    <div  className='px-6 mb-10 pt-20 pb-12  border-b border-gray-200 '>
      <div>
      <div className='flex justify-between px-6'>
        <h1 className='text-secondary-color text-[20px] sm:text-[35px] 
    lg:text-[40px] xl:text-[30px] leading-[3rem]
     lg:leading-[4rem]'>Popular Categories</h1>
        <div className="flex justify-between items-center border outline-none text-[#570AF1] py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300">
        <a href="" className='mr-2' >View all</a>
        <FontAwesomeIcon icon={faArrowRight} className="" />
        </div>
</div>
      </div>

     <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6  ">
    <div className="bg-white border-none rounded-lg p-5 hover:shadow-2xl">
      <div className="flex flex-row space-x-4">
        <div className="p-4 bg-[#E7F0FA] rounded-sm hover:bg-primary">
        <FontAwesomeIcon icon={faSuitcase} className="text-primary hover:text-white" />
         
          {/* <img src={design} alt="" width={40} height={40} /> */}
          
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-[17px]">Graphics & Designs</h1>
          <p className="text-sm">357 open Job Opportunities</p>
        </div>
      </div>
    </div>
    <div className="bg-white border-none rounded-lg p-5 hover:shadow-2xl">
      <div className="flex flex-row space-x-4">
        <div className="p-4 bg-[#E7F0FA] rounded-sm hover:bg-primary">
        <FontAwesomeIcon icon={faSuitcase} className="text-primary hover:text-white" />
         
          {/* <img src={design} alt="" width={40} height={40} /> */}
          
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-[17px]">Graphics & Designs</h1>
          <p className="text-sm">357 open Job Opportunities</p>
        </div>
      </div>
    </div>
    <div className="bg-white border-none rounded-lg p-5 hover:shadow-2xl">
      <div className="flex flex-row space-x-4">
        <div className="p-4 bg-[#E7F0FA] rounded-sm hover:bg-primary">
        <FontAwesomeIcon icon={faSuitcase} className="text-primary hover:text-white" />
         
          {/* <img src={design} alt="" width={40} height={40} /> */}
          
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-[17px]">Graphics & Designs</h1>
          <p className="text-sm">357 open Job Opportunities</p>
        </div>
      </div>
    </div>
    <div className="bg-white border-none rounded-lg p-5 hover:shadow-2xl">
      <div className="flex flex-row space-x-4">
        <div className="p-4 bg-[#E7F0FA] rounded-sm hover:bg-primary">
        <FontAwesomeIcon icon={faSuitcase} className="text-primary hover:text-white" />
         
          {/* <img src={design} alt="" width={40} height={40} /> */}
          
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-[17px]">Graphics & Designs</h1>
          <p className="text-sm">357 open Job Opportunities</p>
        </div>
      </div>
    </div>
    <div className="bg-white border-none rounded-lg p-5 hover:shadow-2xl">
      <div className="flex flex-row space-x-4">
        <div className="p-4 bg-[#E7F0FA] rounded-sm hover:bg-primary">
        <FontAwesomeIcon icon={faSuitcase} className="text-primary hover:text-white" />
         
          {/* <img src={design} alt="" width={40} height={40} /> */}
          
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-[17px]">Graphics & Designs</h1>
          <p className="text-sm">357 open Job Opportunities</p>
        </div>
      </div>
    </div>
    <div className="bg-white border-none rounded-lg p-5 hover:shadow-2xl">
      <div className="flex flex-row space-x-4">
        <div className="p-4 bg-[#E7F0FA] rounded-sm hover:bg-primary">
        <FontAwesomeIcon icon={faSuitcase} className="text-primary hover:text-white" />
         
          {/* <img src={design} alt="" width={40} height={40} /> */}
          
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-[17px]">Graphics & Designs</h1>
          <p className="text-sm">357 open Job Opportunities</p>
        </div>
      </div>
    </div>
    <div className="bg-white border-none rounded-lg p-5 hover:shadow-2xl">
      <div className="flex flex-row space-x-4">
        <div className="p-4 bg-[#E7F0FA] rounded-sm hover:bg-primary">
        <FontAwesomeIcon icon={faSuitcase} className="text-primary hover:text-white" />
         
          {/* <img src={design} alt="" width={40} height={40} /> */}
          
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-[17px]">Graphics & Designs</h1>
          <p className="text-sm">357 open Job Opportunities</p>
        </div>
      </div>
    </div>
    <div className="bg-white border-none rounded-lg p-5 hover:shadow-2xl">
      <div className="flex flex-row space-x-4">
        <div className="p-4 bg-[#E7F0FA] rounded-sm hover:bg-primary">
        <FontAwesomeIcon icon={faSuitcase} className="text-primary hover:text-white" />
         
          {/* <img src={design} alt="" width={40} height={40} /> */}
          
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-[17px]">Graphics & Designs</h1>
          <p className="text-sm">357 open Job Opportunities</p>
        </div>
      </div>
    </div>
    </div>
    </div>

    </>
  )
}

export default VacanciesSection