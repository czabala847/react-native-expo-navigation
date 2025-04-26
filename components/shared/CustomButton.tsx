import React from "react"
import { Pressable, PressableProps, Text, View } from "react-native"

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  className?: string
}

export const CustomButton = React.forwardRef(
  (
    { children, color = "primary", onPress, onLongPress, className }: Props,
    ref: React.Ref<View>
  ) => {
    const btnColor = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
    }[color];

    return (
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
        ref={ref}
      >
        <Text className="text-white text-center">{children}</Text>
      </Pressable>
    );
  }
);
