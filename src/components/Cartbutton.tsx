import { useSelector } from "react-redux";
import rootReducer from "../redux/rootReducer";
  const Cartutton = () => {

    const allItems = useSelector((state: rootReducer) => state.shop.items);



    const handleAddToCart = () => {
      
    };
    return (
      <>
        <button  className="py-4 px-5 bg-primary-100 text-14 tracking-1 font-bold text-white hover:bg-primary-200">
          ADD TO CART
        </button>
      </>
    );
  };
  export default Cartutton;