import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ title, onPress, disabled = false }) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ED145B",
    padding: 20,
    borderRadius: 30,
    marginTop: 10,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  disabled: {
    backgroundColor: "#555",
  },
});
