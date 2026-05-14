import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  emoji: string;
  onPress?: () => void;
};

export default function MoodCard({ emoji, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.emoji}>{emoji}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 65,
    height: 65,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#CBD5E1",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,

    elevation: 4,
  },

  emoji: {
    fontSize: 28,
  },
});
