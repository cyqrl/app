import React from "react";
import PdfViewer from "./PdfViewer";

const MechanicsPage = () => {
  const examPdfs = [
    {
      id: "1",
      name: "امتحان يومي اول للفصل الثاني",
      uri: "https://drive.google.com/file/d/1dY4nR7t8HkL2jF9G3hJ5D6sQ2Z3x4VbM/view",
    },
    {
      id: "2",
      name: "امتحان نصف الفصل الاول",
      uri: "https://www.wepal.net/library/upload/12-2019/content/5e012f5710d5a.pdf",
    },
    {
      id: "3",
      name: "امتحان يومي ثاني للفصل الاول",
      uri: "https://drive.google.com/file/d/1dY4nR7t8HkL2jF9G3hJ5D6sQ2Z3x4VbM/view",
    },
    {
      id: "4",
      name: "امتحان نهائي للفصل الاول",
      uri: "https://drive.google.com/file/d/1dY4nR7t8HkL2jF9G3hJ5D6sQ2Z3x4VbM/view",
    },
  ];

  const attachmentPdfs = [
    {
      id: "101",
      name: "Advanced Trigonometry Guide",
      uri: "https://drive.google.com/file/d/1eK5l6M9n0O7p8Q3rT2sY1U4iW5o6P7dN/view",
    },
    {
      id: "102",
      name: "Differential Equations Handbook",
      uri: "https://drive.google.com/file/d/1fR4t5Y6u7I8O9p0Q1w2E3rT4y5U6i7oP/view",
    },
  ];

  return (
    <PdfViewer
      subjectName="مكانيك سيارات"
      examPdfs={examPdfs}
      attachmentPdfs={attachmentPdfs}
    />
  );
};

export default MechanicsPage;