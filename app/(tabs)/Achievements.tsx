import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const achievementsData = [
  {
    id: 1,
    name: "علي محمد",
    number: "2018",
    major: "تقنية المعلومات",
    description:
      "حصلت على فرصة عمل في شركة عالمية مباشرة بعد التخرج من خلال المهارات التي اكتسبتها في التعليم المهني",
  },
  {
    id: 2,
    name: "فاطمة أحمد",
    number: "2019",
    major: "الهندسة الكهربائية",
    description:
      "ساهمت في تطوير نظام إنارة ذكي كجزء من مشروع التخرج وحصلت على جائزة الابتكار",
  },
  // Add more achievements as needed
];

export default function Achievements() {
  return (
    <LinearGradient colors={["#CBCBFF", "#FFFFFF"]} style={styles.container}>
      <Text style={styles.header}>إنجازات الخريجين</Text>

      <FlatList
        data={achievementsData}
        renderItem={({ item }) => (
          <LinearGradient
            colors={["#6E3EFF", "#FF7EB3"]}
            style={styles.card}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.number}>{item.number}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.major}>{item.major}</Text>
            <Text style={styles.description}>"{item.description}"</Text>
          </LinearGradient>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2D2D2D",
    textAlign: "center",
    marginVertical: 20,
  },
  grid: {
    paddingHorizontal: 8,
  },
  card: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 15,
    minHeight: 200,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "right",
    marginBottom: 8,
  },
  number: {
    fontSize: 16,
    color: "white",
    textAlign: "right",
    opacity: 0.8,
  },
  major: {
    fontSize: 14,
    color: "white",
    textAlign: "right",
    fontStyle: "italic",
    marginBottom: 12,
  },
  description: {
    fontSize: 12,
    color: "white",
    textAlign: "right",
    lineHeight: 18,
  },
});
