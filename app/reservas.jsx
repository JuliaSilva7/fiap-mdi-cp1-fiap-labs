import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

export default function Reservas() {
  const [reservas, setReservas] = useState([]);

  if (reservas.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Você ainda não fez nenhuma reserva
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {reservas.map((r, index) => (
        <Text key={index} style={styles.text}>
          {r}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});