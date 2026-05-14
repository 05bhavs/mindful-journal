import { StyleSheet, Text, View } from "react-native";

export default function SecurityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy & Security 🔒</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>✅ Biometric Authentication Enabled</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>✅ Notes are encrypted securely</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>✅ Secure local storage active</Text>
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

  cardText: {
    fontSize: 16,
    color: "#1E293B",
    lineHeight: 24,
  },
});
