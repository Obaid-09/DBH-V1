// import React, { useEffect, useState } from 'react';
// import API from '../services/api';
// import { ShopContext } from '../Context/ShpContext';
// import { useParams } from 'react-router-dom';
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// import Breadcrum from '../Components/Breadcrum/Breadcrum';

// const renderStars = (rating) => {
//     const stars = [];

//     for (let i = 1; i <= 5; i++) {
//         if (i <= Math.floor(rating)) {
//             stars.push(
//                 <FaStar key={i} className="text-[#C9A227]" />
//             );
//         }
//         else if (i - rating <= 0.5) {
//             stars.push(
//                 <FaStarHalfAlt key={i} className="text-[#C9A227]" />
//             );
//         }
//         else {
//             stars.push(
//                 <FaRegStar key={i} className="text-[#C9A227]" />
//             );
//         }
//     }
//     return stars;
// };

// const Product = () => {

//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);
//     //const { all_products } = useContext(ShopContext);
//     const { productId } = useParams();
//     const [currentImage, setCurrentImage] = useState(0);

//     // Find product
//     // const product = all_products.find(
//     //     (e) => e.id === Number(productId)
//     // );

//     //console.log(product.rating);
//     // Product not found
//     if (!product) {
//         return (
//             <div className='min-h-screen flex justify-center items-center'>
//                 <h1 className='text-3xl font-semibold text-[#111111]'>
//                     Product Not Found
//                 </h1>
//             </div>
//         );
//     }

//     // Use gallery if available otherwise fallback to single image
//     const images = product.gallery || [product.image];


//     const nextImage = () => {
//         setCurrentImage((prev) =>
//             prev === images.length - 1 ? 0 : prev + 1
//         );
//     };

//     const prevImage = () => {
//         setCurrentImage((prev) =>
//             prev === 0 ? images.length - 1 : prev - 1
//         );
//     };

//     return (
//         <div className='bg-[#F8F6F2] min-h-screen'>

//             {/* Breadcrumb */}
//             <Breadcrum product={product} />

//             {/* Product Section */}
//             <div className='max-w-[1300px] mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16'>

//                 {/* Left Side */}
//                 <div>

//                     {/* Main Image Container */}
//                     <div className='relative bg-white rounded-3xl shadow-md overflow-hidden'>

//                         {/* Left Arrow */}
//                         {
//                             images.length > 1 && (
//                                 <button
//                                     onClick={prevImage}
//                                     className='absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-[#C9A227] hover:text-white transition-all duration-300'
//                                 >
//                                     <FaChevronLeft />
//                                 </button>
//                             )
//                         }

//                         {/* Main Image */}
//                         <img
//                             src={images[currentImage]}
//                             alt={product.name}
//                             className='w-full h-[650px] object-cover'
//                         />

//                         {/* Right Arrow */}
//                         {
//                             images.length > 1 && (
//                                 <button
//                                     onClick={nextImage}
//                                     className='absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-[#C9A227] hover:text-white transition-all duration-300'
//                                 >
//                                     <FaChevronRight />
//                                 </button>
//                             )
//                         }

//                     </div>

//                     {/* Thumbnails */}
//                     {
//                         images.length > 1 && (
//                             <div className='flex gap-4 mt-6 justify-center flex-wrap'>

//                                 {images.map((img, index) => (
//                                     <img
//                                         key={index}
//                                         src={img}
//                                         alt=''
//                                         onClick={() => setCurrentImage(index)}
//                                         className={`w-[90px] h-[110px] object-cover rounded-xl cursor-pointer border-2 transition-all duration-300
//                                         ${currentImage === index
//                                                 ? "border-[#C9A227]"
//                                                 : "border-gray-200 hover:border-[#C9A227]"
//                                             }`}
//                                     />
//                                 ))}

//                             </div>
//                         )
//                     }

//                 </div>


//                 {/* Right Side */}
//                 <div className='flex flex-col justify-center gap-6'>

//                     <h1 className='text-5xl font-serif text-[#111111]'>
//                         {product.name}
//                     </h1>

//                     <div className='flex items-center gap-2'>

//                         <div className='flex gap-1 text-[#C9A227] text-lg'>
//                             {renderStars(product.rating)}
//                         </div>

//                         <span className='text-gray-500'>
//                             ({product.rating}) • 124 Reviews
//                         </span>

//                     </div>

//                     {/* Price */}
//                     <div className='flex items-center gap-5'>
//                         <p className='text-4xl font-bold text-[#C9A227]'>
//                             ₹{product.new_price}
//                         </p>

//                         <p className='text-2xl text-gray-400 line-through'>
//                             ₹{product.old_price}
//                         </p>
//                     </div>

//                     {/* Description */}
//                     <p className='text-gray-600 leading-8 text-lg'>
//                         Crafted with premium fabric and elegant detailing,
//                         this luxurious piece blends modesty with timeless
//                         sophistication. Perfect for everyday elegance and
//                         special occasions.
//                     </p>

//                     {/* Sizes */}
//                     <div>
//                         <h3 className='text-xl font-semibold mb-4'>
//                             Select Size
//                         </h3>

//                         <div className='flex gap-4'>
//                             {['S', 'M', 'L', 'XL'].map((size) => (
//                                 <button
//                                     key={size}
//                                     className='w-14 h-14 border border-gray-300 rounded-lg hover:border-[#C9A227] hover:text-[#C9A227] transition-all duration-300'
//                                 >
//                                     {size}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Add to Cart */}
//                     {/* <button 
//                     onClick={() => addToCart(product.id)}
//                     className='w-fit px-12 py-4 bg-[#C9A227] text-white rounded-full font-semibold hover:bg-[#b08d1f] hover:shadow-lg transition-all duration-300'>
//                         Add To Cart
//                     </button> */}
//                     <button
//                         onClick={() => {
//                             console.log("Button Clicked");
//                             addToCart(product.id);
//                         }}
//                     >
//                         Add To Cart
//                     </button>

//                     {/* Category */}
//                     <div className='pt-4 border-t border-gray-200'>
//                         <p className='text-gray-600'>
//                             <span className='font-semibold text-black'>
//                                 Category:
//                             </span>{" "}
//                             <span className='capitalize'>
//                                 {product.category}
//                             </span>
//                         </p>
//                     </div>

//                 </div>

//             </div>
          
//           <RelatedProducts
//               category={product.category}
//               currentProductId={product.id}
//           />
//         </div>
//     );
// };

// export default Product;




import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShpContext';
import { useParams } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { toast } from 'react-toastify';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

import API from '../services/api';

const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars.push(
                <FaStar key={i} className="text-[#C9A227]" />
            );
        }
        else if (i - rating <= 0.5) {
            stars.push(
                <FaStarHalfAlt key={i} className="text-[#C9A227]" />
            );
        }
        else {
            stars.push(
                <FaRegStar key={i} className="text-[#C9A227]" />
            );
        }
    }

    return stars;
};

const Product = () => {

    const { addToCart } = useContext(ShopContext);

    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentImage, setCurrentImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState("");
    useEffect(() => {
        fetchProduct();
    });

    const fetchProduct = async () => {
        try {

            const res = await API.get(
                `/products/${productId}`
            );

            console.log(res.data.data);

            setProduct(res.data.data);

        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <h1 className='text-3xl'>
                    Loading...
                </h1>
            </div>
        );
    }

    if (!product) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <h1 className='text-3xl font-semibold'>
                    Product Not Found
                </h1>
            </div>
        );
    }

    const images = product.images || [];

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

            <Breadcrum product={product} />

            <div className='max-w-[1300px] mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16'>

                {/* Left Side */}

                <div>

                    <div className='relative bg-white rounded-3xl shadow-md overflow-hidden'>

                        {
                            images.length > 1 && (
                                <button
                                    onClick={prevImage}
                                    className='absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg'
                                >
                                    <FaChevronLeft />
                                </button>
                            )
                        }

                        <img
                            src={images[currentImage]}
                            alt={product.name}
                            className='w-full h-[650px] object-cover'
                        />

                        {
                            images.length > 1 && (
                                <button
                                    onClick={nextImage}
                                    className='absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg'
                                >
                                    <FaChevronRight />
                                </button>
                            )
                        }

                    </div>

                    {
                        images.length > 1 && (

                            <div className='flex gap-4 mt-6 justify-center flex-wrap'>

                                {images.map((img, index) => (

                                    <img
                                        key={index}
                                        src={img}
                                        alt=''
                                        onClick={() => setCurrentImage(index)}
                                        className={`w-[90px] h-[110px] object-cover rounded-xl cursor-pointer border-2
                                        ${currentImage === index
                                                ? "border-[#C9A227]"
                                                : "border-gray-200"
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

                    <div className='flex items-center gap-2'>

                        <div className='flex gap-1'>
                            {renderStars(product.averageRating || 0)}
                        </div>

                        <span className='text-gray-500'>
                            ({product.averageRating || 0})
                        </span>

                    </div>

                    <div className='flex items-center gap-5'>

                        <p className='text-4xl font-bold text-[#C9A227]'>
                            ₹{product.price}
                        </p>

                        {
                            product.originalPrice > 0 && (
                                <p className='text-2xl text-gray-400 line-through'>
                                    ₹{product.originalPrice}
                                </p>
                            )
                        }

                    </div>

                    <p className='text-gray-600 leading-8 text-lg'>
                        {product.description}
                    </p>

                    {/* Sizes */}

                    {
                        product.sizes?.length > 0 && (

                            <div className='flex gap-4 flex-wrap'>
                                {['S','M','L','XL'].map((size)=>(
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-14 h-14 border rounded-lg
                                        ${
                                            selectedSize === size
                                            ? "bg-[#C9A227] text-white"
                                            : "border-gray-300"
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        )
                    }

                    {/* <button
                        onClick={() => addToCart(product._id)}
                        className='w-fit px-12 py-4 bg-[#C9A227] text-white rounded-full font-semibold hover:bg-[#b08d1f]'
                    >
                        Add To Cart
                    </button> */}
                    <button
                        onClick={() => {

                            if(!selectedSize){
                                toast.error("Please select size");
                                return;
                            }

                            addToCart(product._id, selectedSize);
                        }}
                        className='w-fit px-12 py-4 bg-[#C9A227] text-white rounded-full font-semibold hover:bg-[#b08d1f]'
                    >
                        Add To Cart
                    </button>

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
                currentProductId={product._id}
            />

        </div>
    );
};

export default Product;
