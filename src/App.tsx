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
          <Route
            path="*"
            element={
              <h1 className="text-[30px] ml-[20px] mt-[20px]">
                404 page not found
              </h1>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
