import { ArrowDown, ArrowRight } from 'lucide-react'
import React from 'react'
import image1 from '../assets/join-assets/image (4).png'
import image2 from '../assets/join-assets/image (5).png'
import image3 from '../assets/join-assets/image (6).png'

const JoinSection = () => {

    let Cards = [
        {
          id: 1,
          icon: '🌟',
          title: 'Start selling',
          description: 'Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.',
          image: image1,
        },
        {
          id: 2,
          icon: '🟢',
          title: 'Deliver happiness',
          description: 'Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.',
          image: image2,
        },
        {
          id: 3,
          icon: '✨',
          title: 'Behind the scenes',
          description: 'If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.',
          image: image3,
        },
    ];
      

    return (
        <div className='min-h-[100vh] pb-[150px]'>

            <div className='flex justify-center items-center gap-1 text-[#D1D5DB] pt-10'>
                <h1 className='text-6xl'>Join our growing network</h1>
                <ArrowDown strokeWidth={2} size={80} />
            </div>

            <div className='flex justify-center items-center gap-5 mt-[100px]'>
                {
                    Cards.map((card) => (
                        <div key={card} className='bg-white shadow-sm border-[4px] rounded-[16px] border-black w-[402.65625px] max-h-[483.453125px]'>
                            <div className='grid grid-cols-1 gap-5 p-4'>
                                <div className='text-[35px]'>{card.icon}</div>
                                <div className='text-[27px] font-bold'>{card.title}</div>
                            </div>

                            <div className='px-4 text-[16px] max-w-[323.46563720703125px]'>
                                {card.description}
                            </div>

                            <div className='p-4 mt-2'>
                                <a href="#" className='flex items-center gap-1'>
                                    <p className='font-bold'>SEE MORE</p>
                                    <ArrowRight strokeWidth={1.5} className='hover:ml-1 duration-150' />
                                </a>
                            </div>

                            <div>
                                <img src={card.image} alt="" draggable={false} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default JoinSection