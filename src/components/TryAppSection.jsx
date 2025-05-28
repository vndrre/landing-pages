import React, { useState } from 'react';
import Phone from '../assets/phone-mockup.png'

const TryAppSection = () => {
  const [activeTab, setActiveTab] = useState('Customer');

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-yellow-100 rounded-full p-1">
            {['Customer', 'Vendors', 'Riders'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-12 items-center">
          {/* Left Content */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Try the App
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-[600px] mx-auto">
              Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.
            </p>
            
            {/* Download Buttons */}
            <div className="flex gap-4 justify-center">
              <button className="bg-[#0C513F] hover:bg-green-800 transition-colors rounded-full p-3">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05-.45-3.26-.45-1.29 0-1.7.44-2.77.46-1.11.02-1.86-.66-2.84-1.61-2.1-2.04-3.71-5.76-1.55-8.27.92-1.07 2.35-1.73 3.79-1.75 1.18-.01 2.3.8 3.02.8.72 0 2.07-.99 3.49-.84 1.94.12 3.4 1.15 4.28 2.85-3.78 2.16-3.17 6.95.84 8.27-.6 1.52-1.38 3.05-2 4.54z"/>
                  <path d="M12.03 4.75c-.7.91-1.85 1.62-2.98 1.52-.12-1.18.35-2.43 1.05-3.25.69-.82 1.91-1.5 2.88-1.54.13 1.2-.31 2.4-.95 3.27z"/>
                </svg>
              </button>
              <button className="bg-[#0C513F] hover:bg-green-800 transition-colors rounded-full p-3">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="flex justify-center lg:justify-end relative">

            {/* Phone Mockup Image */}
            <div className="relative">
              <img 
                src={Phone}
                className="w-80 drop-shadow-2xl mr-[410px]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryAppSection;