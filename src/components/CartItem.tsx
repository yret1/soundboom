import { AddRemoveContext } from '../context/AddRemoveContext'
import AddRemoveItem from './AddRemoveItem'

interface CartItemProps{
    inCartPage?: boolean;
}

const CartItem: React.FC<CartItemProps> = ({inCartPage = false}) => {
  return (
    <article className='flex flex-row justify-between items-center pb-6'>
                <img
                className="rounded-md w-16 h-16 object-cover"
                src="./assets/cart/image-xx99-mark-one-headphones.jpg"
                ></img>
                <article className='flex flex-col'>
                    <p className='text-15 font-bold'>XX99 MK II</p>
                    <p className='text-14 font-bold text-gray-500'>$ 2,999</p>
                </article>
                {inCartPage ? (
                    <AddRemoveContext>
                        <AddRemoveItem/>
                    </AddRemoveContext>
                ): (
                <p className='text-14 font-bold text-gray-500'>x1</p>
                )}
            </article>
  )
}

export default CartItem