import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { label: 'About', href: 'about' },
    { label: 'Projects', href: 'projects' },
    { label: 'Experience', href: 'experience' },
    { label: 'Skills', href: 'skills' },
    { label: 'Contact', href: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="font-bold text-xl cursor-pointer hover:text-teal-600 transition-colors"
          >
            Aryan Dewan
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-teal-600 transition-colors font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-teal-600 hover:bg-teal-700 text-white mt-4"
              >
                Let's Connect
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;