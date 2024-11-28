import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";

export default function AboutUsScreen() {
  const { height } = Dimensions.get("window");

  const handleEmailPress = () => {
    Linking.openURL("mailto:support@eduapp.com");
  };

  const handlePhonePress = () => {
    Linking.openURL("tel:+970599282844");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: height * 0.1 },
        ]}
      >
        <View style={styles.sect}>
          <View style={[styles.section, styles.sectionYellow]}>
            <Text style={styles.sectionTitle}>من نحن</Text>
            <Text style={styles.sectionText}>
              نحن فريق شغوف بالتعليم، نسعى لدعم طلبة الفرع الصناعي من خلال تقديم
              أدوات تعليمية مبتكرة تجمع بين السهولة والفعالية. هدفنا هو تسهيل
              الوصول إلى الموارد التي يحتاجها الطلبة للنجاح في مسيرتهم
              الأكاديمية والمهنية.
            </Text>
          </View>
          <View style={[styles.section, styles.sectionGold]}>
            <Text style={styles.sectionTitle}>رسالتنا</Text>
            <Text style={styles.sectionText}>
              تمكين الطلبة في الفرع الصناعي من الوصول إلى محتوى تعليمي متميز
              يُسهم في تطوير مهاراتهم الأكاديمية والعملية، ويُعدّهم لمستقبل مهني
              ناجح.
            </Text>
          </View>
          <View style={[styles.section, styles.sectionYellow]}>
            <Text style={styles.sectionTitle}>رؤيتنا</Text>
            <Text style={styles.sectionText}>
              أن نكون المنصة التعليمية الأولى لطلبة الفرع الصناعي، مما يساعدهم
              على التميز في دراستهم والاستعداد لمتطلبات سوق العمل.
            </Text>
          </View>
          <View style={[styles.section, styles.sectionGold]}>
            <Text style={styles.sectionTitle}>ماذا نقدم؟</Text>
            <Text style={styles.sectionText}>
              - **امتحانات سابقة**: مجموعة شاملة من الامتحانات لتدريب الطلبة على
              مختلف الأنماط والأسئلة.{"\n"}- **أوراق عمل**: تمارين عملية تغطي
              المواضيع الأساسية والمتقدمة.{"\n"}- **ملخصات ومذكرات**: محتوى
              مختصر يسهّل مراجعة المعلومات المهمة.{"\n"}- **نصائح وإرشادات**:
              توجيهات مفيدة للطلبة حول كيفية الاستعداد للامتحانات وبناء مسارهم
              المهني.
            </Text>
          </View>
          <View style={[styles.section, styles.sectionYellow]}>
            <Text style={styles.sectionTitle}>لماذا نحن؟</Text>
            <Text style={styles.sectionText}>
              - تصميم بسيط وسهل الاستخدام.{"\n"}- محتوى محدث يلبي احتياجات
              الطلبة.
              {"\n"}- متاح في أي وقت ومن أي مكان.{"\n"}- يساهم في بناء مجتمع
              طلابي متعاون.
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>تواصل معنا:</Text>
          <TouchableOpacity onPress={handleEmailPress}>
            <Text style={styles.contactText}>📧 support@eduapp.com</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePhonePress}>
            <Text style={styles.contactText}>📞 +970 599 282 844</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Link href="https://www.eschool.edu.ps">
              <Text style={styles.contactText}>🌐 ESchool</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36393f",
  },
  sect: {
    paddingBottom: 20,
  },
  section: {
    padding: 15,
  },
  sectionYellow: {
    backgroundColor: "#5c5c99",
  },
  sectionGold: {
    backgroundColor: "#a3a3cc",
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textAlign: "right",
  },
  sectionText: {
    fontSize: 20,
    color: "#011",
    lineHeight: 24,
    textAlign: "right",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 10,
    padding:20,
  },
  footerText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
  },
  contactText: {
    fontSize: 14,
    color: "#ddd",
  },
  scrollContent: {
    flexGrow: 1,
  },
});
