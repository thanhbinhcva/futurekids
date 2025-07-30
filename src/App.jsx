import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./sections/Header";
import Hero from "./sections/Hero";
import FeatureSection from "./sections/About";
import LearningLibrary from "./sections/services"
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CommunitySection from "./sections/Tracking";

import AdminLayout from "./layout/AdminLayout";
import RoboticsDashboard from "./components/Robotics";
import CourseDetails from "./components/CourseDetails";
import AdminDashboard from "./components/AdminDashboard";
import ClassEvaluation from "./components/ClassDetail";
const HomePage = () => (
  <>
    <Header />
    <Hero />
    <FeatureSection />
    <LearningLibrary />
    <CommunitySection />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Routes có Sidebar dùng AdminLayout */}
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/robotics"
          element={
            <AdminLayout>
              <RoboticsDashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/robotics/:courseId"
          element={
            <AdminLayout>
              <CourseDetails />
            </AdminLayout>
          }
        />
        <Route 
          path="/courses/:courseId/classes/:classId" 
          element={
            <AdminLayout>
              <ClassEvaluation/>
            </AdminLayout>
          } />
      </Routes>
    </Router>
  );
};

export default App;
