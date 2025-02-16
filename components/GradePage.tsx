import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import PdfViewer from "@/components/PdfViewer";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

interface Drawer {
  name: string;
  key: string;
}

interface SubjectScreenProps {
  initialSubjectName: string;
  drawers: {
    drawer1: Drawer[];
    drawer2: Drawer[];
  };
  grade: string;
}

const SubjectScreen: React.FC<SubjectScreenProps> = ({
  initialSubjectName,
  drawers,
  grade,
}) => {
  const [selectedDrawer1, setSelectedDrawer1] = useState(0);
  const [selectedDrawer2, setSelectedDrawer2] = useState(0);
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [lastSubject, setLastSubject] = useState<string | null>(null);
  const [selectedSubjectName, setSelectedSubjectName] = 
    useState(initialSubjectName);

  const handleChooseSubject = () => {
    if (currentPage === "home" && lastSubject) {
      setCurrentPage(lastSubject);
    } else if (currentPage !== "home") {
      setLastSubject(currentPage);
      setCurrentPage("home");
    }
  };

  const handleDrawerNavigation = (drawer: 'drawer1' | 'drawer2', index: number) => {
    const subject = drawers[drawer][index];
    setSelectedSubjectName(subject.name);
    setCurrentPage(subject.key);
  };

  const nextItem = (currentIndex: number, setter: any, items: any[], direction: 'forward' | 'backward') => {
    const newIndex = direction === 'forward' 
      ? (currentIndex + 1) % items.length 
      : (currentIndex - 1 + items.length) % items.length;
    setter(newIndex);
  };

  const renderDrawer = (drawer: 'drawer1' | 'drawer2', selectedIndex: number, setSelectedIndex: any, label: string) => (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerLabel}>{label}</Text>
      </View>
      
      <View style={styles.drawerBody}>
        <Text 
          style={styles.subjectText}
          numberOfLines={2}
          adjustsFontSizeToFit
          minimumFontScale={0.8}
        >
          {drawers[drawer][selectedIndex].name}
        </Text>
      </View>

      <View style={styles.drawerFooter}>
        <TouchableOpacity
          onPress={() => nextItem(selectedIndex, setSelectedIndex, drawers[drawer], 'backward')}
          style={styles.arrowButton}
        >
          <Text style={styles.arrow}>◀</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleDrawerNavigation(drawer, selectedIndex)}
          style={styles.actionButton}
        >
          <Text style={styles.actionButtonText}>انتقال</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => nextItem(selectedIndex, setSelectedIndex, drawers[drawer], 'forward')}
          style={styles.arrowButton}
        >
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleChooseSubject}
        style={[
          styles.dropdownButton,
          currentPage === "home" && !lastSubject && styles.disabledButton
        ]}
        disabled={currentPage === "home" && !lastSubject}
      >
        <Text style={styles.dropdownText}>
          {currentPage === "home" && lastSubject ? "اختر المادة ▲" : "اختر المادة ▼"}
        </Text>
      </TouchableOpacity>

      {currentPage === "home" ? (
        <View style={styles.drawersWrapper}>
          {renderDrawer('drawer1', selectedDrawer1, setSelectedDrawer1, "المواد الاكاديمية")}
          {renderDrawer('drawer2', selectedDrawer2, setSelectedDrawer2, "المواد المهنية")}
        </View>
      ) : (
        <View style={styles.pdfContainer}>
          <PdfViewer
            grade={grade}
            subjectKey={currentPage}
            subjectName={selectedSubjectName}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  dropdownButton: {
    padding: 12,
    backgroundColor: "#2196F3",
    borderRadius: 8,
    marginTop: SCREEN_HEIGHT * 0.05,
    elevation: 4,
  },
  disabledButton: {
    opacity: 0.5,
  },
  dropdownText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Roboto-Medium",
  },
  drawersWrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  drawerContainer: {
    flex: 0.45,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    overflow: 'hidden',
  },
  drawerHeader: {
    backgroundColor: '#E3F2FD',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#BBDEFB',
  },
  drawerLabel: {
    fontSize: SCREEN_HEIGHT < 750 ? 16 : 18,
    color: '#1976D2',
    fontWeight: '600',
    textAlign: 'center',
  },
  drawerBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  subjectText: {
    fontSize: SCREEN_HEIGHT < 750 ? 25 : 30,
    color: '#263238',
    textAlign: 'center',
    lineHeight: SCREEN_HEIGHT < 750 ? 28 : 32,
    maxWidth: '90%',
  },
  drawerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFF',
  },
  arrowButton: {
    padding: 10,
    minWidth: 50,
    alignItems: 'center',
  },
  arrow: {
    fontSize: SCREEN_HEIGHT < 750 ? 28 : 32,
    color: '#2196F3',
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 8,
    elevation: 3,
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: SCREEN_HEIGHT < 750 ? 16 : 18,
    fontWeight: '600',
  },
  pdfContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
});

export default SubjectScreen;