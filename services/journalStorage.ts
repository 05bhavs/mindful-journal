import * as SecureStore from "expo-secure-store";

import { JournalEntry } from "@/types/journal";

const STORAGE_KEY = "journal_entries";

export async function saveJournalEntries(entries: JournalEntry[]) {
  try {
    await SecureStore.setItemAsync(STORAGE_KEY, JSON.stringify(entries));
  } catch (error) {
    console.log(error);
  }
}

export async function loadJournalEntries() {
  try {
    const data = await SecureStore.getItemAsync(STORAGE_KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);

    return [];
  }
}

export async function deleteJournalEntry(id: string) {
  const entries = await loadJournalEntries();

  const filteredEntries = entries.filter(
    (entry: JournalEntry) => entry.id !== id,
  );

  await saveJournalEntries(filteredEntries);

  return filteredEntries;
}

export async function updateJournalEntry(updatedEntry: JournalEntry) {
  const entries = await loadJournalEntries();

  const updatedEntries = entries.map((entry: JournalEntry) =>
    entry.id === updatedEntry.id ? updatedEntry : entry,
  );

  await saveJournalEntries(updatedEntries);

  return updatedEntries;
}
