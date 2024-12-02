import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
export default function AboutUsScreen() {
  return (
    <View style={styles.container}>
      {/* محتوى الصفحة القابل للتمرير */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sect}>
          {/* قسم من نحن */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>من نحن</Text>
            <Text style={styles.sectionText}>
              نحن فريق شغوف بالتعليم، نسعى لدعم طلبة الفرع الصناعي من خلال تقديم
              أدوات تعليمية مبتكرة تجمع بين السهولة والفعالية. هدفنا هو تسهيل
              الوصول إلى الموارد التي يحتاجها الطلبة للنجاح في مسيرتهم
              الأكاديمية والمهنية.
            </Text>
          </View>

          {/* قسم رسالتنا */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>رسالتنا</Text>
            <Text style={styles.sectionText}>
              تمكين الطلبة في الفرع الصناعي من الوصول إلى محتوى تعليمي متميز
              يُسهم في تطوير مهاراتهم الأكاديمية والعملية، ويُعدّهم لمستقبل مهني
              ناجح.
            </Text>
          </View>

          {/* قسم رؤيتنا */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>رؤيتنا</Text>
            <Text style={styles.sectionText}>
              أن نكون المنصة التعليمية الأولى لطلبة الفرع الصناعي، مما يساعدهم
              على التميز في دراستهم والاستعداد لمتطلبات سوق العمل.
            </Text>
          </View>

          {/* قسم ماذا نقدم */}
          <View style={styles.section}>
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

          {/* قسم لماذا نحن */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>لماذا نحن؟</Text>
            <Text style={styles.sectionText}>
              - تصميم بسيط وسهل الاستخدام.{"\n"}- محتوى محدث يلبي احتياجات
              الطلبة.
              {"\n"}- متاح في أي وقت ومن أي مكان.{"\n"}- يساهم في بناء مجتمع
              طلابي متعاون.
            </Text>
          </View>
        </View>
        {/* التذييل */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>تواصل معنا:</Text>
          <TouchableOpacity>
            <Text style={styles.contactText}>📧 support@eduapp.com</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.contactText}>📞 +123 456 789</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Link href="https://www.eschool.edu.ps">
              <Text style={styles.contactText}>🌐 بيئة التواصل الالكتروني المدرسي</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sect: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#ccccff",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "right", // الكتابة من اليمين
  },
  sectionText: {
    fontSize: 20,
    color: "#ffffff",
    lineHeight: 24,
    textAlign: "right", // الكتابة من اليمين
  },
  footer: {
    height: 80,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#444",
  },
  footerText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "right",
    fontWeight: "bold",
    marginBottom: 5,
  },
  contactText: {
    textAlign: "right",
    fontSize: 14,
    color: "#ddd",
  },
  scrollContent: {
    flexGrow: 1,
  }
});
