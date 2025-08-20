import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`rounded-2xl overflow-hidden glass-card dark:glass-card shadow-md transform transition-transform duration-200 hover:-translate-y-1 ${className}`}>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;
