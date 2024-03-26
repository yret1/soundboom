import lilarrow from "/assets/shared/desktop/icon-arrow-right.svg";
const Shopbutton = () => {
  return (
    <button className="flex px-4 py-2 text-black text-opacity-50 gap-3 justify-center items-center rounded-md hover:text-primary-100 hover:text-opacity-100">
        <p className="font-jost font-bold tracking-1 text-[15px]">SHOP</p>
        <img src={lilarrow} alt="Arrow" />
    </button>
  )
}

export default Shopbutton