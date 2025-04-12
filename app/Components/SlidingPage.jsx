"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const logos = [
  { src: "/Images/onyx_logo_-_new-copy.png", alt: "Groupe Lauzon" },
  { src: "/Images/onyx_logo_-1.png", alt: "Arbour Volkswagen" },
  { src: "/Images/onyx_logo2 (1).png", alt: "Mercedes-Benz" },
  { src: "/Images/onyx_logo3 (1).png", alt: "Mazda" },
];

const dealerships = [
  {
    src: "/applying-nanoceramics-cars-car-paint-protection-concept.jpg",
    name: "Paint Protection Film",
    link: "/graphene-coating",
  },
  {
    src: "/car-wash-detailing-station.jpg",
    name: "Graphene Coating",
    link: "/graphene-coating",
  },
  {
    src: "/male-worker-wrapping-car-with-ptotective-foil.jpg",
    name: "Ceramic Coating",
    link: "/graphene-coating",
  },
];

const SlidingPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full min-h-screen bg-black text-white" id="second">
      {/* Section 1: Sliding Logos */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full bg-[#262424] text-white py-12 px-4 md:px-10 shadow-md"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
          {/* Left Static Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-start items-center text-center md:text-left"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl px-20">
              Leading car care & <br />
              <span className="text-[#00DAFF] text-3xl sm:text-4xl lg:text-4xl font-bold whitespace-nowrap">
                Paint Protection Brands
              </span>
            </h3>
          </motion.div>

          {/* Sliding Logos */}
          <div className="w-full md:w-2/3 overflow-hidden relative flex justify-start">
            <div className="logo-slider">
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={80}
                  className="w-[100px] sm:w-[120px] h-[80px] mx-3 sm:mx-6 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 2: Dealership Info */}
      <div  className="w-full flex flex-col items-center justify-center my-10 p-4 sm:p-6 md:p-12 ">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-6xl text-center relative font-medium"
        >
          Quality & Sustainable{" "}
          <span className="font-bold text-[#00DAFF]">Car Care</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center px-4 text-[12px] sm:text-[14px] md:text-xl max-w-2xl mt-4 text-gray-300"
        >
          We’re committed to creating car care solutions that are effective,
          affordable, and sustainable for a cleaner car and a cleaner world.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#00DAFF] text-[#00DAFF] text-md sm:text-lg font-medium rounded-full flex items-center gap-2 hover:bg-[#00DAFF] hover:text-white hover:font-bold transition-all duration-300"
        >
          <Link href={`/OurServices`} >Our services →</Link>
        </motion.button>
      </div>

      {/* Section 3: Dealership Images with Scroll & Hover Effect */}
      <div className="flex w-full justify-center ">
        <motion.div className="flex gap-3 mt-10" layout>
          {dealerships.map((dealer, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-4xl flex flex-col items-center"
              layout
              initial={{ width: "420px" }}
              animate={{
                width:
                  hoveredIndex === index
                    ? "620px"
                    : hoveredIndex === null
                    ? "420px"
                    : "320px",
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              transition={{
                width: {
                  duration: 0.7,
                  ease: [0.32, 0.72, 0, 1],
                },
                layout: {
                  duration: 0.7,
                  ease: [0.32, 0.72, 0, 1],
                },
              }}
            >
              <a href={dealer.link}>
                <motion.img
                  src={dealer.src}
                  className="h-[420px] object-cover rounded-4xl cursor-pointer"
                  style={{
                    width: "620px",
                    objectPosition: "left center",
                  }}
                  alt={dealer.name}
                  transition={{
                    duration: 0.7,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                />
              </a>
              {/* Dealer Name & Arrow */}
              <div className="flex items-center mx-5">
                <motion.div
                  className="w-full text-left my-5 text-2xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {dealer.name}
                </motion.div>
                <a href={dealer.link}>
                  <motion.div
                    className="text-2xl mx-5 mt-1 cursor-pointer"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <ArrowRight />
                  </motion.div>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CSS for Animation */}
      <style jsx>{`
        .logo-slider {
          display: flex;
          align-items: center;
          gap: 1rem;
          min-width: max-content;
          transform: translateX(50%);
          animation: slideLeft 15s linear infinite;
        }

        @keyframes slideLeft {
          from {
            transform: translateX(50%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default SlidingPage;
