import React from 'react';
import { ArrowLeft, Clock, Users, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const TreatmentPage = ({ treatment }) => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open('https://wa.me/5544991153836', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center jusstify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-amber-700 hover:text-amber-800"
            >
              <ArrowLeft size={20} />
              <span>Voltar ao Início</span>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">EV</span>
              </div>
              <span className="font-semibold text-gray-800">Emily Vujanski</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
              {treatment.icon}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              {treatment.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {treatment.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{treatment.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={16} />
                <span>{treatment.sessions}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={16} />
                <span>{treatment.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre o Tratamento</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                {treatment.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefícios</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {treatment.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Como Funciona</h2>
              <div className="space-y-6">
                {treatment.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Pronto para começar sua transformação?
              </h3>
              <p className="text-gray-600 mb-6">
                Agende sua consulta e descubra como este tratamento pode transformar sua vida.
              </p>
              <Button
                onClick={handleWhatsApp}
                className="gradient-gold text-white px-8 py-4 text-lg hover:opacity-90 smooth-transition hover-lift"
              >
                Agendar Consulta
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentPage;

