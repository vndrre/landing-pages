import React from 'react';
import GooglePlay from '../assets/google-play.png';
import AppStore from '../assets/app-store.png'
import Bike from '../assets/layer_36.png'

const LandingPage = () => {

    let Buttons = [
        {text: 'Download on Google Play', icon: GooglePlay},
        {text: 'Download on App Store', icon: AppStore},
    ]

    return (
        <div className='h-[100vh]'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[112px] font-bold text-center'>Se o ti jeun?</h1>

                <div className='flex items-center gap-5 mt-5'>
                    {
                        Buttons.map((button) => (
                            <a href="#" className='bg-[#0C513F] text-white px-6 py-4 rounded-[8px] flex gap-2'>
                                <img src={button.icon} alt="" />
                                {button.text}
                            </a>
                        ))
                    }
                </div>
            </div>

            <div className='absolute top-[92vh] left-[20vh]'>
                <img src={Bike} alt="" />
            </div>
        </div>
    )
}

export default LandingPage