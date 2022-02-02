import React, { useState } from "react";
import Products from "../components/Products";
import { productData4 } from '../components/Products/data';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { GlobalStyle } from "../globalStyles";
import { Nav2 } from "../components/Navbar/NavbarElements";



function Trucks() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        <GlobalStyle />
        <Nav2>
            <Navbar toggle={toggle}/>
        </Nav2>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Products heading='Truck Inventory' data={productData4} />
        <Footer />
    </>
  );
}

export default Trucks;