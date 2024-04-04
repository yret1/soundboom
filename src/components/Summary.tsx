import CartItem from './CartItem'

const Summary = () => {
  return (
    <section className="rounded-md h-full mx-6 my-6 bg-gray-300">
        <article className='p-6 flex flex-col'>
            <article className='flex justify-between'>
                <p className='text-18 font-bold mb-6'>Summary</p>
            </article>
            <CartItem inCartPage={false}/>
            <CartItem inCartPage={false}/>
            <CartItem inCartPage={false}/>
            
            <article className='flex justify-between'>
                <p className='text-15 text-gray-500'>TOTAL</p>
                <p className='text-18 font-bold'>$ 5,396</p>
            </article>
            <article className='flex justify-between'>
                <p className='text-15 text-gray-500'>SHIPPING</p>
                <p className='text-18 font-bold'>$ 50</p>
            </article>
            <article className='flex justify-between'>
                <p className='text-15 text-gray-500'>VAT (INCLUDED)</p>
                <p className='text-18 font-bold'>$ 1,079</p>
            </article>
            <article className='flex justify-between my-6'>
                <p className='text-15 text-gray-500'>TOTAL</p>
                <p className='text-18 font-bold text-primary-100'>$ 5,446</p>
            </article>
            <button /*onClick={handleClick}*/className="py-4 px-5 bg-primary-100 text-14 tracking-1 font-bold text-white hover:bg-primary-200">
        CONTINUE & PAY
            </button>
        </article>
    </section>
  )
}

export default Summary