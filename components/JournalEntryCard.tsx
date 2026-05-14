import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  id: string;
  title: string;
  content: string;
  date: string;
  onDelete?: () => void;
  onPress?: () => void;
};

export default function JournalEntryCard({
  title,
  content,
  date,
  onDelete,
  onPress,
}: Props) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
      <View style={styles.topRow}>
        <Text style={styles.date}>{date}</Text>

        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.content}>{content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 22,
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

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  date: {
    color: "#A78BFA",
    fontWeight: "600",
  },

  deleteText: {
    color: "#EF4444",
    fontWeight: "600",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 12,
  },

  content: {
    color: "#64748B",
    fontSize: 15,
    lineHeight: 24,
    marginTop: 12,
  },
});
