import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Team from "./pages/Team";
import "./App.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
