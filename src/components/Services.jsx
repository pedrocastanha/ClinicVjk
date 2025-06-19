import React from 'react';
import { Apple, Zap, Droplets, Sparkles, ArrowRight, Heart, Leaf, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const nutritionServices = [
    {
      icon: Apple,
      title: "Nutrição Clínica",
      description: "Transforme sua saúde através de uma alimentação personalizada e cientificamente embasada.",
      features: ["Avaliação completa", "Plano personalizado", "Acompanhamento contínuo"],
      link: "nutricao-clinica"
    },
    {
      icon: Dumbbell,
      title: "Nutrição Esportiva",
      description: "Maximize seu desempenho atlético com estratégias nutricionais avançadas.",
      features: ["Periodização nutricional", "Otimização de performance", "Recuperação acelerada"],
      link: "nutricao-esportiva"
    },
    {
      icon: Heart,
      title: "Reeducação Alimentar",
      description: "Desenvolva uma relação saudável e sustentável com a comida para toda a vida.",
      features: ["Mudança de hábitos", "Educação nutricional", "Resultados duradouros"],
      link: "reeducacao-alimentar"
    }
  ];

  const aestheticServices = [
    {
      icon: Sparkles,
      title: "Criolipolíse",
      description: "Realce suas curvas com técnicas avançadas que garantem resultados incríveis que valorizam sua beleza.",
      features: ["Procedimentos minimamente invasivos", "Resultados naturais", "Técnicas avançadas"],
      link: "criolipolise"
    },
    {
      icon: Leaf,
      title: "Drenagem Linfática",
      description: "Melhore sua circulação e reduza o inchaço com técnicas especializadas de drenagem linfática.",
      features: ["Redução de inchaço", "Melhora da circulação", "Relaxamento e bem-estar"],
      link: "drenagem-linfatica"
    },
    {
      icon: Zap,
      title: "Massagem Relaxante e Modeladora",
      description: "Conheça e sinta a eficácia da massagem que relaxa, reduz tensões e te modela.",
      features: ["Alívio de tensões", "Relaxamento profundo", "Modelagem corporal"],
      link: "massagem-relaxante-modeladora"
    }
  ];

  return (
    <section id="servicos" className="py-20 gradient-gold-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nossos <span className="gradient-gold-text">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos tratamentos integrados de nutrição e estética, 
            combinando ciência e cuidado para resultados excepcionais.
          </p>
        </div>

        {/* Nutrition Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              <Apple className="inline-block mr-3 text-amber-500" size={32} />
              Nutrição
            </h3>
            <p className="text-lg text-gray-600">
              Cuidados nutricionais personalizados para sua saúde e bem-estar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nutritionServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-lift smooth-transition">
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mb-6">
                  <service.icon className="text-white" size={24} />
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full border-amber-500 text-amber-700 hover:bg-amber-50 cursor-pointer smooth-transition cursor-pointer"
                  onClick={() => {
                      navigate(`/tratamento/${service.link}`);
                      setTimeout(() => window.scrollTo(0, 0), 100);
                    }}                
                >
                  Saiba Mais
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Aesthetic Services */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              <Sparkles className="inline-block mr-3 text-amber-500" size={32} />
              Estética
            </h3>
            <p className="text-lg text-gray-600">
              Tratamentos estéticos avançados para realçar sua beleza natural
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aestheticServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-lift smooth-transition">
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mb-6">
                  <service.icon className="text-white" size={24} />
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full border-amber-500 text-amber-700 hover:bg-amber-50 cursor-pointer "
                  onClick={() => {
                      navigate(`/tratamento/${service.link}`);
                      setTimeout(() => window.scrollTo(0, 0), 100);
                    }}    
                >
                  Saiba Mais
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Pronto para começar sua transformação?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Agende sua consulta e descubra como nossos tratamentos podem 
              ajudar você a alcançar seus objetivos de saúde e beleza.
            </p>
            <Button 
              className="gradient-gold text-white px-8 py-4 text-lg hover:opacity-90 smooth-transition hover-lift"
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Agendar Consulta
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

