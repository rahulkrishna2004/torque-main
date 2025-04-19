"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Exceptional PPF Installation on My Skoda Superb at Torque Detailing Studio! I recently had PPF (Paint Protection Film) applied to my Skoda Superb at Torque Detailing Studio, and I couldn't be more impressed! The team did an outstanding job with precision and attention to detail, ensuring seamless coverage.",
    name: "-Sai Sharath",
  },
  {
    quote:
      "I recently had my old PPF removed and a new one applied on my Toyota Fortuner at Torque Detailing Studio, and I couldn't be happier with the results. The old PPF had started turning yellow, making the car look aged, but the team at Torque handled the removal process with great care, ensuring no damage to the paint.",
    name: "-Dinesh",
  },
  {
    quote:
      "I recently got my Toyota Hilux detailed and had Paint Protection Film (PPF) applied. The team did an exceptional job, leaving my vehicle looking brand new with a flawless finish. The detailing work was thorough, bringing out the shine and making every inch of the car look pristine.",
    name: "-Shankara M",
  },
  {
    quote:
      "I had given my Duke 390 for detailing and repainting at Torque Detailing Studio and my mind was blown away by the work these guys did. They've removed all the scratches on my bike and used eco-friendly products. Will recommend everyone to come here.",
    name: "-Hrishikesh Kulkarni",
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="z-0 w-full md:w-[90%] min-h-full m-auto py-16 bg-black text-white px-6 flex flex-col items-center">
      {/* Heading */}
      <div className="flex flex-col md:flex-row w-full md:w-[95%] items-center md:items-end justify-center md:justify-between gap-8 md:gap-0 px-4">
        {/* Text Section */}
        <div className="w-full md:w-[45%] text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Over 35 years {" "}
            <br className="hidden md:block" />
            <span className="text-[#00DAFF]">trust worthy</span>
          </motion.h2>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[10%] flex justify-center md:justify-end">
          <img
            src="/BROUCHER DESIGN EPIXABLE ACADEMY copy.ai 01 (1)-04.png"
            alt="Illustration"
            className="w-30 max-w-xs sm:max-w-md md:max-w-lg h-20 object-contain"
          />
        </div>
      </div>

      {/* Swiper Container */}
      <div className="relative w-full max-w-8xl px-5 mt-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg lg:h-[400px] sm:h-[800px] md:h-[500px] flex flex-col justify-between"
              >
                <p className="italic text-lg text-left">{testimonial.quote}</p>

                {/* 5-Star Rating */}
                <div className="flex items-center mt-10 gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>

                <div className="mt-2">
                  <h4 className="text-left font-semibold text-xl">
                    {testimonial.name}
                  </h4>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
