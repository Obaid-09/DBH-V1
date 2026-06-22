import React from 'react';

const Item = ({ image, name, new_price, old_price }) => {
  return (
    <div className="w-[260px] bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer">

      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-[280px] object-cover group-hover:scale-105 transition-all duration-500"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Product Name */}
        <h3 className="text-[#111111] text-[17px] font-semibold mb-4 line-clamp-2">
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
        <button className="w-full py-3 bg-[#C9A227] text-white rounded-full font-semibold text-lg hover:bg-[#b08d1f] hover:shadow-lg transition-all duration-300">
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default Item;
