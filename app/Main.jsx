import React from "react";
import Hero from "./Components/Hero";
import SlidingPage from "./Components/SlidingPage";
import Testimonials from "./Components/Details";
import Footer from "./Components/Footer";
import ProductPage from "./Components/ProductPage";
import ChatBox from "./Chat_Bot/ChatBox";
import { Toaster } from "react-hot-toast";
import SliderPage from "./Components/SliderPage";
import Instagrampost from "./Components/Instagrampost";


const Main = () => {
  return (
    <div className="w-full min-h-screen bg-black overflow-hidden">

        <Toaster position="top-right" reverseOrder={false} />
        <Hero />
        <SlidingPage />
        <ProductPage />
        <Testimonials />
        <SliderPage/>
        <Instagrampost/>
        <Footer />
    </div>
  );
};

export default Main;
