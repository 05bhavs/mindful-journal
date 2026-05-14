import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";

import { router } from "expo-router";

import MoodCard from "@/components/MoodCard";
import QuickActionCard from "@/components/QuickActionCard";

import { saveMoodEntry } from "@/services/moodStorage";

export default function HomeScreen() {
  async function handleMoodSelect(emoji: string) {
    const moodEntry = {
      id: Date.now().toString(),
      mood: emoji,
      date: new Date().toDateString(),
    };

    await saveMoodEntry(moodEntry);

    Alert.alert("Mood Saved 🌿", `You logged ${emoji}`);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 120,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heroCard}>
        <Text style={styles.smallText}>Mindful Journal 🌿</Text>

        <Text style={styles.heading}>Your Calm Corner</Text>

        <Text style={styles.description}>
          A little space to slow down and reset.
        </Text>
      </View>

      <View style={styles.moodSection}>
        <Text style={styles.sectionTitle}>How are you feeling today?</Text>

        <View style={styles.moodRow}>
          <MoodCard emoji="😄" onPress={() => handleMoodSelect("😄")} />

          <MoodCard emoji="🙂" onPress={() => handleMoodSelect("🙂")} />

          <MoodCard emoji="😐" onPress={() => handleMoodSelect("😐")} />

          <MoodCard emoji="😔" onPress={() => handleMoodSelect("😔")} />
        </View>
      </View>

      <View style={styles.analyticsCard}>
        <Text style={styles.analyticsTitle}>Weekly Wellness</Text>

        <Text style={styles.analyticsValue}>78%</Text>

        <Text style={styles.analyticsSubtitle}>
          Your emotional balance is improving 🌿
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.quickGrid}>
        <QuickActionCard
          title="Journal"
          emoji="📖"
          onPress={() => router.push("/journal")}
        />

        <QuickActionCard
          title="Meditate"
          emoji="🧘"
          onPress={() => router.push("/breathing")}
        />

        <QuickActionCard
          title="Mood"
          emoji="📊"
          onPress={() => router.push("/mood")}
        />

        <QuickActionCard
          title="Breathe"
          emoji="🌿"
          onPress={() => router.push("/breathing")}
        />
      </View>
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

  heroCard: {
    backgroundColor: "#C4B5FD",
    borderRadius: 40,
    padding: 32,
  },

  smallText: {
    color: "#4C1D95",
    fontSize: 15,
    fontWeight: "600",
  },

  heading: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#1E1B4B",
    marginTop: 18,
    lineHeight: 46,
  },

  description: {
    color: "#4C1D95",
    fontSize: 16,
    marginTop: 18,
    lineHeight: 26,
  },

  moodSection: {
    marginTop: 35,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 20,
  },

  moodRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  analyticsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 35,
    padding: 30,
    marginTop: 35,

    shadowColor: "#CBD5E1",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,

    elevation: 4,
  },

  analyticsTitle: {
    color: "#64748B",
    fontSize: 18,
  },

  analyticsValue: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#7C3AED",
    marginTop: 20,
  },

  analyticsSubtitle: {
    color: "#64748B",
    fontSize: 16,
    marginTop: 16,
    lineHeight: 24,
  },

  quickGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
