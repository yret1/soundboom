/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { useDispatch} from "react-redux";


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


interface Product {
  id: number;
  slug: string;
  name: string;
  image: {
      mobile: string;
      tablet: string;
      desktop: string;
  };
  category: string;
  categoryImage: {
      mobile: string;
      tablet: string;
      desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
      quantity: number;
      item: string;
  }[];
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
      };
  };
  others: {
      slug: string;
      name: string;
      image: {
          mobile: string;
          tablet: string;
          desktop: string;
      };
  }[];
}

const App = () => {


  const dispatch = useDispatch();

  const handleProductstate = (products : Product[]) => {
    dispatch({ type: "ADD_PRODUCTS", payload: products });
  };

  const currentProductHandler = (product : Product) => {
    dispatch({type: "SET_CURRENT", payload: product})
  }


  const [category, setCategory] = useState<string>("Headphones");
  const [products, setProducts] = useState<object[]>([]);

  const [allProducts, setAllProducts] = useState<Product[]>([
    ...headphoneCategories,
    ...speakerCategories,
    ...earCategories,
  ]);

  const [currentProduct, setCurrentProduct] = useState<Product>({
    name: "",
    slug: "",
    id: 0,
    image: {
      mobile: "",
      tablet: "",
      desktop: "",
    },
    category: "",
    categoryImage: {
      mobile: "",
      tablet: "",
      desktop: "",
    },
    new: false,
    price: 0,
    description: "",
    features: "",
    includes: [
      {
        quantity: 0,
        item: "",
      },
    ],
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
      },
    },
    others: [
      {
        slug: "",
        name: "",
        image: {
          mobile: "",
          tablet: "",
          desktop: "",
        },
      },
    ],
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


  useEffect(() =>{
    currentProductHandler(currentProduct);
  },[currentProduct])


  useEffect(() => {
    setAllProducts([
      ...headphoneCategories,
      ...speakerCategories,
      ...earCategories,
    ]);


    handleProductstate(allProducts);

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
