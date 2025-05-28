import React, { useEffect, useState } from 'react';
import MessageIcon from '../assets/Vector (2).png'

const ChatButton = () => {

  return (
    <button
      onClick={() => alert('Chat opened!')}
      className="fixed cursor-pointer bottom-8 right-8 z-50 bg-[#0C513F] border-2 border-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-150"
      aria-label="Open chat or help"
    >
      <img src={MessageIcon} alt="" />
    </button>
  );
};

export default ChatButton; 