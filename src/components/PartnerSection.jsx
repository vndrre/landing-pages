import React from 'react'
import Partner1 from '../assets/partners/1.png'
import Partner2 from '../assets/partners/2.png'
import Partner3 from '../assets/partners/3.png'
import Partner4 from '../assets/partners/4.png'
import Partner5 from '../assets/partners/5.png'
import Partner6 from '../assets/partners/6.png'
import Partner7 from '../assets/partners/7.png'
import Partner8 from '../assets/partners/8.png'
import Partner9 from '../assets/partners/9.png'
import Partner10 from '../assets/partners/10.png'

const PartnerSection = () => {

    let TopPartners = [
        {logo: Partner1},
        {logo: Partner2},
        {logo: Partner3},
        {logo: Partner4},
        {logo: Partner5},
    ]

    let BottomPartners = [
        {logo: Partner6},
        {logo: Partner7},
        {logo: Partner8},
        {logo: Partner9},
        {logo: Partner10},
    ]

    return (
        <div className='min-h-[569.59375px] bg-[#F4F4F4] py-[100px]'>
            <h1 className='text-center text-[42px] leading-[50px] font-medium'>Ils nous ont <br /> fait confiance</h1>

            <div className='flex justify-center gap-[150px] mt-15'>
                {
                    TopPartners.map((partner) => (
                        <img src={partner.logo} alt="" draggable={false} />
                    ))
                }
            </div>

            <div className='flex justify-center gap-[150px] mt-10'>
                {
                    BottomPartners.map((partner) => (
                        <img src={partner.logo} alt="" draggable={false} />
                    ))
                }
            </div>

        </div>
    )
}

export default PartnerSection