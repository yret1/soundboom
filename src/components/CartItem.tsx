import { ProductAdded} from '../redux/shopping/shopping-reducer';

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AddRemoveInCart from './AddRemoveInCart';



interface CartItemProps{
    product: ProductAdded;
}

const CartItem: React.FC<CartItemProps> = ({ product}) => {


    const path = useLocation()



    const [checkout, setCheckout] = useState<boolean>(false);

    const [internalProduct, setInternalProduct] = useState<ProductAdded>(product);




    useEffect(() => {
        if (path.pathname === "/checkout") {
            setCheckout(true);
        } else {
            setCheckout(false);
        }

        setInternalProduct(product);
    }, [path, product]);




    const productName = internalProduct?.name || "Product";
    const productPrice = internalProduct?.price || 1999;
    const productQuantity = internalProduct?.quant || 0;
    const productImage = internalProduct?.image.mobile || "./assets/cart/image-xx99-mark-one-headphones.jpg";
    const productId = internalProduct?.id || 0;

  return (
    <article className='flex flex-row justify-between items-center pb-6'>
        <article className='flex items-center'>
                <img
                className="rounded-md w-16 h-16 object-cover mr-6"
                src={productImage}
                ></img>
                <article className='flex flex-col'>
                    <p className='text-15 font-bold'>{productName}</p>
                    <p className='text-14 font-bold text-gray-500'>$ {productPrice}</p>
                </article>
        </article>
                
                {checkout ? (
                        <p className='text-14 font-bold text-gray-500'>x{productQuantity}</p>
                ): (
                    <AddRemoveInCart id={productId} />
                )}
            </article>
  )
}

export default CartItem