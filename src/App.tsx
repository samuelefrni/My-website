import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Section from "./pages/Section/Section";
import { Routes, Route } from "react-router";

const App: React.FC = (): JSX.Element => {
  return (
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/section/:sectionName" element={<Section />} />
      </Routes>
    </React.StrictMode>
  );
};

export default App;
