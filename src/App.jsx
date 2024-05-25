import './App.css'
// import 'swiper/swiper-bundle.min.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
// import StatsSection from './components/StatsSection';
import VacanciesSection from './components/VacanciesSection';
import HowItWorksSection from './components/HowItWorksSection';
import PopularCategoriesSection from './components/PopularCategoriesSection';
import FeaturedJobsSection from './components/FeaturedJobsSection';
import CompaniesSection from './components/CompaniesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';



function App() { 
 return (
   <div className='app'>

      <Navbar />
      <HeroSection />
      <PopularCategoriesSection />
      <HowItWorksSection />
      <VacanciesSection />
      {/* <HowItWorksSection /> */}
      <FeaturedJobsSection />
      <CompaniesSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />

   </div>
  )
}

export default App
