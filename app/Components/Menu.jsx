import React from "react";

const Menu = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black text-white p-4 md:p-8 overflow-y-auto z-[99999999999999999999]">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-500 pb-4">
        <img src="/Torque-PNG-02.png" alt="Torque Logo" className="h-10 md:h-12" />
        <button
          onClick={onClose}
          className="px-3 py-1 text-white hover:bg-gray-800 rounded"
        >
          Close
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center mt-8 space-y-6 lg:space-y-0 lg:space-x-12 w-full">
        {/* Video Section */}
        <div className="w-full lg:w-1/2 border border-gray-500 p-4 rounded-md flex flex-col items-start">
          <div className="w-full rounded-md overflow-hidden md:aspect-video h-40 md:h-auto">
            <video
              autoPlay
              muted
              loop
              playsInline
              src="/88481-606110665.mp4"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <p className="text-sm text-white mt-3">Play Reel</p>
        </div>

        {/* Navigation */}
        <div className="w-full lg:w-1/2 font-bold">
          <nav className="space-y-4 text-2xl">
            {[
              { name: "Home", link: "/" },
              { name: "Work", link: "/OurWorks" },
              { name: "Service", link: "/OurServices" },
              { name: "About", link: "/AboutUs" },
              { name: "Contact", link: "/Contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block border-b border-gray-500 pb-2 hover:text-gray-400"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer */}
      {/* <div className="fixed bottom-0 left-0 w-full border-t border-gray-500 p-4 flex flex-col md:flex-row justify-center md:justify-between items-center bg-black">
        <div className="flex space-x-6 mb-2 md:mb-0">
          <a href="#" className="hover:text-gray-400">
            Instagram
          </a>
          <a href="#" className="hover:text-gray-400">
            LinkedIn
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Menu;
