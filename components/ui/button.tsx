import { Pressable, Text, View } from "react-native";
import { useColors } from "@/hooks/use-colors";
import { cn } from "@/lib/utils";

interface ButtonProps {
  onPress: () => void;
  label: string;
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
}

export function Button({
  onPress,
  label,
  variant = "primary",
  size = "medium",
  disabled = false,
  className,
}: ButtonProps) {
  const colors = useColors();

  const getBackgroundColor = () => {
    if (disabled) return colors.border;
    switch (variant) {
      case "primary":
        return colors.primary;
      case "secondary":
        return colors.surface;
      case "danger":
        return colors.error;
      case "success":
        return colors.success;
      default:
        return colors.primary;
    }
  };

  const getTextColor = () => {
    if (disabled) return colors.muted;
    switch (variant) {
      case "secondary":
        return colors.foreground;
      default:
        return colors.background;
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "px-3 py-1.5";
      case "large":
        return "px-6 py-4";
      default:
        return "px-4 py-3";
    }
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        {
          opacity: pressed && !disabled ? 0.8 : 1,
        },
      ]}
    >
      <View
        className={cn("rounded-full items-center justify-center", getSizeClasses(), className)}
        style={{ backgroundColor: getBackgroundColor() }}
      >
        <Text
          className="font-semibold text-center"
          style={{
            color: getTextColor(),
            fontSize: size === "small" ? 12 : size === "large" ? 16 : 14,
          }}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
