import { Tabs, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { selectedSubject } from "./first";

const c = "#fff";

export default function TabLayout() {
  const [currentSubject, setCurrentSubject] = useState(selectedSubject);
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedSubject !== currentSubject) {
        setCurrentSubject(selectedSubject);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentSubject]);


  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: {
          height: 100,
          backgroundColor: "rgba(33, 150, 243, 0.95)",
          elevation: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          color: "#FFFFFF",
          fontSize: 25,
        },
        headerTitleAlign: "center",
        
        tabBarStyle: {
          height: 80,
          backgroundColor: "transparent",
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarBackground: () => (
          <View
            style={{
              height: 80,
              backgroundColor: "rgba(27, 128, 211, 0.95)",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        ),
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "الرئيسية",
          tabBarLabel: ({ focused }) => (
            <View style={styles.labelContainer}>
              <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
                الرئيسية
              </Text>
              {focused && <View style={styles.underline} />}
            </View>
          ),
          tabBarIcon: () => (
            <Image
              source={require("@/assets/images/home.png")}
              style={{ width: 28, height: 28 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="second"
        options={{
          title: "ثاني ثانوي",
          tabBarLabel: ({ focused }) => (
            <View style={styles.labelContainer}>
              <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
                ثاني ثانوي
              </Text>
              {focused && <View style={styles.underline} />}
            </View>
          ),
          tabBarIcon: () => (
            <Image
              source={require("@/assets/images/second.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="first"
        options={{
          title: currentSubject,
          tabBarLabel: ({ focused }) => (
            <View style={styles.labelContainer}>
              <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
                أول ثانوي
              </Text>
              {focused && <View style={styles.underline} />}
            </View>
          ),
          tabBarIcon: () => (
            <Image
              source={require("@/assets/images/first.png")}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Achievements"
        options={{ tabBarItemStyle: { display: "none" } }}
      />
      <Tabs.Screen
        name="Contact"
        options={{ tabBarItemStyle: { display: "none" } }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    marginTop: 5,
    alignItems: "center",
  },
  tabLabel: {
    fontSize: 17,
    textAlign: "center",
    color: c,
  },
  activeTabLabel: {
    fontWeight: "bold",
  },
  underline: {
    position: "absolute",
    bottom: -8,
    width: "110%",
    height: 2,
    backgroundColor: c,
  },
  backButton: {
    paddingLeft: 15,
    paddingRight: 20,
  },
  backButtonText: {
    color: c,
    fontSize: 24,
  },
});