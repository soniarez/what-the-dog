import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/views/Home";
import Finder from "./views/Finder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finder" element={<Finder />} />
      </Routes>
    </Router>
  );
}

export default App;
