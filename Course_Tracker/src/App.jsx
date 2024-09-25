import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import Courses from "./components/Courses.jsx";
import GeneratePDF from "./components/GeneratePDF.jsx";
//Route components in here

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/generatePDF" element={<GeneratePDF />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
