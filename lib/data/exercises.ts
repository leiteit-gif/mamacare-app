import { Exercise } from "@/lib/types";

export const exercises: Exercise[] = [
  // Semana 1-2: Recuperação Imediata
  {
    id: "ex-001",
    name: "Respiração Diafragmática",
    phase: "week1-2",
    duration: 5,
    description: "Exercício suave de respiração para ativar o core profundo e reduzir tensão.",
    instructions: [
      "Sente-se ou deite-se confortavelmente",
      "Coloque uma mão no peito e outra na barriga",
      "Inspire lentamente pelo nariz, deixando a barriga expandir",
      "Expire lentamente pela boca",
      "Repita 10 vezes, 2-3 vezes ao dia",
    ],
    benefits: [
      "Ativa o core profundo sem esforço",
      "Reduz tensão e ansiedade",
      "Melhora a circulação",
      "Prepara o corpo para exercícios mais intensos",
    ],
    safetyWarnings: [
      "Evite se sentir tonta ou com falta de ar",
      "Não force a respiração",
      "Interrompa se sentir dor abdominal",
    ],
  },
  {
    id: "ex-002",
    name: "Alongamento Suave do Pescoço",
    phase: "week1-2",
    duration: 3,
    description: "Alongamento leve para aliviar tensão no pescoço e ombros.",
    instructions: [
      "Sente-se com a coluna reta",
      "Incline a cabeça lentamente para o lado direito",
      "Mantenha por 15-20 segundos",
      "Retorne ao centro",
      "Repita do lado esquerdo",
      "Faça 3 repetições de cada lado",
    ],
    benefits: [
      "Alivia tensão no pescoço e ombros",
      "Melhora a postura",
      "Reduz dores causadas pela amamentação",
    ],
    safetyWarnings: [
      "Não faça movimentos bruscos",
      "Evite rotações completas do pescoço",
      "Pare se sentir dor ou tontura",
    ],
  },
  {
    id: "ex-003",
    name: "Contração do Assoalho Pélvico",
    phase: "week1-2",
    duration: 5,
    description: "Exercício de Kegel para fortalecer o assoalho pélvico.",
    instructions: [
      "Sente-se ou deite-se confortavelmente",
      "Contraia os músculos do assoalho pélvico (como se interrompesse o fluxo de urina)",
      "Mantenha a contração por 3-5 segundos",
      "Relaxe completamente por 5 segundos",
      "Repita 10 vezes, 2-3 vezes ao dia",
    ],
    benefits: [
      "Fortalece o assoalho pélvico",
      "Melhora o controle urinário",
      "Prepara para exercícios mais intensos",
      "Melhora a função sexual",
    ],
    safetyWarnings: [
      "Não contraia os glúteos ou coxas",
      "Não prenda a respiração",
      "Se sentir dor, interrompa e consulte um profissional",
    ],
  },
  {
    id: "ex-004",
    name: "Caminhada Leve",
    phase: "week1-2",
    duration: 10,
    description: "Caminhada suave para começar a recuperar a mobilidade.",
    instructions: [
      "Caminhe em um local seguro e plano",
      "Mantenha um ritmo lento e confortável",
      "Respire profundamente durante a caminhada",
      "Caminhe por 10-15 minutos",
      "Faça 3-4 vezes por semana",
    ],
    benefits: [
      "Melhora a circulação",
      "Aumenta a energia",
      "Reduz o risco de coágulos sanguíneos",
      "Melhora o humor",
    ],
    safetyWarnings: [
      "Evite caminhar se tiver sangramento intenso",
      "Pare se sentir tontura ou dor abdominal",
      "Use sapatos confortáveis e de suporte",
    ],
  },

  // Semana 3-4: Transição
  {
    id: "ex-005",
    name: "Marcha no Lugar",
    phase: "week3-4",
    duration: 5,
    description: "Exercício de baixo impacto para aumentar a frequência cardíaca.",
    instructions: [
      "Fique em pé com os pés afastados na largura dos ombros",
      "Levante um joelho enquanto baixa o braço oposto",
      "Alterne os lados em um ritmo confortável",
      "Mantenha por 5 minutos",
      "Faça 3-4 vezes por semana",
    ],
    benefits: [
      "Aumenta a frequência cardíaca de forma segura",
      "Melhora a resistência cardiovascular",
      "Baixo impacto nas articulações",
    ],
    safetyWarnings: [
      "Mantenha o core contraído",
      "Não force o ritmo",
      "Pare se sentir dor ou tontura",
    ],
  },
  {
    id: "ex-006",
    name: "Agachamento Assistido",
    phase: "week3-4",
    duration: 8,
    description: "Agachamento leve com apoio para fortalecer as pernas.",
    instructions: [
      "Fique em pé de frente para uma cadeira ou bancada",
      "Coloque as mãos no apoio",
      "Abaixe lentamente como se fosse sentar",
      "Mantenha por 2-3 segundos",
      "Levante-se lentamente",
      "Repita 10-12 vezes, 2-3 vezes por semana",
    ],
    benefits: [
      "Fortalece as pernas e glúteos",
      "Melhora o equilíbrio",
      "Prepara para atividades diárias",
    ],
    safetyWarnings: [
      "Não desça muito fundo",
      "Mantenha o core contraído",
      "Se tiver dor nos joelhos, reduza a profundidade",
    ],
  },

  // Semana 5-8: Fortalecimento
  {
    id: "ex-007",
    name: "Flexão de Braço Modificada",
    phase: "week5-8",
    duration: 8,
    description: "Flexão de braço com apoio para fortalecer o tórax e braços.",
    instructions: [
      "Coloque as mãos em uma parede na altura do ombro",
      "Afaste os pés cerca de 30cm da parede",
      "Dobre os cotovelos lentamente, aproximando o corpo da parede",
      "Estenda os braços para voltar à posição inicial",
      "Repita 10-12 vezes, 2-3 vezes por semana",
    ],
    benefits: [
      "Fortalece o tórax, ombros e braços",
      "Melhora a postura",
      "Aumenta a força para carregar o bebê",
    ],
    safetyWarnings: [
      "Não force o movimento",
      "Mantenha o core contraído",
      "Pare se sentir dor no peito ou ombro",
    ],
  },
  {
    id: "ex-008",
    name: "Ponte de Glúteos",
    phase: "week5-8",
    duration: 10,
    description: "Exercício para fortalecer os glúteos e o core.",
    instructions: [
      "Deite-se de costas com os joelhos dobrados",
      "Coloque os pés apoiados no chão, afastados na largura dos ombros",
      "Levante os quadris em direção ao teto",
      "Mantenha por 2-3 segundos",
      "Abaixe lentamente",
      "Repita 12-15 vezes, 2-3 vezes por semana",
    ],
    benefits: [
      "Fortalece os glúteos e o core",
      "Melhora a postura",
      "Reduz dor nas costas",
    ],
    safetyWarnings: [
      "Não levante muito alto",
      "Mantenha os pés no chão",
      "Pare se sentir dor nas costas ou quadris",
    ],
  },

  // Semana 9-12: Intensidade Moderada
  {
    id: "ex-009",
    name: "Agachamento Livre",
    phase: "week9-12",
    duration: 10,
    description: "Agachamento sem apoio para fortalecer as pernas.",
    instructions: [
      "Fique em pé com os pés afastados na largura dos ombros",
      "Abaixe lentamente como se fosse sentar em uma cadeira",
      "Mantenha por 2-3 segundos",
      "Levante-se lentamente",
      "Repita 12-15 vezes, 3-4 vezes por semana",
    ],
    benefits: [
      "Fortalece as pernas, glúteos e core",
      "Melhora o equilíbrio e a estabilidade",
      "Prepara para atividades mais intensas",
    ],
    safetyWarnings: [
      "Mantenha o core contraído",
      "Não deixe os joelhos ultrapassarem os dedos dos pés",
      "Pare se sentir dor",
    ],
  },
  {
    id: "ex-010",
    name: "Prancha Modificada",
    phase: "week9-12",
    duration: 8,
    description: "Exercício de core com apoio nos joelhos.",
    instructions: [
      "Coloque-se em posição de prancha com os joelhos apoiados",
      "Mantenha o corpo em linha reta",
      "Contraia o core e mantenha por 15-30 segundos",
      "Descanse e repita 3-4 vezes",
      "Faça 2-3 vezes por semana",
    ],
    benefits: [
      "Fortalece o core profundo",
      "Melhora a postura",
      "Aumenta a resistência",
    ],
    safetyWarnings: [
      "Não deixe os quadris caírem",
      "Respire normalmente",
      "Pare se sentir dor nas costas",
    ],
  },

  // Pós-12 semanas: Manutenção e Progressão
  {
    id: "ex-011",
    name: "Corrida Leve",
    phase: "post12",
    duration: 15,
    description: "Corrida leve para melhorar a resistência cardiovascular.",
    instructions: [
      "Comece com uma caminhada rápida",
      "Aumente gradualmente para uma corrida leve",
      "Mantenha um ritmo confortável",
      "Corra por 15-20 minutos",
      "Faça 3-4 vezes por semana",
    ],
    benefits: [
      "Melhora a resistência cardiovascular",
      "Aumenta a queima de calorias",
      "Melhora o humor e reduz o estresse",
    ],
    safetyWarnings: [
      "Use sapatos de corrida apropriados",
      "Aqueça antes de correr",
      "Pare se sentir dor nas articulações",
    ],
  },
  {
    id: "ex-012",
    name: "Flexão de Braço Completa",
    phase: "post12",
    duration: 10,
    description: "Flexão de braço tradicional para máximo fortalecimento.",
    instructions: [
      "Coloque-se em posição de prancha com os pés juntos",
      "Dobre os cotovelos lentamente",
      "Desça até quase tocar o chão",
      "Levante-se até a posição inicial",
      "Repita 10-15 vezes, 3-4 vezes por semana",
    ],
    benefits: [
      "Fortalece o tórax, ombros, braços e core",
      "Aumenta a força funcional",
      "Melhora a resistência",
    ],
    safetyWarnings: [
      "Mantenha o core contraído",
      "Não deixe os quadris caírem",
      "Pare se sentir dor",
    ],
  },
];
