import { ScrollView, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { useMamacareData } from "@/hooks/use-mamacare-data";
import { useColors } from "@/hooks/use-colors";
import { SimpleChart } from "@/components/simple-chart";
import { useEffect, useState } from "react";

interface WeeklyData {
  week: number;
  exercisesCompleted: number;
  moodAverage: number;
  weight: number | null;
}

export default function ProgressScreen() {
  const colors = useColors();
  const { exerciseLogs, moodEntries, weightLogs } = useMamacareData();
  const [weeklyData, setWeeklyData] = useState<WeeklyData[]>([]);

  // Calcular dados semanais
  useEffect(() => {
    const weeks: WeeklyData[] = [];

    // Últimas 4 semanas
    for (let i = 3; i >= 0; i--) {
      const weekStart = new Date();
      weekStart.setDate(weekStart.getDate() - (i * 7 + 7));
      const weekEnd = new Date();
      weekEnd.setDate(weekEnd.getDate() - (i * 7));

      const weekStartStr = weekStart.toISOString().split("T")[0];
      const weekEndStr = weekEnd.toISOString().split("T")[0];

      // Exercícios completados na semana
      const exercisesInWeek = exerciseLogs.filter(
        (log) =>
          log.date >= weekStartStr &&
          log.date <= weekEndStr &&
          log.completed
      ).length;

      // Humor médio da semana
      const moodsInWeek = moodEntries.filter(
        (entry) =>
          entry.date >= weekStartStr &&
          entry.date <= weekEndStr
      );
      const moodAverage =
        moodsInWeek.length > 0
          ? moodsInWeek.reduce((sum, m) => sum + m.level, 0) /
            moodsInWeek.length
          : 0;

      // Peso mais recente da semana
      const weightInWeek = weightLogs.find(
        (log) =>
          log.date >= weekStartStr &&
          log.date <= weekEndStr
      );

      weeks.push({
        week: i + 1,
        exercisesCompleted: exercisesInWeek,
        moodAverage: Math.round(moodAverage * 10) / 10,
        weight: weightInWeek?.weight || null,
      });
    }

    setWeeklyData(weeks);
  }, [exerciseLogs, moodEntries, weightLogs]);

  // Preparar dados para gráficos
  const exerciseChartData = weeklyData.map((w) => ({
    label: `Sem ${w.week}`,
    value: w.exercisesCompleted,
  }));

  const moodChartData = weeklyData.map((w) => ({
    label: `Sem ${w.week}`,
    value: w.moodAverage,
    maxValue: 5,
  }));

  const weightChartData = weeklyData
    .filter((w) => w.weight !== null)
    .map((w) => ({
      label: `Sem ${w.week}`,
      value: w.weight || 0,
    }));

  // Calcular estatísticas
  const totalExercises = weeklyData.reduce(
    (sum, w) => sum + w.exercisesCompleted,
    0
  );
  const averageMood =
    weeklyData.reduce((sum, w) => sum + w.moodAverage, 0) / weeklyData.length;
  const latestWeight = weightLogs[weightLogs.length - 1];
  const firstWeightInData = weightLogs.find((log) =>
    log.date.startsWith(
      new Date()
        .toISOString()
        .substring(0, 7)
    )
  );

  const moodEmojis = {
    1: "😢",
    2: "😟",
    3: "😐",
    4: "🙂",
    5: "😊",
  };

  return (
    <ScreenContainer className="p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="gap-4">
          {/* Título */}
          <View>
            <Text className="text-2xl font-bold text-foreground">
              Progresso
            </Text>
            <Text className="text-sm text-muted">
              Visualize sua evolução nas últimas 4 semanas
            </Text>
          </View>

          {/* Cartões de Resumo */}
          <View className="gap-2">
            <View
              className="rounded-2xl p-4 gap-2"
              style={{ backgroundColor: colors.surface }}
            >
              <Text className="text-xs font-semibold text-muted uppercase">
                Total de Exercícios
              </Text>
              <View className="flex-row items-baseline gap-2">
                <Text className="text-3xl font-bold text-foreground">
                  {totalExercises}
                </Text>
                <Text className="text-sm text-muted">
                  nas últimas 4 semanas
                </Text>
              </View>
            </View>

            <View
              className="rounded-2xl p-4 gap-2"
              style={{ backgroundColor: colors.surface }}
            >
              <Text className="text-xs font-semibold text-muted uppercase">
                Bem-Estar Médio
              </Text>
              <View className="flex-row items-center gap-3">
                <Text className="text-3xl">
                  {moodEmojis[Math.round(averageMood) as keyof typeof moodEmojis]}
                </Text>
                <View>
                  <Text className="text-lg font-bold text-foreground">
                    {averageMood.toFixed(1)}
                  </Text>
                  <Text className="text-xs text-muted">de 5</Text>
                </View>
              </View>
            </View>

            {latestWeight && (
              <View
                className="rounded-2xl p-4 gap-2"
                style={{ backgroundColor: colors.surface }}
              >
                <Text className="text-xs font-semibold text-muted uppercase">
                  Peso Atual
                </Text>
                <View className="flex-row items-baseline gap-2">
                  <Text className="text-3xl font-bold text-foreground">
                    {latestWeight.weight}
                  </Text>
                  <Text className="text-sm text-muted">kg</Text>
                </View>
                <Text className="text-xs text-muted">
                  Última atualização:{" "}
                  {new Date(latestWeight.date).toLocaleDateString("pt-BR")}
                </Text>
              </View>
            )}
          </View>

          {/* Gráficos */}
          <View className="gap-4">
            <SimpleChart
              title="Exercícios Completados por Semana"
              data={exerciseChartData}
              type="bar"
            />

            <SimpleChart
              title="Bem-Estar Médio por Semana"
              data={moodChartData}
              type="bar"
            />

            {weightChartData.length > 0 && (
              <SimpleChart
                title="Evolução de Peso"
                data={weightChartData}
                type="line"
              />
            )}
          </View>

          {/* Dicas */}
          <View
            className="rounded-2xl p-4 gap-2 border-l-4"
            style={{
              backgroundColor: colors.surface,
              borderLeftColor: colors.success,
            }}
          >
            <Text className="text-xs font-semibold text-muted uppercase">
              💡 Dica
            </Text>
            <Text className="text-sm text-foreground leading-relaxed">
              Você está fazendo um ótimo trabalho! Continue registrando seus
              exercícios, alimentos e humor para acompanhar melhor seu progresso
              de recuperação.
            </Text>
          </View>

          {/* Espaço para expansão */}
          <View className="h-4" />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
