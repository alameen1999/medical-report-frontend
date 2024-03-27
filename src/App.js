import { Routes, Route } from "react-router-dom";
import "./style.css";
import Login from "./pages/Login/Login";
import Report from "./pages/Report/ReportForm";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </div>
  );
}

export default App;
