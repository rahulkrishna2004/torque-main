"use client";

import { motion } from "framer-motion";
import React from "react";
import ImageSlider from "./ImageSlider";

const SliderPage = () => {
  const features = [
    {
      img: "https://torquedetailingstudio.com/wp-content/uploads/2025/01/uv-protection.png",
      text: "UV & SUNSHINE",
    },
    {
      img: "https://torquedetailingstudio.com/wp-content/uploads/2025/01/rain.png",
      text: "WEATHER EROSION",
    },
    {
      img: "https://torquedetailingstudio.com/wp-content/uploads/2025/01/radiation.png",
      text: "ACID RAIN",
    },
    {
      img: "https://torquedetailingstudio.com/wp-content/uploads/2025/01/scratch.png",
      text: "GRAFFITI & SCRATCHES",
    },
    {
      img: "https://torquedetailingstudio.com/wp-content/uploads/2025/01/bird-on-branch.png",
      text: "BIRD DROPPING",
    },
    {
      img: "https://torquedetailingstudio.com/wp-content/uploads/2025/01/leaf.png",
      text: "TREE GUM",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black py-12 px-4 sm:px-6 lg:px-8">
      <motion.div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-white bebas font-bold text-4xl sm:text-5xl lg:text-4xl text-center leading-tight sm:leading-[66px] mb-8 sm:mb-12">
          Slide & See What <span className="text-[#00d9ff] font-bold ">We Can Do</span>
        </h1>

        {/* Image Slider Container */}
        <motion.div
          initial={{ width: "90%", height: "50%", borderRadius: "20px" }}
          whileInView={{ borderRadius: "30px" }}
          transition={{ duration: 1, delay: 0.5, ease: "circInOut" }}
          className="lg:ml-[4%] rounded-2xl overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <ImageSlider
              beforeImage="https://torquedetailingstudio.com/wp-content/uploads/2024/03/cosy-01.png"
              afterImage="https://torquedetailingstudio.com/wp-content/uploads/2024/03/cosy.png"
            />
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, type: "spring" }}
          className="mt-12 sm:mt-16"
        >
          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-8 lg:gap-12 items-center sm:items-stretch">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain"
                    src={item.img}
                    alt={item.text}
                    loading="lazy"
                  />
                </div>
                <p className="font-semibold mt-3 text-white text-sm sm:text-base">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SliderPage;
