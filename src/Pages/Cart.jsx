import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShpContext';

const Cart = () => {

    const {
        all_products,
        cartItems,
        removeFromCart,
        getTotalCartAmount
    } = useContext(ShopContext);

    return (
        <div className='p-10'>

            {
                all_products.map((item) => {

                    if (cartItems[item.id] > 0) {

                        return (
                            <div
                                key={item.id}
                                className='flex items-center gap-6 border-b py-6'
                            >

                                <img
                                    src={item.image}
                                    className='w-28 h-36 object-cover'
                                    alt=''
                                />

                                <div className='flex-1'>
                                    <h2>{item.name}</h2>

                                    <p>
                                        ₹{item.new_price}
                                    </p>

                                    <p>
                                        Quantity :
                                        {cartItems[item.id]}
                                    </p>
                                </div>

                                <button
                                    onClick={() =>
                                        removeFromCart(item.id)
                                    }
                                >
                                    Remove
                                </button>

                            </div>
                        );
                    }

                    return null;
                })
            }

            <div className='mt-10 text-2xl font-bold'>
                Total: ₹{getTotalCartAmount()}
            </div>

        </div>
    );
};

export default Cart;
