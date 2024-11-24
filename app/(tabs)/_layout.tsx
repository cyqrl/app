import { Tabs } from 'expo-router';
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const c = "#CCCCFF";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          height: 90,
          backgroundColor: 'black',
        },
        headerTitleStyle: {
          color: '#FFFFFF',
          fontSize: 20,
        },
        headerTitleAlign: 'center',
        tabBarStyle: {
          height: 80,
          backgroundColor: 'transparent',
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarBackground: () => (
          <View
            style={{
              height: 80,
              backgroundColor: '#292966',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        ),
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'الرئيسية',
          tabBarLabel: ({ focused }) => (
            <View style={styles.labelContainer}>
              <Text
                style={[
                  styles.tabLabel,
                  focused && styles.activeTabLabel,
                ]}
              >
                الرئيسية
              </Text>
              {focused && <View style={styles.underline} />}
            </View>
          ),
          tabBarIcon: () => (
            <Image
              source={{
                uri: 'https://media.discordapp.net/attachments/1308153830676103218/1309229557118795799/home-icon-silhouette.png?ex=6740d28a&is=673f810a&hm=51fdd8ebdd9a065a95c91ca36e24302a86683f8096108000177f81baec36306e&=&format=webp&quality=lossless',
              }}
              style={{ width: 28, height: 28 }}
            />
          ),
        }}
      />

      {/* Contact Tab */}
      <Tabs.Screen
        name="Contact"
        options={{
          title: 'اتصل بنا',
          tabBarLabel: ({ focused }) => (
            <View style={styles.labelContainer}>
              <Text
                style={[
                  styles.tabLabel,
                  focused && styles.activeTabLabel,
                ]}
              >
                اتصل بنا
              </Text>
              {focused && <View style={styles.underline} />}
            </View>
          ),
          tabBarIcon: () => (
            <Image
              source={{
                uri: 'https://media.discordapp.net/attachments/1308153830676103218/1309239435002515588/send.png?ex=6740dbbd&is=673f8a3d&hm=05ca13286d50219b5f9be7acc8aad8ace1066d3e9713817c8b81dc6964c36d14&=&format=webp&quality=lossless',
              }}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />

      {/* Achievements Tab */}
      <Tabs.Screen
        name="Achievements"
        options={{
          title: 'إنجازات',
          tabBarLabel: ({ focused }) => (
            <View style={styles.labelContainer}>
              <Text
                style={[
                  styles.tabLabel,
                  focused && styles.activeTabLabel,
                ]}
              >
                إنجازات
              </Text>
              {focused && <View style={styles.underline} />}
            </View>
          ),
          tabBarIcon: () => (
            <Image
              source={{
                uri: 'https://cdn.discordapp.com/attachments/1308153830676103218/1309174823083049113/medals.png?ex=67409f91&is=673f4e11&hm=52402bd45364725054cc754482153c772397944ee7c13d7f2c6686239870bb1c&',
              }}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
      />

      {/* Hidden Tab */}
      <Tabs.Screen
        name="first"
        options={{ tabBarItemStyle: { display: 'none' } }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 16,
    textAlign: 'center',
    color: c,
  },
  activeTabLabel: {
    fontWeight: 'bold',
  },
  underline: {

    position: 'absolute',
    bottom: -10,
    width: '110%',
    height: 2,
    backgroundColor: c,
  },
});
