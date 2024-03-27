/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import { useState, useEffect } from "react"


import Footer from "./components/Footer"
import About from "./components/About"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import Category from "./pages/Category"
import { speakerCategories, headphoneCategories, earCategories } from "./Data"
import { Checkout } from "./pages/Checkout"


interface Details {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  method: string;
}



function App() {

  const [category, setCategory] = useState<string>("Headphones");
  const [products, setProducts] = useState<object[]>([]);

  const [details, setDetails] = useState<Details>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    method: "",
  })



  useEffect(() => {

    if (category === "Headphones") {
      setProducts(headphoneCategories)
    } else if (category === "Speakers") {
      setProducts(speakerCategories)
    }else if (category === "Earphones") {
      setProducts(earCategories)
    }

  }, [category])

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      if(pathname !== "/checkout") {
        window.scrollTo(0, 0);
      }
    }, [pathname]);

    return null;
  }



  return (
    <BrowserRouter>
      <main className="font-manrope overflow-x-hidden">
        <Nav setCurrent={setCategory}/>
            <ScrollToTop />
          <Routes>
          <Route path="/" element={<Home setCategory={setCategory} />} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/category" element={<Category products={products as any} current={category} setCurrent={setCategory} />} />
            <Route path="/checkout" element={<Checkout details={details} setDetails={setDetails} />} />
          </Routes>
        <About />
      <Footer setCurrent={setCategory}/>
      </main>
    </BrowserRouter>
  )
}

export default App
