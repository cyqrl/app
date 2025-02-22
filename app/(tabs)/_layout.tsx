import { Tabs } from "expo-router";
import React, { useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
  Animated,
} from "react-native";
import type { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";

interface TabButtonProps extends BottomTabBarButtonProps {
  iconSource: ImageSourcePropType;
  label: string;
  iconSizeRange?: [number, number];
}

const TabButton = ({
  iconSource,
  label,
  iconSizeRange,
  ...props
}: TabButtonProps) => {
  const [iconInactiveSize, iconActiveSize] = iconSizeRange || [24, 32];
  const iconSize = props.accessibilityState?.selected
    ? iconActiveSize
    : iconInactiveSize;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: props.accessibilityState?.selected ? 0 : -10,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [props.accessibilityState?.selected]);

  return (
    <Pressable
      {...props}
      style={styles.tabPressable}
      accessibilityRole="button"
    >
      <Animated.View
        style={[
          props.accessibilityState?.selected
            ? styles.activeContainer
            : styles.inactiveContainer,
          { transform: [{ translateY }] },
        ]}
      >
        <Image
          source={iconSource}
          style={{ width: iconSize, height: iconSize }}
          resizeMode="contain"
        />
        <Text
          style={
            props.accessibilityState?.selected
              ? styles.activeLabel
              : styles.inactiveLabel
          }
        >
          {label}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: "center",
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => <View style={styles.tabBarBackground} />,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "الرئيسية",
          tabBarButton: (props) => (
            <TabButton
              {...props}
              iconSizeRange={[28, 28]}
              iconSource={require("@/assets/images/home.png")}
              label="الرئيسية"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="second"
        options={{
          title: "ثاني ثانوي",
          tabBarButton: (props) => (
            <TabButton
              {...props}
              iconSizeRange={[28, 28]}
              iconSource={require("@/assets/images/second.png")}
              label="ثاني ثانوي"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="first"
        options={{
          title: "أول ثانوي",
          tabBarButton: (props) => (
            <TabButton
              {...props}
              iconSizeRange={[28, 28]}
              iconSource={require("@/assets/images/first.png")}
              label="أول ثانوي"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Achievements"
        options={{
          title: "إنجازات",
          tabBarItemStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: "rgba(33, 150, 243, 0.95)",
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 25,
  },
  tabBar: {
    height: 80,
    backgroundColor: "transparent",
    elevation: 0,
    borderTopWidth: 0,
  },
  tabBarBackground: {
    height: 80,
    backgroundColor: "rgba(27, 128, 211, 0.95)",
    justifyContent: "center",
    alignItems: "center",
  },
  tabPressable: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inactiveContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  inactiveLabel: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  activeContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  activeLabel: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    marginHorizontal: 3,
  },
});
