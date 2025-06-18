import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '../assets/images/logo_nova.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-15 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#inicio" onClick={() => scrollToSection('inicio')} className="cursor-pointer">
              <img 
                src={logoImage} 
                alt="Emily Vujanski" 
                className="h-24 md:h-24 sm:h-20 w-auto object-contain header-logo"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-amber-600 transition-colors smooth-transition font-medium hover-elegant px-3 py-2 rounded-lg btn-animate"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-amber-600 transition-colors smooth-transition font-medium hover-elegant px-3 py-2 rounded-lg btn-animate"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-amber-600 transition-colors smooth-transition font-medium hover-elegant px-3 py-2 rounded-lg btn-animate"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-amber-600 transition-colors smooth-transition font-medium hover-elegant px-3 py-2 rounded-lg btn-animate"
            >
              Contato
            </button>
            <Button 
              onClick={() => window.location.href = '/area-cliente'}
              className="gradient-gold text-white hover:opacity-90 smooth-transition px-6 py-2 btn-animate"
            >
              Área do Cliente
            </Button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors btn-animate"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 mobile-nav">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium btn-animate btn-mobile"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium btn-animate btn-mobile"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium btn-animate btn-mobile"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium btn-animate btn-mobile"
              >
                Contato
              </button>
              <Button 
                onClick={() => window.location.href = '/area-cliente'}
                className="gradient-gold text-white hover:opacity-90 smooth-transition w-full btn-animate btn-mobile"
              >
                Área do Cliente
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

