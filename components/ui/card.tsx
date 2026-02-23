import { View, ViewProps } from "react-native";
import { useColors } from "@/hooks/use-colors";
import { cn } from "@/lib/utils";

interface CardProps extends ViewProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outlined";
  className?: string;
}

export function Card({
  children,
  variant = "default",
  className,
  ...props
}: CardProps) {
  const colors = useColors();

  const getCardStyles = () => {
    switch (variant) {
      case "elevated":
        return {
          backgroundColor: colors.surface,
          shadowColor: colors.foreground,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        };
      case "outlined":
        return {
          backgroundColor: colors.background,
          borderColor: colors.border,
          borderWidth: 1,
        };
      default:
        return {
          backgroundColor: colors.surface,
        };
    }
  };

  return (
    <View
      className={cn("rounded-2xl p-4", className)}
      style={getCardStyles()}
      {...props}
    >
      {children}
    </View>
  );
}
