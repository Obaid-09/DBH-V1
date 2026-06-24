import React, {useContext} from 'react'
import logo from "../Assets/logo.jpg";
import SearchBar from '../SearchBar/SearchBar';
//import cart from "../Assets/cart.jpg";
//import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShpContext';
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {

    const { cartItems, wishlistItems } = useContext(ShopContext);
    const location = useLocation();
    console.log(cartItems);

    return (
        <div className='w-full h-[90px] px-5 flex justify-around items-center bg-white shadow-sm'>

            {/* Logo */}
            <div className='flex items-center cursor-pointer'>
                <img
                    src={logo}
                    alt="Dubai Burqa House Logo"
                    className='sm:w-[60px] sm:h-[60px] w-[45px] h-[45px] object-cover'
                />

                <p className='sm:w-[90px] w-[70px] sm:text-[12px] text-start lg:text-[16px] text-[10px] uppercase tracking-[3px] text-[#C9A227] font-medium'>
                    Dubai Burqa House
                </p>
            </div>

            {/* Nav Links */}
            <ul className='flex gap-2 sm:gap-5  sm:text-sm text-xs md:text-lg font-semibold'>

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

        <div className='hidden md:block'>
            <SearchBar />
        </div>

            {/* Actions */}
            <div className='flex gap-2 md:gap-6 items-center'>

                <Link to='/login'>
                    <button className="px-4 py-2 md:px-7 md:py-2.5 bg-[#C9A227] text-white md:text-[20px] text-[13px] rounded-full font-semibold hover:bg-[#b08d1f] hover:shadow-lg transition-all duration-300">
                        Login
                    </button>
                </Link>
                
                <Link to='/wishlist'>
                    <div className="relative cursor-pointer group">

                        <FaRegHeart className="text-[25px] md:text-[30px] text-[#111111] group-hover:text-[#C9A227] transition-all duration-300" />

                        <span className="absolute -top-2 -right-3 bg-[#C9A227] text-white text-[12px] font-semibold w-6 h-6 rounded-full flex items-center justify-center">
                            {wishlistItems.length}
                        </span>

                    </div>
                </Link>

                <Link to='/cart'>
                    <div className="relative cursor-pointer group">
                        <FiShoppingCart className="sm:text-[30px] text-[25px] md:text-[38px] text-[#111111] group-hover:text-[#C9A227] transition-all duration-300" />

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
