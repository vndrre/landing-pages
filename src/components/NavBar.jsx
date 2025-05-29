import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import Button from './Button'
import WaveHand from '../assets/hand-wave.png'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-[999] transition-colors duration-300 ${scrolled ? 'bg-black rounded-b-[50px]' : 'bg-transparent'} text-white`}>
        <a href='#' className='absolute right-25 top-5 rounded-full bg-white p-3 shadow-lg cursor-pointer'>
            <img src={WaveHand} alt="" draggable={false} />
        </a>
      <div className='flex items-center justify-between px-[68.8px] py-[24.11px] mx-[100px]'>
        <div className='flex items-center gap-[75px]'>
            <a href="/">
              <img src={Logo} alt="" />
            </a>

            <p className='text-[18px]'>
              offres à propos projets manifeste
            </p>
        </div>

        <div>
          <Button href={'/'}>
            1h de conseil gratuit
          </Button>
        </div>

      </div>
    </div>
  )
}

export default NavBar