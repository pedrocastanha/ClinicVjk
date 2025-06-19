import { Heart, Leaf, Zap, Sparkles, Apple, Dumbbell } from 'lucide-react';
import React from 'react';

export const treatmentsData = {
  // Tratamentos Nutricionais
  'nutricao-clinica': {
    title: 'Nutrição Clínica',
    subtitle: 'Transforme sua saúde através de uma alimentação personalizada e cientificamente embasada',
    icon: React.createElement(Apple, { className: "text-white", size: 32 }),
    duration: '40-60 min por consulta',
    sessions: 'Acompanhamento contínuo',
    rating: '4.9/5 estrelas',
    description: `A Nutrição Clínica é uma abordagem personalizada e científica que busca otimizar a sua saúde por meio de uma alimentação adaptada às suas necessidades. Na Clínica Emily Vujanski, nosso foco é entender profundamente o seu perfil metabólico, histórico de saúde e seus objetivos pessoais para desenvolver um plano nutricional único e eficaz. Realizamos uma avaliação completa que inclui a análise da composição corporal, exames laboratoriais detalhados, a avaliação de seus hábitos alimentares e a identificação de possíveis deficiências nutricionais.

Com base nessas informações, criamos estratégias nutricionais que atendem às suas necessidades específicas, ajustadas ao seu estilo de vida. O acompanhamento contínuo é fundamental para tratar e prevenir condições de saúde como diabetes, hipertensão, dislipidemia, síndrome metabólica, distúrbios gastrointestinais e muito mais.

Nosso objetivo vai além dos resultados visíveis; queremos proporcionar uma melhoria significativa na sua qualidade de vida e bem-estar geral, promovendo uma saúde mais equilibrada e uma sensação de vitalidade no dia a dia.`,
    benefits: [
      'Melhoria dos marcadores de saúde (colesterol, glicemia, pressão arterial)',
      'Aumento da energia e disposição',
      'Fortalecimento do sistema imunológico',
      'Sono mais profundo e reparador',
      'Melhora digestiva e redução de inchaço',
      'Prevenção de doenças crônicas',
      'Melhoria do humor e redução do estresse',
      'Pele mais saudável (menos acne, rugas e oleosidade)',
      'Redução de medidas e perda de gordura corporal',
      'Autoestima elevada e confiança renovada'
    ],
    process: [
      {
        title: 'Avaliação Inicial Completa',
        description: 'Análise detalhada do histórico de saúde, exames laboratoriais, composição corporal e hábitos alimentares atuais.'
      },
      {
        title: 'Desenvolvimento do Plano Nutricional',
        description: 'Criação de um protocolo personalizado baseado nas suas necessidades específicas e objetivos de saúde.'
      },
      {
        title: 'Implementação Gradual',
        description: 'Introdução progressiva das mudanças alimentares para garantir adaptação e sustentabilidade a longo prazo.'
      },
      {
        title: 'Monitoramento e Ajustes',
        description: 'Acompanhamento regular com ajustes no plano conforme a evolução e resposta do organismo.'
      }
    ]
  },

  'nutricao-esportiva': {
    title: 'Nutrição Esportiva',
    subtitle: 'Maximize seu desempenho atlético com estratégias nutricionais avançadas e personalizadas',
    icon: React.createElement(Dumbbell, { className: "text-white", size: 32 }),
    duration: '45-60 min por consulta',
    sessions: 'Acompanhamento semanal/quinzenal',
    rating: '4.8/5 estrelas',
    description: `A Nutrição Esportiva é uma especialidade que foca na otimização do desempenho atlético através de estratégias nutricionais específicas. Seja você um atleta profissional, amador ou praticante de atividade física regular, nosso programa é desenvolvido para maximizar seus resultados e acelerar sua recuperação.

Nossa abordagem considera não apenas o tipo de modalidade esportiva praticada, mas também a intensidade dos treinos, objetivos específicos (ganho de massa muscular, perda de gordura, melhoria da performance), horários de treino e competições. Desenvolvemos protocolos de hidratação, timing nutricional e suplementação quando necessário.

O programa inclui estratégias de periodização nutricional, onde adaptamos a alimentação conforme as diferentes fases do treinamento (base, intensificação, competição e recuperação). Também fornecemos orientações específicas para pré, durante e pós-treino, garantindo que você tenha a energia necessária para treinar e os nutrientes adequados para uma recuperação otimizada.`,
   benefits: [
    'Aumento significativo da performance e resistência',
    'Melhoria da composição corporal (definição muscular e redução de gordura)',
    'Recuperação acelerada entre treinos',
    'Redução do risco de lesões e fadiga',
    'Otimização da hidratação e equilíbrio eletrolítico',
    'Maior concentração durante atividades físicas',
    'Nutrição adaptada para cada fase do treinamento',
    'Melhoria da saúde intestinal e digestão',
    'Definição muscular mais aparente',
    'Aumento da motivação e disciplina alimentar'],
    process: [
      {
        title: 'Avaliação Atlética Específica',
        description: 'Análise da modalidade esportiva, volume de treino, objetivos de performance e composição corporal atual.'
      },
      {
        title: 'Periodização Nutricional',
        description: 'Desenvolvimento de estratégias nutricionais adaptadas às diferentes fases do seu treinamento e competições.'
      },
      {
        title: 'Protocolos de Timing Nutricional',
        description: 'Orientações específicas sobre o que comer antes, durante e após os treinos para otimizar performance e recuperação.'
      },
      {
        title: 'Monitoramento de Performance',
        description: 'Acompanhamento regular dos resultados com ajustes baseados na evolução da performance e composição corporal.'
      }
    ]
  },

  'reeducacao-alimentar': {
    title: 'Reeducação Alimentar',
    subtitle: 'Desenvolva uma relação saudável e sustentável com a comida para toda a vida',
    icon: React.createElement(Heart, { className: "text-white", size: 32 }),
    duration: '40-60 min por consulta',
    sessions: 'Acompanhamento mensal',
    rating: '4.9/5 estrelas',
    description: `A Reeducação Alimentar é um processo transformador que vai muito além de dietas restritivas. É uma jornada de autoconhecimento que visa estabelecer uma relação saudável, equilibrada e prazerosa com a alimentação, promovendo mudanças duradouras no seu estilo de vida.

Nosso programa foca na compreensão dos gatilhos emocionais relacionados à comida, identificação de padrões alimentares disfuncionais e desenvolvimento de estratégias práticas para fazer escolhas alimentares conscientes. Trabalhamos com conceitos de alimentação intuitiva, mindful eating e flexibilidade alimentar.

O processo inclui educação nutricional abrangente, onde você aprende sobre os diferentes grupos alimentares, como combinar alimentos para otimizar a saciedade e energia, e como adaptar a alimentação às diferentes situações do cotidiano. O objetivo é que você se torne autônomo nas suas escolhas alimentares, mantendo o equilíbrio sem abrir mão do prazer de comer.`,
    benefits: [
      'Relação saudável e sem culpa com a comida',
      'Perda de peso natural e sustentável',
      'Controle da compulsão alimentar e ansiedade',
      'Aumento da autoestima e confiança',
      'Mais energia e vitalidade no dia a dia',
      'Melhora digestiva e redução de inchaço',
      'Flexibilidade alimentar em eventos sociais',
      'Hábitos saudáveis para a vida toda'
    ],
    process: [
      {
        title: 'Análise Comportamental',
        description: 'Identificação de padrões alimentares, gatilhos emocionais e crenças limitantes relacionadas à comida.'
      },
      {
        title: 'Educação Nutricional',
        description: 'Aprendizado sobre nutrição de forma prática e aplicável ao dia a dia, sem complicações desnecessárias.'
      },
      {
        title: 'Implementação Gradual',
        description: 'Introdução progressiva de novos hábitos alimentares de forma sustentável e sem privações extremas.'
      },
      {
        title: 'Consolidação e Autonomia',
        description: 'Desenvolvimento da capacidade de fazer escolhas alimentares conscientes e equilibradas de forma independente.'
      }
    ]
  },

  // Tratamentos Estéticos
  'harmonizacao-facial': {
    title: 'Criolipolíse',
    subtitle: 'Realce sua beleza natural com técnicas avançadas e resultados harmoniosos',
    icon: React.createElement(Sparkles, { className: "text-white", size: 32 }),
    duration: '90-120 min por sessão',
    sessions: '1-3 sessões conforme necessidade',
    rating: '4.9/5 estrelas',
    description: `A Harmonização Facial é um conjunto de procedimentos estéticos minimamente invasivos que visa equilibrar e realçar os traços naturais do rosto, promovendo uma aparência mais jovem, harmoniosa e natural. Utilizamos técnicas avançadas e produtos de alta qualidade para obter resultados excepcionais.

Nosso protocolo inclui uma análise facial detalhada, considerando a anatomia única de cada paciente, proporções faciais, expressões e desejos pessoais. Trabalhamos com preenchimento de ácido hialurônico, bioestimuladores de colágeno, toxina botulínica e outros procedimentos que promovem rejuvenescimento e harmonização.

O diferencial do nosso tratamento está na abordagem conservadora e natural, sempre respeitando as características individuais e promovendo resultados que realçam a beleza natural sem criar uma aparência artificial. Cada procedimento é planejado cuidadosamente para garantir segurança, conforto e satisfação do paciente.`,
    benefits: [
      'Melhoria das proporções e simetria facial',
      'Redução de linhas de expressão e rugas',
      'Aumento da hidratação e firmeza da pele',
      'Realce dos contornos naturais do rosto',
      'Rejuvenescimento com aparência natural',
      'Melhoria da autoestima e confiança',
      'Resultados duradouros com manutenção adequada',
      'Procedimentos minimamente invasivos'
    ],
    process: [
      {
        title: 'Consulta e Análise Facial',
        description: 'Avaliação detalhada da anatomia facial, discussão de expectativas e planejamento personalizado do tratamento.'
      },
      {
        title: 'Preparação e Anestesia',
        description: 'Preparação da pele e aplicação de anestesia tópica para garantir conforto durante o procedimento.'
      },
      {
        title: 'Aplicação dos Procedimentos',
        description: 'Execução técnica precisa dos tratamentos planejados, sempre priorizando segurança e naturalidade.'
      },
      {
        title: 'Acompanhamento e Manutenção',
        description: 'Orientações pós-procedimento e agendamento de retornos para avaliação e manutenção dos resultados.'
      }
    ]
  },

  'rejuvenescimento-facial': {
    title: 'Rejuvenescimento Facial',
    subtitle: 'Recupere a juventude da sua pele com tratamentos avançados e personalizados',
    icon: React.createElement(Leaf, { className: "text-white", size: 32 }),
    duration: '60-90 min por sessão',
    sessions: '4-8 sessões recomendadas',
    rating: '4.8/5 estrelas',
    description: `O Rejuvenescimento Facial é um programa abrangente que combina diferentes tecnologias e técnicas para combater os sinais do envelhecimento, promovendo uma pele mais jovem, firme e radiante. Nosso protocolo é personalizado conforme o tipo de pele, idade e objetivos específicos de cada paciente.

Utilizamos uma combinação de tratamentos que incluem bioestimuladores de colágeno, peelings químicos, microagulhamento, radiofrequência e outros procedimentos que estimulam a renovação celular e a produção natural de colágeno. Cada sessão é planejada para maximizar os resultados enquanto mantém o conforto e segurança.

O programa não se limita apenas aos procedimentos em consultório, mas inclui também um protocolo de cuidados domiciliares com produtos específicos para potencializar e manter os resultados obtidos. Nossa abordagem holística considera também fatores como nutrição, hidratação e proteção solar como elementos fundamentais para um rejuvenescimento eficaz e duradouro.`,
    benefits: [
      'Redução significativa de rugas e linhas de expressão',
      'Melhoria da textura e qualidade da pele',
      'Aumento da firmeza e elasticidade',
      'Uniformização do tom da pele',
      'Redução de manchas e hiperpigmentação',
      'Estímulo natural da produção de colágeno',
      'Melhoria da luminosidade e viço da pele',
      'Resultados progressivos e naturais'
    ],
    process: [
      {
        title: 'Avaliação Dermatológica',
        description: 'Análise completa da pele, identificação dos sinais de envelhecimento e planejamento do protocolo ideal.'
      },
      {
        title: 'Preparação da Pele',
        description: 'Início do protocolo de preparação com produtos específicos para otimizar os resultados dos procedimentos.'
      },
      {
        title: 'Sessões de Tratamento',
        description: 'Realização das sessões conforme protocolo estabelecido, com monitoramento constante da evolução.'
      },
      {
        title: 'Manutenção e Cuidados',
        description: 'Orientações para manutenção dos resultados e estabelecimento de rotina de cuidados a longo prazo.'
      }
    ]
  },

  'tratamento-acne': {
    title: 'Tratamento de Acne',
    subtitle: 'Conquiste uma pele limpa e saudável com protocolos específicos e eficazes',
    icon: React.createElement(Zap, { className: "text-white", size: 32 }),
    duration: '45-60 min por sessão',
    sessions: '6-12 sessões recomendadas',
    rating: '4.7/5 estrelas',
    description: `O Tratamento de Acne é um programa especializado que combina abordagens tópicas, procedimentos estéticos e orientações nutricionais para combater efetivamente a acne em todas as suas formas. Nosso protocolo é adaptado conforme o grau da acne, tipo de pele e fatores individuais de cada paciente.

Utilizamos uma combinação de tratamentos que incluem limpeza de pele profunda, peelings químicos específicos, LED terapia, microagulhamento e aplicação de ativos que controlam a oleosidade e combatem a inflamação. Cada sessão é planejada para reduzir as lesões ativas e prevenir o surgimento de novas.

Nosso diferencial está na abordagem integrativa, que considera não apenas o tratamento tópico, mas também fatores como alimentação, estresse, alterações hormonais e cuidados domiciliares. Fornecemos orientações completas sobre produtos adequados para uso em casa e hábitos que potencializam os resultados do tratamento.`,
    benefits: [
      'Redução significativa das lesões ativas de acne',
      'Controle da oleosidade excessiva da pele',
      'Melhoria da textura e aparência geral da pele',
      'Redução de cicatrizes e marcas pós-acne',
      'Prevenção do surgimento de novas lesões',
      'Melhoria da autoestima e confiança',
      'Estabelecimento de rotina de cuidados adequada',
      'Resultados duradouros com manutenção'
    ],
    process: [
      {
        title: 'Diagnóstico Especializado',
        description: 'Avaliação do tipo e grau da acne, identificação de fatores desencadeantes e planejamento do tratamento.'
      },
      {
        title: 'Protocolo de Limpeza',
        description: 'Início do tratamento com limpezas profundas e procedimentos para reduzir a inflamação e oleosidade.'
      },
      {
        title: 'Tratamentos Específicos',
        description: 'Aplicação de peelings, LED terapia e outros procedimentos conforme a evolução da pele.'
      },
      {
        title: 'Manutenção e Prevenção',
        description: 'Estabelecimento de rotina de cuidados e orientações para manter os resultados e prevenir recidivas.'
      }
    ]
  }
};

