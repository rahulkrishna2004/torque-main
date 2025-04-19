"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mainCar, setMainCar] = useState({
    id: "main",
    title: "BMW 7 Series",
    url: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ4_dppgdh.jpg",
  });

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const dotRef = useRef(null);
  const cursorTarget = useRef({ x: 0, y: 0 });
  const clickableElements = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // Loading animation for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  // Track mouse position
  useEffect(() => {
    const moveDot = (e) => {
      cursorTarget.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", moveDot);
    return () => window.removeEventListener("mousemove", moveDot);
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let x = 0;
    let y = 0;

    const followCursor = () => {
      x += (cursorTarget.current.x - x) * 0.2;
      y += (cursorTarget.current.y - y) * 0.2;

      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      dot.style.transform = `translate(-50%, -50%)`;
      requestAnimationFrame(followCursor);
    };

    requestAnimationFrame(followCursor);
  }, []);

  useEffect(() => {
    const dot = dotRef.current;

    const handleMouseEnter = () => {
      dot.style.width = "16px";
      dot.style.height = "16px";
    };

    const handleMouseLeave = () => {
      dot.style.width = "8px";
      dot.style.height = "8px";
    };

    clickableElements.current.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      clickableElements.current.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const carouselImages = [
    mainCar.url,
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894424/TQ1_kgbzwa.jpg",
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ2_bunhsw.jpg",
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ3_l4jnla.jpg",
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ4_dppgdh.jpg",
  ];

  const handleNextImage = () => {
    const nextIndex = (carouselIndex + 1) % carouselImages.length;
    setCarouselIndex(nextIndex);
  };

  const [otherCars, setOtherCars] = useState([
    {
      id: "1",
      title: "BMW X5",
      url: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ2_bunhsw.jpg",
    },
    {
      id: "2",
      title: "Mini Cooper",
      url: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ3_l4jnla.jpg",
    },
    {
      id: "3",
      title: "MG Hector",
      url: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744896651/u_bnybbp.jpg",
    },
    {
      id: "4",
      title: "Royal Enfield",
      url: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894424/TQ1_kgbzwa.jpg",
    },
    {
      id: "5",
      title: "Mercedes Benz",
      url: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744896503/unnamed_tqnwac.jpg",
    },
    {
      id: "6",
      title: "KTM Duke",
      url: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744896548/unname_gpl2g2.jpg",
    },
  ]);

  const swapCar = (clickedCar) => {
    setMainCar(clickedCar);
    setCarouselIndex(0);
    setOtherCars((prevCars) =>
      prevCars.map((car) => (car.id === clickedCar.id ? mainCar : car))
    );
  };

  return (
    <div className="w-full min-h-full bg-black overflow-hidden scroll-smooth cursor-none relative">
      {isLoading && (
        <div className="fixed z-[9999] inset-0 bg-black flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-cyan-200 text-8xl font-bold"
          >
            WORK
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="mt-6 h-1 bg-cyan-500 rounded-full"
          />
        </div>
      )}

      <div
        ref={dotRef}
        className="fixed z-[9998] w-3 h-3 rounded-full bg-[#496afa] pointer-events-none transition-all duration-300 ease-out"
        style={{
          position: "fixed",
          transform: "translate(-50%, -50%)",
          top: "0px",
          left: "0px",
        }}
      />

      {!isLoading && (
        <>
          <div className="w-full min-h-full bg-black overflow-hidden scroll-smooth cursor-none relative">
            {/* Floating cursor dot */}
            <div
              ref={dotRef}
              className="fixed z-[9999] w-3 h-3 rounded-full bg-black pointer-events-none transition-all duration-300 ease-out"
              style={{
                position: "fixed",
                transform: "translate(-50%, -50%)",
                top: "0px",
                left: "0px",
              }}
            />

            <Navlinks isComplete={true} />
            <div className="w-full m-auto overflow-x-hidden h-full py-32">
              <div className="w-full h-[100vh] bg-black" id="main-carousel-section">
                {/* Top Section */}
                <div className="w-full h-[60%] flex bg-gray-800">
                  {/* Main Carousel */}
                  <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-[45%] h-full bg-black/0 bg-no-repeat bg-cover bg-center bg-blend-multiply transition-all duration-700 ease-in-out"
                    style={{ backgroundImage: `url(${carouselImages[carouselIndex]})` }}
                  >
                    <div className="mt-[53%] ml-[88%]">
                      <motion.button
                        ref={(el) => clickableElements.current.push(el)}
                        onClick={handleNextImage} // Add click handler here
                        className="w-10 hover-target ml-[2%] lg:mt-[10%] mt-[10%] gap-2 flex justify-center items-center font-medium h-10 rounded-full border-[1px] border-transparent bg-black text-white uppercase cursor-pointer"
                      >
                        <motion.img 
                          whileHover={{ rotate: 15 }} 
                          whileTap={{ rotate: -15 }}
                          transition={{ stiffness: 300 }}
                          src="download-removebg-preview.png" 
                          className="h-5 lg:mt-[10%]" 
                          alt="" 
                        />
                      </motion.button>
                    </div>

                    {/* Dots */}
                    <div className="absolute bottom-5 left-[10%] flex space-x-2">
                      {carouselImages.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full ${index === carouselIndex ? "bg-white" : "bg-white/40"}`}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* 4 Small Cars */}
                  <div className="w-[55%] h-full">
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={otherCars[i].id}
                        ref={(el) => clickableElements.current.push(el)}
                        onClick={() => swapCar(otherCars[i])}
                        className="hover-target w-[50%] h-[50%] float-left bg-black/60 bg-cover bg-center bg-blend-multiply bg-no-repeat transition-all duration-300"
                        style={{ backgroundImage: `url(${otherCars[i].url})` }}
                      >
                        <h1 className="text-white text-2xl ml-[10%] pt-[5%] font-medium">{otherCars[i].title}</h1>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="w-full h-[40%] flex bg-gray-800">
                  <div className="w-[45%] h-full flex">
                    {otherCars.slice(4).map((car) => (
                      <motion.div
                        key={car.id}
                        ref={(el) => clickableElements.current.push(el)}
                        onClick={() => swapCar(car)}
                        className="hover-target w-[50%] h-full bg-center bg-black/60 bg-cover bg-blend-multiply bg-no-repeat"
                        style={{ backgroundImage: `url(${car.url})` }}
                      >
                        <h1 className="text-white text-2xl ml-[10%] pt-[5%] font-medium">{car.title}</h1>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0.5, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-[55%] h-full bg-[#00a2ff]"
                  >
                    <h1 className="text-white text-3xl ml-[5%] pt-[5%] font-medium uppercase">
                      Welcome!
                    </h1>
                    <p className="text-white text-sm ml-[5%] pt-[2%] w-xl">
                      For more than 35 years, we have been bringing ambitious projects to life. The pride
                      of our work, the rigor in the execution, the spirit of team, and integrity are the
                      values that animate us on a daily basis.
                    </p>
                    <a href="#main-carousel-section">
                      <button className="hover-target w-40 ml-[2%] mt-[4%] gap-2 flex justify-center items-center font-medium h-15 bg-transparent border-[1px] text-white border-white rounded-full uppercase">
                        Read More
                      </button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
            <Footer />
            </div>
        </>
      )}
    </div>
  );
};

export default Page;

