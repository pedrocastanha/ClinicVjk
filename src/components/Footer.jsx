import React from 'react';
import { Heart, Phone, MapPin, Instagram, Mail } from 'lucide-react';
import logoImage from '../assets/images/logo_nova.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto px-10">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <a href="#inicio" className="cursor-pointer hover-scale smooth-transition">
                <img 
                  src={logoImage} 
                  alt="Emily Vujanski" 
                  className="h-16 md:h-12 sm:h-12 w-auto object-contain filter brightness-0 invert footer-logo"
                />
              </a>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Cuidados especializados em nutrição e estética para revelar sua melhor versão. 
              Tratamentos personalizados com ciência e dedicação.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/emilyvujanski/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#E1306C] rounded-full flex items-center justify-center hover:bg-[#C13584] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/5544991153836?text=Ol%C3%A1%2C%20Emily!%20Vim%20pelo%20site%2C%20e%20gostaria%20de%20agendar%20uma%20consulta." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors social-icon"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 gradient-gold-text">Serviços</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors link-animate">
                  Consulta Nutricional
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors link-animate">
                  Nutrição Esportiva
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors link-animate">
                  Reeducação Alimentar
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors link-animate">
                  Criolipólise
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors link-animate">
                  Tratamentos Faciais
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors link-animate">
                  Drenagem Linfática
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 gradient-gold-text">Contato</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <Phone className="text-amber-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p>(44) 9 9115-3836</p>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p>Av. Gastão Vidigal, 634</p>
                  <p>Zona 08, Maringá - PR</p>
                  <p>CEP: 87050-590</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Instagram className="text-amber-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p>@emilyvujanski</p>
                  <p className="text-sm text-gray-400">Siga-nos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-2 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-2">
            <div className="text-gray-400 text-sm">
              © {currentYear} Emily Vujanski - Nutrição & Estética. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/area-cliente" className="hover:text-amber-400 transition-colors link-animate">
                Área do Cliente
              </a>
              <span>•</span>
              <span>CRN-8 12345</span>
              <span>•</span>
              <span>CRM-PR 67890</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

