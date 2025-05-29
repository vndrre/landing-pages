import React from 'react'
import Image1 from '../assets/a.png'
import Image2 from '../assets/a-1.png'
import Button from './Button'

const LastSection = () => {
  return (
    <div className='min-h-[75vh] px-[100px]'>
        
        <div className='flex items-center justify-center gap-[250px]'>

            <div className='text-left'>
                <h1 className='text-[43px] font-medium mb-5'>
                    Derniers projets
                </h1>

                <p className='text-[17px]'>
                    <span className='font-bold'>Vous voulez en voir plus ?</span> Contactez-nous <br />
                    et nous nous ferons un plaisir de partager <br /> avec vous quelques unes de nos réalisations.
                </p>

                <Button href={'#'} className='w-[329px] mt-20'>
                    découvrir d'autres projets
                </Button>
            </div>
            
            <div className='flex items-center gap-10'>
                <img src={Image1} alt="" draggable={false} />
                <img src={Image2} alt="" draggable={false} />
            </div>
        </div>

    </div>
  )
}

export default LastSection