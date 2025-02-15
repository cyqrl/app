import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FadeInUp,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

interface Achievement {
  id: number;
  name: string;
  number: string;
  major: string;
  description: string;
  avatar: any;
}

const achievementsData: Achievement[] = [
  {
    id: 1,
    name: "علي محمد",
    number: "2018",
    major: "تقنية المعلومات",
    description:
      "حصلت على فرصة عمل في شركة عالمية مباشرة بعد التخرج من خلال المهارات التي اكتسبتها في التعليم المهني",
    avatar: require("@/assets/images/logo.png"),
  },
  {
    id: 2,
    name: "فاطمة أحمد",
    number: "2019",
    major: "الهندسة الكهربائية",
    description:
      "ساهمت في تطوير نظام إنارة ذكي كجزء من مشروع التخرج وحصلت على جائزة الابتكار",
    avatar: require("@/assets/images/logo.png"),
  },
  {
    id: 3,
    name: "خالد يوسف",
    number: "2020",
    major: "الهندسة الميكانيكية",
    description:
      "شارك في تصميم روبوت صناعي حصل على المركز الأول في مسابقة محلية",
    avatar: require("@/assets/images/logo.png"),
  },
  {
    id: 4,
    name: "سارة خالد",
    number: "2021",
    major: "تصميم المنتجات",
    description: "صممت منتجًا مستدامًا تم اختياره لعرضه في معرض دولي",
    avatar: require("@/assets/images/logo.png"),
  },
];

interface AchievementCardProps {
  item: Achievement;
}

export default function Achievements() {
  return (
    <LinearGradient colors={["#F5F5F5", "#2196F3"]} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={["#F5F5F5", "#7ec2fc"]}
          style={styles.reportSection}
        >
          <Text style={styles.reportTitle}>لماذا التعليم المهني مهم؟</Text>
          <Text style={[styles.reportText, { marginBottom: 50 }]}>
            التعليم المهني يمثل ركيزة أساسية في بناء اقتصادات قوية ومستدامة. فهو
            لا يقتصر فقط على تزويد الطلاب بالمهارات العملية، بل يمتد ليشمل تطوير
            شخصياتهم وقدراتهم على التفكير النقدي والابتكار. من خلال التركيز على
            الجانب التطبيقي، يتيح التعليم المهني للطلاب فرصة لفهم كيفية عمل
            الأشياء في الواقع، مما يجعلهم أكثر استعدادًا لمواجهة تحديات سوق
            العمل.
          </Text>
          <Text style={styles.reportText}>
            يتميز التعليم المهني بعدة مزايا تجعله خيارًا استراتيجيًا للأفراد
            والمجتمعات:
          </Text>
          <Text style={styles.bulletPoint}>
            • تحسين فرص التوظيف: يساعد الطلاب على اكتساب المهارات المطلوبة في
            سوق العمل.
          </Text>
          <Text style={styles.bulletPoint}>
            • تعزيز الابتكار: يشجع الطلاب على التفكير الإبداعي وحل المشكلات
            المعقدة.
          </Text>
          <Text style={styles.bulletPoint}>
            • دعم الاقتصاد الوطني: يساهم في توفير كوادر مؤهلة تلبي احتياجات
            الصناعات المختلفة.
          </Text>
          <Text style={styles.bulletPoint}>
            • تعزيز الاستدامة: يركز على تطوير حلول تقنية صديقة للبيئة.
          </Text>
          <Text style={styles.bulletPoint}>
            • تقليل البطالة: يوفر فرص عمل مباشرة للخريجين في مجالات متعددة.
          </Text>
          <Text style={[styles.reportText, { marginTop: 30 }]}>
            بالإضافة إلى ذلك، يلعب التعليم المهني دورًا كبيرًا في تقليل الفجوة
            بين التعليم الأكاديمي ومتطلبات سوق العمل. العديد من الشركات العالمية
            والمحلية تعتمد بشكل كبير على خريجي التعليم المهني بسبب مهاراتهم
            العملية العالية وسرعتهم في التكيف مع بيئات العمل المختلفة.
          </Text>
          <Text style={styles.reportSubtitle}>
            هذه بعض النتائج التي حققها التعليم المهني في حياة الخريجين:
          </Text>
        </LinearGradient>
        <FlatList
          data={achievementsData}
          renderItem={({ item }) => <AchievementCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </LinearGradient>
  );
}

const AchievementCard: React.FC<AchievementCardProps> = ({ item }) => {
  const opacityAnim = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(opacityAnim.value, { duration: 500 }),
    transform: [{ translateY: opacityAnim.value === 0 ? 20 : 0 }],
  }));

  React.useEffect(() => {
    opacityAnim.value = 1;
  }, []);

  return (
    <Animated.View entering={FadeInUp.duration(500)} style={[animatedStyle]}>
      <LinearGradient
        colors={["#2196F3", "#1E88E5"]}
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Image source={item.avatar} style={styles.avatar} />
        <View style={styles.cardContent}>
          <Text style={styles.number}>{item.number}</Text>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.major}>{item.major}</Text>
          <Text style={styles.description}>"{item.description}"</Text>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reportSection: {
    top: 0,
    padding: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  reportTitle: {
    fontSize: 35,
    fontWeight: "700",
    color: "#1976D2",
    textAlign: "center",
    marginVertical: 50,
    fontFamily: "NotoArabic-Regular",
  },
  reportText: {
    textAlign: "right",
    fontSize: 20,
    color: "#1976D2",
    lineHeight: 35,
    marginBottom: 20,
    fontFamily: "NotoArabic-Regular",
  },
  bulletPoint: {
    fontSize: 20,
    color: "#1976D2",
    textAlign: "right",
    lineHeight: 30,
    marginBottom: 20,
    fontFamily: "NotoArabic-Regular",
  },
  reportSubtitle: {
    fontSize: 25,
    fontWeight: "600",
    color: "#1976D2",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "NotoArabic-Regular",
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 20,
    borderRadius: 20,
    minHeight: 150,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#BBDEFB",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 15,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.8)",
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontSize: 28,
    fontWeight: "600",
    color: "white",
    textAlign: "right",
    marginVertical: 7,
    fontFamily: "NotoArabic-Regular",
  },
  number: {
    fontSize: 18,
    color: "#F5F5F5",
    textAlign: "right",
    opacity: 0.8,
    fontFamily: "NotoArabic-Regular",
  },
  major: {
    fontSize: 17,
    color: "#F5F5F5",
    textAlign: "right",
    marginBottom: 12,
    opacity: 0.8,
    fontFamily: "NotoArabic-Regular",
  },
  description: {
    fontSize: 20,
    color: "white",
    textAlign: "right",
    lineHeight: 35,
    fontFamily: "NotoArabic-Regular",
  },
});
