import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 100,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.profileCard}>
        <View style={styles.avatar} />

        <Text style={styles.name}>
          Bhavya
        </Text>

        <Text style={styles.email}>
          mindful journey 🌿
        </Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>
            26
          </Text>

          <Text style={styles.statTitle}>
            Entries
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>
            12
          </Text>

          <Text style={styles.statTitle}>
            Happy Days
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.menuCard}
        onPress={() =>
          router.push("/security")
        }
      >
        <Text style={styles.menuText}>
          🔒 Privacy & Security
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuCard}
        onPress={() =>
          router.push("/dark-mode")
        }
      >
        <Text style={styles.menuText}>
          🌙 Dark Mode
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuCard}
        onPress={() =>
          router.push("/insights")
        }
      >
        <Text style={styles.menuText}>
          📊 Emotional Insights
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuCard}
        onPress={() =>
          router.push("/settings")
        }
      >
        <Text style={styles.menuText}>
          ⚙️ App Settings
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F5FF",
    paddingHorizontal: 20,
    paddingTop: 70,
  },

  profileCard: {
    backgroundColor: "#C4B5FD",
    borderRadius: 35,
    paddingVertical: 40,
    alignItems: "center",
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#E9D5FF",
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E1B4B",
    marginTop: 20,
  },

  email: {
    color: "#4C1D95",
    marginTop: 8,
    fontSize: 16,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  statCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingVertical: 28,
    alignItems: "center",
  },

  statValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#7C3AED",
  },

  statTitle: {
    marginTop: 10,
    color: "#64748B",
    fontSize: 15,
  },

  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 22,
    marginTop: 18,
  },

  menuText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1E293B",
  },
});