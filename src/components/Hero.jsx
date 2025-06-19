import React from 'react';
import { ArrowRight, Sparkles, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="text-amber-400 opacity-60" size={24} />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Heart className="text-rose-400 opacity-60" size={20} />
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <Star className="text-orange-400 opacity-60" size={18} />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <Sparkles className="text-amber-500 opacity-60" size={22} />
        </div>
      </div>

      <div className="container mx-auto px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-800">Comece</span>
                <span className="block gradient-gold-text">cuidando</span>
                <span className="block text-gray-800">de você!</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                Desperte a sua confiança e revele a sua melhor versão com 
                tratamentos de nutrição e estética de excelência. Oferecemos cuidados 
                personalizados para a saúde e a beleza da sua pele e corpo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('servicos')}
                className="gradient-gold text-white px-8 py-4 text-lg hover:opacity-90 smooth-transition hover-lift group"
              >
                Conhecer os Tratamentos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('sobre')}
                variant="outline"
                className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg smooth-transition hover-lift"
              >
                Conhecer a Doutora
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-gold-text">500+</div>
                <div className="text-gray-600 text-sm">Pacientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-gold-text">5+</div>
                <div className="text-gray-600 text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-gold-text">98%</div>
                <div className="text-gray-600 text-sm">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 p-8">
                <div className="w-full h-full rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="src/assets/images/doutora/emily.png" 
                    alt="Dra. Emily Vujanski" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 gradient-gold rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-200 rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

