import React from 'react'
import { Sparkle, ArrowRight, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react'
import Badge from '../assets/badge.png' // Replace with your badge asset
import Bag from '../assets/bag.png' // Replace with your bag asset
import Logo from '../assets/logo.png' // Replace with your logo asset

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-4 px-36">
      {/* Newsletter */}
      <div className="w-full mx-auto border-b border-[#222] pb-8 mb-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Sparkle className="text-[#FFC501]" size={28} />
            <span>Cool stuff only</span>
            <span className="text-xs font-normal ml-2 text-gray-300">Subscribe to our newsletter</span>
          </div>
          <div className="flex items-center justify-between gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="yourname@email.com"
              className="bg-black border-none border-b border-gray-600 text-white px-4 py-2 w-full md:w-72 focus:outline-none focus:border-[#FFC501] placeholder-gray-400"
            />
            <button className="ml-2 bg-transparent p-2 rounded-full hover:bg-[#222] transition">
              <ArrowRight className="text-[#B39DFF]" size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="w-full px-36 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-[#222] pb-8 mb-8">
        {/* Badge/logo */}
        <div className="flex flex-col items-center md:items-start">
          <img src={Badge} alt="Badge" className="w-24 h-24 mb-4" />
        </div>
        {/* Company links */}
        <div>
          <h4 className="uppercase text-xs text-gray-400 mb-10 tracking-widest">Company</h4>
          <ul className="space-y-1 text-sm grid gap-5">
            <li><a href="#" className="hover:underline">Customers</a></li>
            <li><a href="#" className="hover:underline">Vendors</a></li>
            <li><a href="#" className="hover:underline">Riders</a></li>
            <li><a href="#" className="hover:underline">Storefront</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        {/* Cuisines near you */}
        <div>
          <h4 className="uppercase text-xs text-gray-400 mb-10 tracking-widest">Cuisines near you</h4>
          <ul className="space-y-1 text-sm grid gap-5">
            <li><a href="#" className="hover:underline">Pasta near me</a></li>
            <li><a href="#" className="hover:underline">Rice near me</a></li>
            <li><a href="#" className="hover:underline">Fast food near me</a></li>
            <li><a href="#" className="hover:underline">Asian food in Lagos</a></li>
            <li><a href="#" className="hover:underline">African food in Lagos</a></li>
            <li><a href="#" className="hover:underline">Breakfast menu in Lagos</a></li>
            <li><a href="#" className="hover:underline">Fitfam stores in Lagos</a></li>
            <li><a href="#" className="hover:underline">American food in Lagos</a></li>
            <li><a href="#" className="hover:underline">Pastries in Lagos</a></li>
            <li><a href="#" className="hover:underline">Salad in Lagos</a></li>
            <li><a href="#" className="hover:underline">Fruits in Lagos</a></li>
          </ul>
        </div>
        {/* Popular */}
        <div>
          <h4 className="uppercase text-xs text-gray-400 mb-10 tracking-widest">Popular</h4>
          <ul className="space-y-1 text-sm grid gap-5">
            <li><a href="#" className="hover:underline">Food delivery</a></li>
            <li><a href="#" className="hover:underline">Surulere</a></li>
            <li><a href="#" className="hover:underline">Ogudu</a></li>
            <li><a href="#" className="hover:underline">Yaba</a></li>
            <li><a href="#" className="hover:underline">Ikeja</a></li>
            <li><a href="#" className="hover:underline">Lekki</a></li>
            <li><a href="#" className="hover:underline">King Glab</a></li>
            <li><a href="#" className="hover:underline">Korede Spaghetti</a></li>
            <li><a href="#" className="hover:underline">Iyan Aladuke</a></li>
            <li><a href="#" className="hover:underline">Food Fusion</a></li>
            <li><a href="#" className="hover:underline">Belleful</a></li>
          </ul>
        </div>
      </div>

      {/* Socials and bottom bar */}
      <div className="w-full px-36 mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-4">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Chowdeck Logo" className="w-5" />
          <span className="text-2xl font-bold">Chowdeck</span>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm items-center">
          <a href="#" className="flex items-center gap-1 text-white hover:text-[#B39DFF] transition"><Sparkle className="text-[#B39DFF]" size={18} /> Twitter</a>
          <a href="#" className="flex items-center gap-1 text-white hover:text-pink-400 transition"><Sparkle className="text-pink-400" size={18} /> Instagram</a>
          <a href="#" className="flex items-center gap-1 text-white hover:text-[#4267B2] transition"><Sparkle className="text-[#4267B2]" size={18} /> Facebook</a>
          <a href="#" className="flex items-center gap-1 text-white hover:text-orange-300 transition"><Sparkle className="text-orange-300" size={18} /> LinkedIn</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-center text-xs text-gray-400 pt-4 border-t border-[#222] mt-4">
        © All Rights Reserved. 2022. Chowdeck Logistics Inc.
      </div>
    </footer>
  )
}

export default Footer