import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import React from 'react';
import ReactDOM from 'react-dom';
import AdmissionForm from "./pages/Admission.jsx";
import BlogPage from "./pages/Blog.jsx";
import GalleryPage from "./pages/Gallery.jsx";

import './index.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/admission" element={<AdmissionForm />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const MainLayout = () => {
  return (
    <div className=''>
      <div className=''>
        <Navbar />
        <Hero />
      </div>
      
      
    </div>
  );
};

export default App;
