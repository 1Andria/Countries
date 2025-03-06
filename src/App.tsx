import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainPage from "./assets/Pages/MainPage/MainPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
