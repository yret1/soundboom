
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
interface CartAnimationProps {
    cartRef: React.RefObject<HTMLDivElement>; // Ref for the cart element
    dotpos: {
        x: number,
        y: number
    }
  }
  
  const CartAnimation: React.FC<CartAnimationProps> = ({ cartRef, dotpos }) => {
   
  
    // Get position of the cart element
    const getCartPosition = () => {
      if (cartRef.current) {
        const rect = cartRef.current.getBoundingClientRect();
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      }
      return null;
    };
  
    const cartPosition = getCartPosition();


    useGSAP(() =>{
        gsap.fromTo("#dot", {
            x: dotpos.x,
            y: dotpos.y,
        },{
            duration: 0.5,
            x: cartPosition?.x,
            y: cartPosition?.y,
        })
    })
  
    return (
      <div className="cart-animation-container">
        {/* Optional: You can animate the dot moving to the cart position */}
        {cartPosition && (
          <div
          id="dot"
          className="w-2 h-2 bg-primary-100 rounded-full absolute z-40"
          ></div>
        )}
      </div>
    );
  };
  
  export default CartAnimation;