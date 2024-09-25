// MainPage.js
import React, { useState } from "react";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [name, setName] = useState("");
  const [degreeProgram, setDegreeProgram] = useState("");
  const [graduationDate, setGraduationDate] = useState("");

  const navigate = useNavigate();

  // for "next" button
  const goToCoursesPage = () => {
    navigate("/courses", {
      state: { name, degreeProgram, graduationDate }, // pass form data to the next page
    });
  };

  return (
    <>
      <form className="form">
        <p className="title">Western Governors University Course Tracker</p>
        <label>
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // placeholder="Enter your name"
          />
          <span>Name</span>
        </label>

        <label>
          <input
            className="input"
            type="text"
            value={degreeProgram}
            onChange={(e) => setDegreeProgram(e.target.value)}
            // placeholder="Enter degree program"
          />
          <span>Degree Program</span>
        </label>

        <label>
          <input
            className="input"
            type="text"
            value={graduationDate}
            onChange={(e) => setGraduationDate(e.target.value)}
            // placeholder="Enter graduation date"
          />
          <span>Graduation Date</span>
        </label>

        <button className="btn" type="button" onClick={goToCoursesPage}>
          Next
        </button>
      </form>
    </>
  );
}
