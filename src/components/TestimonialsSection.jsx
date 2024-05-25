import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante.",
      name: "Kenzie Edgar",
      title: "UI/UX Developer",
      img: "https://i.pravatar.cc/100?img=1"
    },
    {
      quote: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.",
      name: "Alex Doe",
      title: "Software Engineer",
      img: "https://i.pravatar.cc/100?img=2"
    },
    {
      quote: "Etiam fermentum consectetur nulla nec interdum. Fusce ac turpis lacus. Vivamus euismod, orci id fringilla malesuada, lacus justo commodo justo, non tincidunt nisi enim sed felis.",
      name: "Chris Smith",
      title: "Project Manager",
      img: "https://i.pravatar.cc/100?img=3"
    },
    {
      quote: "Praesent vel ligula scelerisque, vehicula dui eu, fermentum velit. Phasellus ac velit sit amet lorem malesuada varius.",
      name: "Dana White",
      title: "CEO",
      img: "https://i.pravatar.cc/100?img=4"
    },
    {
      quote: "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      name: "John Doe",
      title: "CTO",
      img: "https://i.pravatar.cc/100?img=5"
    },
    {
      quote: "Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit.",
      name: "Jane Doe",
      title: "Product Manager",
      img: "https://i.pravatar.cc/100?img=6"
    },
    {
      quote: "Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante.",
      name: "Kenzie Edgar",
      title: "UI/UX Developer",
      img: "https://i.pravatar.cc/100?img=1"
    },
    {
      quote: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.",
      name: "Alex Doe",
      title: "Software Engineer",
      img: "https://i.pravatar.cc/100?img=2"
    },
    {
      quote: "Etiam fermentum consectetur nulla nec interdum. Fusce ac turpis lacus. Vivamus euismod, orci id fringilla malesuada, lacus justo commodo justo, non tincidunt nisi enim sed felis.",
      name: "Chris Smith",
      title: "Project Manager",
      img: "https://i.pravatar.cc/100?img=3"
    },
    {
      quote: "Praesent vel ligula scelerisque, vehicula dui eu, fermentum velit. Phasellus ac velit sit amet lorem malesuada varius.",
      name: "Dana White",
      title: "CEO",
      img: "https://i.pravatar.cc/100?img=4"
    },
    {
      quote: "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      name: "John Doe",
      title: "CTO",
      img: "https://i.pravatar.cc/100?img=5"
    },
    {
      quote: "Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit.",
      name: "Jane Doe",
      title: "Product Manager",
      img: "https://i.pravatar.cc/100?img=6"
    }
  

    // Testimonials data...
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
    return () => clearInterval(autoSlide);
  },);

  return (
    <div className="pt-24 px-4 md:px-24 bg-[#F1F2F4]">
      <div>
        <h1 className="text-secondary-color text-4xl md:text-5xl lg:text-6xl leading-[3rem] font-bold text-center">
          Clients Testimonials
        </h1>
      </div>

      <div className="min-w-screen flex items-center justify-center relative overflow-hidden">
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-secondary-color text-[#570AF1] p-2  border border-[gray] z-10">
          <FaArrowLeft className='' />
        </button>
        <div className="w-full border-gray-200 px-5 py-10 md:py-16 text-gray-800 flex justify-center overflow-x-auto">
          <div className="flex flex-wrap justify-center">
            {testimonials.slice(currentIndex * itemsPerPage, (currentIndex * itemsPerPage) + itemsPerPage).map((testimonial, index) => (
              <div key={index} className="px-3 w-full sm:w-1/2 lg:w-1/3 mb-4">
                {/* Testimonial card */}
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light">
                  <div className="w-full flex mb-4 items-center">
                    <span style={{ fontSize: '24px', color: '#FFAA00' }}>&#9733;</span>
                    <span style={{ fontSize: '24px', color: '#FFAA00' }}>&#9733;</span>
                    <span style={{ fontSize: '24px', color: '#FFAA00' }}>&#9733;</span>
                    <span style={{ fontSize: '24px', color: '#FFAA00' }}>&#9733;</span>
                    <span style={{ fontSize: '24px', color: '#FFAA00' }}>&#9733;</span>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                      “{testimonial.quote}”
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
                    </p>
                  </div>
                  <div className="w-full flex mb-4 items-center pt-16">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={testimonial.img} alt={testimonial.name} />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">{testimonial.name}</h6>
                      <p className="text-xs text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-secondary-color text-[#570AF1] p-2  border border-[gray] z-10">
          <FaArrowRight />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.min(3, totalPages) }).map((_, index) => (
          <span key={index} onClick={() => setCurrentIndex(index)} className={`cursor-pointer mx-1 w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#99C2FF]' : 'bg-[#99C2FF]'}`}></span>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;
