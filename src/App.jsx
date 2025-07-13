import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/services";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Tracking from "./sections/Tracking";

import AdminLayout from "./layout/AdminLayout";
import ShipmentsPage from "./components/Shipment";
import ShipmentDetail from "./components/ShipmentDetail";
import AdminDashboard from "./components/AdminDashboard";
import ShipmentForm from "./components/ShipmentForm";
import ClientsPage from "./components/Client";
import TrackingList from "./components/TrackingList";
import TrackingPage from "./components/TrackingPage";
import ClientLayout from "./layout/ClientLayout";

const HomePage = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Tracking />
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
          path="/shipment"
          element={
            <AdminLayout>
              <ShipmentsPage />
            </AdminLayout>
          }
        />
        <Route
          path="/shipments/:id"
          element={
            <AdminLayout>
              <ShipmentDetail />
            </AdminLayout>
          }
        />
        <Route 
          path="/shipment/add" 
          element={
            <AdminLayout>
              <ShipmentForm />
            </AdminLayout>
          } />
        <Route 
          path="/shipment/edit/:id" 
          element={
            <AdminLayout>
              <ShipmentForm />
            </AdminLayout>
          } 
        />
        <Route 
          path="/clients" 
          element={
              <AdminLayout>
                <ClientsPage />
              </AdminLayout>
          } 
        />
        <Route 
          path="/tracking" 
          element={
              <ClientLayout>
                <TrackingList />
              </ClientLayout>
          } 
        />
        <Route 
          path="/tracking/:code" 
          element={
            <ClientLayout>
              <TrackingPage />
            </ClientLayout>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
