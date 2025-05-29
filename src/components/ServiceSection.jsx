import React from 'react'
import Asana from '../assets/asana.png'

import Image1 from '../assets/a.png'
import Image2 from '../assets/a-1.png'

const topRow = [
  {
    icon: '💬',
    title: 'Ateliers',
    desc: "Qui vont nous permettre d'échanger, de débattre, de proposer, de co-créer et de valider.",
  },
  {
    icon: '✏️',
    title: 'Figjam',
    desc: "Pour itérer sur votre projet, Figjam est un grand tableau blanc digital : Brainstorming, idées.. vous allez adorer",
  },
  {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
        alt="Figma"
        className="h-10 inline"
      />
    ),
    title: 'Figma',
    desc: "Pour imaginer ensemble le design et l'expérience de votre projet, Figma est l'outil que nous privilégions.",
  },
];

const bottomRow = [
  {
    icon: <span className="text-4xl text-white">{'</>'}</span>,
    title: 'Développement',
    desc: 'Pour développer vos sites et applications nous favorisons : Webflow, Bubble, Adalo, Shopify et Wordpress.',
  },
  {
    icon: (
      <img
        src={Asana}
        alt="Asana"
        className="h-10 inline"
        draggable={false}
      />
    ),
    title: 'Asana',
    desc: "Pour la gestion de votre projet : planning, tâches, ticketing, gestion d'équipe, Asana est un indispensable.",
  },
];

const ServiceSection = () => {
  return (
    <div className="flex justify-center items-center min-h-[100vh] px-[100px]">
      <div className="bg-[#18171B] rounded-[32px] w-full max-w-[1000px] mx-auto py-16 px-8 text-center shadow-lg">
        <h2 className="text-white text-5xl font-semibold mb-4">Notre méthodologie</h2>
        <p className="text-gray-400 text-lg mb-12">
          Créer une équipe pour votre projet c'est bien, avoir <span className="font-semibold text-white">une organisation sans faille</span> c'est <br /> mieux. Pourquoi ? Pour gagner en productivité, en temps et en ébullition d'idées.
        </p>

        <div className="grid grid-cols-3 gap-y-12 gap-x-6 mb-10 text-center">
          {topRow.map((item, idx) => (
            <div key={idx}>
              <div className="text-4xl mb-2 flex justify-center">{item.icon}</div>
              <div className="text-white text-xl font-semibold mb-1 flex justify-center">{item.title}</div>
              <div className="text-gray-400 flex justify-center">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-x-6">
          {bottomRow.map((item, idx) => (
            <div key={idx}>
              <div className="text-4xl mb-2 flex justify-center">{item.icon}</div>
              <div className="text-white text-xl font-semibold mb-1">{item.title}</div>
              <div className="text-gray-400 text-base mx-[30px]">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceSection