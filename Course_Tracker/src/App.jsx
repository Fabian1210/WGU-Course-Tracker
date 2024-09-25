import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import Courses from "./components/Courses.jsx";
import ViewCourses from "./components/ViewCourses.jsx";
//Route components in here

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/viewCourses" element={<ViewCourses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
