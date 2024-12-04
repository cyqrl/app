import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function Achievements() {
  return (
    <View style={styles.container}>
      <Text>Achievements</Text>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CBCBFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
