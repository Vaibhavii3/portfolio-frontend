
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import AboutPage from './pages/AboutPage';
import ContactPage from "./pages/ContactPage";
import PhotoPage from "./pages/PhotoPage";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/photo" element={<PhotoPage />} />
      </Routes>
    </div>
  )
}

export default App;