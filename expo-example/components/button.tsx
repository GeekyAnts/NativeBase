import { Pressable, Text, View, Platform } from "react-native";
import { useEffect, useState } from "react";

export const Button = ({ children, onPress }: any) => {
  const [pressed, setPressed] = useState(false);
  return (
    <Pressable
      onPress={() => {
        setPressed(true);
        onPress();
      }}
      onPressOut={() => {
        setPressed(false);
      }}
      style={{
        backgroundColor: pressed ? "red" : "green",
        padding: 10,
        borderRadius: 5,
        margin: 5,
      }}
    >
      <Text style={{ color: pressed ? "#000" : "#fff" }}>{children}</Text>
    </Pressable>
  );
};
