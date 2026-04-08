import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Button from "../components/Button";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FIAP Labs</Text>

      <Text style={styles.subtitle}>
        Gerencie reservas de laboratórios de forma simples
      </Text>

      <Button
        title="Ver Laboratórios"
        onPress={() => router.push("/labs")}
      />

      <Button
        title="Minhas Reservas"
        onPress={() => router.push("/reservas")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#ED145B",
    fontSize: 30,
    marginBottom: 10,
  },
  subtitle: {
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
});