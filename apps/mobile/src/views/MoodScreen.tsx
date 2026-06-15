import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Pantalla 2: 5 caritas + gráfico de 7 días
export function MoodScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Ánimo</Text>
      <Text style={styles.todo}>Pantalla en construcción</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  title: { fontSize: 20, fontWeight: "600" },
  todo: { marginTop: 8, color: "#888" },
});
