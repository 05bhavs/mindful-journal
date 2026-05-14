import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { router, useFocusEffect } from "expo-router";

import { useCallback, useState } from "react";

import JournalEntryCard from "@/components/JournalEntryCard";

import {
    deleteJournalEntry,
    loadJournalEntries,
} from "@/services/journalStorage";

import { JournalEntry } from "@/types/journal";

export default function JournalScreen() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  useFocusEffect(
    useCallback(() => {
      async function fetchEntries() {
        const storedEntries = await loadJournalEntries();

        setEntries(storedEntries);
      }

      fetchEntries();
    }, []),
  );

  async function handleDelete(id: string) {
    Alert.alert("Delete Entry", "Are you sure?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          const updatedEntries = await deleteJournalEntry(id);

          setEntries(updatedEntries);
        },
      },
    ]);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 120,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Journal 📖</Text>

          <Text style={styles.subtitle}>
            Capture your thoughts and emotions
          </Text>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push("/create-entry")}
        >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>

      {entries.map((entry) => (
        <JournalEntryCard
          key={entry.id}
          id={entry.id}
          title={entry.title}
          content={entry.content}
          date={entry.date}
          onDelete={() => handleDelete(entry.id)}
          onPress={() =>
            router.push({
              pathname: "/edit-entry",
              params: {
                id: entry.id,
                title: entry.title,
                content: entry.content,
              },
            })
          }
        />
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

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#1E293B",
  },

  subtitle: {
    color: "#64748B",
    marginTop: 8,
    fontSize: 16,
  },

  addButton: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: "#C4B5FD",

    justifyContent: "center",
    alignItems: "center",
  },

  addText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
