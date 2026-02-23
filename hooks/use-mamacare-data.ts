import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ExerciseLog,
  FoodLog,
  MoodEntry,
  DiaryEntry,
  WeightLog,
  UserProfile,
} from "@/lib/types";

const STORAGE_KEYS = {
  USER_PROFILE: "mamacare_user_profile",
  EXERCISE_LOGS: "mamacare_exercise_logs",
  FOOD_LOGS: "mamacare_food_logs",
  MOOD_ENTRIES: "mamacare_mood_entries",
  DIARY_ENTRIES: "mamacare_diary_entries",
  WEIGHT_LOGS: "mamacare_weight_logs",
};

export function useMamacareData() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [exerciseLogs, setExerciseLogs] = useState<ExerciseLog[]>([]);
  const [foodLogs, setFoodLogs] = useState<FoodLog[]>([]);
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const [weightLogs, setWeightLogs] = useState<WeightLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Carregar dados do AsyncStorage
  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      setIsLoading(true);
      const [profile, exercises, foods, moods, diaries, weights] =
        await Promise.all([
          AsyncStorage.getItem(STORAGE_KEYS.USER_PROFILE),
          AsyncStorage.getItem(STORAGE_KEYS.EXERCISE_LOGS),
          AsyncStorage.getItem(STORAGE_KEYS.FOOD_LOGS),
          AsyncStorage.getItem(STORAGE_KEYS.MOOD_ENTRIES),
          AsyncStorage.getItem(STORAGE_KEYS.DIARY_ENTRIES),
          AsyncStorage.getItem(STORAGE_KEYS.WEIGHT_LOGS),
        ]);

      if (profile) setUserProfile(JSON.parse(profile));
      if (exercises) setExerciseLogs(JSON.parse(exercises));
      if (foods) setFoodLogs(JSON.parse(foods));
      if (moods) setMoodEntries(JSON.parse(moods));
      if (diaries) setDiaryEntries(JSON.parse(diaries));
      if (weights) setWeightLogs(JSON.parse(weights));
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Salvar perfil do usuário
  const saveUserProfile = async (profile: UserProfile) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.USER_PROFILE,
        JSON.stringify(profile)
      );
      setUserProfile(profile);
    } catch (error) {
      console.error("Erro ao salvar perfil:", error);
    }
  };

  // Adicionar log de exercício
  const addExerciseLog = async (log: ExerciseLog) => {
    try {
      const updated = [...exerciseLogs, log];
      await AsyncStorage.setItem(
        STORAGE_KEYS.EXERCISE_LOGS,
        JSON.stringify(updated)
      );
      setExerciseLogs(updated);
    } catch (error) {
      console.error("Erro ao adicionar exercício:", error);
    }
  };

  // Adicionar log de alimento
  const addFoodLog = async (log: FoodLog) => {
    try {
      const updated = [...foodLogs, log];
      await AsyncStorage.setItem(
        STORAGE_KEYS.FOOD_LOGS,
        JSON.stringify(updated)
      );
      setFoodLogs(updated);
    } catch (error) {
      console.error("Erro ao adicionar alimento:", error);
    }
  };

  // Adicionar entrada de humor
  const addMoodEntry = async (entry: MoodEntry) => {
    try {
      const updated = [...moodEntries, entry];
      await AsyncStorage.setItem(
        STORAGE_KEYS.MOOD_ENTRIES,
        JSON.stringify(updated)
      );
      setMoodEntries(updated);
    } catch (error) {
      console.error("Erro ao adicionar humor:", error);
    }
  };

  // Adicionar entrada do diário
  const addDiaryEntry = async (entry: DiaryEntry) => {
    try {
      const updated = [...diaryEntries, entry];
      await AsyncStorage.setItem(
        STORAGE_KEYS.DIARY_ENTRIES,
        JSON.stringify(updated)
      );
      setDiaryEntries(updated);
    } catch (error) {
      console.error("Erro ao adicionar entrada do diário:", error);
    }
  };

  // Adicionar log de peso
  const addWeightLog = async (log: WeightLog) => {
    try {
      const updated = [...weightLogs, log];
      await AsyncStorage.setItem(
        STORAGE_KEYS.WEIGHT_LOGS,
        JSON.stringify(updated)
      );
      setWeightLogs(updated);
    } catch (error) {
      console.error("Erro ao adicionar peso:", error);
    }
  };

  // Obter exercícios completados hoje
  const getTodayExercises = () => {
    const today = new Date().toISOString().split("T")[0];
    return exerciseLogs.filter((log) => log.date === today && log.completed);
  };

  // Obter calorias consumidas hoje
  const getTodayCalories = () => {
    const today = new Date().toISOString().split("T")[0];
    return foodLogs
      .filter((log) => log.date === today)
      .reduce((total, log) => total + log.calories, 0);
  };

  // Obter humor de hoje
  const getTodayMood = () => {
    const today = new Date().toISOString().split("T")[0];
    return moodEntries.find((entry) => entry.date === today);
  };

  // Obter peso mais recente
  const getLatestWeight = () => {
    if (weightLogs.length === 0) return null;
    return weightLogs[weightLogs.length - 1];
  };

  // Obter entradas do diário da última semana
  const getRecentDiaryEntries = (days: number = 7) => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    return diaryEntries.filter((entry) => new Date(entry.date) >= cutoffDate);
  };

  return {
    // Estado
    userProfile,
    exerciseLogs,
    foodLogs,
    moodEntries,
    diaryEntries,
    weightLogs,
    isLoading,

    // Funções de salvamento
    saveUserProfile,
    addExerciseLog,
    addFoodLog,
    addMoodEntry,
    addDiaryEntry,
    addWeightLog,

    // Funções de consulta
    getTodayExercises,
    getTodayCalories,
    getTodayMood,
    getLatestWeight,
    getRecentDiaryEntries,

    // Recarregar dados
    loadAllData,
  };
}
