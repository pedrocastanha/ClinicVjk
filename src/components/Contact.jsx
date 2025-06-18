import React from 'react';
import { Phone, MapPin, Clock, Mail, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5544991153836?text=Ol%C3%A1%2C%20Emily!%20Vim%20pelo%20site%2C%20e%20gostaria%20de%20agendar%20uma%20consulta.', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/emilyvujanski/', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Entre em <span className="gradient-gold-text">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atendê-la e esclarecer todas as suas dúvidas. 
            Agende sua consulta e comece sua jornada de transformação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                    <p className="text-gray-600">(44) 9 9115-3836</p>
                    <p className="text-sm text-gray-500">WhatsApp disponível</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                    <p className="text-gray-600">Av. Gastão Vidigal, 634</p>
                    <p className="text-gray-600">Zona 08, Maringá - PR</p>
                    <p className="text-gray-600">CEP: 87050-590</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Instagram</h4>
                    <p className="text-gray-600">@emilyvujanski</p>
                    <p className="text-sm text-gray-500">Acompanhe dicas e novidades</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horário de Funcionamento</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button 
                onClick={handleWhatsApp}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 text-base smooth-transition hover-lift"
              >
                <MessageCircle className="mr-2" size={18} />
                Agendar atendimento
              </Button>
              
              <Button 
                onClick={handleInstagram}
                variant="outline"
                className="flex-1 border-2 border-pink-500 text-pink-600 hover:bg-pink-50 py-3 text-base smooth-transition hover-lift"
              >
                <Instagram className="mr-2" size={18} />
                Seguir no instagram
              </Button>
            </div>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Google Maps */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-2 h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.5!2d-51.9081439!3d-23.4349522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0910f55c429%3A0xeb6a4b2fe2b711b3!2sAv.%20Gast%C3%A3o%20Vidigal%2C%20634%20-%20Zona%2008%2C%20Maring%C3%A1%20-%20PR%2C%2087050-440%2C%20Brazil!5e0!3m2!1sen!2sbr!4v1000000000000!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica Emily Vujanski"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

