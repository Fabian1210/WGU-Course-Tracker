import React from "react";
import styles from "./MainPage.module.css";

export default function MainPage() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Western Governors University Course Tracker</h1>
        </div>
        <div className={styles.input}>
          <label htmlFor="name">
            Name:
            <input type="text" id="name" />
          </label>
          <label htmlFor="degree">
            Degree Program:
            {/* dropdown of degrees available? api? */}
            <input type="text" id="degree" />
          </label>
          <label htmlFor="gradDate">
            Anticipated Graduation Date:
            <input type="month" id="gradDAte" />
          </label>

          <button className={styles.btn}>Next</button>
        </div>
      </div>
    </>
  );
}
