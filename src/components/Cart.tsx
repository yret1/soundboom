
import CartItem from './CartItem'

const Cart = () => {
  return (
    <section className="rounded-md h-full mx-6 my-6 bg-gray-300">
        <article className='p-6 flex flex-col'>
            <article className='flex justify-between'>
                <p className='text-18 font-bold mb-6'>Cart (3)</p>
                <button className='text-15 text-gray-500 mb-6 underline'>Remove all</button>
            </article>
            <CartItem inCartPage={true}/>
            <CartItem inCartPage={true}/>
            <CartItem inCartPage={true}/>
            
            <article className='flex justify-between'>
                <p className='text-15 text-gray-500 mb-6'>TOTAL</p>
                <p className='text-18 font-bold mb-6'>$ 5,396</p>
            </article>
            <button /* onClick={handleClick}  */className="py-4 px-5 bg-primary-100 text-14 tracking-1 font-bold text-white hover:bg-primary-200">
        CHECKOUT
            </button>
        </article>
        
    
    </section>
  )
}

export default Cart