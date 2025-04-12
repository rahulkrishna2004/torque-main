"use client";

import { motion } from "framer-motion";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";

const page = () => {
  return (
    <div className="w-full min-h-full bg-black">
      <Navlinks isComplete={true} />
      <div className="w-[90%] m-auto overflow-x-hidden flex flex-col justify-center items-center h-full py-32">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-5xl lg:text-7xl bebas tracking-wide leading-tight"
          >
            <span className=" text-white bg-clip-text font-bold drop-shadow-lg">
              Our <span className="text-[#00DAFF]">Work</span>
            </span>
          </motion.h1>
          <p className="text-gray-300 text-sm md:text-base mt-3 font-light tracking-wide">
            A glimpse into the shine, detail, and power we've brought to each
            machine.
          </p>
        </div>

        <div className="mt-[4%] w-full px-4 md:px-8 lg:px-0 lg:ml-[10%]">
          <div className="w-full lg:w-300 rounded-xl gap-3 md:gap-4 lg:gap-6 h-auto lg:h-146 flex flex-col lg:flex-row justify-center">
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              {/* Left - Ferrari */}
              <motion.div
                whileHover={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  boxShadow: "inset -6px -39px 51px 23px rgba(0, 0, 0, 0.65)",
                  borderWidth: "10px",
                  borderColor: "white",
                  borderStyle: "solid",
                }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="group w-full lg:w-[66%] cursor-pointer rounded-xl bg-[url('https://ocdetailmn.com/wp-content/uploads/2023/12/Ferrari-min-1536x1153.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-full relative"
              >
                <p className="absolute top-[83%] left-[5%] font-semibold manrope text-white tracking-wide text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                  Ferrari
                </p>
                <p className="absolute top-[90%] left-[5%] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                  High Gloss, Low Cut Polish
                </p>
              </motion.div>

              {/* Right - Ford Mustang Stacked */}
              <div className="flex flex-col gap-4 w-full lg:w-[32%]">
                {/* Ford Mustang Top */}
                <motion.div
                  whileHover={{
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    borderWidth: "10px",
                    borderColor: "white",
                    borderStyle: "solid",
                  }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="group w-full cursor-pointer h-[200px] lg:h-[49%] rounded-xl bg-black/50 bg-[url('https://ocdetailmn.com/wp-content/uploads/2023/12/Ford-Mustang.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay flex flex-col justify-end p-4 overflow-hidden"
                >
                  <p className="manrope text-white tracking-wide text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                    Ford Mustang
                  </p>
                  <p className="manrope text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                    Wash, Clay, Solvent
                  </p>
                </motion.div>

                {/* Ford Mustang Bottom */}
                <motion.div
                  whileHover={{
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    borderWidth: "10px",
                    borderColor: "white",
                    borderStyle: "solid",
                  }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="group w-full cursor-pointer h-[200px] lg:h-[49%] rounded-xl bg-black/50 bg-[url('https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat bg-blend-overlay flex flex-col justify-end p-4 overflow-hidden"
                >
                  <p className="manrope text-white tracking-wide text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                    Audi R8
                  </p>
                  <p className="manrope text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                    Paint Enhancement + Sealant
                  </p>
                </motion.div>
              </div>
            </div>
          
          </div>
          <div className="w-full lg:w-300 flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6 justify-center items-center mt-[3%] h-auto lg:h-75 bg-transparent">
            <motion.div
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderWidth: "10px",
                borderColor: "white",
                borderStyle: "solid",
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="group relative w-full md:w-[34%] h-[200px] lg:h-full rounded-xl bg-[url('https://ocdetailmn.com/wp-content/uploads/2023/12/Lexus-SC300-2JZ-Turbo.jpg')] bg-cover bg-black/50 bg-blend-overlay bg-center"
            >
              <p className="absolute top-[70%] left-[5%] font-semibold manrope text-white tracking-wide text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Lexus SC300 2JZ Turbo
              </p>
              <p className="absolute top-[85%] left-[5%] text-white tracking-wide text-sm manrope opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                2 Stage Paint Correction
              </p>
            </motion.div>
            <motion.div
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderWidth: "10px",
                borderColor: "white",
                borderStyle: "solid",
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="group relative w-full md:w-[34%] h-[200px] lg:h-full rounded-xl bg-[url('https://ocdetailmn.com/wp-content/uploads/2023/12/Mercedes-Maybach-1-1536x1153.jpg')] bg-cover bg-black/50 bg-blend-overlay"
            >
              <p className="absolute top-[70%] left-[5%] font-semibold manrope text-white tracking-wide text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Mercedes Maybach
              </p>
              <p className="absolute top-[85%] left-[5%] text-white tracking-wide text-sm manrope opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Clean & Condition
              </p>
            </motion.div>
            <motion.div
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderWidth: "10px",
                borderColor: "white",
                borderStyle: "solid",
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="group relative w-full md:w-[34%] h-[200px] lg:h-full rounded-xl bg-[url('https://ocdetailmn.com/wp-content/uploads/2023/12/Toyota-Land-Cruiser.jpg')] bg-cover bg-black/50 bg-blend-overlay"
            >
              <p className="absolute top-[70%] left-[5%] font-semibold manrope text-white tracking-wide text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Toyota Land Cruiser
              </p>
              <p className="absolute top-[85%] left-[5%] text-white tracking-wide text-sm manrope opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                2 Stage Paint Correction
              </p>
            </motion.div>
          </div>
          <div className="w-full lg:w-250 mt-[3%] rounded-xl gap-3 md:gap-4 lg:gap-6 h-auto lg:h-110 flex flex-col lg:flex-row justify-center">
            <motion.div
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderWidth: "10px",
                borderColor: "white",
                borderStyle: "solid",
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="group w-full lg:w-[43%] cursor-pointer h-[200px] lg:h-70 rounded-xl bg-black/50 bg-[url('https://ocdetailmn.com/wp-content/uploads/2023/12/Ford-Expedition.jpg')] bg-cover bg-center bg-no-repeat bg-black/50 bg-blend-overlay relative overflow-hidden"
            >
              <p className="manrope text-white tracking-wide text-xl absolute top-[75%] left-[8%] translate-y-[-50%] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Ford Expedition
              </p>
              <p className="manrope text-white text-sm absolute top-[85%] left-[8%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Interior Getting Ready for Sale
              </p>
            </motion.div>
            <motion.div
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                boxShadow: "inset -6px -39px 51px 23px rgba(0, 0, 0, 0.65)",
                borderWidth: "10px",
                borderColor: "white",
                borderStyle: "solid",
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="group w-full lg:w-[66%] cursor-pointer h-[300px] lg:h-full bg-black/50 rounded-xl bg-[url('https://ocdetailmn.com/wp-content/uploads/2023/12/Indian-Motorcycle.jpg')] bg-cover bg-center bg-no-repeat bg-black/50 bg-blend-overlay relative"
            >
              <p className="absolute top-[80%] left-[5%] font-semibold manrope text-white tracking-wide text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Indian Motorcycle
              </p>
              <p className="absolute top-[90%] left-[5%] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                High Gloss, Low Cut Polish
              </p>
            </motion.div>
          </div>
          <div className="w-full lg:w-300 mt-[3%] rounded-xl gap-3 md:gap-4 lg:gap-6 h-auto lg:h-146 flex flex-col lg:flex-row justify-center">
            <motion.div
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderWidth: "10px",
                borderColor: "white",
                borderStyle: "solid",
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="group w-full lg:w-[32%] cursor-pointer h-[200px] lg:h-70 rounded-xl bg-black/50 bg-[url('https://ocdetailmn.com/wp-content/uploads/2023/12/Sedan.jpg')] bg-cover bg-center bg-no-repeat bg-black/50 bg-blend-overlay relative overflow-hidden"
            >
              <p className="manrope text-white tracking-wide text-xl absolute top-[75%] left-[8%] translate-y-[-50%] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Sedan
              </p>
              <p className="manrope text-white text-sm absolute top-[85%] left-[8%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Coke Spill Clean Up
              </p>
            </motion.div>
            <motion.div
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                boxShadow: "inset -6px -39px 51px 23px rgba(0, 0, 0, 0.65)",
                borderWidth: "10px",
                borderColor: "white",
                borderStyle: "solid",
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="group w-full lg:w-[66%] cursor-pointer h-[300px] lg:h-full bg-black/50 rounded-xl bg-[url('https://ocdetailmn.com/wp-content/uploads/2023/12/Ford-Lightning.jpg')] bg-cover bg-center bg-no-repeat bg-black/50 bg-blend-overlay relative"
            >
              <p className="absolute top-[83%] left-[5%] font-semibold manrope text-white tracking-wide text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Ford Lightning
              </p>
              <p className="absolute top-[90%] left-[5%] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                High Gloss, Low Cut Polish
              </p>
            </motion.div>
          </div>
          <div className="w-full lg:w-300 flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6 justify-center items-center mt-[3%] h-auto lg:h-75 bg-transparent">
            <motion.div
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderWidth: "10px",
                borderColor: "white",
                borderStyle: "solid",
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="group relative w-full md:w-[34%] h-[200px] lg:h-full rounded-xl bg-[url('https://ocdetailmn.com/wp-content/uploads/2023/12/Mid-Size-SUV.jpg')] bg-cover bg-black/50 bg-blend-overlay bg-center"
            >
              <p className="absolute top-[70%] left-[5%] font-semibold manrope text-white tracking-wide text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Mid Size SUV
              </p>
              <p className="absolute top-[85%] left-[5%] text-white tracking-wide text-sm manrope opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Refresh
              </p>
            </motion.div>
            <motion.div
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderWidth: "10px",
                borderColor: "white",
                borderStyle: "solid",
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="group relative w-full md:w-[34%] h-[200px] lg:h-full rounded-xl bg-[url('https://ocdetailmn.com/wp-content/uploads/2023/12/Mercedes-G-Wagon.jpg')] bg-cover bg-black/50 bg-blend-overlay"
            >
              <p className="absolute top-[70%] left-[5%] font-semibold manrope text-white tracking-wide text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Mercedes G Wagon
              </p>
              <p className="absolute top-[85%] left-[5%] text-white tracking-wide text-sm manrope opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Matte Wash, Solvent Bath
              </p>
            </motion.div>
            <motion.div
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderWidth: "10px",
                borderColor: "white",
                borderStyle: "solid",
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="group relative w-full md:w-[34%] h-[200px] lg:h-full rounded-xl bg-[url('https://ocdetailmn.com/wp-content/uploads/2023/12/Sedan-second.jpg')] bg-cover bg-black/50 bg-blend-overlay"
            >
              <p className="absolute top-[70%] left-[5%] font-semibold manrope text-white tracking-wide text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Sedan
              </p>
              <p className="absolute top-[85%] left-[5%] text-white tracking-wide text-sm manrope opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                General Cleaning
              </p>
            </motion.div>
          </div>
          <div className="w-full lg:w-250 mt-[3%] rounded-xl gap-3 md:gap-4 lg:gap-6 h-auto lg:h-110 flex flex-col lg:flex-row justify-center">
            <motion.div
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderWidth: "10px",
                borderColor: "white",
                borderStyle: "solid",
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="group w-full lg:w-[43%] cursor-pointer h-[200px] lg:h-70 rounded-xl bg-black/50 bg-[url('https://ocdetailmn.com/wp-content/uploads/2023/12/Toyota-Tundra.jpg')] bg-cover bg-center bg-no-repeat bg-black/50 bg-blend-overlay relative overflow-hidden"
            >
              <p className="manrope text-white tracking-wide text-xl absolute top-[75%] left-[8%] translate-y-[-50%] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Toyota Tundra
              </p>
              <p className="manrope text-white text-sm absolute top-[85%] left-[8%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                2 Stage Paint Correction
              </p>
            </motion.div>
            <motion.div
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                boxShadow: "inset -6px -39px 51px 23px rgba(0, 0, 0, 0.65)",
                borderWidth: "10px",
                borderColor: "white",
                borderStyle: "solid",
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="group w-full lg:w-[66%] cursor-pointer h-[300px] lg:h-full bg-black/50 rounded-xl bg-[url('https://ocdetailmn.com/wp-content/uploads/2023/12/Audi-S8-1.jpg')] bg-cover bg-center bg-no-repeat bg-black/50 bg-blend-overlay relative"
            >
              <p className="absolute top-[80%] left-[5%] font-semibold manrope text-white tracking-wide text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Audi S8
              </p>
              <p className="absolute top-[90%] left-[5%] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[400ms]">
                Clean & Condition
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
