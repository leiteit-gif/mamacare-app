import {
  ScrollView,
  Text,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { useMamacareData } from "@/hooks/use-mamacare-data";
import { useColors } from "@/hooks/use-colors";
import { MoodLevel } from "@/lib/types";
import { useState } from "react";
import { Platform } from "react-native";

export default function WellnessScreen() {
  const colors = useColors();
  const { addMoodEntry, addDiaryEntry, getTodayMood, getRecentDiaryEntries } =
    useMamacareData();
  const [selectedMood, setSelectedMood] = useState<MoodLevel | null>(null);
  const [diaryText, setDiaryText] = useState("");
  const [activeTab, setActiveTab] = useState<"mood" | "diary">("mood");

  const todayMood = getTodayMood();
  const recentEntries = getRecentDiaryEntries(7);

  const moodOptions: { level: MoodLevel; emoji: string; label: string }[] = [
    { level: 1, emoji: "😢", label: "Muito Triste" },
    { level: 2, emoji: "😟", label: "Triste" },
    { level: 3, emoji: "😐", label: "Neutro" },
    { level: 4, emoji: "🙂", label: "Feliz" },
    { level: 5, emoji: "😊", label: "Muito Feliz" },
  ];

  const handleSaveMood = async () => {
    if (selectedMood === null) return;
    const today = new Date().toISOString().split("T")[0];
    await addMoodEntry({
      id: `mood-${Date.now()}`,
      date: today,
      level: selectedMood,
    });
    setSelectedMood(null);
  };

  const handleSaveDiary = async () => {
    if (diaryText.trim() === "") return;
    const today = new Date().toISOString().split("T")[0];
    await addDiaryEntry({
      id: `diary-${Date.now()}`,
      date: today,
      content: diaryText,
      tags: [],
    });
    setDiaryText("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <ScreenContainer className="p-4">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="gap-4">
            {/* Título */}
            <View>
              <Text className="text-2xl font-bold text-foreground">
                Bem-Estar
              </Text>
              <Text className="text-sm text-muted">
                Acompanhe seu humor e sentimentos
              </Text>
            </View>

            {/* Abas */}
            <View className="flex-row gap-2">
              <Pressable
                onPress={() => setActiveTab("mood")}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                <View
                  className="flex-1 px-4 py-2 rounded-full"
                  style={{
                    backgroundColor:
                      activeTab === "mood" ? colors.primary : colors.surface,
                  }}
                >
                  <Text
                    className="text-sm font-semibold text-center"
                    style={{
                      color:
                        activeTab === "mood"
                          ? colors.background
                          : colors.foreground,
                    }}
                  >
                    Escala de Humor
                  </Text>
                </View>
              </Pressable>

              <Pressable
                onPress={() => setActiveTab("diary")}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                <View
                  className="flex-1 px-4 py-2 rounded-full"
                  style={{
                    backgroundColor:
                      activeTab === "diary" ? colors.primary : colors.surface,
                  }}
                >
                  <Text
                    className="text-sm font-semibold text-center"
                    style={{
                      color:
                        activeTab === "diary"
                          ? colors.background
                          : colors.foreground,
                    }}
                  >
                    Diário
                  </Text>
                </View>
              </Pressable>
            </View>

            {/* Conteúdo da Aba de Humor */}
            {activeTab === "mood" && (
              <View className="gap-4">
                <View
                  className="rounded-2xl p-4 gap-4"
                  style={{ backgroundColor: colors.surface }}
                >
                  <View>
                    <Text className="text-xs font-semibold text-muted uppercase mb-2">
                      Como você está se sentindo hoje?
                    </Text>
                    <View className="flex-row justify-between gap-2">
                      {moodOptions.map((option) => (
                        <Pressable
                          key={option.level}
                          onPress={() => setSelectedMood(option.level)}
                          style={({ pressed }) => [
                            {
                              opacity: pressed ? 0.7 : 1,
                            },
                          ]}
                        >
                          <View
                            className="w-14 h-14 rounded-full items-center justify-center border-2"
                            style={{
                              borderColor:
                                selectedMood === option.level
                                  ? colors.primary
                                  : colors.border,
                              backgroundColor:
                                selectedMood === option.level
                                  ? `${colors.primary}20`
                                  : colors.background,
                            }}
                          >
                            <Text className="text-3xl">
                              {option.emoji}
                            </Text>
                          </View>
                        </Pressable>
                      ))}
                    </View>
                  </View>

                  {selectedMood !== null && (
                    <View>
                      <Text className="text-sm text-muted mb-2">
                        Você selecionou:{" "}
                        <Text className="font-semibold text-foreground">
                          {
                            moodOptions.find((m) => m.level === selectedMood)
                              ?.label
                          }
                        </Text>
                      </Text>
                      <Pressable
                        onPress={handleSaveMood}
                        style={({ pressed }) => [
                          {
                            opacity: pressed ? 0.7 : 1,
                          },
                        ]}
                      >
                        <View
                          className="rounded-full py-3 items-center"
                          style={{ backgroundColor: colors.primary }}
                        >
                          <Text className="text-sm font-semibold text-background">
                            Salvar Humor
                          </Text>
                        </View>
                      </Pressable>
                    </View>
                  )}

                  {todayMood && (
                    <View
                      className="rounded-lg p-3 border-l-4"
                      style={{
                        backgroundColor: `${colors.success}20`,
                        borderLeftColor: colors.success,
                      }}
                    >
                      <Text className="text-xs font-semibold text-foreground">
                        ✓ Humor registrado hoje
                      </Text>
                      <Text className="text-sm text-muted mt-1">
                        {
                          moodOptions.find((m) => m.level === todayMood.level)
                            ?.emoji
                        }{" "}
                        {
                          moodOptions.find((m) => m.level === todayMood.level)
                            ?.label
                        }
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            )}

            {/* Conteúdo da Aba de Diário */}
            {activeTab === "diary" && (
              <View className="gap-4">
                <View
                  className="rounded-2xl p-4 gap-3"
                  style={{ backgroundColor: colors.surface }}
                >
                  <View>
                    <Text className="text-xs font-semibold text-muted uppercase mb-2">
                      O que você está sentindo?
                    </Text>
                    <TextInput
                      placeholder="Escreva seus sentimentos, pensamentos e percepções..."
                      placeholderTextColor={colors.muted}
                      value={diaryText}
                      onChangeText={setDiaryText}
                      multiline
                      numberOfLines={6}
                      className="rounded-lg p-3 text-base text-foreground"
                      style={{
                        backgroundColor: colors.background,
                        color: colors.foreground,
                        borderColor: colors.border,
                        borderWidth: 1,
                      }}
                    />
                  </View>

                  <Pressable
                    onPress={handleSaveDiary}
                    disabled={diaryText.trim() === ""}
                    style={({ pressed }) => [
                      {
                        opacity:
                          pressed || diaryText.trim() === "" ? 0.7 : 1,
                      },
                    ]}
                  >
                    <View
                      className="rounded-full py-3 items-center"
                      style={{
                        backgroundColor:
                          diaryText.trim() === ""
                            ? colors.border
                            : colors.primary,
                      }}
                    >
                      <Text
                        className="text-sm font-semibold"
                        style={{
                          color:
                            diaryText.trim() === ""
                              ? colors.muted
                              : colors.background,
                        }}
                      >
                        Salvar Entrada
                      </Text>
                    </View>
                  </Pressable>
                </View>

                {/* Entradas Recentes */}
                {recentEntries.length > 0 && (
                  <View className="gap-3">
                    <Text className="text-sm font-semibold text-foreground">
                      Últimas Entradas
                    </Text>
                    {recentEntries.slice().reverse().map((entry) => (
                      <View
                        key={entry.id}
                        className="rounded-2xl p-3 gap-1"
                        style={{ backgroundColor: colors.surface }}
                      >
                        <Text className="text-xs text-muted">
                          {new Date(entry.date).toLocaleDateString("pt-BR")}
                        </Text>
                        <Text className="text-sm text-foreground leading-relaxed">
                          {entry.content.substring(0, 100)}
                          {entry.content.length > 100 ? "..." : ""}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            )}

            {/* Espaço para expansão */}
            <View className="h-4" />
          </View>
        </ScrollView>
      </ScreenContainer>
    </KeyboardAvoidingView>
  );
}
