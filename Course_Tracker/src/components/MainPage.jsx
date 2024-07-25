import React from "react";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  //for "next" button
  const goToCoursesPage = () => {
    navigate("./courses");
  };
  return (
    <>
      <form className="form">
        <p className="title"> Western Governors University Course Tracker</p>
        <label>
          <input className="input" type="text" placeholder="" />
          <span>Name</span>
        </label>

        <label>
          <input className="input" type="text" placeholder="" />
          <span>Degree Program</span>
        </label>
        <label>
          <input className="input" type="text" placeholder="" />
          <span>Graduation Date</span>
        </label>
        {/* owl icon transition animation for button? 
        on hover, highlight owl icon on button?*/}
        <button className="btn" onClick={goToCoursesPage}>
          Next
        </button>
      </form>
    </>
  );
}
