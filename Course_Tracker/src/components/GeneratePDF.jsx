// GeneratePDF.js
import React from "react";
import jsPDF from "jspdf";
import style from "./PdfBtn.module.css";

const GeneratePDF = ({ name, degreeProgram, graduationDate, courses }) => {
  const generatePDF = () => {
    const pdf = new jsPDF();

    // Center the text for the form data
    pdf.setFontSize(16);
    pdf.text(
      "Western Governors University Course Tracker",
      pdf.internal.pageSize.getWidth() / 2,
      20,
      { align: "center" }
    );

    // Form data (centered)
    pdf.text(`Name: ${name}`, pdf.internal.pageSize.getWidth() / 2, 40, {
      align: "center",
    });
    pdf.text(
      `Degree Program: ${degreeProgram}`,
      pdf.internal.pageSize.getWidth() / 2,
      50,
      { align: "center" }
    );
    pdf.text(
      `Graduation Date: ${graduationDate}`,
      pdf.internal.pageSize.getWidth() / 2,
      60,
      { align: "center" }
    );

    // Courses List (below the form data)
    pdf.setFontSize(14);
    pdf.text("Courses:", 20, 80);
    courses.forEach((course, index) => {
      pdf.text(`${index + 1}. ${course}`, 20, 90 + index * 10);
    });

    pdf.save(`${name} wgu-course-tracker.pdf`);
  };

  return (
    <div>
      <button onClick={generatePDF} className={style.btn}>
        Download PDF
      </button>
    </div>
  );
};

export default GeneratePDF;
