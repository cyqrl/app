import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function AboutUsScreen() {
  return (
    <LinearGradient
      colors={["rgb(255, 255, 255)", "rgb(203, 203, 255)"]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.sect}>
          {/* About Us section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>من نحن</Text>
            <Text style={styles.sectionText}>
              نحن فريق شغوف بالتعليم، نسعى لدعم طلبة الفرع الصناعي من خلال تقديم
              أدوات تعليمية مبتكرة تجمع بين السهولة والفعالية. هدفنا هو تسهيل
              الوصول إلى الموارد التي يحتاجها الطلبة للنجاح في مسيرتهم
              الأكاديمية والمهنية.
            </Text>
          </View>

          {/* Our Mission section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>رسالتنا</Text>
            <Text style={styles.sectionText}>
              تمكين الطلبة في الفرع الصناعي من الوصول إلى محتوى تعليمي متميز
              يُسهم في تطوير مهاراتهم الأكاديمية والعملية، ويُعدّهم لمستقبل مهني
              ناجح.
            </Text>
          </View>

          {/* Our Vision section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>رؤيتنا</Text>
            <Text style={styles.sectionText}>
              أن نكون المنصة التعليمية الأولى لطلبة الفرع الصناعي، مما يساعدهم
              على التميز في دراستهم والاستعداد لمتطلبات سوق العمل.
            </Text>
          </View>

          {/* What We Offer section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>ماذا نقدم؟</Text>
            <Text style={styles.sectionText}>
              - امتحانات سابقة: مجموعة شاملة من الامتحانات لتدريب الطلبة على
              مختلف الأنماط والأسئلة.{"\n"}- أوراق عمل تمارين عملية تغطي
              المواضيع الأساسية والمتقدمة.{"\n"}- ملخصات ومذكرات محتوى مختصر
              يسهّل مراجعة المعلومات المهمة.{"\n"}- نصائح وإرشادات: توجيهات
              مفيدة للطلبة حول كيفية الاستعداد للامتحانات وبناء مسارهم المهني.
            </Text>
          </View>

          {/* Why Us section */}
          <View style={styles.lastsection}>
            <Text style={styles.sectionTitle}>لماذا نحن؟</Text>
            <Text style={styles.sectionText}>
              - تصميم بسيط وسهل الاستخدام.{"\n"}- محتوى محدث يلبي احتياجات
              الطلبة.{"\n"}- متاح في أي وقت ومن أي مكان.{"\n"}- يساهم في بناء
              مجتمع طلابي متعاون.
            </Text>
          </View>
        </View>

        <View>
          {/* Footer */}
          <View style={styles.footer}>
            <View style={styles.footerContent}>
              <View>
                <Text style={styles.footerText}>تواصل معنا:</Text>

                <View style={styles.contactWrapper}>
                  <TouchableOpacity>
                    <Link href="mailto:industryportalhub@gmail.com">
                      <Text style={styles.contactText}>📧 Ind-Por@edu.com</Text>
                    </Link>
                  </TouchableOpacity>
                </View>

                <View style={styles.contactWrapper}>
                  <TouchableOpacity>
                    <Link href="tel:+970123456789">
                      <Text style={styles.contactText}>📞 +970 123456789</Text>
                    </Link>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={{ ...styles.footerText }}> روابط مهمة:</Text>

                <View style={styles.contactWrapper}>
                  <TouchableOpacity>
                    <Link href="https://www.moe.edu.ps/">
                      <Text style={styles.contactText}>
                        📚 Ministry of Education
                      </Text>
                    </Link>
                  </TouchableOpacity>
                </View>

                <View style={styles.contactWrapper}>
                  <TouchableOpacity>
                    <Link href="https://www.eschool.edu.ps">
                      <Text style={styles.contactText}>🏤 eschool</Text>
                    </Link>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Logos below footer content */}
            <View style={styles.imageContainer}>
              <Image
                source={require("@/assets/images/pal.png")}
                style={styles.topImage1}
                resizeMode="contain"
              />
              <Image
                source={require("@/assets/images/injaz.png")}
                style={styles.topImage2}
                resizeMode="contain"
              />
              <Image
                source={require("@/assets/images/jiss_school.png")}
                style={styles.topImage3}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  topImage1: {
    width: 90,
    height: 90,
    marginLeft: 10,
    marginTop: 20,
  },
  topImage2: {
    width: 120,
    height: 120,
    marginLeft: -20,
    marginTop: 10,
  },
  topImage3: {
    width: 70,
    height: 70,
    marginLeft: -20,
    marginTop: 30,
  },
  sect: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  lastsection: {
    marginBottom: 20,
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: "#292966",
    marginBottom: 20,
    paddingBottom: 15,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#3d3d40",
    marginBottom: 20,
    textAlign: "right",
  },
  sectionText: {
    fontSize: 20,
    color: "#3d3d40",
    lineHeight: 24,
    textAlign: "right",
  },
  footer: {
    display: "flex",
    backgroundColor: "#333",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  footerContent: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  footerText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
    textAlign: "right",
  },
  contactWrapper: {
    width: "auto",
    marginVertical: 5,
  },
  contactText: {
    fontSize: 14,
    color: "#ddd",
    textAlign: "center",
  },
  scrollContent: {
    flexGrow: 1,
  },
});
