import React, { useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FadeIn,
  SlideInDown,
  SlideInUp,
  FadeInRight,
  FadeInLeft,
  withRepeat,
} from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Link, router } from "expo-router";
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

  const handleAchievements = () => {
    Alert.alert("الإنجازات", "قائمة إنجازات الطلاب ستظهر هنا!");
  };

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
          <Text style={[styles.title, { fontSize: responsive.titleSize }]}>
            أكاديمية المستقبل المهنية
          </Text>
          <Text
            style={[styles.subtitle, { fontSize: responsive.subtitleSize }]}
          >
            نحو تأهيل مهني متميز وتطوير مستدام
          </Text>
        </Animated.View>

        {/* Content Sections */}
        <View style={styles.contentContainer}>
          <Animated.View entering={FadeInRight.delay(200)}>
            <SectionCard
              title="مرحبًا بكم في أكاديمية المستقبل"
              content="منصة تعليمية متكاملة تجمع بين التميز الأكاديمي والتدريب المهني العمقي، نسعى لبناء جيل قادر على مواكبة متطلبات سوق العمل الحديث."
              color="#2196F3"
              responsive={responsive}
            />
          </Animated.View>

          <Animated.View entering={FadeInLeft.delay(400)}>
            <SectionCard
              title="من نحن؟"
              content="مؤسسة تعليمية رائدة تأسست عام 2010، نخصص في تقديم برامج تدريبية مهنية وأكاديمية معتمدة بالشراكة مع كبرى الشركات الصناعية."
              color="#00BCD4"
              responsive={responsive}
            />
          </Animated.View>

          <Animated.View entering={FadeInRight.delay(600)}>
            <SectionCard
              title="ما نقدمه"
              content={[
                "• برامج تدريب مهني متخصصة",
                "• شهادات معتمدة دوليًا",
                "• تدريب عملي في المصانع والشركات",
                "• تأهيل للتوظيف بمجال التخصص",
              ]}
              color="#2196F3"
              responsive={responsive}
              list
            />
          </Animated.View>

          <Animated.View entering={FadeInLeft.delay(800)}>
            <SectionCard
              title="لماذا التعليم المهني؟"
              content={[
                "1. تلبية احتياجات سوق العمل الفعلية",
                "2. تطوير المهارات التقنية والعملية",
                "3. فرص وظيفية أفضل مع شهادات معتمدة",
                "4. دعم ريادة الأعمال والمشاريع الصغيرة",
              ]}
              color="#4CAF50"
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
            <Text style={styles.fabText}>الإنجازات</Text>
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
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  fabButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  fabText: {
    color: "white",
    fontSize: 18,
    marginRight: 10,
    fontFamily: "NotoArabic-Regular",
    fontWeight: "700",
  },
});

export default HomeScreen;
