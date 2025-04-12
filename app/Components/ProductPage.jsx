"use client";

import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { MdShoppingCart } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import toast from "react-hot-toast";
import Link from "next/link";

const products = [
  {
    img: "2c345ede-c27d-4d7f-b43f-2546859a9834_600x600.jpg",
    name: "RAT REPELLENT SPRAY",
    mrp: "466",
    Link: "/Product",
  },
  {
    img: "34c0453a-ffbf-463d-aa1c-fc41df58b145_600x600.jpg",
    name: "RAT REPELLENT SPRAY",
    mrp: "466",
    Link: "/Product",
  },
  {
    img: "50142_Express-Shine-Carnauba-Wax-16oz_PDP_Square_Tile1_600x600.jpg",
    name: "CARNAUBA WAX",
    mrp: "466",
    Link: "/Product",
  },
  {
    img: "fed913bd-68d5-48ef-9861-0c2609ca9900_600x600.webp",
    name: "RAT REPELLENT SPRAY",
    mrp: "466",
    Link: "/Product",
  },
  {
    img: "f67f2ace-2b45-48e8-9d79-08c17ebbb8df_600x600.webp",
    name: "RAT REPELLENT SPRAY",
    mrp: "466",
    Link: "/Product",
  },
];

const ProductPage = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  const handleAddToCart = (product) => {
    const productToAdd = {
      ...product,
      quantity: 1,
      mrp: parseInt(product.mrp, 10),
    };
    addToCart(productToAdd);
    toast.success(`${product.name} added to cart! ✅`);
  };

  return (
    <div className="bg-black text-white w-[90%] m-auto min-h-full my-24 flex flex-col items-center">
      <h1 className="text-3xl font-bold my-5 text-[#00DAFF]">Our Products</h1>

      {/* Slider Section */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-4 shadow-md rounded-md text-black flex flex-col items-center">
              <Link href={product.Link} className="w-full flex flex-col items-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-72 object-contain mb-4 rounded-md"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">₹{product.mrp}</p>
              </Link>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => handleAddToCart(product)}
                className="mt-4 bg-[#00DAFF] text-black font-semibold px-6 py-2 rounded-md text-sm hover:bg-[#00c8e0] flex items-center gap-2 shadow-md"
              >
                <MdShoppingCart /> Add to Cart
              </motion.button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductPage;
