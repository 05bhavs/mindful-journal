import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { useState } from "react";

import { router } from "expo-router";

import {
    loadJournalEntries,
    saveJournalEntries,
} from "@/services/journalStorage";

export default function CreateEntryScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSave() {
    if (!title || !content) {
      Alert.alert("Missing fields", "Please complete all fields.");

      return;
    }

    const existingEntries = await loadJournalEntries();

    const newEntry = {
      id: Date.now().toString(),
      title,
      content,
      date: new Date().toDateString(),
    };

    const updatedEntries = [newEntry, ...existingEntries];

    await saveJournalEntries(updatedEntries);

    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>New Journal Entry ✨</Text>

      <TextInput
        placeholder="Title"
        placeholderTextColor="#94A3B8"
        style={styles.titleInput}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Write your thoughts..."
        placeholderTextColor="#94A3B8"
        style={styles.contentInput}
        multiline
        value={content}
        onChangeText={setContent}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save Entry</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F5FF",
    padding: 20,
    paddingTop: 80,
  },

  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E293B",
  },

  titleInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    marginTop: 30,
    fontSize: 18,
  },

  contentInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    marginTop: 20,
    height: 250,
    textAlignVertical: "top",
    fontSize: 16,
  },

  saveButton: {
    backgroundColor: "#A78BFA",
    paddingVertical: 20,
    borderRadius: 24,
    alignItems: "center",
    marginTop: 30,
  },

  saveText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
