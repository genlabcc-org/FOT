import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import PlaygroundPage from './pages/PlaygroundPage';
import ContactPage from './pages/ContactPage';
import MeridianHealthPage from './pages/MeridianHealthPage';
import StylebookPage from './pages/StylebookPage';
import HomesteadPage from './pages/HomesteadPage';
import NorthLightPage from './pages/NorthLightPage';

import CustomCursor from './components/CustomCursor';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        
        {/* Case Studies */}
        <Route path="/case-study" element={<CaseStudyPage />} />
        <Route path="/case-studies" element={<CaseStudyPage />} />
        <Route path="/meridian-health" element={<MeridianHealthPage />} />
        <Route path="/case-studies/meridian-health" element={<MeridianHealthPage />} />
        <Route path="/stylebook" element={<StylebookPage />} />
        <Route path="/case-studies/stylebook" element={<StylebookPage />} />
        <Route path="/homestead" element={<HomesteadPage />} />
        <Route path="/case-studies/homestead" element={<HomesteadPage />} />
        <Route path="/north-light" element={<NorthLightPage />} />
        <Route path="/case-studies/north-light" element={<NorthLightPage />} />

        {/* Other Pages */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/journal" element={<BlogPage />} />
        <Route path="/play-ground" element={<PlaygroundPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
