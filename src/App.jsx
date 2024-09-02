import Header from "./components/header";
import HeroSection from "./components/hero";
import PresetGallery from "./components/gallery";
import ContactSection from "./components/contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./footer";
import PresetDetail from "./presetDetail";
import Home from "./home";
export default function App() {
  return (
    <div className=" bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 ">
      <Header />
      <Routes>
        <Route path="/preset-details/:id" element={<PresetDetail />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery/:query" element={<PresetGallery />}></Route>
      </Routes>

      {/*  <PresetDetail/> */}
      <Footer />
    </div>
  );
}
