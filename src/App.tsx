import { BrowserRouter, Routes, Route } from "react-router-dom"

import Footer from "./components/Footer"
import About from "./components/About"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Headphones from "./pages/Headphones"
import ProductDetail from "./pages/ProductDetail"


function App() {
  return (
    <BrowserRouter>
      <main className="font-manrope">
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/headphones" element={<Headphones />} />
            <Route path="/productdetail" element={<ProductDetail />} />
          </Routes>
        <About />
      <Footer/>
      </main>
    </BrowserRouter>
  )
}

export default App
