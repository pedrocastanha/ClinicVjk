import React from 'react';
import { Phone, MapPin, Clock, Mail, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5544991153836', '_blank');
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
              
              <div className="space-y-6">
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
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg smooth-transition hover-lift"
              >
                <MessageCircle className="mr-3" size={20} />
                Conversar no WhatsApp
              </Button>
              
              <Button 
                onClick={handleInstagram}
                variant="outline"
                className="w-full border-2 border-pink-500 text-pink-600 hover:bg-pink-50 py-4 text-lg smooth-transition hover-lift"
              >
                <Instagram className="mr-3" size={20} />
                Seguir no Instagram
              </Button>
            </div>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="mx-auto text-amber-600" size={48} />
                <h4 className="text-xl font-bold text-gray-800">Localização</h4>
                <p className="text-gray-600">
                  Estamos localizados na Av. Gastão Vidigal, 634<br />
                  Zona 08, Maringá - PR
                </p>
                <Button 
                  variant="outline"
                  className="border-amber-500 text-amber-700 hover:bg-amber-50"
                  onClick={() => window.open('https://maps.google.com/?q=Av.+Gastão+Vidigal,+634,+Maringá,+PR', '_blank')}
                >
                  Ver no Google Maps
                </Button>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Informações Importantes</h4>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Atendimento por agendamento
                </p>
                <p className="flex items-start">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Consultas presenciais e online
                </p>
                <p className="flex items-start">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Estacionamento disponível
                </p>
                <p className="flex items-start">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ambiente climatizado e confortável
                </p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-red-800 mb-2">Emergências</h4>
              <p className="text-red-700 text-sm">
                Para emergências médicas, procure o pronto-socorro mais próximo 
                ou ligue para o SAMU: 192
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

