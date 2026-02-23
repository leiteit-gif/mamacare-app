import { View, Text } from "react-native";
import { useColors } from "@/hooks/use-colors";

interface DataPoint {
  label: string;
  value: number;
  maxValue?: number;
}

interface SimpleChartProps {
  data: DataPoint[];
  title: string;
  type?: "bar" | "line";
  height?: number;
}

export function SimpleChart({
  data,
  title,
  type = "bar",
  height = 120,
}: SimpleChartProps) {
  const colors = useColors();

  if (data.length === 0) {
    return (
      <View
        className="rounded-2xl p-4 items-center justify-center"
        style={{ backgroundColor: colors.surface, height }}
      >
        <Text className="text-sm text-muted">Sem dados disponíveis</Text>
      </View>
    );
  }

  const maxValue = Math.max(
    ...data.map((d) => d.maxValue || d.value),
    1
  );

  if (type === "bar") {
    return (
      <View
        className="rounded-2xl p-4 gap-3"
        style={{ backgroundColor: colors.surface }}
      >
        <Text className="text-sm font-semibold text-foreground">{title}</Text>
        <View className="gap-2">
          {data.map((point, idx) => {
            const percentage = (point.value / maxValue) * 100;
            return (
              <View key={idx} className="gap-1">
                <View className="flex-row justify-between items-center">
                  <Text className="text-xs text-muted">{point.label}</Text>
                  <Text className="text-xs font-semibold text-foreground">
                    {point.value}
                  </Text>
                </View>
                <View className="h-2 bg-border rounded-full overflow-hidden">
                  <View
                    className="h-full rounded-full"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: colors.primary,
                    }}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }

  // Tipo linha (simplificado)
  return (
    <View
      className="rounded-2xl p-4 gap-3"
      style={{ backgroundColor: colors.surface }}
    >
      <Text className="text-sm font-semibold text-foreground">{title}</Text>
      <View className="flex-row items-end justify-between gap-1" style={{ height }}>
        {data.map((point, idx) => {
          const percentage = (point.value / maxValue) * 100;
          return (
            <View key={idx} className="flex-1 items-center gap-1">
              <View
                className="w-full rounded-t"
                style={{
                  height: `${percentage}%`,
                  backgroundColor: colors.primary,
                }}
              />
              <Text className="text-xs text-muted">{point.label}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
