import lilarrow from "../assets/shared/desktop/icon-arrow-right.svg"
const Shopbutton = () => {
  return (
    <button className="flex justify-center items-center gap-3 pt-5 text-black text-opacity-50 hover:text-primary-100 hover:text-opacity-100 cursor-pointer">
        <p className="font-manrope font-bold tracking-1 text-13">SHOP</p>
        <img src={lilarrow} alt="Arrow" />
    </button>
  )
}

export default Shopbutton