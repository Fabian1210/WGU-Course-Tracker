import React from "react";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <form className="form">
        <p class="title"> Western Governors University Course Tracker</p>
        <label>
          <input class="input" type="text" placeholder="" />
          <span>Name</span>
        </label>

        <label>
          <input class="input" type="text" placeholder="" />
          <span>Degree Program</span>
        </label>
        <label>
          <input class="input" type="text" placeholder="" />
          <span>Graduation Date</span>
        </label>
        {/* owl icon transition animation for button? 
        on hover, highlight owl icon on button?*/}
        <button class="btn">Next</button>
      </form>
    </>
  );
}
