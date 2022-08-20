import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Navbar, Sidebar } from "./components";
import { HomePage, SingleProduct } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/products/:slug" element={<SingleProduct />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
