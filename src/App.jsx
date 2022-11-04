import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/views/Home";
import DogFinder from "./views/DogFinder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogfinder" element={<DogFinder />} />
      </Routes>
    </Router>
  );
}

export default App;
