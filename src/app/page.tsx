#! /usr/bin/env node


import Navbar from '../components/Navbar';
import HeroSection from '../components/Herosection';
import PickupForm from '../components/Pickupform';
import Footer from '../components/Footer';
import DropOffSection from '@/components/Dropoff';
import PopularCarSection from '@/components/PopularCarSection';
import RecommendationCarSection from '@/components/RecCarSection';
const HomePage = () => {
  return (
    <div className="w-[1440px] h-[2120px] grid grid-cols-4 grid-row gap-4 m-4 px-30 py-2">
      <div className="bg-[#FFFFFF] col-span-4 "><Navbar /></div>
      <div className="bg-[#FFFFFF] grid-col-4 grid-row-4 col-span-4 row-span-12 text-center content-center"><HeroSection/></div>
      <div className="bg-[#FFFFFF] gap-2 w-[582px] h-[136px] grid-col-2 grid-rows-2 row-span-12 col-span-2 text-center content-center text-white"><PickupForm/></div>
      <div className="bg-[#FFFFFF] w-[582px] h-[136px] grid-col-4 grid-rows-4 row-span-12 col-span-2 text-center content-center text-white"><DropOffSection /></div>
      <div className="bg-[#FFFFFF]  grid-col-4 grid-row-4 col-span-4 row-span-12 text-center content-center text-4xl font-bold text-white"><PopularCarSection/>
      </div>
      <div className="bg-yellow-500 grid-col-4 grid-row-4 col-span-4 row-span-12 text-center content-center text-4xl font-bold text-white"><RecommendationCarSection/></div>
      <div className="bg-[#FFFFFF] col-span-4 row-span-4 text-center content-center text-4xl font-bold text-white"><Footer /></div>

    </div>
  );
};

// Ensure you are using default export here:
export default HomePage;
