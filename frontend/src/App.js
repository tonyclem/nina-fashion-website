import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Navbar } from "./components";
import { HomePage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
