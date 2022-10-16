import { Button, StyleSheet, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Ingrese Aqui" style={styles.input} />
        <Button title="Add" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: { 
    borderBottomColor: "black", 
    borderWidth: 1, 
    width: "80%" 
  },
});
