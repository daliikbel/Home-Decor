import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import CompanyProfile from './pages/CompanyProfile';
import CustomerProfile from './pages/CustomerProfile';
import Services from './pages/Services'; 
import ServiceDetail from './pages/ServiceDetail'; 
import PrivateRoutes from "./Routes/PrivateRoutes";
import AboutUs from './pages/AboutUs'; 

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/CompanyProfile" element={<CompanyProfile />} />
          <Route path="/CustomerProfile" element={<CustomerProfile />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/services" element={<Services />} /> {/* Route pour la liste des services */}
        <Route path="/services/:id" element={<ServiceDetail />} /> {/* Route pour les détails du service */}
        <Route path="/register" element={<Register />} />
        <Route path="/AboutUs" element={<AboutUs />} />

      </Routes>
    </div>
  );
}

export default App;