import { ScrollView, Text, View, Pressable, FlatList } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { useMamacareData } from "@/hooks/use-mamacare-data";
import { useColors } from "@/hooks/use-colors";
import { foods } from "@/lib/data/foods";
import { useState } from "react";

export default function NutritionScreen() {
  const colors = useColors();
  const { foodLogs, addFoodLog, getTodayCalories } = useMamacareData();
  const [showRecommended, setShowRecommended] = useState(true);

  const todayCalories = getTodayCalories();
  const targetCalories = 1800;
  const recommendedFoods = foods.filter((f) => f.isRecommended);
  const displayFoods = showRecommended ? recommendedFoods : foods;

  const handleAddFood = async (food: typeof foods[0]) => {
    const today = new Date().toISOString().split("T")[0];
    const newLog = {
      id: `log-${Date.now()}`,
      foodId: food.id,
      date: today,
      quantity: 1,
      calories: food.calories,
      protein: food.protein,
      carbs: food.carbs,
      fat: food.fat,
    };
    await addFoodLog(newLog);
  };

  const caloriePercentage = Math.min((todayCalories / targetCalories) * 100, 100);
  const caloriesRemaining = Math.max(0, targetCalories - todayCalories);

  return (
    <ScreenContainer className="p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="gap-4">
          {/* Título */}
          <View>
            <Text className="text-2xl font-bold text-foreground">
              Nutrição
            </Text>
            <Text className="text-sm text-muted">
              Alimentos recomendados para recuperação pós-parto
            </Text>
          </View>

          {/* Card de Calorias */}
          <View
            className="rounded-2xl p-4 gap-3"
            style={{ backgroundColor: colors.surface }}
          >
            <View className="flex-row items-baseline justify-between">
              <View>
                <Text className="text-xs font-semibold text-muted uppercase">
                  Calorias Consumidas
                </Text>
                <View className="flex-row items-baseline gap-2 mt-1">
                  <Text className="text-3xl font-bold text-foreground">
                    {todayCalories}
                  </Text>
                  <Text className="text-sm text-muted">
                    / {targetCalories} kcal
                  </Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-xs font-semibold text-muted uppercase">
                  Restante
                </Text>
                <Text
                  className="text-2xl font-bold mt-1"
                  style={{
                    color:
                      caloriesRemaining > 0
                        ? colors.success
                        : colors.error,
                  }}
                >
                  {caloriesRemaining}
                </Text>
              </View>
            </View>

            {/* Barra de Progresso */}
            <View className="h-3 bg-border rounded-full overflow-hidden">
              <View
                className="h-full rounded-full"
                style={{
                  width: `${caloriePercentage}%`,
                  backgroundColor:
                    caloriePercentage < 100
                      ? colors.primary
                      : colors.warning,
                }}
              />
            </View>

            {/* Informações Nutricionais */}
            <View className="flex-row gap-3 mt-2">
              <View className="flex-1">
                <Text className="text-xs text-muted">Proteína</Text>
                <Text className="text-sm font-semibold text-foreground">
                  {foodLogs
                    .filter((log) => log.date === new Date().toISOString().split("T")[0])
                    .reduce((total, log) => total + log.protein, 0)
                    .toFixed(0)}g
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-xs text-muted">Carboidratos</Text>
                <Text className="text-sm font-semibold text-foreground">
                  {foodLogs
                    .filter((log) => log.date === new Date().toISOString().split("T")[0])
                    .reduce((total, log) => total + log.carbs, 0)
                    .toFixed(0)}g
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-xs text-muted">Gordura</Text>
                <Text className="text-sm font-semibold text-foreground">
                  {foodLogs
                    .filter((log) => log.date === new Date().toISOString().split("T")[0])
                    .reduce((total, log) => total + log.fat, 0)
                    .toFixed(0)}g
                </Text>
              </View>
            </View>
          </View>

          {/* Abas de Filtro */}
          <View className="flex-row gap-2">
            <Pressable
              onPress={() => setShowRecommended(true)}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <View
                className="px-4 py-2 rounded-full"
                style={{
                  backgroundColor: showRecommended
                    ? colors.primary
                    : colors.surface,
                }}
              >
                <Text
                  className="text-sm font-semibold"
                  style={{
                    color: showRecommended
                      ? colors.background
                      : colors.foreground,
                  }}
                >
                  ⭐ Recomendados
                </Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() => setShowRecommended(false)}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <View
                className="px-4 py-2 rounded-full"
                style={{
                  backgroundColor: !showRecommended
                    ? colors.primary
                    : colors.surface,
                }}
              >
                <Text
                  className="text-sm font-semibold"
                  style={{
                    color: !showRecommended
                      ? colors.background
                      : colors.foreground,
                  }}
                >
                  Todos
                </Text>
              </View>
            </Pressable>
          </View>

          {/* Lista de Alimentos */}
          <View className="gap-3">
            {displayFoods.map((food) => (
              <View
                key={food.id}
                className="rounded-2xl p-4 gap-2"
                style={{ backgroundColor: colors.surface }}
              >
                <View className="flex-row items-start justify-between gap-2">
                  <View className="flex-1 gap-1">
                    <View className="flex-row items-center gap-2">
                      <Text className="text-base font-semibold text-foreground">
                        {food.name}
                      </Text>
                      {food.isRecommended && (
                        <Text className="text-xs">⭐</Text>
                      )}
                    </View>
                    <Text className="text-sm text-muted">
                      {food.calories} kcal • {food.protein}g proteína
                    </Text>
                    <Text className="text-xs text-muted leading-relaxed mt-1">
                      {food.benefits}
                    </Text>
                  </View>
                  <Pressable
                    onPress={() => handleAddFood(food)}
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.7 : 1,
                      },
                    ]}
                  >
                    <View
                      className="w-10 h-10 rounded-full items-center justify-center"
                      style={{
                        backgroundColor: colors.primary,
                      }}
                    >
                      <Text className="text-lg font-bold text-background">
                        +
                      </Text>
                    </View>
                  </Pressable>
                </View>

                {/* Macronutrientes */}
                <View className="flex-row gap-2 mt-2 text-xs">
                  <View className="flex-1 bg-background rounded p-2">
                    <Text className="text-xs text-muted">Proteína</Text>
                    <Text className="text-sm font-semibold text-foreground">
                      {food.protein}g
                    </Text>
                  </View>
                  <View className="flex-1 bg-background rounded p-2">
                    <Text className="text-xs text-muted">Carbs</Text>
                    <Text className="text-sm font-semibold text-foreground">
                      {food.carbs}g
                    </Text>
                  </View>
                  <View className="flex-1 bg-background rounded p-2">
                    <Text className="text-xs text-muted">Gordura</Text>
                    <Text className="text-sm font-semibold text-foreground">
                      {food.fat}g
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          {/* Espaço para expansão */}
          <View className="h-4" />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
