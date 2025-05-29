import React from 'react'
import Shapes from '../assets/Group.png';
import Button from './Button';
import DivText from '../assets/div (4).png'

const Section2 = () => {
  return (
    <div className='min-h-[100vh]'>

        <section className='py-[100px]'>
            <div className='text-center'>
                <h1 className='text-[52px] leading-[75px] font-semibold'>
                    Plus de simplicité, de flexibilité, <br /> de design et d'échanges
                </h1>

                <p className='text-[18px] leading-[30px] mt-5'>
                    Chez Hedy, nous prônons plus de simplicité dans les <br /> process : <span className='underline'>Less Meeting, More Organization</span> <br />
                    Pour cela, nous avons mis en place <span className='font-semibold'>trois offres claires :</span>
                </p>
            </div>
        </section>

        <section className="bg-[#0A090E] rounded-[24px] flex items-center justify-center px-10 py-12 mt-10 mb-[100px] relative overflow-hidden w-[1240px] h-[402px] mx-auto">
            
            <img
                src={Shapes}
                alt=""
                className="absolute left-0 top-0 h-full object-cover z-0"
                style={{ minWidth: 220 }}
                draggable={false}
            />

            <div className="relative z-10 flex-1 ml-[225px]">
                <h2 className="text-white text-4xl font-semibold flex items-center gap-2 mb-2">
                    offre wrap <span className="text-2xl">🌯</span>
                </h2>
                <p className="text-gray-200 text-lg mb-6">
                    L'offre <span className="font-bold text-white">wrap</span> vous permettra de lancer votre présence en ligne avec un accompagnement<br />
                    stratégique sur-mesure, sans rogner sur la qualité du design et du référencement.
                </p>
                <div className="flex gap-8 mb-8">
                    <span className="text-white font-semibold text-lg flex items-center gap-2">👉 Prestation SEO</span>
                    <span className="text-white font-semibold text-lg flex items-center gap-2">👉 Design sur-mesure</span>
                    <span className="text-white font-semibold text-lg flex items-center gap-2">👉 Stratégie digitale optimisée</span>
                </div>

                <Button href={'#'} className='cursor-pointer'>
                    en savoir plus sur cette offre
                </Button>

            </div>
        </section>

        <img
            src={Shapes}
            alt=""
            className="absolute left-[23vh] top-[208vh] h-[417px] object-cover z-20"
            style={{ minWidth: 180 }}
            draggable={false}
        />

        <img
            src={Shapes}
            alt=""
            className="absolute left-[85vh] top-[208vh] h-[417px] object-cover z-20"
            style={{ minWidth: 180 }}
            draggable={false}
        />

        <div className="flex gap-8 justify-center mt-8 mb-[100px]">
          {/* Offre Toast */}
          <div className="relative bg-white rounded-[24px] shadow-lg w-[500px] h-[420px] overflow-hidden flex flex-col justify-between p-10">

            <div className="relative z-20 text-left">
              <h2 className="text-black text-3xl font-semibold flex items-center gap-2 mb-2">
                offre toast <span className="text-2xl">🍞</span>
              </h2>
              <p className="text-gray-800 text-lg mb-4">
                Vous avez besoin d'une présence en ligne <span className="font-bold">rapide et efficace</span> mais surtout limitée en terme de temps et/ou de budget : l'offre toast est faite pour vous !
                <br /><br />
                Design personnalisé, accompagnement, conseil...
              </p>
              <div className="text-black font-semibold text-base flex items-center gap-2 mb-6">
                <span className="text-yellow-500">👉</span>
                Le tout sur une base solide en référencement pour que vos futurs clients vous trouvent en quelques.
              </div>
            </div>
            <div className="relative z-20">
              <Button href="#" className="w-full justify-center">
                parlez-nous de votre besoin
              </Button>
            </div>

          </div>

          {/* Offre Club */}
          <div className="relative bg-white rounded-[24px] shadow-lg w-[500px] h-[420px] overflow-hidden flex flex-col justify-between p-10">

            <div className="relative z-20 text-left">
              <h2 className="text-black text-3xl font-semibold flex items-center gap-2 mb-2">
                offre club <span className="text-2xl">🍹</span>
              </h2>
              <p className="text-gray-800 text-lg mb-4">
                Vous êtes une agence et <span className="font-bold">vous avez besoin de renfort</span> sur des projets spécifiques ? Vous êtes une équipe d'experts et vous souhaitez intégrer des profils qui sachent s'adapter à votre organisation ? Votre demande colle davantage à une technologie spécifique ?
              </p>
              <div className="text-black font-semibold text-base flex items-center gap-2 mb-6">
                <span className="text-yellow-500">👉</span>
                La force de cette offre c'est le réseau : chacun sa spécialité et à chaque projet son expertise.
              </div>
            </div>
            <div className="relative z-20">
              <Button href="#" className="w-full justify-center">
                en savoir plus sur cette offre
              </Button>
            </div>

          </div>
        </div>
        
        <img src={DivText} alt="" className='w-[1850px]' draggable={false} />
    </div>
  )
}

export default Section2