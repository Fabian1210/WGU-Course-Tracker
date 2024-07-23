import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import Courses from "./components/Courses.jsx";
//Route components in here

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
