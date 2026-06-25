import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShpContext';
import Item from '../Components/Items/Item';

const Wishlist = () => {

    const { all_products, wishlistItems } = useContext(ShopContext);

    const wishlistProducts = all_products.filter(
        (item) => wishlistItems.includes(item.id)
    );

    return (
        <div className='bg-[#F8F6F2] min-h-screen px-8 py-12'>

            {/* Heading */}
            <div className='text-center mb-14'>
                <p className='uppercase tracking-[5px] text-[#C9A227] text-sm'>
                    Your Favorites
                </p>

                <h1 className='text-5xl font-serif text-[#111111] mt-2'>
                    Wishlist
                </h1>

                <div className='w-24 h-[3px] bg-[#C9A227] mx-auto mt-4 rounded-full'></div>
            </div>

            {/* Empty Wishlist */}
            {wishlistProducts.length === 0 ? (

                <div className='flex flex-col items-center justify-center mt-24'>

                    <h2 className='text-3xl font-serif text-[#111111] mb-4'>
                        Your Wishlist is Empty
                    </h2>

                    <p className='text-gray-500 text-lg'>
                        Save your favorite products here ❤️
                    </p>

                </div>

            ) : (

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center'>

                    {wishlistProducts.map((item) => (
                        <Item
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            new_price={item.new_price}
                            old_price={item.old_price}
                            rating={item.rating}
                        />
                    ))}

                </div>

            )}

        </div>
    );
};

export default Wishlist;
