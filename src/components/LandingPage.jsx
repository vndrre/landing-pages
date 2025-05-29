import React from 'react'
import Shapes from '../assets/Group.png'
import Video from '../assets/video-preview.png'

const LandingPage = () => {
  return (
    <div className='bg-black text-white min-h-[95vh] mx-[100px] rounded-b-[50px]'>

        <div className='flex justify-between items-center'>
            <div className='pl-[75px] flex flex-col'>
                <h1 className="text-[170px] font-medium tracking-tighter leading-none">
                  digital<br />makers
                </h1>

                <div className="bg-white rounded-[20px] shadow-lg flex items-center gap-5 px-6 py-4 min-w-[420px] min-h-[126px] mt-10">
                  <div className="relative w-[80px] h-[80px] flex-shrink-0">
                    <img
                      src={Video}
                      alt=""
                      className="w-full h-full object-cover rounded-[15px]"
                      draggable={false}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center">
                        <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                          <polygon points="9.5,7.5 16.5,12 9.5,16.5" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className='font-medium'>
                    <div className="text-black font-medium text-[16px]">
                      2min pour nous connaitre
                    </div>
                    <span className="text-blue-600 font-medium text-[16px]">
                      C'est parti !
                    </span>
                  </div>

                </div>

            </div>

            <div>
                <img src={Shapes} alt="" className='h-[95vh]' draggable={false} />
            </div>
        </div>
    </div>
  )
}

export default LandingPage