import { useSelector, useDispatch } from 'react-redux'
import { Product, ProductAdded } from '../redux/shopping/shopping-reducer'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { motion, AnimatePresence} from 'framer-motion'

import CartItem from './CartItem'
interface CartModalProps {
    setCartClicked: (value: boolean) => void;
    cartClicked: boolean;
  }

const Cart: React.FC<CartModalProps> = ({setCartClicked, cartClicked}) => {

    const dispatch = useDispatch();

    const cartItems = useSelector((state: {
        shop: {
            currentItem: Product | null;
            cart: ProductAdded[];
            products: Product[];
        }
    }) => state.shop?.cart)

    const [currentCart, setCurrentCart] = useState<ProductAdded[]>([])

    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        if(cartItems){
            setCurrentCart(cartItems)
        }else{
            setCurrentCart([])
        }
    }, [cartItems])


    useEffect(() => {
        let total = 0
        currentCart.forEach((item: ProductAdded) => {
            total += item.price * item.quant
        })
        setTotal(total)
    }, [currentCart])


    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }
    return (
        <section className='flex justify-end'>
            <AnimatePresence>
{cartClicked &&
<motion.section
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.2 }}
     className="rounded-md min-w-[350px] h-auto mx-6 my-6 md:w-[450px] bg-white fixed z-40">
            <article className='p-6 flex flex-col'>
                <article className='flex justify-between'>
                    <p className='text-18 font-bold mb-6'>Cart ({currentCart.length})</p>
                    <button onClick={handleClearCart} className='text-15 text-gray-500 mb-6 underline'>Remove all</button>
                </article>
                
                {currentCart && currentCart.map((product: ProductAdded) => (
                    <CartItem key={product.id} product={product}/>
                
                ))}
                
                <article className='flex justify-between'>
                    <p className='text-15 text-gray-500 mb-6'>TOTAL</p>
                    <p className='text-18 font-bold mb-6'>$ {total}</p>
                </article>
                <Link to="/checkout">
                    <button onClick={() => setCartClicked(!cartClicked)}className="py-4 px-5 bg-primary-100 text-14 tracking-1 font-bold text-white hover:bg-primary-200 w-full">
                        CHECKOUT
                    </button>
                </Link>
            </article>
        </motion.section>  }
        </AnimatePresence>
        
        </section>

    )
}

export default Cart