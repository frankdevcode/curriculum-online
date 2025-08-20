import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { profile } from '../../data/profile';

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { to: 'about', label: 'Sobre mí' },
    { to: 'experience', label: 'Experiencia' },
    { to: 'education', label: 'Educación' },
    { to: 'skills', label: 'Habilidades' },
    { to: 'projects', label: 'Proyectos' },
    { to: 'contact', label: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card border-b border-gray-100 dark:border-gray-800' : ''
      }`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-extrabold tracking-tight text-gray-800 dark:text-white">
          {profile.name}
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button aria-label="Toggle theme" onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button aria-label="Toggle theme" onClick={() => setDarkMode(!darkMode)} className="p-2 mr-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button aria-label="Open menu" onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col items-center py-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-brand-500 dark:hover:text-brand-300 transition-colors text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
