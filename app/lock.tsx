import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import * as LocalAuthentication from "expo-local-authentication";

import { router } from "expo-router";

export default function LockScreen() {
  async function authenticate() {
    const compatible = await LocalAuthentication.hasHardwareAsync();

    if (!compatible) {
      Alert.alert("Biometric authentication not supported");

      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Unlock Mindful Journal",
    });

    if (result.success) {
      router.replace("/(tabs)");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.lockEmoji}>🔒</Text>

      <Text style={styles.title}>Mindful Journal</Text>

      <Text style={styles.subtitle}>Your thoughts are private and secure</Text>

      <TouchableOpacity style={styles.button} onPress={authenticate}>
        <Text style={styles.buttonText}>Unlock with Biometrics</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F5FF",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  lockEmoji: {
    fontSize: 80,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 20,
  },

  subtitle: {
    color: "#64748B",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#A78BFA",
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 22,
    marginTop: 40,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
