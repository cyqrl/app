import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInUp, FadeIn, FadeInRight } from "react-native-reanimated";
import { BlurView } from "expo-blur";

interface Achievement {
  id: number;
  name: string;
  year: string;
  major: string;
  description: string;
  avatar: any;
}

const achievementsData: Achievement[] = [
  {
    id: 1,
    name: "علي محمد",
    year: "2018",
    major: "تقنية المعلومات",
    description:
      "حصلت على فرصة عمل في شركة عالمية مباشرة بعد التخرج من خلال المهارات التي اكتسبتها في التعليم المهني",
    avatar: require("@/assets/images/logo.png"),
  },
  {
    id: 2,
    name: "فاطمة أحمد",
    year: "2019",
    major: "الهندسة الكهربائية",
    description:
      "ساهمت في تطوير نظام إنارة ذكي كجزء من مشروع التخرج وحصلت على جائزة الابتكار",
    avatar: require("@/assets/images/logo.png"),
  },
  {
    id: 3,
    name: "خالد يوسف",
    year: "2020",
    major: "الهندسة الميكانيكية",
    description:
      "شارك في تصميم روبوت صناعي حصل على المركز الأول في مسابقة محلية",
    avatar: require("@/assets/images/logo.png"),
  },
  {
    id: 4,
    name: "سارة خالد",
    year: "2021",
    major: "تصميم المنتجات",
    description: "صممت منتجًا مستدامًا تم اختياره لعرضه في معرض دولي",
    avatar: require("@/assets/images/logo.png"),
  },
];

const Achievements = () => {
  const { width } = useWindowDimensions();

  return (
    <LinearGradient
      colors={["#E3F2FD", "#BBDEFB", "#90CAF9"]}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Report Section */}
        <Animated.View entering={FadeIn.duration(800)}>
          <BlurView intensity={10} style={styles.reportContainer}>
            <Text style={styles.sectionTitle}>التعليم المهني: بوابة المستقبل</Text>
            
            <Text style={styles.reportText}>
              التعليم المهني يمثل ركيزة أساسية في بناء اقتصادات قوية ومستدامة. فهو لا يقتصر فقط على تزويد الطلاب بالمهارات العملية، بل يمتد ليشمل تطوير شخصياتهم وقدراتهم على التفكير النقدي والابتكار. من خلال التركيز على الجانب التطبيقي، يتيح التعليم المهني للطلاب فرصة لفهم كيفية عمل الأشياء في الواقع، مما يجعلهم أكثر استعدادًا لمواجهة تحديات سوق العمل.
            </Text>

            <Text style={[styles.reportText, { marginTop: 16 }]}>
              يتميز التعليم المهني بعدة مزايا تجعله خيارًا استراتيجيًا للأفراد والمجتمعات:
            </Text>

            <View style={styles.highlightContainer}>
              <View style={styles.highlightBullet} />
              <Text style={styles.highlightText}>
                تحسين فرص التوظيف: يساعد الطلاب على اكتساب المهارات المطلوبة في سوق العمل
              </Text>
            </View>

            <View style={styles.highlightContainer}>
              <View style={styles.highlightBullet} />
              <Text style={styles.highlightText}>
                تعزيز الابتكار: يشجع الطلاب على التفكير الإبداعي وحل المشكلات المعقدة
              </Text>
            </View>

            <View style={styles.highlightContainer}>
              <View style={styles.highlightBullet} />
              <Text style={styles.highlightText}>
                دعم الاقتصاد الوطني: يساهم في توفير كوادر مؤهلة تلبي احتياجات الصناعات المختلفة
              </Text>
            </View>

            <View style={styles.highlightContainer}>
              <View style={styles.highlightBullet} />
              <Text style={styles.highlightText}>
                تعزيز الاستدامة: يركز على تطوير حلول تقنية صديقة للبيئة
              </Text>
            </View>

            <View style={styles.highlightContainer}>
              <View style={styles.highlightBullet} />
              <Text style={styles.highlightText}>
                تقليل البطالة: يوفر فرص عمل مباشرة للخريجين في مجالات متعددة
              </Text>
            </View>

            <Text style={[styles.reportText, { marginTop: 16 }]}>
              بالإضافة إلى ذلك، يلعب التعليم المهني دورًا كبيرًا في تقليل الفجوة بين التعليم الأكاديمي ومتطلبات سوق العمل. العديد من الشركات العالمية والمحلية تعتمد بشكل كبير على خريجي التعليم المهني بسبب مهاراتهم العملية العالية وسرعتهم في التكيف مع بيئات العمل المختلفة.
            </Text>

            <Text style={styles.reportSubtitle}>
              هذه بعض النتائج التي حققها التعليم المهني في حياة الخريجين:
            </Text>
          </BlurView>
        </Animated.View>

        {/* Achievements List */}
        <FlatList
          data={achievementsData}
          renderItem={({ item, index }) => (
            <AchievementCard item={item} index={index} />
          )}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          contentContainerStyle={styles.listContent}
        />
      </ScrollView>
    </LinearGradient>
  );
};

const AchievementCard = ({ item, index }: { item: Achievement; index: number }) => (
  <Animated.View
    entering={FadeInUp.delay(index * 150).springify()}
    style={styles.cardContainer}
  >
    <LinearGradient
      colors={["rgba(33,150,243,0.95)", "rgba(30,136,229,0.95)"]}
      style={styles.card}
    >
      <View style={styles.cardHeader}>
        <View style={styles.yearBadge}>
          <Text style={styles.yearText}>{item.year}</Text>
        </View>
        <Image source={item.avatar} style={styles.avatar} />
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.major}>{item.major}</Text>
        <Text style={styles.description}>"{item.description}"</Text>
      </View>
    </LinearGradient>
  </Animated.View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reportContainer: {
    backgroundColor: "white",
    borderRadius: 32,
    padding: 24,
    margin: 16,
    overflow: "hidden",
    shadowColor: "#1A237E",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "800",
    color: "#0D47A1",
    textAlign: "center",
    marginBottom: 24,
    fontFamily: "NotoArabic-Bold",
  },
  reportText: {
    fontSize: 16,
    lineHeight: 28,
    color: "#1A237E",
    textAlign: "right",
    marginBottom: 20,
    fontFamily: "NotoArabic-Regular",
  },
  highlightContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: "rgba(33,150,243,0.1)",
    padding: 12,
    borderRadius: 16,
  },
  highlightBullet: {
    width: 8,
    height: 8,
    marginHorizontal: 8,
    borderRadius: 4,
    backgroundColor: "#2196F3",
    marginLeft: 8,
  },
  highlightText: {
    fontSize: 14,
    color: "#1A237E",
    textAlign: "right",
    fontFamily: "NotoArabic-SemiBold",
    flex: 1,
  },
  reportSubtitle: {
    fontSize: 22,
    color: "#1565C0",
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 8,
  },
  cardContainer: {
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  card: {
    borderRadius: 24,
    padding: 20,
    overflow: "hidden",
  },
  cardHeader: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.2)",
  },
  yearBadge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  yearText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 14,
  },
  cardBody: {
    paddingHorizontal: 8,
  },
  name: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "700",
    textAlign: "right",
    marginBottom: 4,
  },
  major: {
    fontSize: 16,
    color: "rgba(255,255,255,0.9)",
    textAlign: "right",
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: "#FFF",
    textAlign: "right",
    lineHeight: 24,
  },
  listContent: {
    paddingBottom: 32,
  },
});

export default Achievements;