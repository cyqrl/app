import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PhysicsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Physics Page!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "#2196F3",
  },
});

export default PhysicsPage;
