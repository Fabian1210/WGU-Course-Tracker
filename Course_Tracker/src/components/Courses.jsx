import React, { useState } from "react";
import styles from "./Courses.module.css";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const [inputValue, setInputValue] = useState("");
  const [course, setCourses] = useState([]); //array that courses will be added to

  function handleChange(e) {
    setInputValue(e.target.value); //grabs current value in field
  }

  function handleSubmit(e) {
    e.preventDefault(); //stops page reloading

    if (inputValue.trim() === "") return; //prevents empty field
    setCourses([...course, inputValue]);
    //^^ updates 'course state', creates new array with all
    //current 'course' and adds inputValue at end
    setInputValue(""); //clears input field
  }

  function deleteCourse(courseToDelete) {
    setCourses(course.filter((course) => course !== courseToDelete));
  }

  //Navigation of Pages
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

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
            onChange={handleChange} //grabs current text in field
          />
          <button type="submit" className={styles.btn} onClick={handleSubmit}>
            Add
          </button>
        </form>
        <h2>Courses</h2>
        <ul>
          {course.map((course) => (
            <li key={course} onClick={() => deleteCourse(course)}>
              {course}
            </li>
          ))}
        </ul>
        <div className={styles.navigateBtns}>
          <button className={styles.btn} id={styles.nvgBtn} onClick={goBack}>
            Back
          </button>
          <button className={styles.btn} id={styles.nvgBtn}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
