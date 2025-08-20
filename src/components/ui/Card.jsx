import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      className={`bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
