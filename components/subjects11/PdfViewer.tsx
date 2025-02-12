import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as Linking from "expo-linking";
import Animated, { SlideInRight, FadeIn } from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";

interface PdfItem {
  id: string;
  name: string;
  uri: string;
}

interface PdfData {
  exams: PdfItem[];
  attachments: PdfItem[];
}

interface PdfViewerProps {
  subjectKey: string;
  subjectName: string;
}
const PdfViewer: React.FC<PdfViewerProps> = ({ subjectKey, subjectName }) => {
  const [pdfData, setPdfData] = useState<PdfData>({
    exams: [],
    attachments: [],
  });
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState<
    "home" | "exams" | "attachments"
  >("home");
  const windowWidth = Dimensions.get("window").width;
  const isTablet = windowWidth > 768;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/cyqrl/9161e3cbfe3427446c5962a2d19bebeb/raw/content.json"
        );
        const data = await response.json();
        const gradeData = data["11"];
        const subjectData = gradeData[subjectKey];
        
        if (subjectData) {
          setPdfData({
            exams: subjectData.exams || [],
            attachments: subjectData.attachments || [],
          });
        } else {
          setPdfData({ exams: [], attachments: [] });
        }
      } catch (error) {
        Alert.alert("Error", "Failed to fetch data");
        setPdfData({ exams: [], attachments: [] });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subjectKey]);

  const openPdf = async (uri: string) => {
    try {
      const supported = await Linking.canOpenURL(uri);
      if (supported) {
        await Linking.openURL(uri);
      } else {
        Alert.alert("Error", "No PDF reader app found");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to open PDF");
    }
  };

  const renderPdfList = (items: PdfItem[]) => (
    <Animated.FlatList
      data={items}
      keyExtractor={(item) => item.id}
      numColumns={isTablet ? 3 : 1}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <Animated.View entering={SlideInRight.delay(index * 50)}>
          <TouchableOpacity
            style={styles.pdfItem}
            onPress={() => openPdf(item.uri)}
            activeOpacity={0.7}
          >
            <View style={styles.pdfIconContainer}>
              <MaterialIcons name="picture-as-pdf" size={40} color="#4CAF50" />
            </View>
            <Text style={styles.pdfName} numberOfLines={2} ellipsizeMode="tail">
              {item.name}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    />
  );

  const renderContent = () => {
    if (loading) {
      return (
        <Animated.View entering={FadeIn} style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2196F3" />
        </Animated.View>
      );
    }

    switch (currentTab) {
      case "exams":
        return renderPdfList(pdfData.exams);
      case "attachments":
        return renderPdfList(pdfData.attachments);
      default:
        return (
          <Animated.View
            style={[styles.container, isTablet && { flexDirection: "row" }]}
            entering={FadeIn}
          >
            <TouchableOpacity
              style={styles.contentContainer}
              onPress={() => setCurrentTab("exams")}
            >
              <Image
                style={styles.buttonImage}
                source={require("@/assets/images/exams-button.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contentContainer}
              onPress={() => setCurrentTab("attachments")}
            >
              <Image
                style={styles.buttonImage}
                source={require("@/assets/images/attachments-button.png")}
              />
            </TouchableOpacity>
          </Animated.View>
        );
    }
  };

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.subjectTitle}>{subjectName}</Text>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  subjectTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2196F3",
    marginVertical: 20,
    width: "100%",
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    margin: 20,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  buttonImage: {
    width: 350,
    height: 200,
  },
  pdfItem: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    margin: 10,
    borderRadius: 10,
    padding: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: 300,
  },
  pdfIconContainer: {
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  pdfName: {
    color: "#212121",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
    marginTop: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listContent: {
    paddingTop: 20,
    paddingBottom: 100,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

export default PdfViewer;
