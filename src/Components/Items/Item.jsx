import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShpContext';

const Item = ({ id, image, name, new_price, old_price }) => {
  const {addToCart} = useContext(ShopContext)
  console.log("Item ID:", id);
  return (
    <div className="w-[260px] bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">

      {/* Product Image */}
      <div className="overflow-hidden">
        <Link to = {`/product/${id}`}>
          <img
          onClick={() => window.scrollTo(0, 0)}
          src={image}
          alt={name}
          className="w-full h-[280px] object-cover group-hover:scale-105 transition-all duration-500"
        />
        </Link>
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Product Name */}
        <h3 className="text-[#111111] text-[15px] font-semibold mb-4 line-clamp-2">
          {name}
        </h3>

        {/* Prices */}
        <div className="flex items-center gap-4 mb-5">

          <span className="text-[#C9A227] text-[25px] font-bold">
            ₹{new_price}
          </span>

          <span className="text-gray-400 line-through text-lg">
            ₹{old_price}
          </span>

        </div>

        {/* Button */}
        <button 
            onClick={() => {
            console.log("Button Clicked");
            addToCart(id);
        }}
        className="cursor-pointer w-full py-3 bg-[#C9A227] text-white rounded-full font-semibold text-lg hover:bg-[#b08d1f] hover:shadow-lg transition-all duration-300">
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default Item;
