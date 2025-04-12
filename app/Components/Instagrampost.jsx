"use client";

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Instagrampost = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full overflow-hidden min-h-full bg-black px-4 sm:px-6 md:px-8">
      {/* Header */}
      <div className="pt-10 flex justify-center">
        <h1 className="text-white font-bold text-4xl lg:text-5xl">
          Our <span className="text-cyan-500">Instagram</span>
        </h1>
      </div>

      {/* Instagram Feed */}
      <div className=" flex justify-center">
        {/* ✅ Use your own widget ID here */}
        <div
          className="elfsight-app-d45d8d95-3b3e-45bc-83ba-1003ab96deb7 w-full max-w-[600px]"
          data-elfsight-app-lazy
        ></div>
      </div>

      {/* Follow Button */}
      <div className="flex justify-center mt-10">
        <a
          href="https://www.instagram.com/torquedetailingstudio"
          target="_blank"
          rel="noopener noreferrer"
          className=" relative z-[99999] -top-20 rounded-full fredoka bg-cyan-500 text-black font-semibold text-lg flex items-center hover:bg-white transition duration-300 px-5 py-3"
        >
          <FontAwesomeIcon icon={faInstagram} className="mr-2"  />
          Follow on Instagram
        </a>
      </div>
    </div>
  );
};

export default Instagrampost;
