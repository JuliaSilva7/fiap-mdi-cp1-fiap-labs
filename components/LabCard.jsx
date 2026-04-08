import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function LabCard({ nome, status, onPress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{nome}</Text>

      <Text style={{ color: status === "Livre" ? "green" : "red" }}>
        {status}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        disabled={status === "Ocupado"}
      >
        <Text style={styles.buttonText}>
          {status === "Livre" ? "Reservar" : "Indisponível"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1a1a1a",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#ED145B",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});