import { StyleSheet, Text, View } from "react-native";

export default function InsightsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emotional Insights 📊</Text>

      <View style={styles.card}>
        <Text style={styles.bigText}>78%</Text>

        <Text style={styles.subtitle}>
          Positive emotional balance this week
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.insight}>
          🌿 Journaling consistency improved by 24%
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.insight}>😊 Most common mood: Happy</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.insight}>
          💤 Reflection frequency highest at night
        </Text>
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

  bigText: {
    fontSize: 52,
    fontWeight: "bold",
    color: "#7C3AED",
  },

  subtitle: {
    marginTop: 10,
    color: "#64748B",
    fontSize: 16,
  },

  insight: {
    fontSize: 16,
    color: "#1E293B",
    lineHeight: 24,
  },
});
