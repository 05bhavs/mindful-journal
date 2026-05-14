import { StyleSheet, Text } from "react-native";

type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 30,
    marginBottom: 15,
  },
});
