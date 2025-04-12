"use client";

import React from "react";
import { motion } from "framer-motion";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";
import Link from "next/link";

const ServiceCard = ({ title, description, image }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="flex flex-col sm:flex-row w-full bg-black"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-60 sm:w-70 sm:h-100 object-cover"
      />
      <div className="space-y-4 px-4 pt-4 sm:px-0 sm:pt-0">
        <h2 className="text-2xl sm:text-4xl text-white ml-0 sm:ml-8 tracking-wide font-bold">
          {title}
        </h2>
        <p className="text-zinc-400 ml-0 sm:ml-8 mt-2 sm:mt-6 poppins text-base sm:text-md max-w-full sm:max-w-[420px]">
          {description}
        </p>
        <p className="text-white anton font-medium text-md sm:text-lg mt-4 sm:mt-30 ml-0 sm:ml-8 cursor-pointer">
          VIEW DETAILS
        </p>
        <motion.div
          className="h-1 ml-[-50px] mt-1 bg-cyan-600"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? 200 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

const ComplexServices = () => {
  const services = [
    {
      title: "PAINT PROTECTION MASK",
      description:
        "A paint protection mask, also known as a clear bra or paint protection film (PPF), is a transparent layer that is applied to the exterior of a vehicle to safeguard the paint from scratches, chips, and other damage.",
      image:
        "https://cdn.prod.website-files.com/64536e07e4457c8ef760ae1a/6465fea302c0e95bc8f1722c_Services%2002-p-500.jpg",
    },
    {
      title: "INTERIOR DETAILING",
      description:
        "Deep cleaning and protection of all interior surfaces including seats, carpets, and dashboard. Keeps your ride looking brand new inside.",
      image:
        "https://cdn.prod.website-files.com/64536e07e4457c8ef760ae1a/64660061348bdedaba4049de_Services%2001-p-500.jpg",
    },
    {
      title: "EXTERIOR DETAILING",
      description:
        "Thorough cleaning, restoration, and finishing of a vehicle's exterior to produce a show-quality level of detail.",
      image:
        "https://cdn.prod.website-files.com/64536e07e4457c8ef760ae1a/6466006d210af69ff3dbdc8d_Services%2003-p-500.jpg",
    },
  ];

  return (
    <>
      <div className="w-full bg-black">
        <Navlinks isComplete={true} />
        
 <div className="w-full md:px-20 h-100 absolute top-25">
          <img
            src="/715.jpg"
            alt="Our Services"
            className="w-full h-full object-cover rounded-3xl"
          />

          <div className="absolute inset-0 top-70 md:px-35 mb-20">
            <h1 className="text-5xl sm:text-6xl font-bold text-white anton tracking-wide px-5">
              Our Services
            </h1>
            <p className="text-white px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis nobis consequuntur recusandae, soluta modi quaerat
              porro laborum hic autem sint alias dolorum minima dolores
              officiis. Inventore laborum minima voluptate. Animi?
            </p>
          </div>
        </div>

        <div className="reference md:px-60">
          <div className="flex flex-col sm:flex-row px-4 sm:px-12 pt-28 sm:pt-32 pb-0">
            <div className="w-full max-w-7xl flex flex-col sm:flex-row gap-12 sm:gap-20 mx-auto ">
              {/* Mobile Header Section */}
              <div className="sm:hidden space-y-6 mb-6 mt-120  ">
                <div className="border-l-4 border-cyan-600 pl-4">
                  <h1 className="text-4xl font-bold anton text-white">
                    SERVICES
                  </h1>
                </div>
                <p className="text-gray-300 poppins text-base max-w-full">
                  CarWash offers a range of customizable services to cater to
                  your specific needs.
                </p>
                <button className="border-2 anton tracking-wide border-cyan-600 text-white px-6 py-3 rounded-full text-base hover:bg-cyan-600 hover:text-black transition-all duration-200">
                  <Link href="/Contact">Contact Us</Link>
                </button>
              </div>
              {/* Desktop Fixed Header Section */}
              {/* <div className="hidden sm:block w-[500px] sticky  top-32 left-32 space-y-6"> */}
              <div className="hidden sm:block w-[400px] sticky top-32 space-y-6 self-start md:mt-120  md:mb-50">
                <div className="border-l-4 border-cyan-600 pl-4">
                  <h1 className="text-5xl font-bold anton text-white">
                    SERVICES
                  </h1>
                </div>
                <p className="text-gray-300 poppins text-lg max-w-[360px]">
                  CarWash offers a range of customizable services to cater to
                  your specific needs.
                </p>
                <button className="border-2 anton tracking-wide border-cyan-600 text-white px-6 py-3 rounded-full text-lg hover:bg-cyan-600 hover:text-black transition-all duration-200">
                  <Link href="/Contact">Contact Us</Link>
                </button>
              </div>

              {/* Right Section */}
              <div className="sm:ml-[500px] w-full md:ml-50 space-y-12 font-bold pb-20 sm:pb-40 md:mt-120">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    image={service.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen bg-[#f8f8f8] flex justify-center items-center md:px-80 py-12 ">
      <div className="max-w-7xl w-full grid md:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="md:col-span-2">
          <h2 className="text-5xl font-black mb-6">LET’S <br /> BOOK  AN <span className="text-[#00DAFF]">APPOINTMENT</span></h2>
          <form className="grid md:grid-cols-2 gap-5">
            <input className="p-4 rounded-full border text-sm" type="text" placeholder="Name" />
            <input className="p-4 rounded-full border text-sm" type="text" placeholder="Vehicle type" />

            <input className="p-4 rounded-full border text-sm" type="text" placeholder="Phone number*" />
            <div className="relative">
              <input className="p-4 rounded-full border w-full text-sm pr-10" type="date" placeholder="Preferred service date" />
              <span className="absolute right-4 top-4 text-[#00DAFF]"></span>
            </div>

            <input className="p-4 rounded-full border text-sm" type="email" placeholder="Email*" />
            <div className="relative">
              <input className="p-4 rounded-full border w-full text-sm pr-10" type="time" placeholder="Preferred service time" />
              <span className="absolute right-4 top-4 text-[#00DAFF] "></span>
            </div>

            <textarea
              className="p-4 border rounded-2xl md:col-span-2 text-sm"
              rows="4"
              placeholder="Any additional requests regarding your car?"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 border border-[#00DAFF] text-[#00DAFF] font-bold px-8 py-3 rounded-full hover:bg-[#00DAFF] hover:text-white transition"
            >
              SUBMIT MESSAGE
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-black underline">CONTACT US</h2>

          <div>
            <h3 className="text-[#00DAFF] text-2xl font-bold">PHONE</h3>
            <p>(406) 555-0120</p>
            <p>(316) 555-0116</p>
          </div>

          <div>
            <h3 className="text-[#00DAFF] text-2xl font-bold">KENTUCKY OFFICE</h3>
            <p>4517 Washington Ave. Manchester,<br />Kentucky 39495</p>
          </div>

          <div>
            <h3 className="text-[#00DAFF] text-2xl font-bold">OPENING HOURS</h3>
            <p>09:00 am - 06:00 pm</p>
            <p>Monday - Friday</p>
          </div>
        </div>
      </div>
    </div>  
        {/* Footer */}
        <div className="relative bg-black pt-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ComplexServices;