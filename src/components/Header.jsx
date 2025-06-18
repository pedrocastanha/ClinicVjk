import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '../assets/images/logoprincipal.png';

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
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="Emily Vujanski" 
              className="h-20 w-30 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-amber-600 transition-colors smooth-transition font-medium hover-elegant px-3 py-2 rounded-lg"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-amber-600 transition-colors smooth-transition font-medium hover-elegant px-3 py-2 rounded-lg"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-amber-600 transition-colors smooth-transition font-medium hover-elegant px-3 py-2 rounded-lg"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-amber-600 transition-colors smooth-transition font-medium hover-elegant px-3 py-2 rounded-lg"
            >
              Contato
            </button>
            <Button 
              onClick={() => window.location.href = '/area-cliente'}
              className="gradient-gold text-white hover:opacity-90 smooth-transition px-6 py-2"
            >
              Área do Cliente
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                Contato
              </button>
              <Button 
                onClick={() => window.location.href = '/area-cliente'}
                className="gradient-gold text-white hover:opacity-90 smooth-transition w-full"
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

