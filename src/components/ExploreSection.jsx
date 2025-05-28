import React, { useEffect, useRef, useState } from 'react'
import Bottle from '../assets/explore-assets/Layer_1-2.png'
import { ArrowLeft, ArrowRight, MapPin, Sun, Utensils, Sparkle, LocateFixed, AlarmClock } from 'lucide-react'
import Meal from '../assets/explore-assets/meal.png'
import Phone from '../assets/explore-assets/div (2).png'
import PaperTexture from '../assets/explore-assets/Vector (1).png'

const sliderItems = [
  { icon: <Sun className='text-yellow-400' size={20} />, text: 'Quick and easy onboarding' },
  { icon: <Utensils className='text-orange-400' size={20} />, text: 'Quality meal choices' },
  { icon: <Sparkle className='text-purple-400' size={20} />, text: 'Live updates on orders' },
  { icon: <LocateFixed className='text-green-400' size={20} />, text: 'Highly rated riders' },
  { icon: <AlarmClock className='text-pink-300' size={20} />, text: '20/7 support for customers' },
];

const SLIDES_TO_SHOW = 4;
const SLIDE_INTERVAL = 2500;

const ExploreSection = () => {
  const [startIdx, setStartIdx] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % sliderItems.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Compute the visible slides (wrap around)
  const visibleSlides = Array.from({ length: SLIDES_TO_SHOW }, (_, i) =>
    sliderItems[(startIdx + i) % sliderItems.length]
  );

  return (
    <div className='bg-[#0C513F] text-white min-h-[100vh] pt-[800px] pb-[200px]'>
        
        <div className='bg-[#FFC501] text-black rounded-[16px] w-[1248px] min-h-[800px] absolute top-[325vh] left-1/2 transform -translate-x-1/2'>
            <div>
                <h1 className='text-center font-bold text-[71px]'>
                    Explore categories
                </h1>
            </div>

            <div className='flex justify-center mt-5'>
                <img src={Bottle} alt="" draggable={false} />
            </div>

            <div className='flex items-center justify-between px-[25px]'>
                <div className='flex items-center gap-5'>
                    <a href='#' className='bg-black rounded-full p-4'> <MapPin className='fill-[#FFC501]' size={45} /> </a>
                    <a href='#' className='bg-black rounded-full p-4 text-[#FFC501] text-2xl p-6 font-medium'> 01 </a>
                    <a href='#' className='bg-black rounded-full p-4 text-[#FFC501] text-2xl p-6 font-medium'> 02 </a>
                    <a href='#' className='bg-black rounded-full p-4 text-[#FFC501] text-2xl p-6 font-medium'> 03 </a>
                </div>

                <div className='flex items-center gap-5'>
                    <a href='#' className='bg-black rounded-full p-4'> <ArrowLeft className='fill-[#FFC501]' size={45} /> </a>
                    <a href='#' className='bg-black rounded-full p-4'> <ArrowRight className='fill-[#FFC501]' size={45} /> </a>
                </div>
            </div>
        </div>

        <section className='px-[272px]'>
            <div className='flex items-center justify-between'>
                <h1 className='text-left text-5xl font-bold'>Chowdeck has <br /> you covered</h1>
                <p className='24px w-[535.5906372070312px]'>
                    Hungry? Too tired to cook? Have friends over, or do you simply need to chop life?
                    Download Chowdeck, and let's deliver happiness to your doorstep in minutes.
                </p>
            </div>

            <div className='flex gap-6 mt-8 transition-all duration-500 mt-[150px]'>
              {visibleSlides.map((item, idx) => (
                <div key={idx} className='flex items-center gap-2 bg-[#175C4B] rounded-lg px-6 py-3 text-white text-base font-medium min-w-[260px] shadow'>
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            
        </section>

        <section>
            <div className='flex justify-center items-center mt-[150px]'>
                <img src={Phone} alt="" draggable={false} />
            </div>
        </section>

    </div>
  )
}

export default ExploreSection