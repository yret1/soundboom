/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { useState, useEffect } from "react"


import Footer from "./components/Footer"
import About from "./components/About"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import Category from "./pages/Category"
import { speakerCategories, headphoneCategories, earCategories } from "./Data"



function App() {

  const [category, setCategory] = useState<string>("Headphones");
  const [products, setProducts] = useState<object[]>([]);



  useEffect(() => {

    if (category === "Headphones") {
      setProducts(headphoneCategories)
    } else if (category === "Speakers") {
      setProducts(speakerCategories)
    }else if (category === "Earphones") {
      setProducts(earCategories)
    }

  }, [category])



  return (
    <BrowserRouter>
      <main className="font-manrope overflow-x-hidden">
        <Nav setCurrent={setCategory}/>
          <Routes>
          <Route path="/" element={<Home setCategory={setCategory} />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/category" element={<Category products={products as any} current={category} setCurrent={setCategory} />} />
          </Routes>
        <About />
      <Footer setCurrent={setCategory}/>
      </main>
    </BrowserRouter>
  )
}

export default App
