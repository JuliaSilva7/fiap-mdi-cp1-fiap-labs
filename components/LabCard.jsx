import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

export default function LabCard({ nome, status, onPress }) {
  const livre = status === "Livre";

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{nome}</Text>

      <Text style={[styles.status, { color: livre ? "#00FF7F" : "#FF4C4C" }]}>
        {status}
      </Text>

      <Button
        title={livre ? "Reservar" : "Indisponível"}
        onPress={onPress}
        disabled={!livre}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1a1a1a",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 5,
  },
  status: {
    marginBottom: 10,
    fontWeight: "bold",
  },
});