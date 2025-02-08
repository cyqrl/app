import React, { useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FadeIn,
  SlideInUp,
  FadeInRight,
  FadeInLeft,
  withRepeat,
} from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Link } from "expo-router";

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;

const HomeScreen = () => {
  const floatAnim = useSharedValue(0);

  useEffect(() => {
    floatAnim.value = withRepeat(withTiming(-10, { duration: 1000 }), -1, true);
  }, []);

  const floatingButtonStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: floatAnim.value }],
  }));

  // Responsive design values
  const responsive = {
    titleSize: isTablet ? 32 : 26,
    subtitleSize: isTablet ? 22 : 18,
    sectionPadding: isTablet ? 25 : 20,
    iconSize: isTablet ? 34 : 28,
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Section */}
        <Animated.View
          entering={SlideInUp.duration(800)}
          style={[styles.hero, isTablet && styles.heroTablet]}
        >
          <Image
            source={require("@/assets/images/logo.png")}
            style={{ width: 120, height: 120 }}
          />
          <View>
            <Text style={[styles.title, { fontSize: responsive.titleSize }]}>
              بوابة الفرع الصناعي
            </Text>
            <Text
              style={[styles.subtitle, { fontSize: responsive.subtitleSize }]}
            >
              تطبيق تعليمي متكامل لطلبة الفرع الصناعي
            </Text>
          </View>
        </Animated.View>

        {/* Content Sections */}
        <View style={styles.contentContainer}>
          <Animated.View entering={FadeInRight.delay(200)}>
            <SectionCard
              title="حول المبادرة"
              content="تطوير تطبيق تعليمي يوفر كتبًا، نماذج تدريبية، امتحانات وزارية وحلولها، ومقاطع توضيحية للمواد التخصصية بهدف تحسين جودة التعليم."
              color="#2196F3"
              responsive={responsive}
            />
          </Animated.View>

          <Animated.View entering={FadeInLeft.delay(400)}>
            <SectionCard
              title="الشركاء في التنفيذ"
              content="مدرسة جنين الثانوية الصناعية، مؤسسة إنجاز، وزارة الاتصالات، والمدارس الصناعية في الوطن."
              color="#2196F3"
              responsive={responsive}
            />
          </Animated.View>

          <Animated.View entering={FadeInRight.delay(600)}>
            <SectionCard
              title="الفئات المستهدفة"
              content={[
                "• طلاب الفرع الصناعي",
                "• المعلمون والمهندسون في المدارس الصناعية",
                "• الطلاب المقبلون على الفرع الصناعي",
              ]}
              color="#2196F3"
              responsive={responsive}
              list
            />
          </Animated.View>

          <Animated.View entering={FadeInLeft.delay(800)}>
            <SectionCard
              title="أثر المبادرة"
              content={[
                "1. تسهيل الدراسة اليومية والاستعداد للامتحانات.",
                "2. تحسين جودة التعليم من خلال مصادر موثوقة.",
                "3. تعزيز الوعي بأهمية القطاع الصناعي في دعم الاقتصاد.",
              ]}
              color="#2196F3"
              responsive={responsive}
              list
            />
          </Animated.View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <Animated.View
        style={[styles.fab, floatingButtonStyle]}
        entering={FadeIn.delay(1000)}
      >
        <Link href="/Achievements" asChild>
          <TouchableOpacity style={styles.fabButton} activeOpacity={0.9}>
            <MaterialCommunityIcons
              name="trophy"
              size={responsive.iconSize}
              color="white"
            />
            <Text style={styles.fabText}>الانجازات </Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>
    </GestureHandlerRootView>
  );
};

type SectionCardProps = {
  title: string;
  content: string | string[];
  color: string;
  responsive: {
    sectionPadding: number;
  };
  list?: boolean;
};

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  content,
  color,
  responsive,
  list = false,
}) => (
  <View style={[styles.section, { padding: responsive.sectionPadding }]}>
    <Text style={[styles.sectionTitle, { color }]}>{title}</Text>
    {Array.isArray(content) ? (
      content.map((item, index) => (
        <Text key={index} style={[styles.sectionText, list && styles.listItem]}>
          {item}
        </Text>
      ))
    ) : (
      <Text style={styles.sectionText}>{content}</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollContent: {
    paddingBottom: 100,
  },
  hero: {
    backgroundColor: "#2196F3",
    paddingVertical: 40,
    paddingHorizontal: 25,
    marginBottom: 30,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heroTablet: {
    paddingVertical: 60,
    marginHorizontal: width * 0.1,
    borderRadius: 40,
    marginTop: 30,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    textAlign: "right",
    fontFamily: "NotoArabic-Regular",
    lineHeight: 38,
  },
  subtitle: {
    color: "rgba(255,255,255,0.9)",
    textAlign: "right",
    marginTop: 15,
    fontFamily: "NotoArabic-Regular",
    lineHeight: 24,
  },
  contentContainer: {
    paddingHorizontal: width * 0.05,
    marginTop: 20,
  },
  section: {
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    fontFamily: "NotoArabic-Regular",
    textAlign: "right",
  },
  sectionText: {
    color: "#212121",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "right",
    fontFamily: "NotoArabic-Regular",
    marginBottom: 8,
  },
  listItem: {
    backgroundColor: "#F8F9FA",
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
  },
  fab: {
    position: "relative",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 8,
  },
  fabButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  fabText: {
    color: "white",
    fontSize: 16,
    marginRight: 10,
    fontFamily: "NotoArabic-Regular",
    fontWeight: "700",
  },
});

export default HomeScreen;
