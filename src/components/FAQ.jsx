import React, { useState } from 'react'
import { Sparkle } from 'lucide-react'
import PhoneImage from '../assets/span.png'
import SaleTag from '../assets/Promo-code.png'

const faqs = [
  {
    question: 'What is Chowdeck?',
    answer: `Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.`
  },
  {
    question: 'What locations do we currently deliver to?',
    answer: 'We currently deliver to select locations in Lagos and other major cities. Check our app for the latest list.'
  },
  {
    question: 'What is Chowdeck wallet?',
    answer: 'Chowdeck wallet is a digital wallet for seamless payments and refunds on the Chowdeck platform.'
  },
  {
    question: 'What is Chowscore?',
    answer: 'Chowscore is a rating system for restaurants and riders based on customer feedback.'
  },
  {
    question: 'What is Service fee?',
    answer: 'A service fee is a small charge to help us maintain and improve our platform.'
  },
  {
    question: 'Why do we charge Service fee?',
    answer: 'The service fee helps us provide better service, support, and features for our users.'
  },
  {
    question: 'What is Surge fee?',
    answer: 'A surge fee may apply during periods of high demand to ensure timely deliveries.'
  },
];

const FAQ = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className='min-h-[100vh] bg-black flex items-center justify-center py-12'>
      
      <div className='absolute top-[790vh] bg-white rounded-2xl border-[4px] border-black max-w-6xl w-full flex flex-col lg:flex-row overflow-hidden shadow-lg'>

        <div className='w-full lg:w-1/2 p-8'>
          <h2 className='text-[#0C513F] text-5xl font-bold mb-8'>FAQs.</h2>
          <div className='flex flex-col gap-4'>
            {faqs.map((faq, idx) => (
              <button
                key={faq.question}
                onClick={() => setSelected(idx)}
                className={`flex items-center justify-between w-full text-left px-6 py-4 rounded-lg font-semibold text-lg transition-all border-none outline-none cursor-pointer
                  ${selected === idx ? 'bg-black text-white shadow-lg' : 'bg-[#F7F7F7] text-[#0C513F] hover:bg-[#eaeaea]'}
                `}
                style={{ boxShadow: selected === idx ? '0 2px 8px rgba(0,0,0,0.08)' : undefined }}
              >
                <span>{faq.question}</span>
                {selected === idx && (
                  <span className='ml-4'><Sparkle className='fill-[#FFC501]' size={24} /></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className='w-full lg:w-1/2 p-8 flex flex-col'>
          <h2 className='text-[#0C513F] text-5xl font-bold mb-8'>Ans.</h2>
          <div className='bg-[#FFC501] rounded-xl p-8 flex flex-col gap-4 min-h-[300px]'>
            <span><Sparkle className='fill-black' size={24} /></span>
            <p className='text-black text-lg leading-relaxed'>{faqs[selected].answer}</p>
          </div>
        </div>
      </div>
      

      <div className='mt-[650px]'>
        <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center max-w-5xl mx-auto mt-12">
          {/* Left container */}
          <div className="bg-[#0C513F] rounded-2xl flex flex-col justify-between p-10 w-full lg:w-1/2 min-h-[500px] w-[612px] relative">
            <div>
              <h2 className="text-white text-5xl font-bold leading-tight mb-8">Place your<br />order in seconds</h2>
              {/* Download buttons */}
              <div className="flex flex-col gap-4 mb-8 w-[300px]">
                <a href="#" className="bg-white text-black flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.805 12.002c0-.818-.073-1.636-.218-2.44H12.22v4.62h5.41a4.63 4.63 0 0 1-2.01 3.04v2.52h3.24c1.89-1.74 2.945-4.31 2.945-7.74z" fill="#4285F4"/><path d="M12.22 22c2.7 0 4.97-.89 6.63-2.41l-3.24-2.52c-.9.6-2.06.96-3.39.96-2.6 0-4.8-1.76-5.59-4.13H3.32v2.59A9.98 9.98 0 0 0 12.22 22z" fill="#34A853"/><path d="M6.63 13.9a5.98 5.98 0 0 1 0-3.8V7.51H3.32a9.98 9.98 0 0 0 0 8.98l3.31-2.59z" fill="#FBBC05"/><path d="M12.22 6.58c1.47 0 2.78.51 3.81 1.5l2.85-2.85C17.19 3.89 14.92 3 12.22 3A9.98 9.98 0 0 0 3.32 7.51l3.31 2.59c.79-2.37 2.99-4.13 5.59-4.13z" fill="#EA4335"/></svg>
                  Download on Google Play
                </a>
                <a href="#" className="bg-white text-black flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.564 13.13c-.02-2.13 1.74-3.15 1.82-3.2-1-1.46-2.56-1.66-3.1-1.68-1.32-.13-2.58.77-3.25.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.5 2.13-1.5 2.6-.39 6.44 1.08 8.55.72 1.04 1.58 2.2 2.7 2.16 1.09-.04 1.5-.7 2.81-.7 1.3 0 1.67.7 2.8.68 1.16-.02 1.89-1.05 2.6-2.09.82-1.19 1.16-2.34 1.18-2.4-.03-.01-2.25-.86-2.27-3.41z" fill="#000"/><path d="M15.13 5.98c.59-.72.99-1.72.88-2.73-.85.03-1.88.57-2.5 1.29-.55.63-1.03 1.65-.85 2.62.9.07 1.83-.51 2.47-1.18z" fill="#000"/></svg>
                  Download on App Store
                </a>
              </div>
            </div>
            {/* Promo and bottle/can */}
            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex flex-col gap-4">

                <div>
                    <img src={SaleTag} alt="" />
                </div>

                <div>
                  <button className="bg-[#FFC501] text-black font-bold px-6 py-2 rounded-md border-2 border-black mb-1 w-[166.859375px]">ONWEB</button>
                </div>

                <div className="text-white text-sm mt-1 w-[319.66876220703125px]">
                    Get <span className="font-bold text-[#FFC501] text-[16px]">₦300 off</span> your first order when you use this promo code!
                </div>

              </div>

            </div>
          </div>
          {/* Right container */}
          <div className="rounded-2xl overflow-hidden w-full lg:w-1/2 flex items-center justify-center">
            {/* Replace with your phone image */}
            <img src={PhoneImage} alt="Phone app" className="object-cover w-full h-full" draggable={false} />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default FAQ