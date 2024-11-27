import { Tabs } from "expo-router";
import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const c = "#fff";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          height: 90,
          backgroundColor: "black",
        },
        headerTitleStyle: {
          color: "#FFFFFF",
          fontSize: 20,
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
              backgroundColor: "#292966",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        ),
      }}
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

      {/* Contact Tab */}
      <Tabs.Screen
        name="Contact"
        options={{
          title: "من نحن",
          tabBarLabel: ({ focused }) => (
            <View style={styles.labelContainer}>
              <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
                من نحن
              </Text>
              {focused && <View style={styles.underline} />}
            </View>
          ),
          tabBarIcon: () => (
            <Image
              source={require("@/assets/images/send.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />

      {/* Achievements Tab */}
      <Tabs.Screen
        name="Achievements"
        options={{
          title: "إنجازات",
          tabBarLabel: ({ focused }) => (
            <View style={styles.labelContainer}>
              <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
                إنجازات
              </Text>
              {focused && <View style={styles.underline} />}
            </View>
          ),
          tabBarIcon: () => (
            <Image
              source={require("@/assets/images/medals.png")}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
      />

      {/* Hidden Tab */}
      <Tabs.Screen
        name="first"
        options={{ tabBarItemStyle: { display: "none" } }}
      />
      <Tabs.Screen
        name="second"
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
    bottom: -10,
    width: "110%",
    height: 2,
    backgroundColor: c,
  },
});
