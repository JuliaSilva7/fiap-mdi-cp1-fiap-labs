import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FIAP Labs</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/labs")}
      >
        <Text style={styles.buttonText}>Ver Laboratórios</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/reservas")}
      >
        <Text style={styles.buttonText}>Minhas Reservas</Text>
      </TouchableOpacity>
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
  title: {
    color: "#ED145B",
    fontSize: 28,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#ED145B",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: 200,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});