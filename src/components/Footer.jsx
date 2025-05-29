import React from 'react';

const expertises1 = [
  "Design Thinking",
  "UX Design",
  "UI Design",
  "Product Design",
  "Developpement Webflow"
];
const expertises2 = [
  "Developpement Shopify",
  "Referencement SEO",
  "Referencement SEA",
  "Reseaux sociaux"
];

const Footer = () => {
  return (
    <div className="rounded-t-[24px] border-t-[5px] border-x-[5px] p-12 mx-10"
      style={{
        borderImage: "linear-gradient(to right, #D95DB0, #3344DC) 1"
      }}
    >
      <div className="flex flex-wrap justify-center items-start gap-8">
        {/* Logo and Agency */}
        <div className="min-w-[180px]">
          <div className="flex items-end gap-2">
            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D95DB0] to-[#3344DC]">he</span>
            <span className="text-5xl font-bold text-[#3344DC] mb-3">dy</span>
          </div>
          <div className="text-[#D95DB0] text-lg font-medium ml-1">agency</div>
        </div>

        {/* Expertises */}
        <div className="flex flex-col sm:flex-row gap-12 flex-1 justify-center">
          <div>
            <div className="font-bold mb-2">Expertises</div>
            <ul className="space-y-1 text-gray-700">
              {expertises1.map((item, i) => <li key={i} className='mt-2'><a href="#" className="hover:underline">{item}</a></li>)}
            </ul>
          </div>
          <div>
            <ul className="space-y-1 text-gray-700 mt-8">
              {expertises2.map((item, i) => <li key={i} className='mt-2'><a href="#" className="hover:underline">{item}</a></li>)}
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="min-w-[260px]">

          <div className="font-bold mb-2">France</div>
          <div className="text-gray-700">hello@hedyagency.com</div>
          <div className="text-gray-700 mb-2">07 56 97 20 23</div>
          <div className="font-bold mb-2 mt-4">Rejoignez-nous</div>
          
          <div className="flex items-center gap-2 mb-4 p-1 bg-gradient-to-r from-[#D95DB0] to-[#3344DC] rounded-[8px] w-[265px]">
            <span className=" text-white px-3 py-1 font-semibold">1.38 CO2/view</span>
            <span className="bg-white text-black px-3 py-1 rounded-r-[8px] font-semibold">Ecoindex A</span>
          </div>

        </div>

        <div className="flex items-center gap-4 mt-4 text-gradient-to-r from-[#3344DC] to-[#D95DB0]">
            <a href="#" aria-label="Behance" className="text-[#D95DB0] text-2xl">Bē</a>
            <a href="#" aria-label="Dribbble" className="text-[#3344DC] text-2xl">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="none"/><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm6.93 6.36a8.01 8.01 0 0 1 1.7 4.13c-2.1-.34-4.09-.37-5.97-.1-.13-.28-.25-.56-.39-.84-.13-.26-.27-.52-.41-.77 3.13-1.23 4.97-2.97 5.47-3.5zm-1.45-1.6c-.45.5-2.01 2.1-5.01 3.23-1.6-2.93-3.33-5.13-3.7-5.6A8.03 8.03 0 0 1 12 4c1.97 0 3.78.71 5.18 1.89zm-7.13-2.1c.36.46 2.01 2.6 3.61 5.5-5.13 1.36-9.6 1.3-10.01 1.29A8.01 8.01 0 0 1 4.42 4.66zm-4.2 7.7v-.16c.41.01 5.36.09 10.7-1.36-.25.44-.48.89-.7 1.35-4.5 1.27-8.62 4.13-8.99 4.4A7.98 7.98 0 0 1 2 12c0-.55.05-1.09.14-1.64zm1.5 5.13c.36-.27 3.97-2.97 8.33-4.2.7 1.29 1.32 2.62 1.85 3.97-6.13 1.8-9.13 5.47-9.36 5.77A8.01 8.01 0 0 1 3.64 17.5zm2.13 2.13c.23-.3 2.7-3.33 8.6-5.1.5 1.36.93 2.74 1.28 4.13-5.13 1.5-7.97 4.13-8.13 4.27A8.03 8.03 0 0 1 5.77 19.63zm3.1 1.13c.16-.14 2.7-2.3 7.13-3.7.23 1.01.41 2.03.54 3.07A8.01 8.01 0 0 1 12 20c-1.01 0-1.99-.15-2.9-.41zm4.97.34c-.13-1.01-.3-2.01-.52-3 .97-.23 1.98-.41 3.01-.54-.5 1.97-1.36 3.7-2.49 4.54zm3.13-1.13c.36-.27 2.7-2.13 3.97-4.13-1.01.13-2.03.31-3.07.54-.23.97-.5 1.97-.9 2.97zm1.13-3.1c1.01-.23 2.03-.41 3.07-.54A8.01 8.01 0 0 1 20 12c0-.55-.05-1.09-.14-1.64-.23.3-2.7 3.33-8.6 5.1-.5-1.36-.93-2.74-1.28-4.13 5.13-1.5 7.97-4.13 8.13-4.27A8.03 8.03 0 0 1 18.23 4.37z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-[#3344DC] text-2xl">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            </a>
          </div>
      </div>
      <div className="mt-8 text-xs text-black font-semibold">&copy;2022 Hedy. Tous droits réservés.</div>
    </div>
  );
};

export default Footer;