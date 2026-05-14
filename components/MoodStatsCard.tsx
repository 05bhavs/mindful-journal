import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  value: string;
};

export default function MoodStatsCard({ title, value }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingVertical: 28,
    alignItems: "center",

    shadowColor: "#CBD5E1",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,

    elevation: 4,
  },

  value: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#7C3AED",
  },

  title: {
    marginTop: 10,
    color: "#64748B",
    fontSize: 15,
  },
});
