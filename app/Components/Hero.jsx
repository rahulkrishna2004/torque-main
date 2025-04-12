"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Navlinks from "../Navlinks/Navlinks";
import { useRouter } from "next/navigation"
import GlitchText from "./GlitchText";
import Glitch from "./Glitchtext1";

const Hero = () => {
  const [progress, setProgress] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("second");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
 

  return (
    <div className="w-full h-screen flex items-center justify-center  relative overflow-hidden">
      {/* Navbar */}
      <motion.div className="absolute top-0 left-0 w-full px-4 md:px-10">
        <Navlinks isComplete={isComplete} />
      </motion.div>

      {/* Progress Display (Hidden after loading) */}
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center bg-black text-white text-4xl font-bold z-50"
        >
          <motion.span
            key={progress}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="text-white text-6xl md:text-8xl"
          >
            {progress}%
          </motion.span>
        </motion.div>
      )}

      {/* Video Background */}
      <motion.div
        initial={{ width: "60vw", height: "60vh", opacity: 1 }}
        animate={
          isComplete ? { width: "100vw", height: "100vh", opacity: 1 } : {}
        }
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 rounded-md flex items-center justify-center shadow-xl transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
      >
        <motion.video
          loop
          autoPlay
          muted
          playsInline
          src="/Herovideo.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={isComplete ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.video>
      </motion.div>

      {/* Heading & Subtitle */}
      <motion.div
        className="absolute mx-5 top-[45%] hidden md:top-[58%] my-20 md:my-0 md:flex flex-col items-start md:items-center md:text-center z-10 "
        initial="hidden"
        animate={isComplete ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.5 } },
        }}
      >
        {/* <motion.h1 className="text-white text-4xl md:text-[5vw] md:my-2 font-extrabold drop-shadow-lg leading-18">
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="md:text-[3vw] font-medium "
          >
            Experience the Art of
          </motion.span>
          <br />
          <motion.span
             variants={{
              hidden: { opacity: 0,},
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 2 }}
            className="relative inline-block "
          >
            <Glitch/>
          </motion.span>

          <motion.span
            variants={{
              hidden: { opacity: 0, },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 2.5 }}
            className="relative inline-block glitch mx-6 text-[#00DAFF]"
          >
            <GlitchText/>
          </motion.span>
        </motion.h1> */}

        {/* Scroll Down Button */}
        <motion.div
          initial="hidden"
          animate={isComplete ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 3.5 }}
          onClick={scrollToSection}
          className=" mt-6 flex justify-center items-center w-full"
        >
          <div className="w-14 h-14 my-40 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 border-white animate-pulse">
            {/* Inner Circle */}
            <div className="w-8 h-8 md:w-14 md:h-14 flex items-center justify-center rounded-full ">
              {/* Animated Arrow */}
              <motion.span
                initial={{ y: 0 }}
                animate={{ y: 10 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.8,
                }}
                className="text-white text-xl md:text-3xl"
              >
                <FaArrowDown />
              </motion.span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
