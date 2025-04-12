"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlitchLogo from "../Components/GlitchLogo";
import Cart from "../Components/Cart";
import Menu from "../Components/Menu";

const Navlinks = ({ isComplete }) => {
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isComplete) setShowNav(true);
  }, [isComplete]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showNav && (
        <motion.nav
          className={`fixed top-0  left-0 w-full z-30 transition-all duration-300 ${
            scrolled
              ? "bg-black/70 backdrop-blur-sm shadow-md"
              : "bg-transparent"
          }`}
        >
          {/* Wrapper with fixed height to prevent scroll styles affecting layout */}
          <div className="max-w-screen-xl mx-auto flex items-center justify-between px-5 md:py-14 h-[80px]">
            <GlitchLogo />

            <div className="flex items-center gap-6">
              <Cart />
              <button
                onClick={() => setMenuOpen(true)}
                className="text-white px-4 py-2 font-bold text-xl border rounded-2xl"
              >
                Menu
              </button>
            </div>
          </div>
        </motion.nav>
      )}

      {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navlinks;
