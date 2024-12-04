import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  Image,
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
      `M2,60 C${0},72 ${0},-10 ${width * 10},50 L${width * 5},150 L0,150 Z`,
    ],
  });

  return (
    <LinearGradient
      colors={["rgb(203, 203, 255)", "rgb(255, 255, 255)"]}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/pal.png")}
          style={styles.topImage1}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/injaz.png")}
          style={styles.topImage2}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/jiss_school.png")}
          style={styles.topImage3}
          resizeMode="contain"
        />
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/Industry_Portal_logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <LinearGradient colors={["#292966", "#5c5c99"]} style={styles.hero}>
        <Text style={styles.title}>مرحبا بكم {"\n"} في بوابة الصناعي</Text>
        <Svg
          width={width}
          height={150}
          viewBox={`0 0 ${width} 150`}
          style={styles.svg}
        >
          <AnimatedPath d={wavePath} fill="#e6e6ff" />
        </Svg>
      </LinearGradient>
      <View style={styles.buttons}>
        <LinearGradient colors={["#292966", "#5c5c99"]} style={styles.button}>
          <Link style={styles.link} href={"/(tabs)/first"}>
            <Text style={styles.buttonText}>الأول ثانوي</Text>
          </Link>
        </LinearGradient>
        <LinearGradient colors={["#5c5c99", "#292966"]} style={styles.button}>
          <Link style={styles.link} href={"./second"}>
            <Text style={styles.buttonText}>الثاني ثانوي</Text>
          </Link>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

const AnimatedPath = Animated.createAnimatedComponent(Path);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage:
      "linear-gradient(to bottom, rgb(203, 203, 255), rgb(255, 255, 255) 80%);",
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 20,
    flexDirection: "row",
  },
  topImage1: {
    width: 60,
    height: 60,
    marginLeft: 10,
  },
  topImage2: {
    width: 90,
    height: 90,
    marginLeft: -20,
    marginTop: -10,
  },
  topImage3: {
    width: 50,
    height: 50,
    marginLeft: -20,
    marginTop: 6,
  },
  logoContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 20,
    flexDirection: "row",
  },
  logo: {
    width: 95,
    height: 95,
    marginTop: -10,
    marginRight: -25,
  },
  hero: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: -6,
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
    fontSize: 40,
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
