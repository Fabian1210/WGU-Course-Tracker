import React, { useState } from "react";
import styles from "./Courses.module.css";

export default function Courses() {
  const [inputValue, setInputValue] = useState("");
  const [courses, setCourses] = useState([]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCourses([...courses, inputValue]);
    setInputValue("");
  }

  return (
    <>
      <div className={styles.content}>
        <h2 className={styles.titleText}>Enter Courses</h2>
        <form>
          <input
            type="text"
            id="userInput"
            placeholder="Enter Course..."
            value={inputValue}
            onChange={handleChange}
          />
          <button
            type="submit"
            className={styles.addBtn}
            onClick={handleSubmit}
          >
            Add
          </button>
        </form>
        <ul>
          {courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
