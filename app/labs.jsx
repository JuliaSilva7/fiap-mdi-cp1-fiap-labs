import { View, Text, StyleSheet } from "react-native";
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

  function reservar(id) {
    setLabs(
      labs.map((lab) =>
        lab.id === id ? { ...lab, status: "Ocupado" } : lab
      )
    );
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Carregando laboratórios...</Text>
      </View>
    );
  }

  if (labs.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Nenhum laboratório encontrado</Text>
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
          onPress={() => reservar(lab.id)}
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
  title: {
    color: "#ED145B",
    fontSize: 22,
    marginBottom: 20,
  },
  text: {
    color: "#fff",
  },
});