import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ReligionPage = () => {
  return (
    
    <View style={styles.container}>
      
      <Text style={styles.text}>Welcome to the religion Page!</Text>
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
    color: "#4196F3",
  },
});

export default ReligionPage;
