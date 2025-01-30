import React from "react";
import PdfViewer from "./PdfViewer";

const MathPage = () => {
  // Sample exam papers (replace with actual URLs)
  const examPdfs = [
    {
      id: "1",
      name: "2023 Calculus Final Exam",
      uri: "https://drive.google.com/file/d/1FDUHVeiEjia3X7GXIzulYo-C0skQKm6o/view",
    },
    {
      id: "2",
      name: "Linear Algebra Midterm Solutions",
      uri: "https://drive.google.com/file/d/1dY4nR7t8HkL2jF9G3hJ5D6sQ2Z3x4VbM/view",
    },
    // Add 8 more exams...
  ];

  // Sample study materials
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
    // Add 8 more attachments...
  ];

  return (
    <PdfViewer
      subjectName="Advanced Mathematics"
      examPdfs={examPdfs}
      attachmentPdfs={attachmentPdfs}
    />
  );
};

export default MathPage;
