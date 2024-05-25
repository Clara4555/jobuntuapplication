import icon from '../assets/assets/Icon2.png'

function HowItWorksSection() {
  return (
    <>
      <div className="  pt-24 pb-12 px-4  bg-gray-100 " >
        <div>
        <h1 className="text-secondary-color text-[28px] sm:text-[35px] 
    lg:text-[40px] xl:text-[40px] leading-[3rem] px-20
     lg:leading-[4rem] font-extrabold text-center">How Jobuntu Works</h1>
     </div>
     <div className="   w-[80%] mx-auto grid
       grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[2rem] 
       gap-[3rem]">
        <div className='group relative p-4 flex flex-col items-center text-center transition-transform duration-300 hover:bg-white hover:border hover:border-white hover:scale-105 hover:shadow-lg hover:rounded-lg'>
  <a href="#" className=''>
    <img src={icon} alt="image" width={60} height={60} className='rounded-full p-2 hover:bg-blue-500' />
  </a>
  <h1 className='text-[17px] font-semibold mb-[0.4rem]'>Create account</h1>
  <p className='text-[14px] text-pcolor font-semibold'>Aliquam facilisis egestas sapien, nec tempor leo tristique at.</p>
</div>
<div className='group relative p-4 flex flex-col items-center text-center transition-transform duration-300 hover:bg-white hover:border hover:border-white hover:scale-105 hover:shadow-lg hover:rounded-lg'>
  <a href="#" className=''>
    <img src={icon} alt="image" width={60} height={60} className='rounded-full p-2 hover:bg-blue-500' />
  </a>
  <h1 className='text-[17px] font-semibold mb-[0.4rem]'>Create account</h1>
  <p className='text-[14px] text-pcolor font-semibold'>Aliquam facilisis egestas sapien, nec tempor leo tristique at.</p>
</div>
<div className='group relative p-4 flex flex-col items-center text-center transition-transform duration-300 hover:bg-white hover:border hover:border-white hover:scale-105 hover:shadow-lg hover:rounded-lg'>
  <a href="#" className=''>
    <img src={icon} alt="image" width={60} height={60} className='rounded-full p-2 hover:bg-blue-500' />
  </a>
  <h1 className='text-[17px] font-semibold mb-[0.4rem]'>Create account</h1>
  <p className='text-[14px] text-pcolor font-semibold'>Aliquam facilisis egestas sapien, nec tempor leo tristique at.</p>
</div>
<div className='group relative p-4 flex flex-col items-center text-center transition-transform duration-300 hover:bg-white hover:border hover:border-white hover:scale-105 hover:shadow-lg hover:rounded-lg'>
  <a href="#" className=''>
    <img src={icon} alt="image" width={60} height={60} className='rounded-full p-2 hover:bg-blue-500' />
  </a>
  <h1 className='text-[17px] font-semibold mb-[0.4rem]'>Create account</h1>
  <p className='text-[14px] text-pcolor font-semibold'>Aliquam facilisis egestas sapien, nec tempor leo tristique at.</p>
</div>
        </div>
        


      </div>
    </>
  )
}

export default HowItWorksSection