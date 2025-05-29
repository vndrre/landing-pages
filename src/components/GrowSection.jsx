import React from 'react'
import Image1 from '../assets/grow-images/image1.png'
import Image2 from '../assets/grow-images/image2.png'
import Button from './Button'

const GrowSection = () => {
  return (
    <div className='min-h-[100vh]'>
        <div className='flex justify-between items-center'>
            <div> <img src={Image1} alt="" draggable={false} /> </div>

            <div className='text-center'>
                <h1 className='text-[55px] font-medium leading-[60px]'>Make you grow, <br /> together .</h1>
                <p className='text-[17px] leading-[30px] mt-5'>
                Vous avez beaucoup à nous apprendre sur votre marché et votre offre. <br />
                 <span className='font-bold'>Des infos précieuses qui méritent toute notre attention</span> : parce <br />
                  qu’une solution digitale, ça se construit ensemble. C’est pour cela <br />
                   qu’un projet ne démarre jamais sans un vrai kick-off et que nous avons <br /> 
                   développés des méthodologies de <span className='font-bold'>co-construction</span>. Vous impliquer <br />
                    dans chaque étape du projet, c’est vous en donner une maîtrise.
                </p>

                <Button href={'#'} className='mt-10 w-[250px]'>
                    nous contacter
                </Button>
            </div>

            <div> <img src={Image2} alt="" draggable={false} /> </div>
        </div>
    </div>
  )
}

export default GrowSection