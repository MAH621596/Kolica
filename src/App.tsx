import Form from "./components/Form"
import { Routes, Route } from "react-router-dom";

import { Home, Login, Dashboard, MyAds, AdContent,
   ProductDetail, PhotoSelection, SectionSelection, 
   CarCategory, MotoCategory, EconomicCategory, MechanizationCategory, FreeTimeCategory, PartsEquimpCategory } from "@/pages";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-ads" element={<MyAds />} />
        <Route path="/car-category" element={<CarCategory />} />
        <Route path="/moto-category" element={<MotoCategory />} />
        <Route path="/economic-category" element={<EconomicCategory />} />
        <Route path="/mechanic-category" element={<MechanizationCategory />} />
        <Route path="/freetime-category" element={<FreeTimeCategory />} />
        <Route path="/parts-equimpments-category" element={<PartsEquimpCategory />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ad-content" element={<AdContent />} />
        <Route path="/post-an-add" element={<SectionSelection />} />
        <Route path="/select-photos" element={<PhotoSelection />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
  );
}

export default App;