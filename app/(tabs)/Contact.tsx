import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; // Make sure you have expo-router installed

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text>welcome to the explore screen!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'yellow',
  },
  link: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 20,
  },
  tabBarBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
