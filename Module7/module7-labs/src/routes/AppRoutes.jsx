// src/routes/AppRoutes.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import BitcoinPage from "../pages/BitcoinPage";
import Navbar from "../components/Navbar";

export default function AppRoutes() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/bitcoin" element={<BitcoinPage />} />
            </Routes>
        </Router>
    );
}
