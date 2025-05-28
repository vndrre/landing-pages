import React from 'react'
import { ShoppingCart, User, ChevronDown } from 'lucide-react'
import Logo from '../assets/logo.png'

const NavBar = () => {

  let Links = [
    {name: 'Company', link: '/'},
    {name: 'FAQs', link: '/'},
    {name: 'Blog', link: '/'},
    {name: 'Contact', link: '/'},
  ]

  return (
    <div className='px-[85px] py-[25px] bg-white sticky top-0 z-[999]'>
        <div className='flex items-center justify-between'>

          <a href='/' className='flex items-center gap-2 rounded-full bg-[#0C513F] px-5 py-3'>
            <img src={Logo} alt="" />
            <h1 className='font-medium text-white'>Chowdeck</h1>
          </a>

          <div className='flex items-center gap-[75px]'>
            {
              Links.map((link, index) =>(
                <a key={index} href={link.link} className='font-medium hover:text-[#0C513F] transition-colors'>
                  {link.name}
                </a>
              ))
            }
          </div>

          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2 cursor-pointer hover:text-[#0C513F] transition-colors'>
              <span className='font-medium'>Customers</span>
              <ChevronDown size={16} />
            </div>
            
            <button className='hover:text-[#0C513F] transition-colors cursor-pointer'>
              <ShoppingCart size={20} />
            </button>
          </div>

        </div>
    </div>
  )
}

export default NavBar;