import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShpContext';
import { useParams } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

import Breadcrum from '../Components/Breadcrum/Breadcrum';

const Product = () => {

    const { all_products, addToCart } = useContext(ShopContext);
    //const { all_products } = useContext(ShopContext);
    const { productId } = useParams();
    const [currentImage, setCurrentImage] = useState(0);

    // Find product
    const product = all_products.find(
        (e) => e.id === Number(productId)
    );

    console.log(product);
    console.log(addToCart);
    // Product not found
    if (!product) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <h1 className='text-3xl font-semibold text-[#111111]'>
                    Product Not Found
                </h1>
            </div>
        );
    }

    // Use gallery if available otherwise fallback to single image
    const images = product.gallery || [product.image];


    const nextImage = () => {
        setCurrentImage((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (
        <div className='bg-[#F8F6F2] min-h-screen'>

            {/* Breadcrumb */}
            <Breadcrum product={product} />

            {/* Product Section */}
            <div className='max-w-[1300px] mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16'>

                {/* Left Side */}
                <div>

                    {/* Main Image Container */}
                    <div className='relative bg-white rounded-3xl shadow-md overflow-hidden'>

                        {/* Left Arrow */}
                        {
                            images.length > 1 && (
                                <button
                                    onClick={prevImage}
                                    className='absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-[#C9A227] hover:text-white transition-all duration-300'
                                >
                                    <FaChevronLeft />
                                </button>
                            )
                        }

                        {/* Main Image */}
                        <img
                            src={images[currentImage]}
                            alt={product.name}
                            className='w-full h-[650px] object-cover'
                        />

                        {/* Right Arrow */}
                        {
                            images.length > 1 && (
                                <button
                                    onClick={nextImage}
                                    className='absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-[#C9A227] hover:text-white transition-all duration-300'
                                >
                                    <FaChevronRight />
                                </button>
                            )
                        }

                    </div>

                    {/* Thumbnails */}
                    {
                        images.length > 1 && (
                            <div className='flex gap-4 mt-6 justify-center flex-wrap'>

                                {images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt=''
                                        onClick={() => setCurrentImage(index)}
                                        className={`w-[90px] h-[110px] object-cover rounded-xl cursor-pointer border-2 transition-all duration-300
                                        ${currentImage === index
                                                ? "border-[#C9A227]"
                                                : "border-gray-200 hover:border-[#C9A227]"
                                            }`}
                                    />
                                ))}

                            </div>
                        )
                    }

                </div>


                {/* Right Side */}
                <div className='flex flex-col justify-center gap-6'>

                    <h1 className='text-5xl font-serif text-[#111111]'>
                        {product.name}
                    </h1>

                    {/* Price */}
                    <div className='flex items-center gap-5'>
                        <p className='text-4xl font-bold text-[#C9A227]'>
                            ₹{product.new_price}
                        </p>

                        <p className='text-2xl text-gray-400 line-through'>
                            ₹{product.old_price}
                        </p>
                    </div>

                    {/* Description */}
                    <p className='text-gray-600 leading-8 text-lg'>
                        Crafted with premium fabric and elegant detailing,
                        this luxurious piece blends modesty with timeless
                        sophistication. Perfect for everyday elegance and
                        special occasions.
                    </p>

                    {/* Sizes */}
                    <div>
                        <h3 className='text-xl font-semibold mb-4'>
                            Select Size
                        </h3>

                        <div className='flex gap-4'>
                            {['S', 'M', 'L', 'XL'].map((size) => (
                                <button
                                    key={size}
                                    className='w-14 h-14 border border-gray-300 rounded-lg hover:border-[#C9A227] hover:text-[#C9A227] transition-all duration-300'
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart */}
                    {/* <button 
                    onClick={() => addToCart(product.id)}
                    className='w-fit px-12 py-4 bg-[#C9A227] text-white rounded-full font-semibold hover:bg-[#b08d1f] hover:shadow-lg transition-all duration-300'>
                        Add To Cart
                    </button> */}
                    <button
                        onClick={() => {
                            console.log("Button Clicked");
                            addToCart(product.id);
                        }}
                    >
                        Add To Cart
                    </button>

                    {/* Category */}
                    <div className='pt-4 border-t border-gray-200'>
                        <p className='text-gray-600'>
                            <span className='font-semibold text-black'>
                                Category:
                            </span>{" "}
                            <span className='capitalize'>
                                {product.category}
                            </span>
                        </p>
                    </div>

                </div>

            </div>
          
          <RelatedProducts
              category={product.category}
              currentProductId={product.id}
          />
        </div>
    );
};

export default Product;
