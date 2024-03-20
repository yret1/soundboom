import {Link} from "react-router-dom";
import Cart from '../assets/shared/desktop/icon-cart.svg'
import Hamburger from '../assets/shared/tablet/icon-hamburger.svg'
import Logo from '../assets/shared/desktop/logo.svg'
const Nav = () => {
  return (
    <header className='bg-secondary-100 h-20 flex justify-center pl-5 items-center lg:px-20'>
        <div className='h-full w-12 flex justify-start items-center lg:hidden'>
            <img src={Hamburger} className='w-6/12 max-w-10' alt="Menu Button" />
        </div>
       
        <div className='h-full flex-1 flex justify-center md:justify-start items-center'>
            <img src={Logo} alt="" />
        </div>
        <nav className='flex-1 hidden lg:block'>
            <ul className='flex justify-center gap-10 items-center font-manrope tracking-2 font-bold text-white'>
                <Link to={"/"} className='hover:text-primary-100 cursor-pointer'>HOME</Link>
                <Link to={"/headphones"} className='hover:text-primary-100 cursor-pointer'>HEADPHONES</Link>
                <Link to={"/speakers"} className='hover:text-primary-100 cursor-pointer'>SPEAKERS</Link>
                <Link to={"/earphones"} className='hover:text-primary-100 cursor-pointer'>EARPHONES</Link>
            </ul>
        </nav>
        <div className='h-full w-12 flex justify-end pr-5 items-center'>
            <img src={Cart} className='w-8/12 max-w-12' alt="Cart Button" />
        </div>
    </header>
  )
}

export default Nav