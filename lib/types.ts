/**
 * Tipos e interfaces para o aplicativo MamaCare
 */

// ===== Exercícios =====
export type ExercisePhase = "week1-2" | "week3-4" | "week5-8" | "week9-12" | "post12";

export interface Exercise {
  id: string;
  name: string;
  phase: ExercisePhase;
  duration: number; // em minutos
  description: string;
  instructions: string[];
  benefits: string[];
  safetyWarnings: string[];
  imageUrl?: string;
}

export interface ExerciseLog {
  id: string;
  exerciseId: string;
  date: string; // ISO date string
  completed: boolean;
  notes?: string;
}

// ===== Nutrição =====
export interface Food {
  id: string;
  name: string;
  calories: number;
  protein: number; // gramas
  carbs: number; // gramas
  fat: number; // gramas
  iron?: number; // mg
  calcium?: number; // mg
  omega3?: number; // mg
  vitaminD?: number; // IU
  benefits: string; // descrição do benefício pós-parto
  imageUrl?: string;
  isRecommended: boolean; // destaque como alimento recomendado
}

export interface FoodLog {
  id: string;
  foodId: string;
  date: string; // ISO date string
  quantity: number; // porções
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

// ===== Bem-Estar Emocional =====
export type MoodLevel = 1 | 2 | 3 | 4 | 5; // 1 = muito triste, 5 = muito feliz

export interface MoodEntry {
  id: string;
  date: string; // ISO date string
  level: MoodLevel;
  reason?: string;
}

export interface DiaryEntry {
  id: string;
  date: string; // ISO date string
  content: string;
  tags: string[];
  mood?: MoodLevel;
}

// ===== Progresso =====
export interface WeightLog {
  id: string;
  date: string; // ISO date string
  weight: number; // kg
}

export interface UserProfile {
  id: string;
  name: string;
  birthDate: string; // ISO date string
  deliveryDate: string; // ISO date string
  deliveryType: "vaginal" | "cesarean";
  targetCalories: number;
  targetWeight: number;
  currentWeight: number;
  createdAt: string;
  updatedAt: string;
}

// ===== Estatísticas =====
export interface WeeklyStats {
  week: number;
  exercisesCompleted: number;
  exercisesPlanned: number;
  averageMood: number;
  weightChange: number; // kg
  caloriesAverageDailyIntake: number;
}

export interface DailyStats {
  date: string;
  exercisesCompleted: number;
  caloriesConsumed: number;
  mood: MoodLevel | null;
  weight: number | null;
}
