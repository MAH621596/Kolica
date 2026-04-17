import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SectionSelection from "./pages/SectionSelection"
import AdContent from "./pages/AdContent";
import PhotoSelection from "./pages/PhotoSelection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car" element={<SectionSelection />} />
        <Route path="/moto" element={<AdContent />} />
        <Route path="/economic" element={<PhotoSelection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;