import React, {useContext} from 'react'
import logo from "../Assets/logo.jpg";
//import cart from "../Assets/cart.jpg";
//import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShpContext';

const Navbar = () => {

    const { cartItems } = useContext(ShopContext);
    const location = useLocation();
    console.log(cartItems);

    return (
        <div className='w-full h-[90px] px-8 flex justify-between items-center bg-white shadow-sm'>

            {/* Logo */}
            <div className='flex items-center gap-1 cursor-pointer'>
                <img
                    src={logo}
                    alt="Dubai Burqa House Logo"
                    className='w-[60px] h-[60px] object-cover'
                />

                <p className='text-[12px] uppercase tracking-[2px] text-[#C9A227] font-medium'>
                    Dubai Burqa House
                </p>
            </div>

            {/* Nav Links */}
            <ul className='flex gap-5 text-sm font-semibold'>

            {/* Shop */}
            <li
                className={`cursor-pointer flex flex-col items-center transition-all duration-300 ${
                    location.pathname === "/"
                        ? "text-[#C9A227]"
                        : "text-[#111111] hover:text-[#C9A227]"
                }`}
            >
                <Link to='/'>Shop</Link>

                {location.pathname === "/" && (
                    <div className='w-[80%] h-[3px] bg-[#C9A227] mt-1 rounded-full'></div>
                )}
            </li>

            {/* Abaya */}
            <li
                className={`cursor-pointer flex flex-col items-center transition-all duration-300 ${
                    location.pathname === "/abaya"
                        ? "text-[#C9A227]"
                        : "text-[#111111] hover:text-[#C9A227]"
                }`}
            >
                <Link to='/abaya'>Abaya</Link>

                {location.pathname === "/abaya" && (
                    <div className='w-[80%] h-[3px] bg-[#C9A227] mt-1 rounded-full'></div>
                )}
            </li>

            {/* Scarfs */}
            <li
                className={`cursor-pointer flex flex-col items-center transition-all duration-300 ${
                    location.pathname === "/scarf"
                        ? "text-[#C9A227]"
                        : "text-[#111111] hover:text-[#C9A227]"
                }`}
            >
                <Link to='/scarf'>Scarfs</Link>

                {location.pathname === "/scarf" && (
                    <div className='w-[80%] h-[3px] bg-[#C9A227] mt-1 rounded-full'></div>
                )}
            </li>

        </ul>

            {/* Actions */}
            <div className='flex gap-6 items-center'>

                <Link to='/login'>
                    <button className="px-7 py-2.5 bg-[#C9A227] text-white rounded-full font-semibold hover:bg-[#b08d1f] hover:shadow-lg transition-all duration-300">
                        Login
                    </button>
                </Link>

                <Link to='/cart'>
                    <div className="relative cursor-pointer group">
                        <FiShoppingCart className="text-[38px] text-[#111111] group-hover:text-[#C9A227] transition-all duration-300" />

                        <span className="absolute -top-2 -right-3 bg-[#C9A227] text-white text-[12px] font-semibold w-6 h-6 rounded-full flex items-center justify-center">
                            {
                                Object.values(cartItems).reduce(
                                    (total, item) => total + item,
                                    0
                                )
                            }
                        </span>
                    </div>
                </Link>

            </div>

        </div>

        
    );
};


export default Navbar
