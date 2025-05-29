import React from 'react'

const Button = ({ 
  href, 
  children, 
  className = '', 
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-[#D95DB0] to-[#3344DC] hover:bg-gradient-to-l duration-150 shadow-lg transition-colors'
  
  if (href) {
    return (
      <a 
        href={href}
        className={`${baseStyles} ${className}`}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button