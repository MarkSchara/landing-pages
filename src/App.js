import React from "react";
import { Routes, Route } from "react-router-dom";
import Fl2txhome from "./pages/fl2txhome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Landing Page Hub</h1>} />
      <Route path="/fl2txhome" element={<Fl2txhome />} />
    </Routes>
  );
}

export default App;
