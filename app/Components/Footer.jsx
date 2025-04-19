"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const quickLinks = [
    { name: "Services", link: "/OurServices" },
    { name: "Contact", link: "/Contact" },
    { name: "About Us", link: "/AboutUs" },
  ];
  
  const services = [
    { name: "Windshield Coating", link: "/windshield-coating" },
    { name: "Interior Detailing", link: "/interior-detailing" },
    { name: "Exterior Detailing", link: "/exterior-detailing" },
  ];

  const specialServices = [
    { name: "Graphene Coating", link: "/graphene-coating" },
    { name: "Ceramic Coating", link: "/ceramic-coating" },
    { name: "Paint Protection", link: "/paint-protection" },
  ];

  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-10 lg:px-20 w-full">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="border-b border-gray-700 lg:h-5"
      />

      <div className="grid grid-cols-1 lg:mt-[40px] sm:grid-cols-2 lg:grid-cols-4 gap-0 text-center lg:text-left max-w-7xl mx-auto">
        {/* 1. Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3 lg:ml-[80px]"
        >
          <p className="text-xl font-semibold">Quick Links</p>
          <ul className="space-y-2 text-gray-400">
            {quickLinks.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, marginLeft: '10px', color: "#00DAFF" }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
              >
                <Link href={item.link}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 2. Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-3 lg:ml-[0px]"
        >
          <p className="text-xl font-semibold">Services</p>
          <ul className="space-y-2 text-gray-400">
            {services.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#00DAFF" }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
              >
                <Link href={item.link}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 3. Special Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-3 md:my-10 sm:mt-20 lg:ml-[-140px]"
        >
          <ul className="relative -top-8 space-y-2 md:space-y-1  text-gray-400 md:my-8  sm:text-lg">
            {specialServices.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#00DAFF" }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-[17px]"
              >
                <Link href={item.link}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 4. Contact Info + Socials */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-4 lg:ml-[-20px]"
        >
          <p className="text-xl font-semibold">Contact Us</p>
          <p className="text-gray-400">
            29, 4th B Cross, 5th Block, Koramangala,
            <br />
            Bengaluru, Karnataka 560095
          </p>
          <p className="text-[#00DAFF] font-semibold">
            +91 96869 68315 / +91 8884440944
          </p>

          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            {[
              {
                Icon: FaInstagram,
                href: "https://www.instagram.com/torquedetailingstudio",
              },
              {
                Icon: FaFacebookF,
                href: "https://www.facebook.com/torquedetailingstudio",
              },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#00DAFF" }}
                transition={{ duration: 0.3 }}
                className="text-xl cursor-pointer"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="border-t border-gray-700 lg:mt-[-20px] pt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-sm text-gray-400 max-w-7xl mx-auto"
      >
        <p className="mb-2 sm:mb-0 text-center sm:text-left">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="text-center sm:text-right text-sm text-gray-400 inline-flex items-center justify-center sm:justify-end gap-2">
          Passionately developed by
          <span className="inline-flex items-center gap-2 font-semibold text-white">
            <a href="https://epixable.com/">
              <img
                src="/LOGO - WHITE-03.png"
                alt="Epixable"
                className="h-5 lg:h-4 sm:h-6 w-auto"
              />
            </a>
          </span>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
