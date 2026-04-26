import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAds from "./pages/MyAds";
import Form from "./components/Form"
import Dashboard from "./pages/Dashboard";
import AdContent from "./pages/AdContent";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import PhotoSelection from "./pages/PhotoSelection";
import SectionSelection from "./pages/SectionSelection";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-ads" element={<MyAds />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ad-content" element={<AdContent />} />
        <Route path="/post-an-add" element={<SectionSelection />} />
        <Route path="/select-photos" element={<PhotoSelection />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
  );
}

export default App;