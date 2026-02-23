import { ScrollView, Text, View, Pressable, TextInput } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { useMamacareData } from "@/hooks/use-mamacare-data";
import { useColors } from "@/hooks/use-colors";
import { UserProfile } from "@/lib/types";
import { useState, useEffect } from "react";

export default function ProfileScreen() {
  const colors = useColors();
  const { userProfile, saveUserProfile } = useMamacareData();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<UserProfile>>({
    name: "",
    birthDate: "",
    deliveryDate: "",
    deliveryType: "vaginal",
    targetCalories: 1800,
    targetWeight: 0,
    currentWeight: 0,
  });

  useEffect(() => {
    if (userProfile) {
      setFormData(userProfile);
    } else {
      // Inicializar com valores padrão
      setFormData({
        name: "",
        birthDate: "",
        deliveryDate: new Date().toISOString().split("T")[0],
        deliveryType: "vaginal",
        targetCalories: 1800,
        targetWeight: 0,
        currentWeight: 0,
      });
    }
  }, [userProfile]);

  const handleSaveProfile = async () => {
    if (!formData.name || !formData.deliveryDate) {
      alert("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    const profile: UserProfile = {
      id: userProfile?.id || `user-${Date.now()}`,
      name: formData.name || "",
      birthDate: formData.birthDate || "",
      deliveryDate: formData.deliveryDate || "",
      deliveryType: formData.deliveryType as "vaginal" | "cesarean",
      targetCalories: formData.targetCalories || 1800,
      targetWeight: formData.targetWeight || 0,
      currentWeight: formData.currentWeight || 0,
      createdAt: userProfile?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await saveUserProfile(profile);
    setIsEditing(false);
  };

  const calculatePostpartumDays = () => {
    if (!userProfile?.deliveryDate) return 0;
    const deliveryDate = new Date(userProfile.deliveryDate);
    const today = new Date();
    return Math.floor(
      (today.getTime() - deliveryDate.getTime()) / (24 * 60 * 60 * 1000)
    );
  };

  const postpartumDays = calculatePostpartumDays();

  return (
    <ScreenContainer className="p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="gap-4">
          {/* Título */}
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-2xl font-bold text-foreground">
                Perfil
              </Text>
              <Text className="text-sm text-muted">
                Suas informações e configurações
              </Text>
            </View>
            <Pressable
              onPress={() => setIsEditing(!isEditing)}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <View
                className="px-3 py-2 rounded-full"
                style={{ backgroundColor: colors.primary }}
              >
                <Text className="text-xs font-semibold text-background">
                  {isEditing ? "Cancelar" : "Editar"}
                </Text>
              </View>
            </Pressable>
          </View>

          {/* Informações Básicas */}
          <View
            className="rounded-2xl p-4 gap-3"
            style={{ backgroundColor: colors.surface }}
          >
            <Text className="text-sm font-semibold text-foreground">
              Informações Básicas
            </Text>

            {/* Nome */}
            <View className="gap-1">
              <Text className="text-xs font-semibold text-muted">Nome</Text>
              {isEditing ? (
                <TextInput
                  placeholder="Seu nome"
                  placeholderTextColor={colors.muted}
                  value={formData.name || ""}
                  onChangeText={(text) =>
                    setFormData({ ...formData, name: text })
                  }
                  className="rounded-lg p-3 text-base text-foreground"
                  style={{
                    backgroundColor: colors.background,
                    color: colors.foreground,
                    borderColor: colors.border,
                    borderWidth: 1,
                  }}
                />
              ) : (
                <Text className="text-base text-foreground">
                  {userProfile?.name || "Não informado"}
                </Text>
              )}
            </View>

            {/* Data de Nascimento */}
            <View className="gap-1">
              <Text className="text-xs font-semibold text-muted">
                Data de Nascimento
              </Text>
              {isEditing ? (
                <TextInput
                  placeholder="YYYY-MM-DD"
                  placeholderTextColor={colors.muted}
                  value={formData.birthDate || ""}
                  onChangeText={(text) =>
                    setFormData({ ...formData, birthDate: text })
                  }
                  className="rounded-lg p-3 text-base text-foreground"
                  style={{
                    backgroundColor: colors.background,
                    color: colors.foreground,
                    borderColor: colors.border,
                    borderWidth: 1,
                  }}
                />
              ) : (
                <Text className="text-base text-foreground">
                  {userProfile?.birthDate || "Não informado"}
                </Text>
              )}
            </View>

            {/* Data do Parto */}
            <View className="gap-1">
              <Text className="text-xs font-semibold text-muted">
                Data do Parto
              </Text>
              {isEditing ? (
                <TextInput
                  placeholder="YYYY-MM-DD"
                  placeholderTextColor={colors.muted}
                  value={formData.deliveryDate || ""}
                  onChangeText={(text) =>
                    setFormData({ ...formData, deliveryDate: text })
                  }
                  className="rounded-lg p-3 text-base text-foreground"
                  style={{
                    backgroundColor: colors.background,
                    color: colors.foreground,
                    borderColor: colors.border,
                    borderWidth: 1,
                  }}
                />
              ) : (
                <Text className="text-base text-foreground">
                  {userProfile?.deliveryDate || "Não informado"}
                </Text>
              )}
            </View>

            {/* Tipo de Parto */}
            <View className="gap-1">
              <Text className="text-xs font-semibold text-muted">
                Tipo de Parto
              </Text>
              {isEditing ? (
                <View className="flex-row gap-2">
                  <Pressable
                    onPress={() =>
                      setFormData({ ...formData, deliveryType: "vaginal" })
                    }
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.7 : 1,
                      },
                    ]}
                  >
                    <View
                      className="flex-1 px-3 py-2 rounded-lg"
                      style={{
                        backgroundColor:
                          formData.deliveryType === "vaginal"
                            ? colors.primary
                            : colors.background,
                        borderColor: colors.border,
                        borderWidth: 1,
                      }}
                    >
                      <Text
                        className="text-sm font-semibold text-center"
                        style={{
                          color:
                            formData.deliveryType === "vaginal"
                              ? colors.background
                              : colors.foreground,
                        }}
                      >
                        Vaginal
                      </Text>
                    </View>
                  </Pressable>

                  <Pressable
                    onPress={() =>
                      setFormData({ ...formData, deliveryType: "cesarean" })
                    }
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.7 : 1,
                      },
                    ]}
                  >
                    <View
                      className="flex-1 px-3 py-2 rounded-lg"
                      style={{
                        backgroundColor:
                          formData.deliveryType === "cesarean"
                            ? colors.primary
                            : colors.background,
                        borderColor: colors.border,
                        borderWidth: 1,
                      }}
                    >
                      <Text
                        className="text-sm font-semibold text-center"
                        style={{
                          color:
                            formData.deliveryType === "cesarean"
                              ? colors.background
                              : colors.foreground,
                        }}
                      >
                        Cesariana
                      </Text>
                    </View>
                  </Pressable>
                </View>
              ) : (
                <Text className="text-base text-foreground capitalize">
                  {userProfile?.deliveryType === "vaginal"
                    ? "Parto Vaginal"
                    : "Cesariana"}
                </Text>
              )}
            </View>
          </View>

          {/* Metas e Progresso */}
          <View
            className="rounded-2xl p-4 gap-3"
            style={{ backgroundColor: colors.surface }}
          >
            <Text className="text-sm font-semibold text-foreground">
              Metas e Progresso
            </Text>

            {/* Calorias Diárias */}
            <View className="gap-1">
              <Text className="text-xs font-semibold text-muted">
                Calorias Diárias Recomendadas
              </Text>
              {isEditing ? (
                <TextInput
                  placeholder="1800"
                  placeholderTextColor={colors.muted}
                  value={String(formData.targetCalories || 1800)}
                  onChangeText={(text) =>
                    setFormData({
                      ...formData,
                      targetCalories: parseInt(text) || 1800,
                    })
                  }
                  keyboardType="numeric"
                  className="rounded-lg p-3 text-base text-foreground"
                  style={{
                    backgroundColor: colors.background,
                    color: colors.foreground,
                    borderColor: colors.border,
                    borderWidth: 1,
                  }}
                />
              ) : (
                <Text className="text-base text-foreground">
                  {userProfile?.targetCalories || 1800} kcal
                </Text>
              )}
            </View>

            {/* Peso Atual */}
            <View className="gap-1">
              <Text className="text-xs font-semibold text-muted">
                Peso Atual (kg)
              </Text>
              {isEditing ? (
                <TextInput
                  placeholder="0"
                  placeholderTextColor={colors.muted}
                  value={String(formData.currentWeight || 0)}
                  onChangeText={(text) =>
                    setFormData({
                      ...formData,
                      currentWeight: parseFloat(text) || 0,
                    })
                  }
                  keyboardType="decimal-pad"
                  className="rounded-lg p-3 text-base text-foreground"
                  style={{
                    backgroundColor: colors.background,
                    color: colors.foreground,
                    borderColor: colors.border,
                    borderWidth: 1,
                  }}
                />
              ) : (
                <Text className="text-base text-foreground">
                  {userProfile?.currentWeight || "Não informado"} kg
                </Text>
              )}
            </View>

            {/* Peso Alvo */}
            <View className="gap-1">
              <Text className="text-xs font-semibold text-muted">
                Peso Alvo (kg)
              </Text>
              {isEditing ? (
                <TextInput
                  placeholder="0"
                  placeholderTextColor={colors.muted}
                  value={String(formData.targetWeight || 0)}
                  onChangeText={(text) =>
                    setFormData({
                      ...formData,
                      targetWeight: parseFloat(text) || 0,
                    })
                  }
                  keyboardType="decimal-pad"
                  className="rounded-lg p-3 text-base text-foreground"
                  style={{
                    backgroundColor: colors.background,
                    color: colors.foreground,
                    borderColor: colors.border,
                    borderWidth: 1,
                  }}
                />
              ) : (
                <Text className="text-base text-foreground">
                  {userProfile?.targetWeight || "Não informado"} kg
                </Text>
              )}
            </View>
          </View>

          {/* Informações de Pós-Parto */}
          {userProfile && (
            <View
              className="rounded-2xl p-4 gap-2 border-l-4"
              style={{
                backgroundColor: colors.surface,
                borderLeftColor: colors.primary,
              }}
            >
              <Text className="text-xs font-semibold text-muted uppercase">
                Informações de Pós-Parto
              </Text>
              <Text className="text-sm text-foreground">
                Você está no dia <Text className="font-bold">{postpartumDays}</Text> do pós-parto
              </Text>
              <Text className="text-xs text-muted mt-1">
                Semana {Math.ceil(postpartumDays / 7)} de recuperação
              </Text>
            </View>
          )}

          {/* Botão Salvar */}
          {isEditing && (
            <Pressable
              onPress={handleSaveProfile}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <View
                className="rounded-full py-3 items-center"
                style={{ backgroundColor: colors.success }}
              >
                <Text className="text-sm font-semibold text-background">
                  Salvar Alterações
                </Text>
              </View>
            </Pressable>
          )}

          {/* Espaço para expansão */}
          <View className="h-4" />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
