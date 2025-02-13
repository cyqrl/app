import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PdfViewer from "@/components/subjects11/PdfViewer";
import nextItem from "@/components/subjects11/nextItem";
import { generalStyles } from "./styles";

const HomeScreen = () => {
  const drawers = {
    drawer1: [
      { name: "رياضيات", key: "math" },
      { name: "فيزياء", key: "physics" },
      { name: "التربية الاسلامية", key: "religion" },
      { name: "اللغة الانجليزية", key: "english" },
      { name: "اللغة العربية", key: "arabic" },
      { name: "تكنولوجيا المعلومات", key: "IT" },
    ],
    drawer2: [
      { name: "تصميم الجرافيكي", key: "graphic" },
      { name: "صفحات الانترنت", key: "websites" },
      { name: "تكييف وتبريد", key: "refrigeration" },
      { name: "تمديدات صحية", key: "sanitary" },
      { name: "حدادة", key: "blacksmithing" },
      { name: "طاقة متجددة", key: "energy" },
      { name: "كهرباء استعمال", key: "use_electricity" },
      { name: "كهرباء سيارات", key: "cars_electricity" },
      { name: "مباني ذكية", key: "smart_homes" },
      { name: "ميكانيك سيارات", key: "mechanics" },
      { name: "نجارة", key: "carpentry" },
      { name: "رسم صناعي", key: "drawing" },
    ],
  };

  const [selectedDrawer1, setSelectedDrawer1] = useState(0);
  const [selectedDrawer2, setSelectedDrawer2] = useState(0);
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [lastSubject, setLastSubject] = useState<string | null>(null);
  const [selectedSubjectName, setSelectedSubjectName] = useState("أول ثانوي");

  const handleChooseSubject = () => {
    if (currentPage === "home" && lastSubject) {
      setCurrentPage(lastSubject);
    } else if (currentPage !== "home") {
      setLastSubject(currentPage);
      setCurrentPage("home");
    }
  };

  const handleDrawerNavigation = (drawer: string, index: number) => {
    if (drawer === "drawer1") {
      const subject = drawers.drawer1[index];
      setSelectedSubjectName(subject.name);
      setCurrentPage(subject.key);
    } else if (drawer === "drawer2") {
      const subject = drawers.drawer2[index];
      setSelectedSubjectName(subject.name);
      setCurrentPage(subject.key);
    }
  };

  const renderPage = () => {
    if (currentPage === "home") return null;
    return <PdfViewer subjectKey={currentPage} subjectName={selectedSubjectName} />;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleChooseSubject}
        style={[
          styles.dropdownButton,
          currentPage === "home" && !lastSubject ? { opacity: 0.5 } : {},
        ]}
        disabled={currentPage === "home" && !lastSubject}
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
            <Text style={styles.drawerLabel}>المواد الاكاديمية</Text>
            <Text style={styles.drawerContent}>
              {drawers.drawer1[selectedDrawer1].name}
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
                onPress={() => handleDrawerNavigation("drawer1", selectedDrawer1)}
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
            <Text style={styles.drawerLabel}>المواد المهنية</Text>
            <Text style={styles.drawerContent}>
              {drawers.drawer2[selectedDrawer2].name}
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
                onPress={() => handleDrawerNavigation("drawer2", selectedDrawer2)}
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
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    position: "absolute",
    top: 20,
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
    marginVertical: 30,
    borderRadius: 5,
    width: "70%",
    height: "30%",
  },
  drawerLabel: {
    transform: [{ translateY: -25 }],
    fontSize: 20,
    backgroundColor: "white",
  },
  arrow: {
    fontSize: 40,
    color: "#2196F3",
  },
  drawerContent: {
    flex: 1,
    fontSize: 30,
    top: 40,
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