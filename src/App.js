import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import Trucks from "./pages/Trucks";
import Suv from "./pages/SUV";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/trucks' element={<Trucks />} />
        <Route path='/suvs' element={<Suv />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
