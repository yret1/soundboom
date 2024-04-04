import { useDispatch, useSelector } from "react-redux";
import { Product, ProductAdded } from "../redux/shopping/shopping-reducer";
import { useEffect, useState } from "react";

const AddRemoveItem: React.FC = () => {

  const current = useSelector((state: {
    shop: {
      currentItem: Product | null;
      cart: ProductAdded[];
      products: Product[];
    };
  }) => state.shop?.currentItem);

  const cart = useSelector((state: {
    shop: {
      currentItem: Product | null;
      cart: ProductAdded[];
      products: Product[];
    }}) => state.shop?.cart);


  const [quantity, setQuantity] = useState<number>(0);



    useEffect(() => {
      if (current) {
        const currentItemInCart = cart.find((item: { id: number; }) => item.id === current.id);
        if (currentItemInCart) {
          setQuantity(currentItemInCart.quant);
        }else{
          setQuantity(0);
        }
      }
    }, [current, cart]);

    const dispatch = useDispatch();

    const handleAddToCart = () => {
      if (current) {
        dispatch({ type: "ADD_TO_CART", payload: current });
      } else {
        console.log("No item to add to cart");
      }
    };

    const handleDecreaseQuantity = () => {
      const currentItemInCart = cart.find((item: { id: number; }) => item.id === current?.id);
      if (currentItemInCart) {
        dispatch({ type: "DECREASE_QUANTITY", payload: current });
      } else {
        console.log("No item to decrease quantity");
      }
    }
  



  return (
    <div className="flex">
       {/* Button to decrement itemNumber. It's disabled when itemNumber is 0 or less */}
      <button onClick={handleDecreaseQuantity} className="py-4 px-5 bg-secondary-200 text-14 tracking-1 font-bold text-gray-500 hover:bg-gray-400 hover:text-black">
        -
      </button>
      {/* Display the current value of itemNumber */}
      <div className="py-4 px-5 bg-secondary-200 text-14 tracking-1 font-bold text-gray-500">
        {quantity}
      </div>
      {/* Button to increment itemNumber */}
      <button onClick={handleAddToCart} className="py-4 px-5 bg-secondary-200 text-14 tracking-1 font-bold text-gray-500 hover:bg-gray-400 hover:text-black">
        +
      </button>
    </div>
  );
};

export default AddRemoveItem;