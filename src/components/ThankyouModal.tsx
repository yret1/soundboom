import { Link } from "react-router-dom";

const ThankyouModal = () => {
  return (
    <section className="rounded-md h-auto bg-white fixed z-10 mt-96">
        <article className='p-6 flex flex-col text-center justify-center items-center'>
            <img className="w-16 mb-6" src="./assets/checkout/icon-order-confirmation.svg"></img>
                <p className='text-24 font-bold mb-6'>THANK YOU <br></br>FOR YOUR ORDER</p>
                <p className='text-15 mb-6 opacity-50'>You will receive an email confirmation shortly.</p>
                <Link to={"/"}>
                <button className=" w-full py-4 px-5 bg-primary-100 text-14 tracking-1 font-bold text-white hover:bg-primary-200"> BACK TO HOME
            </button>
                </Link>
        </article>
    </section>
  )
}

export default ThankyouModal
