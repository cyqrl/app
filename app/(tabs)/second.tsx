import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MathPage from "@/components/subjects/MathPage";
import EnglishPage from "@/components/subjects/EnglishPage";
import ArabicPage from "@/components/subjects/ArabicPage";
import nextItem from "@/components/subjects/nextItem";
import { generalStyles } from "./styles";

const HomeScreen = () => {
  const drawers = {
    drawer1: ["رياضيات", "فيزياء", "دين", "إنجليزي", "عربي", "تكنولوجيا"],
    drawer2: [
      "تصميم الجرافيكي",
      "صفحات الانترنت",
      "تكييف وتبريد",
      "تمديدات صحية",
      "حدادة",
      "طاقة متجددة",
      "كهرباء استعمال",
      "كهرباء سيارات",
      "مباني ذكية",
      "ميكانيك سيارات",
      "نجارة",
    ],
  };

  const [selectedDrawer1, setSelectedDrawer1] = useState(0);
  const [selectedDrawer2, setSelectedDrawer2] = useState(0);
  const [currentPage, setCurrentPage] = useState<string>("home"); // Explicitly typed as string
  const [lastSubject, setLastSubject] = useState<string | null>(null); // Accepts string or null


  const renderPage = () => {
    switch (currentPage) {
      case "math":
        return <MathPage />;
      case "english":
        return <EnglishPage />;
      case "arabic":
        return <ArabicPage />;
      default:
        return null;
    }
  };

  const handleChooseSubject = () => {
    if (currentPage === "home" && lastSubject) {
      setCurrentPage(lastSubject);
    } else if (currentPage !== "home") {
      setLastSubject(currentPage);
      setCurrentPage("home");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleChooseSubject}
        style={[
          styles.dropdownButton,
          currentPage === "home" && !lastSubject ? { opacity: 0.5 } : {},
        ]}
        disabled={currentPage === "home" && !lastSubject} // Disable if on home page without a last subject
      >
        <Text style={styles.dropdownText}>
          {currentPage === "home" && lastSubject
            ? "اختر المادة ▲"
            : "اختر المادة ▼"}
        </Text>
      </TouchableOpacity>

      {currentPage === "home" ? (
        <>
          <View style={styles.drawer}>
            <Text
              style={{
                transform: [{ translateY: -25 }],
                fontSize: 20,
                backgroundColor: "white",
              }}
            >
              المواد الاكاديمية
            </Text>
            <Text style={styles.drawerContent}>
              {drawers.drawer1[selectedDrawer1]}
            </Text>
            <View style={styles.nextContainer}>
              <TouchableOpacity
                onPress={() =>
                  nextItem(
                    selectedDrawer1,
                    setSelectedDrawer1,
                    drawers.drawer1,
                    "backward"
                  )
                }
              >
                <Text style={styles.arrow}>◀</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setCurrentPage(
                    drawers.drawer1[selectedDrawer1] === "رياضيات"
                      ? "math"
                      : "home"
                  )
                }
                style={generalStyles.button}
              >
                <Text style={styles.actionButtonText}>انتقال</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  nextItem(
                    selectedDrawer1,
                    setSelectedDrawer1,
                    drawers.drawer1,
                    "forward"
                  )
                }
              >
                <Text style={styles.arrow}>▶</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.drawer}>
            <Text
              style={{
                transform: [{ translateY: -25 }],
                fontSize: 20,
                backgroundColor: "white",
              }}
            >
              المواد المهنية
            </Text>
            <Text style={styles.drawerContent}>
              {drawers.drawer2[selectedDrawer2]}
            </Text>
            <View style={styles.nextContainer}>
              <TouchableOpacity
                onPress={() =>
                  nextItem(
                    selectedDrawer2,
                    setSelectedDrawer2,
                    drawers.drawer2,
                    "backward"
                  )
                }
              >
                <Text style={styles.arrow}>◀</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setCurrentPage(
                    drawers.drawer2[selectedDrawer2] === "رياضيات"
                      ? "math"
                      : "home"
                  )
                }
                style={generalStyles.button}
              >
                <Text style={styles.actionButtonText}>انتقال</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  nextItem(
                    selectedDrawer2,
                    setSelectedDrawer2,
                    drawers.drawer2,
                    "forward"
                  )
                }
              >
                <Text style={styles.arrow}>▶</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <View style={styles.pageContainer}>{renderPage()}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownButton: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    position: "fixed",
    top:80,
    zIndex: 100,
  },
  dropdownText: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
  },
  drawer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BDBDBD",
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginVertical: 40,
    borderRadius: 5,
    width: "70%",
  },
  arrow: {
    fontSize: 40,
    color: "#2196F3",
  },
  drawerContent: {
    flex: 1,
    fontSize: 35,
    top: 30,
    color: "#212121",
  },
  
  actionButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
  pageContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  nextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 70,
    bottom: 5,
    width: "90%",
  },
});

export default HomeScreen;
