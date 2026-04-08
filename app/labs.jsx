import { View, Text, StyleSheet, Alert } from "react-native";
import LabCard from "../components/LabCard";
import { useState, useEffect } from "react";

export default function Labs() {
  const [labs, setLabs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLabs([
        { id: 1, nome: "Lab 1", status: "Livre" },
        { id: 2, nome: "Lab 2", status: "Ocupado" },
        { id: 3, nome: "Lab 3", status: "Livre" },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  function reservar(id, nome) {
    setLabs(
      labs.map((lab) =>
        lab.id === id ? { ...lab, status: "Ocupado" } : lab
      )
    );

    Alert.alert("Sucesso", `${nome} reservado com sucesso!`);
  }

  if (loading) {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.text}>Carregando laboratórios...</Text>
      </View>
    );
  }

  if (labs.length === 0) {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.text}>Nenhum laboratório disponível</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Laboratórios</Text>

      {labs.map((lab) => (
        <LabCard
          key={lab.id}
          nome={lab.nome}
          status={lab.status}
          onPress={() => reservar(lab.id, lab.nome)}
        />
      ))}
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
  },
});