import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg flex items-center justify-center ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
