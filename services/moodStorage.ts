import AsyncStorage from "@react-native-async-storage/async-storage";

import { MoodEntry } from "@/types/mood";

const STORAGE_KEY = "mood_entries";

export async function saveMoodEntry(moodEntry: MoodEntry) {
  try {
    const existing = await loadMoodEntries();

    const updated = [moodEntry, ...existing];

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.log(error);
  }
}

export async function loadMoodEntries() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);

    return [];
  }
}
