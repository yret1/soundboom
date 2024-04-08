/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { useState, useEffect, useRef } from "react";

import Footer from "./components/Footer";
import About from "./components/About";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Category from "./pages/Category";
import { speakerCategories, headphoneCategories, earCategories } from "./Data";
import { Checkout } from "./pages/Checkout";
import CartModal from './components/CartModal';

import { motion, AnimatePresence } from "framer-motion";

import { State } from "./redux/rootReducer";
import CartAnimation from "./components/Cartanim";

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



  const cartRef = useRef<HTMLImageElement>(null)

  const [cartClicked, setCartClicked] = useState<boolean>(false)

  const dispatch = useDispatch();

  const cart = useSelector((state: State ) => state.shop.cart)

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

  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });


  const [prevPathname, setPrevPathname] = useState<string>("");

 

  const [adding, setAdding] = useState<boolean>(false)

  const [prevCartLength, setPrevCartLength] = useState<number>(0);




  useEffect(() => {
    // On initial mount, set the previous cart length
    setPrevCartLength(cart.length);
  }, []); // Run only once on mount

  useEffect(() => {
    // Check if cart length has increased
    if (cart.length > prevCartLength) {
      // Cart length has increased, trigger animation or other action
      console.log('Cart length increased!');
      setAdding(true)
      // Add animation logic here
    }

    setPrevCartLength(cart.length)

    setTimeout(() => {
      setAdding(false)
    },500)
  }, [cart]); // Run whenever cart changes



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
      // Check if the previous pathname is different from the current one
      if (prevPathname !== pathname && pathname !== "/checkout") {
        window.scrollTo(0, 0); // Scroll to the top
        setPrevPathname(pathname); // Update the previous pathname
      }
    }, [pathname, prevPathname]);
  
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

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDotPosition({ x: event.clientX, y: event.clientY });
  };


  return (
    
    <BrowserRouter>
    
      <main className="font-manrope bg-white overflow-x-hidden" onMouseMove={handleMouseMove}>

        {adding && (
          <CartAnimation cartRef={cartRef} dotpos={dotPosition} />
        )}
        <Nav 
        setCurrent={setCategory}
        cartClicked={cartClicked}
        setCartClicked={setCartClicked}
        cartRef={cartRef}
        />
        <ScrollToTop />

        <AnimatePresence>
        {cartClicked && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-20"
              onClick={() => setCartClicked(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0}}
              transition={{ duration: 0.2 }}
              >
                <CartModal 
            cartClicked={cartClicked}
            setCartClicked={setCartClicked}
            />
              </motion.div>
            
          </>
        )}
      </AnimatePresence>
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
