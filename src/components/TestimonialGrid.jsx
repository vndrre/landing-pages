import React from 'react';

const TestimonialGrid = () => {
  const testimonials = [
    {
      id: 1,
      name: "F4",
      handle: "@victorfatanmi",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      content: "Chowdeck is the best Nigerian mobile app I have ever used. Yes, quote me.",
    },
    {
      id: 2,
      name: "Teffy Billion Dollars",
      handle: "@tegg_tola",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c108?w=40&h=40&fit=crop&crop=face",
      content: "My Yam and pepper sauce just came in from King Glab and Chowdeck and my Godddd! This is the best thing to happen to me this week! https://t.co/DBm6E2u2hQ",
    },
    {
      id: 3,
      name: "先生",
      handle: "@TheFisole",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      content: "Chowdeck delivered in 20 minutes. Rider said \"pardon my lateness\" 💀",
    },
    {
      id: 4,
      name: "Folasade Daini",
      handle: "@folasade_daini",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      content: "Have you seen the new list of vendors on Chowdeck?? Omo. It is giving 🔥🔥",
    },
    {
      id: 5,
      name: "THEE AWAZI",
      handle: "@THEAWAZI",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=40&h=40&fit=crop&crop=face",
      content: "Food!!! 😍😍 So excited that I can now order through @chowdeck on the island. Go team Chowdeck!!! https://t.co/OSr3bUid46",
    },
    {
      id: 6,
      name: "Temz🏀",
      handle: "@TheboutTemz",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      content: "I wan go baff but I can't. Because chowdeck riders move like thieves in the night. Before you cough, rider don reach your gate. The efficiency and speed is crazy 😂😂😂😂😂😂",
    },
    {
      id: 7,
      name: "Wine",
      handle: "@RedWinee",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=40&h=40&fit=crop&crop=face",
      content: "I genuinely love @chowdeck A top app with swift service",
    },
    {
      id: 8,
      name: "Scheherazade",
      handle: "@zeinabmt",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
      content: "You'll order Chowdeck and say yeah I have about 20 minutes to get home. In 5 minutes, delivery man will tell you he's outside 😂",
    }
  ];

  const TwitterIcon = () => (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  );

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout - 4 columns, 2 rows on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`
                bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-2xl hover:rotate-1 hover:-translate-y-2
                cursor-pointer group
              `}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <h4 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                        {testimonial.name}
                      </h4>
                      {testimonial.verified && <VerifiedIcon />}
                    </div>
                    <p className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors">
                      {testimonial.handle}
                    </p>
                  </div>
                </div>
                <div className="bg-blue-500 rounded-full p-2 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                  <TwitterIcon />
                </div>
              </div>

              {/* Content */}
              <div className="group-hover:text-gray-900 transition-colors">
                <p className="text-gray-800 text-sm leading-relaxed">
                  {testimonial.content}
                </p>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialGrid;