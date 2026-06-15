import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Pantalla 1: login Google @unmsm.edu.pe, registro y recuperación
export function AuthScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingreso y Registro</Text>
      <Text style={styles.todo}>Pantalla en construcción</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  title: { fontSize: 20, fontWeight: "600" },
  todo: { marginTop: 8, color: "#888" },
});
