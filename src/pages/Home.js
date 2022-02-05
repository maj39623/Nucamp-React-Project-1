import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { productData, productData2 } from '../components/Products/data';
import Special from "../components/Special";
import Footer from "../components/Footer";
import { GlobalStyle } from "../globalStyles";

function Home() {
  return (
    <>
        <GlobalStyle />
        <Hero />
        <Products heading='Featured Vehicles!' data={productData} />
        <Special />
        <Products heading='Pre-Order Yours Today!' data={productData2} />
        <Footer />
    </>
  );
}

export default Home;