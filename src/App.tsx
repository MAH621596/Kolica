import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Form from "./components/Form"
import Dashboard from "./pages/Dashboard";
import SectionSelection from "./pages/SectionSelection"
import AdContent from "./pages/AdContent";
import PhotoSelection from "./pages/PhotoSelection";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
        <Route path="/post-an-add" element={<SectionSelection />} />
        <Route path="/ad-content" element={<AdContent />} />
        <Route path="/select-photos" element={<PhotoSelection />} />
      </Routes>
  );
}

export default App;