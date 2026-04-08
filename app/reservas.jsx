import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import { useState } from "react";
import Button from "../components/Button";

export default function Reservas() {
  const [reservas, setReservas] = useState([
    { id: 1, nome: "Lab 1", horario: "10:00 - 12:00" },
    { id: 2, nome: "Lab 3", horario: "14:00 - 16:00" },
  ]);

  function cancelarReserva(id, nome) {
    Alert.alert(
      "Cancelar Reserva",
      `Deseja cancelar a reserva do ${nome}?`,
      [
        { text: "Não", style: "cancel" },
        {
          text: "Sim",
          onPress: () => {
            setReservas(reservas.filter((r) => r.id !== id));
          },
        },
      ]
    );
  }

  if (reservas.length === 0) {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.title}>Minhas Reservas</Text>
        <Text style={styles.text}>
          Você ainda não fez nenhuma reserva
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Reservas</Text>

      <FlatList
        data={reservas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.horario}>{item.horario}</Text>

            <Button
              title="Cancelar Reserva"
              onPress={() => cancelarReserva(item.id, item.nome)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    padding: 20,
  },
  containerCenter: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#ED145B",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#1a1a1a",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  nome: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 5,
  },
  horario: {
    color: "#ccc",
    marginBottom: 10,
  },
});