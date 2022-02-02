import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import Trucks from "./pages/Trucks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/trucks' element={<Trucks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
