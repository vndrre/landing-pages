import React from 'react'
import TestimonialSlider from './TestimonialGrid'
import { TwitterIcon } from 'lucide-react'

const TestimonialSection = () => {
  return (
    <div className='min-h-[100vh] py-[200px] px-[50px]'>
        <div className='flex justify-center'>
          <a href="#" className='flex items-center gap-1 bg-[#1DA1F2] hover:bg-blue-400 duration-150 rounded-[8px] px-7 py-3 text-white text-[16px] min-w-[215.46875px]'>
            <TwitterIcon className='fill-white w-[16px] h-[16px]' stroke='none'/>
            Join our community
          </a>
        </div>
        
        <div>
            <TestimonialSlider />
        </div>
    </div>
  )
}

export default TestimonialSection