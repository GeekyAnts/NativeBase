import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "./components/button";
export const CustomButtonScreen = () => {
  let start = 0,
    end = 0;
  start = Date.now();
  const [pressed, setPressed] = useState(false);
  useEffect(() => {
    end = Date.now();
    console.log("Custom Button Diff", end - start);
  }, [pressed]);
  return (
    <View style={styles.container}>
      <Text>Custom Pressable</Text>
      <Button onPress={() => setPressed(!pressed)}>Hello</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
