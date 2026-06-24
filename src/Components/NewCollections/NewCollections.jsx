import React from 'react'
import new_collection from '../Assets/new_collection'
import Item from '../Items/Item'

const NewCollections = () => {
  return (
    <section className='py-20 px-8 bg-[#F8F8F8] mb-5'>

      {/* Heading */}
      <div className="flex flex-col items-center mb-14">

        <p className="uppercase tracking-[5px] text-[#C9A227] text-sm font-medium">
          Curated For You
        </p>

        <h2 className="text-5xl md:text-6xl font-serif font-semibold text-[#111111] mt-3">
          Our New Collection
        </h2>

        <div className="w-28 h-[3px] bg-[#C9A227] rounded-full mt-5"></div>

        <p className="text-gray-500 text-center max-w-2xl mt-6 text-lg leading-8">
          Discover our latest arrivals crafted with elegance,
          sophistication, and timeless modest fashion.
        </p>

      </div>

      {/* Products */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center'>
        {new_collection.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            rating={item.rating}
          />
        ))}
      </div>

    </section>
  )
}

export default NewCollections
