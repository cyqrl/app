import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const Index = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 2500,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [animatedValue]);

  // Interpolating the animation to affect the wave height
  const wavePath = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      `M0,50 C${width},100 ${width},30 ${width * 10},50 L${width},150 L0,150 Z`,
      `M2,60 C${width * 0},72 ${width * 0},-10 ${width * 10},50 L${width * 5},150 L0,150 Z`,
    ],
  });

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#292966", "#5c5c99"]} style={styles.hero}>
        <Text style={styles.title}>أهلا وسهلا بكم في بوابة الصناعي</Text>
        <Svg
          width={width}
          height={150}
          viewBox={`0 0 ${width} 150`}
          style={styles.svg}
        >
          <AnimatedPath
            d={wavePath}
            fill="#fff"
          />
        </Svg>
      </LinearGradient>
      <View style={styles.buttons}>
        <LinearGradient colors={["#292966", "#5c5c99"]} style={styles.button}>
          <Link style={styles.link} href={"/(tabs)/first"}>
            <Text style={styles.buttonText}>الأول ثانوي</Text>
          </Link>
        </LinearGradient>
        <LinearGradient colors={["#5c5c99", "#292966"]} style={styles.button}>
          <Link style={styles.link} href={"/(tabs)/first"}>
            <Text style={styles.buttonText}>الثاني ثانوي</Text>
          </Link>
        </LinearGradient>
      </View>
    </View>
  );
};

const AnimatedPath = Animated.createAnimatedComponent(Path);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  hero: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  svg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 70,
    justifyContent: "center",
    zIndex: 10,
  },
  buttons: {
    position: "relative",
    top: -20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "60%",
    height: 120,
    borderRadius: 10,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    padding: 17,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});

export default Index;