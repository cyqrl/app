// //Mathpage.tsx

// import React from "react";
// import PdfViewer from "./PdfViewer";

// const MathPage = async () => {
//   var examPdfs;
//   var attachmentPdfs;
//   await fetch("https://gist.githubusercontent.com/cyqrl/9161e3cbfe3427446c5962a2d19bebeb/raw/content.json")
//     .then((response) => response.json()).then((data) => {
//       examPdfs = data["11"].math.exams;
//       attachmentPdfs = data["11"].math.attachments;
//     });
//   return (
//     <PdfViewer
//       subjectName="الرياضيات"
//       examPdfs={examPdfs}
//       attachmentPdfs={attachmentPdfs}
//     />
//   );
// };

// export default MathPage;