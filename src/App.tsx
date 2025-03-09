import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainPage from "./Pages/MainPage/MainPage";
import Informational from "./Pages/Informational/Informational";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/information/:name" element={<Informational />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
