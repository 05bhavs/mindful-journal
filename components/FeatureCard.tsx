import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  subtitle: string;
};

export default function FeatureCard({ title, subtitle }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>

      <Text style={styles.progressText}>78% completed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#C4B5FD",
    borderRadius: 30,
    padding: 25,
    marginTop: 25,
  },

  subtitle: {
    color: "#4C1D95",
    fontSize: 16,
  },

  title: {
    color: "#1E1B4B",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
    lineHeight: 36,
  },

  progressBar: {
    height: 10,
    backgroundColor: "#DDD6FE",
    borderRadius: 10,
    marginTop: 25,
    overflow: "hidden",
  },

  progressFill: {
    width: "78%",
    height: "100%",
    backgroundColor: "#7C3AED",
  },

  progressText: {
    color: "#4C1D95",
    marginTop: 12,
    fontWeight: "600",
  },
});
