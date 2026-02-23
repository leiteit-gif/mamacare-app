import { ScrollView, Text, View, Pressable } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { useMamacareData } from "@/hooks/use-mamacare-data";
import { useColors } from "@/hooks/use-colors";
import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";

export default function HomeScreen() {
  const colors = useColors();

  const { userProfile, getTodayExercises, getTodayCalories, getTodayMood } =
    useMamacareData();
  const [postpartumWeek, setPostpartumWeek] = useState(1);

  // Calcular semana de pós-parto
  useEffect(() => {
    if (userProfile?.deliveryDate) {
      const deliveryDate = new Date(userProfile.deliveryDate);
      const today = new Date();
      const weeksPassed = Math.floor(
        (today.getTime() - deliveryDate.getTime()) / (7 * 24 * 60 * 60 * 1000)
      );
      setPostpartumWeek(Math.max(1, weeksPassed + 1));
    }
  }, [userProfile]);

  const todayExercises = getTodayExercises();
  const todayCalories = getTodayCalories();
  const todayMood = getTodayMood();

  const getPhaseInfo = (week: number) => {
    if (week <= 2) return { name: "Recuperação Imediata", phase: "week1-2" };
    if (week <= 4) return { name: "Transição", phase: "week3-4" };
    if (week <= 8) return { name: "Fortalecimento", phase: "week5-8" };
    if (week <= 12) return { name: "Intensidade Moderada", phase: "week9-12" };
    return { name: "Manutenção e Progressão", phase: "post12" };
  };

  const phaseInfo = getPhaseInfo(postpartumWeek);
  const moodEmoji = {
    1: "😢",
    2: "😟",
    3: "😐",
    4: "🙂",
    5: "😊",
  };

  return (
    <ScreenContainer className="p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="gap-6">
          {/* Saudação */}
          <View className="gap-2">
            <Text className="text-3xl font-bold" style={{ color: colors.primary }}>
              Olá, {userProfile?.name || "Mamãe"}!
            </Text>
            <Text className="text-sm text-muted">
              Você está no dia {postpartumWeek * 7} do pós-parto
            </Text>
          </View>

          {/* Card de Fase Atual */}
          <View
            className="rounded-2xl p-4 gap-2"
            style={{ backgroundColor: colors.surface }}
          >
            <Text className="text-xs font-semibold text-muted uppercase">
              Fase Atual
            </Text>
            <Text className="text-lg font-bold text-foreground">
              {phaseInfo.name}
            </Text>
            <Text className="text-sm text-muted">
              Semana {postpartumWeek} do pós-parto
            </Text>
          </View>

          {/* Cards Principais */}
          <View className="gap-3">
            {/* Card Exercícios */}
            <Pressable
              onPress={() => {
                // Navegar para aba de exercícios
              }}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <View
                className="rounded-2xl p-4 gap-2"
                style={{ backgroundColor: colors.surface }}
              >
                <Text className="text-xs font-semibold text-muted uppercase">
                  Exercícios
                </Text>
                <View className="flex-row items-baseline gap-2">
                  <Text className="text-2xl font-bold text-foreground">
                    {todayExercises.length}
                  </Text>
                  <Text className="text-sm text-muted">
                    completados hoje
                  </Text>
                </View>
                <Text className="text-xs text-muted">
                  Toque para ver próximos exercícios
                </Text>
              </View>
            </Pressable>

            {/* Card Nutrição */}
            <Pressable
              onPress={() => {
                // Navegar para aba de nutrição
              }}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <View
                className="rounded-2xl p-4 gap-2"
                style={{ backgroundColor: colors.surface }}
              >
                <Text className="text-xs font-semibold text-muted uppercase">
                  Nutrição
                </Text>
                <View className="flex-row items-baseline gap-2">
                  <Text className="text-2xl font-bold text-foreground">
                    {todayCalories}
                  </Text>
                  <Text className="text-sm text-muted">
                    / 1800 kcal
                  </Text>
                </View>
                <View className="h-2 bg-border rounded-full overflow-hidden">
                  <View
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.min((todayCalories / 1800) * 100, 100)}%`,
                      backgroundColor: colors.primary,
                    }}
                  />
                </View>
              </View>
            </Pressable>

            {/* Card Bem-Estar */}
            <Pressable
              onPress={() => {
                // Navegar para aba de bem-estar
              }}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <View
                className="rounded-2xl p-4 gap-2"
                style={{ backgroundColor: colors.surface }}
              >
                <Text className="text-xs font-semibold text-muted uppercase">
                  Bem-Estar
                </Text>
                <View className="flex-row items-center gap-3">
                  <Text className="text-4xl">
                    {todayMood
                      ? moodEmoji[todayMood.level as keyof typeof moodEmoji]
                      : "😐"}
                  </Text>
                  <View className="flex-1">
                    <Text className="text-sm text-muted">
                      {todayMood
                        ? "Humor registrado hoje"
                        : "Registre seu humor"}
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          </View>

          {/* Dica do Dia */}
          <View
            className="rounded-2xl p-4 gap-2 border-l-4"
            style={{
              backgroundColor: colors.surface,
              borderLeftColor: colors.warning,
            }}
          >
            <Text className="text-xs font-semibold text-muted uppercase">
              💡 Dica do Dia
            </Text>
            <Text className="text-sm text-foreground leading-relaxed">
              Lembre-se de beber bastante água durante o dia. A hidratação é
              essencial para recuperação e produção de leite materno.
            </Text>
          </View>

          {/* Espaço para expansão */}
          <View className="h-4" />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
