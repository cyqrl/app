import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MathPage from "@/components/subjects12/MathPage";
import EnglishPage from "@/components/subjects12/EnglishPage";
import ArabicPage from "@/components/subjects12/ArabicPage";
import ReligionPage from "@/components/subjects12/ReligionPage";
import ITPage from "@/components/subjects12/ITPage";
import PhysicsPage from "@/components/subjects12/PhysicsPage";
import GraphicPage from "@/components/subjects12/GraphicPage";
import WebsitesPage from "@/components/subjects12/WebsitesPage";
import RefrigerationPage from "@/components/subjects12/RefrigerationPage";
import SanitaryPage from "@/components/subjects12/SanitaryPage";
import BlacksmithingPage from "@/components/subjects12/BlacksmithingPage";
import EnergyPage from "@/components/subjects12/EnergyPage";
import UseElectricityPage from "@/components/subjects12/UseElectricityPage";
import CarsElectricityPage from "@/components/subjects12/CarsElectricityPage";
import SmartHomesPage from "@/components/subjects12/SmartHomesPage";
import MechanicsPage from "@/components/subjects12/MechanicsPage";
import CarpentryPage from "@/components/subjects12/CarpentryPage";
import nextItem from "@/components/subjects12/nextItem";

import { generalStyles } from "./styles";
export var selectedSubject12 = "ثاني ثانوي";
const HomeScreen = () => {
  const drawers = {
    drawer1: ["رياضيات", "فيزياء", "التربية الاسلامية", "اللغة الانجليزية", "اللغة العربية", "تكنولوجيا المعلومات"],
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
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [lastSubject, setLastSubject] = useState<string | null>(null);


  const renderPage = () => {
    switch (currentPage) {

      // Academic subjects
      case "math":
        return <MathPage />;
      case "english":
        return <EnglishPage />;
      case "arabic":
        return <ArabicPage />;
      case "religion":
        return <ReligionPage />;
      case "IT":
        return <ITPage />;
      case "physics":
        return <PhysicsPage />;

      // Technical subjects
      case "graphic":
        return <GraphicPage />;
      case "websites":
        return <WebsitesPage />;
      case "refrigeration":
        return <RefrigerationPage />;
      case "sanitary":
        return <SanitaryPage />;
      case "blacksmithing":
        return <BlacksmithingPage />;
      case "energy":
        return <EnergyPage />;
      case "use_electricity":
        return <UseElectricityPage />;
      case "cars_electricity":
        return <CarsElectricityPage />;
      case "smart_homes":
        return <SmartHomesPage />;
      case "mechanics":
        return <MechanicsPage />;
      case "carpentry":
        return <CarpentryPage />;
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


  const handleDrawerNavigation = (drawer: string, index: number) => {
      if (drawer === "drawer1") {
        selectedSubject12 = drawers.drawer1[index];
        if (selectedSubject12 === "رياضيات") {
          setCurrentPage("math");
        } else if (selectedSubject12 === "اللغة العربية") {
          setCurrentPage("arabic");
        } else if (selectedSubject12 === "اللغة الانجليزية") {
          setCurrentPage("english");
        } else if (selectedSubject12 === "التربية الاسلامية") {
          setCurrentPage("religion");
        } else if (selectedSubject12 === "تكنولوجيا المعلومات") {
          setCurrentPage("IT");
        } else if (selectedSubject12 === "فيزياء") {
          setCurrentPage("physics");
        }
      } else if (drawer === "drawer2") {
        selectedSubject12 = drawers.drawer2[index];
        if (selectedSubject12 === "تصميم الجرافيكي") {
          setCurrentPage("graphic");
        } else if (selectedSubject12 === "صفحات الانترنت") {
          setCurrentPage("websites");
        } else if (selectedSubject12 === "تكييف وتبريد") {
          setCurrentPage("refrigeration");
        } else if (selectedSubject12 === "تمديدات صحية") {
          setCurrentPage("sanitary");
        } else if (selectedSubject12 === "حدادة") {
          setCurrentPage("blacksmithing");
        } else if (selectedSubject12 === "طاقة متجددة") {
          setCurrentPage("energy");
        } else if (selectedSubject12 === "كهرباء استعمال") {
          setCurrentPage("use_electricity");
        } else if (selectedSubject12 === "كهرباء سيارات") {
          setCurrentPage("cars_electricity");
        } else if (selectedSubject12 === "مباني ذكية") {
          setCurrentPage("smart_homes");
        } else if (selectedSubject12 === "ميكانيك سيارات") {
          setCurrentPage("mechanics");
        } else if (selectedSubject12 === "نجارة") {
          setCurrentPage("carpentry");
        }
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
                  handleDrawerNavigation("drawer1", selectedDrawer1)
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
                  handleDrawerNavigation("drawer2", selectedDrawer2)
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
