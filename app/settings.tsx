import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Settings ⚙️</Text>

      <View style={styles.card}>
        <Text style={styles.text}>Version 1.0.0</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>Notifications coming soon</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>Daily wellness reminders enabled</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>Mindful Journal © 2026</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F5FF",
    padding: 20,
    paddingTop: 80,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    marginBottom: 18,
  },

  text: {
    fontSize: 16,
    color: "#1E293B",
  },
});
