import { StyleSheet, Text, View } from "react-native";

type Props = {
  mood: string;
  date: string;
};

export default function MoodHistoryCard({ mood, date }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.mood}>{mood}</Text>

      <View>
        <Text style={styles.title}>Mood Logged</Text>

        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    marginTop: 16,

    flexDirection: "row",
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

  mood: {
    fontSize: 36,
    marginRight: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E293B",
  },

  date: {
    color: "#64748B",
    marginTop: 6,
  },
});
