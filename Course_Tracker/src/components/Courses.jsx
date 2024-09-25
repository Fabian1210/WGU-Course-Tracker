// Courses.js
import React, { useState } from "react";
import styles from "./Courses.module.css";
import { useLocation } from "react-router-dom";
import GeneratePDF from "./GeneratePDF";

export default function Courses() {
  const { state } = useLocation(); // retrieves form data from MainPage
  const [course, setCourses] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setCourses([...course, inputValue]);
    setInputValue("");
  }

  function deleteCourse(courseToDelete) {
    setCourses(course.filter((course) => course !== courseToDelete));
  }

  return (
    <div className={styles.content}>
      <h2 className={styles.titleText}>Courses</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter course"
        />
        <button type="submit" className={styles.btn}>
          Add Course
        </button>
      </form>
      <ul>
        {course.map((courseItem) => (
          <li key={courseItem} onClick={() => deleteCourse(courseItem)}>
            {courseItem}
          </li>
        ))}
      </ul>

      {/* Pass both form data and course data to GeneratePDF component */}
      <GeneratePDF
        name={state.name}
        degreeProgram={state.degreeProgram}
        graduationDate={state.graduationDate}
        courses={course}
      />
    </div>
  );
}
