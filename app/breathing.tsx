import { StyleSheet, Text, View } from "react-native";

export default function BreathingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🌿</Text>

      <Text style={styles.title}>Breathing Exercise</Text>

      <Text style={styles.subtitle}>Inhale deeply. Exhale slowly.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F5FF",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  emoji: {
    fontSize: 90,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 20,
  },

  subtitle: {
    marginTop: 15,
    color: "#64748B",
    fontSize: 18,
  },
});
