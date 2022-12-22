import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./screens/landing.jsx";
import AOS from "aos";
function App() {
  AOS.init();
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
