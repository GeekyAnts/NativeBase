import { Text, View, StyleSheet, Button } from "react-native";
export const RNButtonScreen = () => {
  return (
    <View style={styles.container}>
      <Text>React Native Button</Text>
      <Button onPress={() => console.log("Pressed")} title="Hello World" />
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
