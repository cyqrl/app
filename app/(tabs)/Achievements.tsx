import React from "react";

import { View, Text, StyleSheet } from "react-native";

export default function Achievements() {
    return (
        <View style={styles.container}>
            <Text>Achievements</Text>
        </View>
            
    )
}

let styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });