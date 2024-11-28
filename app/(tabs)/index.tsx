import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  Image
} from "react-native";
import fs from "fs";
import Svg, { Path } from "react-native-svg";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const Index = () => {
  
  return (
    <View style={styles.container}>
      
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
      <View>
      <Link href="./Contact" style={styles.info}>
        <Image
          source={require("@/assets/images/send.png")}
          style={{ width: 24, height: 24 }}
        />
        <Text>من نحن</Text>
      </Link>

         
      </View>
    </View>
  );
};

const AnimatedPath = Animated.createAnimatedComponent(Path);

const styles = StyleSheet.create({
  info: {
    display: "flex",
    backgroundColor: "#292966",
    color: "white",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    position: "absolute",
    bottom:10
  },
  
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  
  buttons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "50%",
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
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
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});

export default Index;