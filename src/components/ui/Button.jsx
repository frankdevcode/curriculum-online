import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-brand-500 text-white font-semibold py-2.5 px-6 rounded-xl hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:focus:ring-brand-700 shadow-soft transform transition-transform duration-150 hover:-translate-y-0.5 flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
