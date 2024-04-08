import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Cart from "/assets/shared/desktop/icon-cart.svg";
import Hamburger from "/assets/shared/tablet/icon-hamburger.svg";
import Logo from "/assets/shared/desktop/logo.svg";
import Navoptionsdrop from "./Navoptionsdrop";
import { State } from "../redux/rootReducer";
import { useSelector } from "react-redux";


interface NavOptionsProps {
  setCurrent: (category: string) => void;
  setCartClicked: (value: boolean) => void;
  cartClicked: boolean;
  cartRef: React.RefObject<HTMLImageElement>;
}

const Nav: React.FC<NavOptionsProps> = ({ setCurrent, setCartClicked, cartClicked, cartRef }) => {

  const cart = useSelector((state: State ) => state.shop.cart)

  const [open, setOpen] = useState(false);

  const [cartvalue, setCartValue] = useState<number>();




  useEffect(() => {


    setTimeout(()=> {
      setCartValue(cart.length)
    },500)

  },[cart])

  return (
    <header className="bg-secondary-100 h-20 flex justify-center pl-5 relative items-center lg:px-20">
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="h-full w-12 flex justify-start items-center lg:hidden"
      >
        <img src={Hamburger} className="w-6/12 max-w-10" alt="Menu Button" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            onClick={() => setOpen(false)}
            initial={{ height: 0, opacity: 0, zIndex: -10, top: "-100%" }}
            animate={{ height: "100vh", opacity: 1, zIndex: 10, top: "100%" }}
            exit={{ height: 0, opacity: 0, zIndex: -10, top: "-100%" }}
            className="h-screen block lg:hidden absolute w-full top-full left-0 bg-black bg-opacity-50"
          >
            <Navoptionsdrop setCurrent={setCurrent} />
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="h-full flex-1 flex justify-center md:justify-start items-center">
        <Link to={"/"}>

        <img src={Logo} alt="" />
        </Link>
      </div>
      <nav className="flex-1 hidden lg:block">
        <ul className="flex justify-center gap-10 items-center font-manrope tracking-2 font-bold text-white">
          <Link to={"/"} className="hover:text-primary-100 cursor-pointer">
            HOME
          </Link>
          <Link
            to={"/category"}
            onClick={() => setCurrent("Headphones")}
            className="hover:text-primary-100 cursor-pointer"
          >
            HEADPHONES
          </Link>
          <Link
            to={"/category"}
            onClick={() => setCurrent("Speakers")}
            className="hover:text-primary-100 cursor-pointer"
          >
            SPEAKERS
          </Link>
          <Link
            to={"/category"}
            onClick={() => setCurrent("Earphones")}
            className="hover:text-primary-100 cursor-pointer"
          >
            EARPHONES
          </Link>
        </ul>
      </nav>
      <div className="h-full w-12 flex justify-end relative pr-5 items-center">
        {cartvalue && cartvalue >= 1 ? (
          <div className="h-5 flex justify-center items-center top-3 right-0 rounded-full w-5 bg-primary-100 absolute">
          <p className="text-[14px] font-bold text-white">{cartvalue}</p>
        </div>

        ): ""}
       
        <img ref={cartRef} src={Cart} onClick={() => setCartClicked(!cartClicked)} className="w-8/12 max-w-12 cursor-pointer" alt="Cart Button" />
      </div>
    </header>
  );
};



export default Nav;
