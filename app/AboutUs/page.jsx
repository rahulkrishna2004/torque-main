"use client";

import React, { useRef } from "react";
import Navlinks from "../Navlinks/Navlinks";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../Components/Footer";

const Page = () => {
  const images = [
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744896503/unnamed_tqnwac.jpg",
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ2_bunhsw.jpg",
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ3_l4jnla.jpg",
  ];

  const img = [
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894424/TQ1_kgbzwa.jpg",
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744896651/u_bnybbp.jpg",
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744896548/unname_gpl2g2.jpg",
  ];

  const scrollRef1 = useRef(null);
  const { scrollYProgress: progress1 } = useScroll({
    target: scrollRef1,
    offset: ["start end", "end start"],
  });
  const xRightToLeft = useTransform(progress1, [0, 1], ["40%", "-30%"]);

  const scrollRef2 = useRef(null);
  const { scrollYProgress: progress2 } = useScroll({
    target: scrollRef2,
    offset: ["start end", "end start"],
  });
  const xLeftToRight = useTransform(progress2, [0, 1], ["-30%", "40%"]);

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 640;

  return (
    <div className="w-full min-h-screen bg-black overflow-hidden ">
      {/* Top Navigation */}
      <Navlinks isComplete={true} />

      {/* Hero Section */}
      <div className="w-full flex justify-center px-4 pt-10 pb-20">
        <div
          className="relative w-full max-w-[1200px] h-[600px] top-20 rounded-[30px] overflow-hidden bg-cover bg-center shadow-2xl transition-all duration-500"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ4_dppgdh.jpg)`,
            transition: "transform 0.6s ease-out",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-12 pb-10 text-white">
            <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-bold mb-4 leading-tight drop-shadow-md">
              About
            </h1>
            <p className="text-[15px] sm:text-[17px] md:text-[20px] max-w-4xl font-light leading-relaxed drop-shadow-sm">
              For more than 35 years, we have been bringing ambitious projects
              to life. The pride of our work, the rigor in the execution, the
              spirit of team, and integrity are the values that animate us on a
              daily basis.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll-based Section 1: Right to Left */}
      <div
        ref={scrollRef1}
        className="w-full bg-black py-12 px-4 sm:px-10 overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center min-w-full">
          {images.map((img, index) => (
            <motion.div
              key={index}
              style={{ x: isDesktop ? xRightToLeft : 0,transition: "transform 0.6s ease-out",}}
              className="rounded-[30px] overflow-hidden shadow-lg w-full max-w-[400px] sm:w-1/3"

            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-[250px] sm:h-[400px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll-based Section 2: Left to Right */}
      <div
        ref={scrollRef2}
        className="w-full bg-black py-12 px-4 sm:px-10 overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center min-w-full">
          {img.map((img, index) => (
            <motion.div
              key={index}
              style={{ x: isDesktop ? xLeftToRight : 0 }}
              className="rounded-[30px] overflow-hidden shadow-lg w-full max-w-[400px] sm:w-1/3"
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-[250px] sm:h-[400px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
