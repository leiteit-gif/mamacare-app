import { ScrollView, Text, View, Pressable, FlatList } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { useMamacareData } from "@/hooks/use-mamacare-data";
import { useColors } from "@/hooks/use-colors";
import { exercises } from "@/lib/data/exercises";
import { ExercisePhase } from "@/lib/types";
import { useState } from "react";

export default function ExercisesScreen() {
  const colors = useColors();
  const { exerciseLogs, addExerciseLog } = useMamacareData();
  const [selectedPhase, setSelectedPhase] = useState<ExercisePhase>("week1-2");

  const phases: { id: ExercisePhase; label: string }[] = [
    { id: "week1-2", label: "Semana 1-2" },
    { id: "week3-4", label: "Semana 3-4" },
    { id: "week5-8", label: "Semana 5-8" },
    { id: "week9-12", label: "Semana 9-12" },
    { id: "post12", label: "Pós-12 sem" },
  ];

  const phaseExercises = exercises.filter((e) => e.phase === selectedPhase);

  const isExerciseCompleted = (exerciseId: string) => {
    const today = new Date().toISOString().split("T")[0];
    return exerciseLogs.some(
      (log) =>
        log.exerciseId === exerciseId &&
        log.date === today &&
        log.completed
    );
  };

  const handleCompleteExercise = async (exerciseId: string) => {
    const today = new Date().toISOString().split("T")[0];
    const newLog = {
      id: `log-${Date.now()}`,
      exerciseId,
      date: today,
      completed: true,
    };
    await addExerciseLog(newLog);
  };

  const completedCount = phaseExercises.filter((e) =>
    isExerciseCompleted(e.id)
  ).length;

  return (
    <ScreenContainer className="p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="gap-4">
          {/* Título */}
          <View>
            <Text className="text-2xl font-bold text-foreground">
              Exercícios
            </Text>
            <Text className="text-sm text-muted">
              Escolha a fase e comece a se exercitar
            </Text>
          </View>

          {/* Seletor de Fases */}
          <FlatList
            data={phases}
            horizontal
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ gap: 8 }}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => setSelectedPhase(item.id)}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                <View
                  className="px-4 py-2 rounded-full"
                  style={{
                    backgroundColor:
                      selectedPhase === item.id
                        ? colors.primary
                        : colors.surface,
                  }}
                >
                  <Text
                    className="text-sm font-semibold"
                    style={{
                      color:
                        selectedPhase === item.id
                          ? colors.background
                          : colors.foreground,
                    }}
                  >
                    {item.label}
                  </Text>
                </View>
              </Pressable>
            )}
          />

          {/* Progresso */}
          <View
            className="rounded-2xl p-4 gap-2"
            style={{ backgroundColor: colors.surface }}
          >
            <Text className="text-xs font-semibold text-muted uppercase">
              Progresso Hoje
            </Text>
            <View className="flex-row items-baseline gap-2">
              <Text className="text-2xl font-bold text-foreground">
                {completedCount}
              </Text>
              <Text className="text-sm text-muted">
                de {phaseExercises.length} exercícios
              </Text>
            </View>
            <View className="h-2 bg-border rounded-full overflow-hidden">
              <View
                className="h-full rounded-full"
                style={{
                  width: `${Math.min(
                    (completedCount / phaseExercises.length) * 100,
                    100
                  )}%`,
                  backgroundColor: colors.success,
                }}
              />
            </View>
          </View>

          {/* Lista de Exercícios */}
          <View className="gap-3">
            {phaseExercises.map((exercise) => {
              const isCompleted = isExerciseCompleted(exercise.id);
              return (
                <View
                  key={exercise.id}
                  className="rounded-2xl p-4 gap-2"
                  style={{ backgroundColor: colors.surface }}
                >
                  <View className="flex-row items-start justify-between gap-2">
                    <View className="flex-1 gap-1">
                      <Text className="text-base font-semibold text-foreground">
                        {exercise.name}
                      </Text>
                      <Text className="text-xs text-muted">
                        {exercise.duration} min • {exercise.instructions.length} passos
                      </Text>
                      <Text className="text-sm text-muted leading-relaxed mt-1">
                        {exercise.description}
                      </Text>
                    </View>
                    <Pressable
                      onPress={() => handleCompleteExercise(exercise.id)}
                      style={({ pressed }) => [
                        {
                          opacity: pressed ? 0.7 : 1,
                        },
                      ]}
                    >
                      <View
                        className="w-10 h-10 rounded-full items-center justify-center"
                        style={{
                          backgroundColor: isCompleted
                            ? colors.success
                            : colors.border,
                        }}
                      >
                        <Text
                          className="text-lg font-bold"
                          style={{
                            color: isCompleted
                              ? colors.background
                              : colors.muted,
                          }}
                        >
                          {isCompleted ? "✓" : "+"}
                        </Text>
                      </View>
                    </Pressable>
                  </View>

                  {/* Avisos de Segurança */}
                  {exercise.safetyWarnings.length > 0 && (
                    <View
                      className="rounded-lg p-2 mt-2 border-l-2"
                      style={{
                        backgroundColor: `${colors.warning}20`,
                        borderLeftColor: colors.warning,
                      }}
                    >
                      <Text className="text-xs font-semibold text-foreground">
                        ⚠️ Avisos de Segurança
                      </Text>
                      {exercise.safetyWarnings.map((warning, idx) => (
                        <Text
                          key={idx}
                          className="text-xs text-foreground mt-1"
                        >
                          • {warning}
                        </Text>
                      ))}
                    </View>
                  )}

                  {/* Benefícios */}
                  <View className="mt-2">
                    <Text className="text-xs font-semibold text-muted mb-1">
                      Benefícios:
                    </Text>
                    {exercise.benefits.map((benefit, idx) => (
                      <Text
                        key={idx}
                        className="text-xs text-muted"
                      >
                        ✓ {benefit}
                      </Text>
                    ))}
                  </View>
                </View>
              );
            })}
          </View>

          {/* Espaço para expansão */}
          <View className="h-4" />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
