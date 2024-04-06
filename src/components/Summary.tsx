import { useDispatch, useSelector } from "react-redux";

import {useState, useEffect} from 'react'

import { State } from "../redux/rootReducer";
import { ProductAdded } from "../redux/shopping/shopping-reducer";

import CartItem from "./CartItem";

interface SummaryProps {
    setCheckoutClicked: (value: boolean) => void;
    checkoutClicked: boolean;
  }

const Summary:React.FC<SummaryProps> = ({setCheckoutClicked, checkoutClicked}) => {

    const dispatch = useDispatch();

    const cart = useSelector((state: State) => state.shop.cart);

    const handleCheckoutClicked = () => {
        setCheckoutClicked(!checkoutClicked);

        setCheckedCart(cart);

        dispatch({type: "CLEAR_CART"})
    };




    const [total, setTotal] = useState<number>(0);

    const [itemsVAT, setItemsVAT] = useState<number>(0);

    const [SHIPPING, setSHIPPING] = useState<boolean>(false);

    const [checkedCart, setCheckedCart] = useState<ProductAdded[]>([]);

    const [resetChecked, setResetChecked] = useState<boolean>(false);


    useEffect(() => {
        setResetChecked(false);
    },[])
    


    useEffect(() => {

        const checked = checkedCart;

        const vat = 0.2;

        const totalValue = cart.reduce((acc, item) => {
            return acc + item.price * item.quant;
        }, 0);

        setTotal(totalValue);
        setItemsVAT(totalValue * vat);


        if(totalValue > 1500){
            setSHIPPING(true);
        }else{
            setSHIPPING(false);
        }
        checked


    },[cart])

    useEffect(() => {
        if(resetChecked){
            setCheckedCart([]);
        }
    }, [resetChecked])



  return (
    <section className="rounded-md h-full w-full mx-6 mb-6 lg:my-0 bg-white">
        <article className='p-6 flex flex-col'>
            <article className='flex justify-between'>
                <p className='text-18 font-bold mb-6'>Summary</p>
            </article>

                <section>
                    {cart.map((item : ProductAdded) => (
                        <CartItem key={item.id} product={item} />
                    ))}

                </section>

            <article className='flex justify-between'>
                <p className='text-15 text-gray-500'>TOTAL</p>
                <p className='text-18 font-bold'>$ {total}</p>
            </article>
            <article className='flex justify-between'>
                <p className='text-15 text-gray-500'>SHIPPING</p>
                <p className='text-18 font-bold'>
                    {SHIPPING ? 'FREE' : '$ 50'}
                </p>
            </article>
            <article className='flex justify-between'>
                <p className='text-15 text-gray-500'>VAT (INCLUDED)</p>
                <p className='text-18 font-bold'>$ {itemsVAT}</p>
            </article>
            <article className='flex justify-between my-6'>
                <p className='text-15 text-gray-500'>TOTAL</p>
                <p className='text-18 font-bold text-primary-100'>$ {SHIPPING ? total : total + 50}</p>
            </article>
            {cart.length > 0 && (<button onClick={handleCheckoutClicked} className="py-4 px-5 bg-primary-100 text-14 tracking-1 font-bold text-white hover:bg-primary-200">
        CONTINUE & PAY
            </button>)}
            {!cart.length && (<button disabled className="py-4 px-5 bg-gray-400 text-14 tracking-1 font-bold text-white hover:bg-gray-500">
                CART IS EMPTY
            </button>)}
            
        </article>
    </section>
  )
}

export default Summary