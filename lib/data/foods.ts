import { Food } from "@/lib/types";

export const foods: Food[] = [
  // Alimentos ricos em ferro (importante para recuperação de anemia pós-parto)
  {
    id: "food-001",
    name: "Carne Vermelha Magra",
    calories: 180,
    protein: 26,
    carbs: 0,
    fat: 8,
    iron: 2.6,
    benefits:
      "Excelente fonte de ferro heme, essencial para recuperação de anemia pós-parto. Também fornece proteína para cicatrização.",
    isRecommended: true,
  },
  {
    id: "food-002",
    name: "Frango",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    iron: 0.8,
    benefits:
      "Proteína magra de alta qualidade para reconstrução muscular. Suporta a produção de leite materno.",
    isRecommended: true,
  },
  {
    id: "food-003",
    name: "Ovos",
    calories: 155,
    protein: 13,
    carbs: 1.1,
    fat: 11,
    iron: 1.8,
    benefits:
      "Proteína completa com colina, importante para desenvolvimento cerebral do bebê. Ferro biodisponível.",
    isRecommended: true,
  },
  {
    id: "food-004",
    name: "Espinafre Cozido",
    calories: 23,
    protein: 2.7,
    carbs: 3.6,
    fat: 0.4,
    iron: 6.4,
    calcium: 136,
    benefits:
      "Ferro não-heme com vitamina C para melhor absorção. Cálcio para saúde óssea. Folato para recuperação.",
    isRecommended: true,
  },

  // Alimentos ricos em cálcio
  {
    id: "food-005",
    name: "Iogurte Grego",
    calories: 100,
    protein: 17,
    carbs: 3.6,
    fat: 0.4,
    calcium: 190,
    benefits:
      "Cálcio para saúde óssea e produção de leite. Probióticos para saúde digestiva. Proteína para recuperação.",
    isRecommended: true,
  },
  {
    id: "food-006",
    name: "Queijo Branco",
    calories: 98,
    protein: 11,
    carbs: 3.6,
    fat: 5,
    calcium: 200,
    benefits:
      "Cálcio biodisponível para ossos e dentes. Proteína para cicatrização e produção de leite.",
    isRecommended: true,
  },
  {
    id: "food-007",
    name: "Leite Integral",
    calories: 61,
    protein: 3.2,
    carbs: 4.8,
    fat: 3.3,
    calcium: 113,
    vitaminD: 52,
    benefits:
      "Cálcio e vitamina D para absorção de cálcio. Proteína para produção de leite materno.",
    isRecommended: true,
  },
  {
    id: "food-008",
    name: "Brócolis",
    calories: 34,
    protein: 2.8,
    carbs: 7,
    fat: 0.4,
    calcium: 47,
    iron: 0.7,
    benefits:
      "Cálcio e ferro para recuperação. Vitamina C para absorção de ferro e cicatrização.",
    isRecommended: true,
  },

  // Alimentos ricos em ômega-3
  {
    id: "food-009",
    name: "Salmão",
    calories: 206,
    protein: 22,
    carbs: 0,
    fat: 13,
    omega3: 2260,
    vitaminD: 570,
    benefits:
      "Ômega-3 para saúde cerebral do bebê e redução de depressão pós-parto. Vitamina D para imunidade.",
    isRecommended: true,
  },
  {
    id: "food-010",
    name: "Sardinha",
    calories: 208,
    protein: 25,
    carbs: 0,
    fat: 11,
    omega3: 1480,
    calcium: 382,
    benefits:
      "Ômega-3 e cálcio em uma porção. Excelente para saúde do bebê e recuperação materna.",
    isRecommended: true,
  },
  {
    id: "food-011",
    name: "Sementes de Linhaça",
    calories: 534,
    protein: 18,
    carbs: 29,
    fat: 42,
    omega3: 22813,
    benefits:
      "Ômega-3 vegetal para saúde cerebral. Fibra para saúde digestiva. Adicione a smoothies ou cereais.",
    isRecommended: true,
  },
  {
    id: "food-012",
    name: "Nozes",
    calories: 654,
    protein: 9,
    carbs: 14,
    fat: 65,
    omega3: 9079,
    benefits:
      "Ômega-3 vegetal e antioxidantes. Porção pequena fornece muitos nutrientes. Ótimo para lanches.",
    isRecommended: true,
  },

  // Alimentos ricos em vitamina D
  {
    id: "food-013",
    name: "Gema de Ovo",
    calories: 55,
    protein: 2.7,
    carbs: 0.6,
    fat: 4.5,
    vitaminD: 37,
    iron: 0.9,
    benefits:
      "Vitamina D para absorção de cálcio. Colina para desenvolvimento cerebral do bebê.",
    isRecommended: true,
  },

  // Alimentos ricos em folato
  {
    id: "food-014",
    name: "Abacate",
    calories: 160,
    protein: 2,
    carbs: 9,
    fat: 15,
    benefits:
      "Folato para recuperação e saúde do bebê. Gorduras saudáveis para saciedade e energia.",
    isRecommended: true,
  },
  {
    id: "food-015",
    name: "Feijão Preto",
    calories: 132,
    protein: 8.9,
    carbs: 24,
    fat: 0.5,
    iron: 2.1,
    benefits:
      "Proteína vegetal, ferro e folato. Fibra para saúde digestiva. Ótimo para refeições satisfatórias.",
    isRecommended: true,
  },

  // Alimentos para energia e recuperação
  {
    id: "food-016",
    name: "Banana",
    calories: 89,
    protein: 1.1,
    carbs: 23,
    fat: 0.3,
    benefits:
      "Carboidratos para energia. Potássio para equilíbrio de fluidos. Ótimo para lanches rápidos.",
    isRecommended: true,
  },
  {
    id: "food-017",
    name: "Aveia",
    calories: 389,
    protein: 17,
    carbs: 66,
    fat: 7,
    benefits:
      "Carboidratos complexos para energia sustentada. Fibra para saúde digestiva. Pode aumentar produção de leite.",
    isRecommended: true,
  },
  {
    id: "food-018",
    name: "Batata-doce",
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fat: 0.1,
    benefits:
      "Carboidratos complexos e vitamina A. Energia para atividades diárias e produção de leite.",
    isRecommended: true,
  },

  // Alimentos para hidratação e nutrientes
  {
    id: "food-019",
    name: "Melancia",
    calories: 30,
    protein: 0.6,
    carbs: 7.6,
    fat: 0.2,
    benefits:
      "Hidratação e eletrólitos. Vitamina C para cicatrização. Baixas calorias para refeições leves.",
    isRecommended: false,
  },
  {
    id: "food-020",
    name: "Maçã",
    calories: 52,
    protein: 0.3,
    carbs: 14,
    fat: 0.2,
    benefits:
      "Fibra para saúde digestiva. Vitamina C para imunidade. Ótima para lanches rápidos.",
    isRecommended: false,
  },

  // Alimentos adicionais
  {
    id: "food-021",
    name: "Arroz Integral",
    calories: 111,
    protein: 2.6,
    carbs: 23,
    fat: 0.9,
    benefits:
      "Carboidratos complexos para energia. Fibra para saúde digestiva. Base para refeições balanceadas.",
    isRecommended: false,
  },
  {
    id: "food-022",
    name: "Cenoura",
    calories: 41,
    protein: 0.9,
    carbs: 10,
    fat: 0.2,
    benefits:
      "Vitamina A para visão e imunidade. Fibra para saúde digestiva. Ótima para lanches crocantes.",
    isRecommended: false,
  },
  {
    id: "food-023",
    name: "Frango com Batata",
    calories: 165,
    protein: 26,
    carbs: 8,
    fat: 3,
    benefits:
      "Proteína e carboidratos para recuperação e energia. Refeição balanceada e satisfatória.",
    isRecommended: false,
  },
  {
    id: "food-024",
    name: "Sopa de Caldo de Carne",
    calories: 50,
    protein: 8,
    carbs: 2,
    fat: 1,
    iron: 1.2,
    benefits:
      "Caldo rico em colágeno para cicatrização. Ferro para recuperação de anemia. Hidratação e nutrientes.",
    isRecommended: false,
  },
  {
    id: "food-025",
    name: "Abacate",
    calories: 160,
    protein: 2,
    carbs: 9,
    fat: 15,
    benefits:
      "Gorduras saudáveis para saúde do cérebro. Pode aumentar qualidade do leite materno.",
    isRecommended: true,
  },
  {
    id: "food-026",
    name: "Amoras",
    calories: 57,
    protein: 1.4,
    carbs: 12,
    fat: 0.5,
    benefits:
      "Antioxidantes para recuperação. Vitamina C para cicatrização. Fibra para saúde digestiva.",
    isRecommended: true,
  },
  {
    id: "food-027",
    name: "Cenoura Cozida",
    calories: 35,
    protein: 0.7,
    carbs: 8,
    fat: 0.2,
    benefits:
      "Vitamina A para saúde ocular. Fibra para saúde digestiva. Baixas calorias.",
    isRecommended: true,
  },
  {
    id: "food-028",
    name: "Brócolis Cozido",
    calories: 34,
    protein: 2.8,
    carbs: 7,
    fat: 0.4,
    calcium: 47,
    benefits:
      "Cálcio para saúde óssea. Vitamina C para cicatrização. Fibra para saúde digestiva.",
    isRecommended: true,
  },
  {
    id: "food-029",
    name: "Iogurte Grego",
    calories: 100,
    protein: 17,
    carbs: 7,
    fat: 0.4,
    calcium: 190,
    benefits:
      "Proteína para reconstruir músculos. Próbióticos para saúde digestiva. Cálcio para saúde óssea.",
    isRecommended: true,
  },
  {
    id: "food-030",
    name: "Queijo Branco",
    calories: 110,
    protein: 28,
    carbs: 1,
    fat: 0.4,
    calcium: 721,
    benefits:
      "Proteína de alta qualidade. Cálcio para saúde óssea e produção de leite.",
    isRecommended: true,
  },
  {
    id: "food-031",
    name: "Lentéja Cozida",
    calories: 116,
    protein: 9,
    carbs: 20,
    fat: 0.4,
    iron: 3.3,
    benefits:
      "Proteína vegetal e ferro para recuperação. Fibra para saúde digestiva. Carboidratos para energia.",
    isRecommended: true,
  },
  {
    id: "food-032",
    name: "Amendoim",
    calories: 567,
    protein: 26,
    carbs: 16,
    fat: 49,
    benefits:
      "Proteína e gorduras saudáveis. Energia concentrada para lanches. Pode aumentar produção de leite.",
    isRecommended: true,
  },
  {
    id: "food-033",
    name: "Alméndoas",
    calories: 579,
    protein: 21,
    carbs: 22,
    fat: 50,
    calcium: 264,
    benefits:
      "Gorduras saudáveis e proteína. Cálcio para saúde óssea. Energia para atividades do dia.",
    isRecommended: true,
  },
  {
    id: "food-034",
    name: "Melado",
    calories: 290,
    protein: 0,
    carbs: 75,
    fat: 0,
    iron: 3.2,
    benefits:
      "Ferro para recuperação de anemia. Carboidratos para energia. Minerais essenciais.",
    isRecommended: true,
  },
  {
    id: "food-035",
    name: "Mel",
    calories: 304,
    protein: 0.3,
    carbs: 82,
    fat: 0,
    benefits:
      "Energia rápida. Propriedades anti-inflamatórias. Pode ajudar na cicatrização.",
    isRecommended: false,
  },
  {
    id: "food-036",
    name: "Gua",
    calories: 60,
    protein: 0.9,
    carbs: 14,
    fat: 0.3,
    benefits:
      "Vitamina C para cicatrização. Fibra para saúde digestiva. Hidratante natural.",
    isRecommended: true,
  },
];
