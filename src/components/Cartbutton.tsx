import { useSelector, useDispatch } from "react-redux";
import { Product, ProductAdded } from "../redux/shopping/shopping-reducer";
  const Cartutton = () => {

    const dispatch = useDispatch();

    const currentItem = useSelector((state : {
      shop: {
        currentItem: Product | null;
        cart: ProductAdded[];
        products: Product[];
      };
    
    }) => state.shop?.currentItem)

    const handleAddToCart = () => {
      if (currentItem) {
        dispatch({ type: "ADD_TO_CART", payload: currentItem });
      }else{
        console.log("No item to add to cart");
      }
    };





    return (
      <>
        <button onClick={handleAddToCart}  className="py-4 px-5 bg-primary-100 text-14 tracking-1 font-bold text-white hover:bg-primary-200">
          ADD TO CART
        </button>
      </>
    );
  };
  export default Cartutton;