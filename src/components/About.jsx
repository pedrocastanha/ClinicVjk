import React from 'react';
import { Award, Heart, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 p-6">
                <div className="w-full h-full rounded-2xl bg-white shadow-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="src/assets/images/doutora/IMG_6657.JPEG" 
                    alt="Dra. Emily Vujanski" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 gradient-gold rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-200 rounded-full opacity-30"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                Sobre a <span className="gradient-gold-text">Doutora</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Com mais de 5 anos de experiência, a Dra. Emily Vujanski é especialista em 
                nutrição clínica e tratamentos estéticos, oferecendo cuidados personalizados 
                para cada paciente.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Formada em Nutrição pela Universidade Estadual de Maringá, com especialização 
                em Nutrição Esportiva e Estética. Dedica-se a proporcionar tratamentos 
                inovadores que combinam ciência e cuidado personalizado.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Acredita que a verdadeira beleza vem de dentro para fora, por isso integra 
                nutrição e estética para resultados duradouros e naturais.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Especialização</h4>
                  <p className="text-gray-600 text-sm">Nutrição Clínica e Estética Avançada</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Cuidado</h4>
                  <p className="text-gray-600 text-sm">Atendimento humanizado e personalizado</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Experiência</h4>
                  <p className="text-gray-600 text-sm">Mais de 500 pacientes atendidos</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Inovação</h4>
                  <p className="text-gray-600 text-sm">Técnicas modernas e eficazes</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border-l-4 border-amber-500">
              <blockquote className="text-lg italic text-gray-700">
                "Minha missão é ajudar cada pessoa a descobrir sua melhor versão, 
                combinando ciência, cuidado e dedicação em cada tratamento."
              </blockquote>
              <cite className="block mt-3 text-amber-700 font-semibold">- Dra. Emily Vujanski</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

