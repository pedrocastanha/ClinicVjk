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
  'criolipolise': {
    title: 'Criolipolíse',
    subtitle: 'Conquiste o corpo dos seus sonhos eliminando gordura localizada com tecnologia avançada',
    icon: React.createElement(Sparkles, { className: "text-white", size: 32 }),
    duration: '90-120 min por sessão',
    sessions: '1-3 sessões conforme necessidade',
    rating: '4.9/5 estrelas',
    description: `A Criolipólise é um procedimento estético não invasivo que visa a redução de gordura localizada de forma eficaz. Utilizamos tecnologia de ponta para resfriar e cristalizar as células de gordura em áreas específicas do corpo. Esse processo leva à sua eliminação natural pelo sistema linfático, resultando em um contorno corporal mais definido.

    Nosso protocolo de Criolipólise é adaptado às suas necessidades. Iniciamos com uma avaliação detalhada para identificar as áreas de acúmulo de gordura que mais te incomodam, como abdômen, flancos, culotes e braços. Diferente de cirurgias, a Criolipólise não exige tempo de recuperação, permitindo que você retome suas atividades diárias imediatamente.

    O diferencial da nossa abordagem é o foco em resultados naturais e harmoniosos. Nosso objetivo é realçar sua silhueta complementando sua beleza existente. Cada procedimento é planejado com precisão para garantir seu conforto, segurança e satisfação. Experimente a transformação e sinta um aumento na sua autoestima com um corpo mais esculpido.`,
    benefits: [
      "Redução significativa e duradoura de gordura localizada",
    "Procedimento não invasivo, sem cortes ou agulhas",
    "Sem tempo de recuperação, retorno imediato às atividades",
    "Resultados visíveis em pouco tempo",
    "Tratamento seguro e eficaz, aprovado por órgãos de saúde",
    "Melhora notável do contorno e da definição corporal",
    "Aumento da autoestima e da confiança pessoal",
    "Alternativa à lipoaspiração para quem busca métodos não cirúrgicos"
    ],
    process: [
      {
        title: 'Consulta e Avaliação Corporal',
        description: 'Avaliação detalhada da sua silhueta, discussão de expectativas e planejamento personalizado do tratamento para as áreas de gordura localizada.'
      },
      {
        title: 'Preparação da Área e Proteção',
        description: 'Preparação da pele e aplicação de uma manta anticongelante para proteger a epiderme durante o resfriamento.'
      },
      {
        title: 'Aplicação da Criolipólise',
        description: 'Posicionamento do aplicador para sucção e resfriamento controlado das células de gordura, com foco na segurança e eficácia.'
      },
      {
        title: 'Pós-Procedimento e Acompanhamento',
        description: 'Orientações pós-procedimento e agendamento de retornos para avaliação e manutenção dos resultados.'
      }
    ]
  },

  'drenagem-linfatica': {
    title: 'Drenagem Linfática',
    subtitle: 'Revitalize seu corpo e bem‑estar com Drenagem Linfática personalizada',
    icon: React.createElement(Leaf, { className: "text-white", size: 32 }),
    duration: '60-90 min por sessão',
    sessions: '4-8 sessões recomendadas',
    rating: '4.8/5 estrelas',
    description: `Nosso protocolo de Drenagem Linfática alia técnicas manuais delicadas a recursos como pressoterapia e ultrassom terapêutico para acelerar a eliminação de toxinas, reduzir retenção de líquidos e trazer alívio imediato à sensação de inchaço. Cada sessão é adaptada ao seu histórico de saúde, estilo de vida e metas estéticas e funcionais.

      Realizamos o atendimento em ambiente acolhedor, com avaliação constante dos resultados e ajustes no ritmo e intensidade das manobras, garantindo conforto e eficácia. O objetivo é otimizar a circulação linfática, favorecer a oxigenação dos tecidos e promover uma profunda sensação de leveza.

      Para potencializar e prolongar os efeitos, indicamos um plano de cuidados em casa, que inclui exercícios simples de auto­drenagem, orientações sobre hidratação e alimentação detox. Nossa abordagem integrada considera ainda ajustes posturais e atividades físicas leves, assegurando resultados mais rápidos e duradouros.`,
    benefits: [
      'Redução visível de inchaço e retenção de líquidos',
      'Melhora da circulação linfática e sanguínea',
      'Alívio de desconfortos e sensação de peso',
      'Estimulação natural da eliminação de toxinas',
      'Aumento da oxigenação e vitalidade dos tecidos',
      'Melhora da firmeza e textura da pele',
      'Sensação imediata de relaxamento e bem‑estar',
      'Resultados duradouros com protocolo domiciliar'
    ],
    process: [
      {
        title: 'Avaliação Inicial',
        description: 'Coletamos seu histórico de saúde, avaliamos o grau de edema e identificamos pontos de retenção de líquidos. Definimos metas personalizadas para cada região do corpo.'
      },
      {
        title: 'Sessão de Drenagem',
        description: 'Aplicamos técnicas especiais e utilizamos equipamentos tecnológicos. Ajustamos ritmo, pressão e sequência de manobras para máxima eficiência e conforto.'
      },
      {
        title: 'Monitoramento Contínuo',
        description: 'A cada sessão revisamos resultados por meio de métricas de redução de medidas e relatos de bem‑estar. Adaptamos o protocolo sempre que necessário, garantindo evolução constante.'
      },
      {
        title: 'Cuidados Domiciliares',
        description: 'Fornecemos exercícios de auto­drenagem ilustrados, dicas de hidratação estratégica e plano alimentar detox. Incluímos recomendações posturais e de atividades físicas leves para potencializar os resultados.'
      }
    ]
  },

  'massagem-relaxante-modeladora': {
    title: 'Massagem Relaxante e Modeladora',
    subtitle: 'Alcance o equilíbrio perfeito entre relaxamento profundo e contornos definidos com massagem relaxante modeladora',
    icon: React.createElement(Zap, { className: "text-white", size: 32 }),
    duration: '45-60 min por sessão',
    sessions: '6-12 sessões recomendadas',
    rating: '4.8/5 estrelas',
    description: `Nossa Massagem Relaxante Modeladora combina movimentos suaves para aliviar tensões e técnicas intensivas para estimular a remodelação corporal. Adaptamos cada sessão ao seu perfil, unindo óleos aromáticos e toque terapêutico para promover bem‑estar imediato, à ações firmes de ventosas e rolls que favorecem a quebra de nódulos de gordura localizada, a drenagem de toxinas e a tonificação da pele.

O atendimento ocorre em ambiente aconchegante, com acompanhamento constante do seu conforto e das suas medidas. Ajustamos ritmo, pressão e sequência de manobras conforme sua evolução, garantindo eficiência na redução de inchaço, definição de curvas e sensação prolongada de leveza.

Para potencializar e prolongar os resultados, orientamos um protocolo domiciliar que inclui automassagem, alongamentos específicos, hidratação adequada e dicas nutricionais leves. Assim, promovemos um cuidado integral, unindo relaxamento, estética e saúde.`,
    benefits: [
    'Alívio de tensões musculares e redução do estresse',
    'Redução visível de medidas e definição de contornos',
    'Melhora da circulação sanguínea e linfática',
    'Aumento da firmeza e elasticidade da pele',
    'Estimulação natural da eliminação de toxinas',
    'Sensação imediata de leveza e bem‑estar',
    'Promoção da oxigenação e revitalização dos tecidos',
    'Estimulação da produção de endorfinas e melhora do humor',
    'Aprimoramento da qualidade do sono e descanso profundo',
    'Resultados duradouros com protocolo domiciliar'
    ],
    process: [
      {
        title: 'Recepção e Avaliação Personalizada',
        description: 'Coletamos seu histórico, avaliamos níveis de tensão e pontos de gordura localizada para traçar metas de bem‑estar e contorno.'
      },
      {
        title: 'Preparação Sensorial',
        description: 'Ambientação com óleos essenciais, música suave e posicionamento confortável para potencializar o relaxamento antes de iniciar as técnicas modeladoras.'
      },
      {
        title: 'Técnicas Integradas de Toque',
        description: 'Aplicamos movimentos longos e fluidos, intercalados com manobras firmes, uso de ventosas e rolls, ajustando intensidade conforme seu feedback para máximo conforto e eficiência.'
      },
      {
        title: 'Protocolo Domiciliar',
        description: 'Fornecemos exercícios de automassagem, alongamentos, orientações de hidratação e plano alimentar leve para prolongar os efeitos e consolidar resultados.'
      }
    ]
  }
};

