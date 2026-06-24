// import React, { useContext } from 'react';
// import { ShopContext } from '../Context/ShpContext';

// const Cart = () => {

//     const {
//         all_products,
//         cartItems,
//         removeFromCart,
//         getTotalCartAmount
//     } = useContext(ShopContext);

//     return (
//         <div className='p-10'>

//             {
//                 all_products.map((item) => {

//                     if (cartItems[item.id] > 0) {

//                         return (
//                             <div
//                                 key={item.id}
//                                 className='flex items-center gap-6 border-b py-6'
//                             >

//                                 <img
//                                     src={item.image}
//                                     className='w-28 h-36 object-cover'
//                                     alt=''
//                                 />

//                                 <div className='flex-1'>
//                                     <h2>{item.name}</h2>

//                                     <p>
//                                         ₹{item.new_price}
//                                     </p>

//                                     <p>
//                                         Quantity :
//                                         {cartItems[item.id]}
//                                     </p>
//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         removeFromCart(item.id)
//                                     }
//                                 >
//                                     Remove
//                                 </button>

//                             </div>
//                         );
//                     }

//                     return null;
//                 })
//             }

//             <div className='mt-10 text-2xl font-bold'>
//                 Total: ₹{getTotalCartAmount()}
//             </div>

//         </div>
//     );
// };

// export default Cart;


import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShpContext';
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const Cart = () => {

    const {
        all_products,
        cartItems,
        removeFromCart,
        getTotalCartAmount
    } = useContext(ShopContext);

    return (
        <div className='bg-[#F8F6F2] min-h-screen px-8 py-12'>

            {/* Heading */}
            <div className='text-center mb-14'>
                <p className='uppercase tracking-[5px] text-[#C9A227] text-sm'>
                    Shopping Cart
                </p>

                <h1 className='text-5xl font-serif text-[#111111] mt-2'>
                    Your Cart
                </h1>

                <div className='w-28 h-[3px] bg-[#C9A227] mx-auto mt-4 rounded-full'></div>
            </div>


            {/* Cart Table Header */}
            <div className='hidden md:grid grid-cols-[1.2fr_2fr_1fr_1fr_1fr_0.5fr] items-center text-[#111111] font-semibold border-b pb-5 mb-6'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>


            {/* Cart Items */}
            {
                all_products.map((product) => {

                    if (cartItems[product.id] > 0) {

                        return (
                            <div
                                key={product.id}
                                className='grid grid-cols-1 md:grid-cols-[1.2fr_2fr_1fr_1fr_1fr_0.5fr] items-center gap-5 bg-white rounded-3xl shadow-sm p-5 mb-6'
                            >

                                {/* Product Image */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='w-[130px] h-[150px] object-cover rounded-2xl mx-auto'
                                />

                                {/* Name */}
                                <h3 className='text-[#111111] font-medium text-lg'>
                                    {product.name}
                                </h3>

                                {/* Price */}
                                <p className='text-[#C9A227] font-semibold text-xl'>
                                    ₹{product.new_price}
                                </p>

                                {/* Quantity */}
                                <button className='w-14 h-14 border border-[#C9A227] rounded-xl font-semibold mx-auto'>
                                    {cartItems[product.id]}
                                </button>

                                {/* Total */}
                                <p className='font-semibold text-[#111111] text-lg'>
                                    ₹{product.new_price * cartItems[product.id]}
                                </p>

                                {/* Remove */}
                                <button
                                    onClick={() => removeFromCart(product.id)}
                                    className='mx-auto text-3xl text-gray-500 hover:text-red-500 transition-all duration-300'
                                >
                                    <MdDeleteOutline />
                                </button>

                            </div>
                        )
                    }

                    return null;
                })
            }


            {/* Bottom Section */}
            <div className='grid lg:grid-cols-2 gap-10 mt-16'>

                {/* Totals */}
                <div className='bg-white rounded-3xl shadow-md p-8'>

                    <h2 className='text-3xl font-serif mb-8'>
                        Cart Totals
                    </h2>

                    <div className='space-y-5'>

                        <div className='flex justify-between border-b pb-4'>
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>

                        <div className='flex justify-between border-b pb-4'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>

                        <div className='flex justify-between text-xl font-bold'>
                            <p>Total</p>
                            <p className='text-[#C9A227]'>
                                ₹{getTotalCartAmount()}
                            </p>
                        </div>

                    </div>

                    {/* <button className='w-full mt-8 py-4 bg-[#C9A227] text-white rounded-full font-semibold hover:bg-[#b08d1f] transition-all duration-300'>
                        Proceed To Checkout
                    </button> */}

                    <Link to='/checkout'>
                        <button className='w-full mt-8 py-4 bg-[#C9A227] text-white rounded-full font-semibold hover:bg-[#b08d1f] transition-all duration-300'>
                            Proceed To Checkout
                        </button>
                    </Link>

                </div>


                {/* Promo Code */}
                <div className='bg-white rounded-3xl shadow-md p-8'>

                    <h2 className='text-3xl font-serif mb-6'>
                        Promo Code
                    </h2>

                    <p className='text-gray-500 mb-6'>
                        Have a promo code? Enter it below.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4'>
                        <input
                            type='text'
                            placeholder='Enter Promo Code'
                            className='flex-1 border border-gray-300 rounded-full px-6 py-4 outline-none focus:border-[#C9A227]'
                        />

                        <button className='px-8 py-4 bg-[#111111] text-white rounded-full hover:bg-[#333] transition-all duration-300'>
                            Apply
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Cart;