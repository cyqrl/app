import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Svg
          id="color-wave"
          viewBox="0 0 1440 126"
          style={styles.svg}
        >

          <Path
            d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z"
            fill="#fff"
          />
        </Svg>
        <Text style={styles.title}>أهلا وسهلا بكم في بوابة الصناعي</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hero: {
    flex: 1,
    maxHeight: "80%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: "linear-gradient(to bottom, #292966, #5c5c99)",
    position: 'relative',
    overflow:"hidden"
  },
  svg: {

    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    
  },
  title: {
    
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Index;
