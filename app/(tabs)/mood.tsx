import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";

import { useEffect, useState } from "react";

import MoodCard from "@/components/MoodCard";
import MoodHistoryCard from "@/components/MoodHistoryCard";
import MoodStatsCard from "@/components/MoodStatsCard";

import { loadMoodEntries, saveMoodEntry } from "@/services/moodStorage";

import { MoodEntry } from "@/types/mood";

export default function MoodScreen() {
  const [moods, setMoods] = useState<MoodEntry[]>([]);

  useEffect(() => {
    fetchMoods();
  }, []);

  async function fetchMoods() {
    const storedMoods = await loadMoodEntries();

    setMoods(storedMoods);
  }

  async function handleMoodSelect(emoji: string) {
    const newMood = {
      id: Date.now().toString(),
      mood: emoji,
      date: new Date().toDateString(),
    };

    await saveMoodEntry(newMood);

    fetchMoods();

    Alert.alert("Mood Saved 🌿", "Your mood was logged successfully.");
  }

  const happyCount = moods.filter((mood) => mood.mood === "😄").length;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 120,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Mood Tracker 😊</Text>

      <Text style={styles.subtitle}>Track your emotional patterns daily</Text>

      <View style={styles.moodRow}>
        <MoodCard emoji="😄" onPress={() => handleMoodSelect("😄")} />

        <MoodCard emoji="🙂" onPress={() => handleMoodSelect("🙂")} />

        <MoodCard emoji="😐" onPress={() => handleMoodSelect("😐")} />

        <MoodCard emoji="😔" onPress={() => handleMoodSelect("😔")} />
      </View>

      <View style={styles.bigCard}>
        <Text style={styles.bigCardTitle}>Emotional Balance</Text>

        <Text style={styles.bigPercentage}>{happyCount * 10}%</Text>

        <Text style={styles.bigSubtitle}>Based on your positive moods 🌿</Text>
      </View>

      <View style={styles.statsRow}>
        <MoodStatsCard title="Happy Days" value={happyCount.toString()} />

        <MoodStatsCard title="Total Logs" value={moods.length.toString()} />
      </View>

      <Text style={styles.historyTitle}>Mood History</Text>

      {moods.map((mood) => (
        <MoodHistoryCard key={mood.id} mood={mood.mood} date={mood.date} />
      ))}
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

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#1E293B",
  },

  subtitle: {
    color: "#64748B",
    fontSize: 16,
    marginTop: 8,
  },

  moodRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  bigCard: {
    backgroundColor: "#C4B5FD",
    borderRadius: 35,
    padding: 30,
    marginTop: 35,
    alignItems: "center",
  },

  bigCardTitle: {
    color: "#4C1D95",
    fontSize: 20,
    fontWeight: "600",
  },

  bigPercentage: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#1E1B4B",
    marginTop: 20,
  },

  bigSubtitle: {
    color: "#4C1D95",
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    lineHeight: 24,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  historyTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 35,
    marginBottom: 10,
  },
});
