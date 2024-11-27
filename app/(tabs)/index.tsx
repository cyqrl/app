import React from "react";
import { StyleSheet, View, Text,Dimensions, Animated } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
const { width } = Dimensions.get("window");

const Index = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#292966", "#5c5c99"]} style={styles.hero}>
        <Svg id="color-wave" viewBox="0 0 1440 126" style={styles.svg}>
          <Path
            d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z"
            fill="#fff"
            stroke="none"
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
          <Link style={styles.link} href={"./second"}>
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
    backgroundColor: "#ccccff",
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
    fontSize: 24,
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