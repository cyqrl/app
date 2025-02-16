import SubjectScreen from "@/components/GradePage";

export default function FirstScreen() {
  const drawers = {
    drawer1: [
      { name: "رياضيات", key: "math" },
      { name: "فيزياء", key: "physics" },
      { name: "التربية الاسلامية", key: "religion" },
      { name: "اللغة الانجليزية", key: "english" },
      { name: "اللغة العربية", key: "arabic" },
      { name: "تكنولوجيا المعلومات", key: "IT" },
    ],
    drawer2: [
      { name: "تصميم الجرافيكي", key: "graphic" },
      { name: "صفحات الانترنت", key: "websites" },
      { name: "تكييف وتبريد", key: "refrigeration" },
      { name: "تمديدات صحية", key: "sanitary" },
      { name: "حدادة", key: "blacksmithing" },
      { name: "طاقة متجددة", key: "energy" },
      { name: "كهرباء استعمال", key: "use_electricity" },
      { name: "كهرباء سيارات", key: "cars_electricity" },
      { name: "مباني ذكية", key: "smart_homes" },
      { name: "ميكانيك سيارات", key: "mechanics" },
      { name: "نجارة", key: "carpentry" },
      { name: "تطبيقات الموبايل", key: "apps" },
      { name: "صيانة حاسوب", key: "computer" },
      { name: "إلكترونيات صناعية", key: "electronics" },
      { name: "رسم صناعي", key: "drawing" },
    ],
  };

  return <SubjectScreen grade={"11"} initialSubjectName="أول ثانوي" drawers={drawers} />;
};
