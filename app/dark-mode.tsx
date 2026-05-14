import { StyleSheet, Switch, Text, View } from "react-native";

import { useContext } from "react";

import { ThemeContext } from "@/context/ThemeContext";

export default function DarkModeScreen() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode ? "#0F172A" : "#F8F5FF",
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: darkMode ? "#FFFFFF" : "#1E293B",
          },
        ]}
      >
        Dark Mode 🌙
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Enable Dark Mode</Text>

        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
  },
});
