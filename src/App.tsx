/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import About from "./components/About";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Category from "./pages/Category";
import { speakerCategories, headphoneCategories, earCategories } from "./Data";
import { Checkout } from "./pages/Checkout";

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

type Product = {
  id: number;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  price: number;
  category: string;
  description: string;
  features: string[];
  includes: string[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    }
  };
  others?: string[];
  new: boolean;
};

function App() {
  const [category, setCategory] = useState<string>("Headphones");
  const [products, setProducts] = useState<object[]>([]);

  const [allProducts, setAllProducts] = useState<object[]>([
    ...headphoneCategories,
    ...speakerCategories,
    ...earCategories,
  ]);

  const [currentProduct, setCurrentProduct] = useState<Product>({
    id: 0,
    name: "",
    image: {
      mobile: "",
      tablet: "",
      desktop: "",
    },
    price: 0,
    category: "",
    description: "",
    features: [],
    includes: [],
    gallery: {
      first: {
        mobile: "",
        tablet: "",
        desktop: "",
      },
      second: {
        mobile: "",
        tablet: "",
        desktop: "",
      },
      third: {
        mobile: "",
        tablet: "",
        desktop: "",
      }
    },
    others: [],
    new: false,
  });

  const [details, setDetails] = useState<Details>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    method: "",
  });


  useEffect(() => {
    setAllProducts([
      ...headphoneCategories,
      ...speakerCategories,
      ...earCategories,
    ]);

    console.log(allProducts);

    if (category === "Headphones") {
      setProducts(headphoneCategories);
    } else if (category === "Speakers") {
      setProducts(speakerCategories);
    } else if (category === "Earphones") {
      setProducts(earCategories);
    }
  }, [category]);


  useEffect(() => {
    productHandler(1);
  },[allProducts])

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      if (pathname !== "/checkout") {
        window.scrollTo(0, 0);
      }
    }, [pathname]);

    return null;
  };



  const productHandler = (id: number) => {
    const product = allProducts.find((item: any) => item.id === id);

    if (product) {
      setCurrentProduct(product as Product);
    } else {
      console.log("Product not found");
    }
  };

  return (
    <BrowserRouter>
      <main className="font-manrope overflow-x-hidden">
        <Nav setCurrent={setCategory} />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<Home setCategory={setCategory} find={productHandler} />}
          />
          <Route path="/product" element={<ProductDetail find={productHandler} product={currentProduct as any} />} />
          <Route
            path="/category"
            element={
              <Category
                products={products as any}
                find={productHandler}
                current={category}
                setCurrent={setCategory}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout details={details} setDetails={setDetails} />}
          />
        </Routes>
        <About />
        <Footer setCurrent={setCategory} />
      </main>
    </BrowserRouter>
  );
}

export default App;
