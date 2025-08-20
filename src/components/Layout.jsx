import React, { useState, useEffect } from 'react';
import Header from './sections/Header';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModePreferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkModePreferred);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>{children}</main>
      <footer className="py-6 text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;
