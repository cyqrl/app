import { Tabs } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  Pressable,
  PressableProps,
  ImageSourcePropType,
} from "react-native";
import type { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";

interface TabButtonProps extends PressableProps {
  iconSource: ImageSourcePropType;
  label: string;
  selected?: boolean;
  iconSizeRange?: [number, number];
}

const TabButton = ({
  selected = false,
  iconSource,
  label,
  iconSizeRange,
  ...props
}: TabButtonProps) => {
  const [iconInactiveSize, iconActiveSize] = iconSizeRange || [24, 32];
  const animValue = useRef(new Animated.Value(selected ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: selected ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [selected]);

  const inactiveOpacity = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const activeOpacity = animValue;
  const iconSize = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [iconInactiveSize, iconActiveSize],
  });
  const inactiveScale = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1.1, 1],
  });
  const baseTranslateY = 5;
  const activeExtraTranslateY = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  return (
    <Pressable
      {...props}
      style={styles.tabPressable}
      accessibilityRole="button"
      accessibilityState={{ selected }}
    >
      <Animated.View
        style={[
          styles.inactiveContainer,
          {
            opacity: inactiveOpacity,
            transform: [
              { translateY: baseTranslateY },
              { scale: inactiveScale },
            ],
          },
        ]}
      >
        <Animated.Image
          source={iconSource}
          style={[
            {
              width: iconSize,
              height: iconSize,
            },
          ]}
          resizeMode="contain"
        />
        <Text style={styles.inactiveLabel}>{label}</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.activeContainer,
          {
            opacity: activeOpacity,
            transform: [
              { translateY: Animated.add(baseTranslateY, activeExtraTranslateY) },
            ],
          },
        ]}
      >
        <View style={styles.rowContent}>
          <Animated.Image
            source={iconSource}
            style={[
              styles.activeIcon,
              {
                width: iconSize,
                height: iconSize,
              },
            ]}
            resizeMode="contain"
          />
          <Text style={styles.activeLabel}>{label}</Text>
        </View>
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
          tabBarButton: (props: BottomTabBarButtonProps) => {
            const { accessibilityState, onPress, ...rest } = props;
            const selected = accessibilityState?.selected || false;
            return (
              <TabButton
                {...rest}
                selected={selected}
                onPress={onPress}
                iconSource={require("@/assets/images/home.png")}
                label="الرئيسية"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="second"
        options={{
          title: "ثاني ثانوي",
          tabBarButton: (props: BottomTabBarButtonProps) => {
            const { accessibilityState, onPress, ...rest } = props;
            const selected = accessibilityState?.selected || false;
            return (
              <TabButton
                {...rest}
                selected={selected}
                onPress={onPress}
                iconSizeRange={[28, 38]}
                iconSource={require("@/assets/images/second.png")}
                label="ثاني ثانوي"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="first"
        options={{
          title: "أول ثانوي",
          tabBarButton: (props: BottomTabBarButtonProps) => {
            const { accessibilityState, onPress, ...rest } = props;
            const selected = accessibilityState?.selected || false;
            return (
              <TabButton
                {...rest}
                selected={selected}
                onPress={onPress}
                iconSource={require("@/assets/images/first.png")}
                label="أول ثانوي"
              />
            );
          },
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
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: 5,
    
  },
  inactiveLabel: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    
  },
  activeContainer: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    
  },
  rowContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  activeIcon: {
    marginRight: 8,
  },
  activeLabel: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});
