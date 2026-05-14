import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  emoji: string;
  onPress?: () => void;
};

export default function QuickActionCard({ title, emoji, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.emojiContainer}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "center",
    width: "22%",
    marginTop: 18,

    shadowColor: "#CBD5E1",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,

    elevation: 4,
  },

  emojiContainer: {
    width: 50,
    height: 50,
    borderRadius: 18,
    backgroundColor: "#F3E8FF",

    justifyContent: "center",
    alignItems: "center",
  },

  emoji: {
    fontSize: 24,
  },

  text: {
    marginTop: 12,
    fontSize: 13,
    fontWeight: "600",
    color: "#1E293B",
  },
});
