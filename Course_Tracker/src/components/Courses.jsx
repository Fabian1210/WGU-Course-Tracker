import React from "react";
import styles from "./Courses.module.css";

export default function Courses() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.titleText}>Enter Courses</div>
        {/* inpout field and button */}
        <div>
          <input type="text" id="coursesInput" placeholder="Enter Course" />
          <button className={styles.addBtn}>Add</button>
        </div>
        {/* Added courses list */}
      </div>
    </>
  );
}
