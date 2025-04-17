"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faPaperPlane,
  faXmark,
  faCheck,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const OptionCard = ({ option, selected, onClick }) => (
  <label className="cursor-pointer">
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.5 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-full tracking-[0.5px] text-[14px] font-medium transition-all border flex items-center gap-3 mt-0 ${
        selected
          ? "border-transparent bg-[black] text-white"
          : "bg-[black] text-white border-transparent"
      }`}
    >
      <div
        className={`w-4 h-4 rounded-sm transition-all ${
          selected
            ? "border-transparent text-white bg-[black] flex justify-center items-center"
            : "bg-[white]"
        }`}
      >
        {selected && (
          <FontAwesomeIcon icon={faCheck} className="text-white text-md" />
        )}
      </div>
      {option}
    </motion.div>
  </label>
);

const TypingDots = () => (
  <div className="flex space-x-1 pl-2 items-center h-5 mt-0">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-2 h-2 bg-black rounded-full"
        animate={{
          opacity: [0.3, 1, 0.3],
          y: [0, -3, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "loop",
          delay: i * 0.2,
        }}
      />
    ))}
  </div>
);

const ChatBox = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [step, setStep] = useState(0);
  const [chatData, setChatData] = useState({
    service: [],
    vehicleType: [],
    model: "",
    mobile: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const options = [
    ["Ceramic Coating", "PPF", "Car Detailing", "Sunfilms"],
    ["Car", "Bike"],
  ];

  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([{ sender: "bot", text: null }]);
      const timer = setTimeout(() => {
        setMessages([{ sender: "bot", text: "Please select a service." }]);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isChatOpen]);

  const resetChat = () => {
    setMessages([{ sender: "bot", text: null }]);
    setTimeout(() => {
      setMessages([{ sender: "bot", text: "Please select a service." }]);
    }, 1000);
    setStep(0);
    setChatData({ service: [], vehicleType: [], model: "", mobile: "" });
    setSelectedOptions([]);
    setUserInput("");
    setShowForm(false);
  };

  const handleSend = () => {
    if (step === 0 || step === 1) {
      if (selectedOptions.length === 0) return;
      const userMessage = {
        sender: "user",
        text: selectedOptions.join(", "),
      };

      let botReply = "";
      let nextStep = step;

      if (step === 0) {
        setChatData((prev) => ({ ...prev, service: selectedOptions }));
        botReply = "Is it for a Car or Bike?";
        nextStep = 1;
      } else if (step === 1) {
        setChatData((prev) => ({ ...prev, vehicleType: selectedOptions }));
        botReply = `Great! What is your ${selectedOptions.join("/")} model?`;
        nextStep = 2;
      }

      setMessages((prev) => [
        ...prev,
        userMessage,
        { sender: "bot", text: null },
      ]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { sender: "bot", text: botReply },
        ]);
        setStep(nextStep);
        setSelectedOptions([]);
      }, 1000);
    } else if (step === 2) {
      if (!userInput.trim()) return;
      const userMessage = { sender: "user", text: userInput };
      const botReply = "Sure, That's a great choice";

      setChatData((prev) => ({ ...prev, model: userInput }));
      setShowForm(true);

      setMessages((prev) => [
        ...prev,
        userMessage,
        { sender: "bot", text: null },
      ]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { sender: "bot", text: botReply },
        ]);
      }, 1000);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "I will call you in some time to discuss in detail, Can I have your mobile number?",
          },
          { sender: "bot", text: "Please type your phone number ️😊" },
        ]);
      }, 1500);

      setUserInput("");
      setStep(3);
    }
  };

  const handleSubmitForm = () => {
    if (!chatData.mobile.trim()) return;
    const userReply = {
      sender: "user",
      text: `Phone: ${chatData.mobile}`,
    };

    const botReply = {
      sender: "bot",
      text: "Thanks for contacting us! We'll connect with you as soon as possible.",
    };

    setMessages((prev) => [...prev, userReply, { sender: "bot", text: null }]);
    setTimeout(() => {
      setMessages((prev) => [...prev.slice(0, -1), botReply]);
      setShowForm(false);
    }, 1000);
  };

  const validatePhoneNumber = (number) => /^[0-9]{10}$/.test(number);

  useEffect(() => {
    if (chatData.mobile && !validatePhoneNumber(chatData.mobile)) {
      setIsMobileNumberValid(false);
    } else {
      setIsMobileNumberValid(true);
    }
  }, [chatData.mobile]);

  return (
    <div className="relative min-h-full w-[5%] bg-white">
          <div className="relative min-h-full w-[5%] bg-white">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-4 w-[28%] max-w-md sm:right-11 md:right-12 lg:right-16 h-[80vh] rounded-2xl shadow-xl bg-white flex flex-col z-50"
          >
            {/* Header */}
            <div className="relative flex items-center w-[100%] h-[12%] bg-white rounded-t-2xl px-6 overflow-hidden">
              <div className="absolute left-4 top-1/2 lg:mt-2 -translate-y-1/2 w-12 h-12 rounded-full overflow-hidden z-20 bg-white p-1">
                <img
                  src='Untitled.png'
                  alt="Chat Icon"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex-1 ml-13 lg:mt-[8px] relative z-10">
                <h1 className="text-black font-semibold tracking-wide anek lg:text-md lg:mt-2 sm:text-lg">
                  Hi, Saanvi Here!
                </h1>
                <p className="text-gray-400 mt-[-5px] text-sm">
                  How may I assist you today?
                </p>
              </div>
              <div className="flex gap-3 lg:mt-5 items-center z-10">
                <button
                  onClick={resetChat}
                  className="text-black p-2 rounded-full"
                >
                  <FontAwesomeIcon icon={faRotateRight} className="text-md hover:text-cyan-700" />
                </button>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="pt-3 pb-3 pl-4 pr-4 lg:ml-[-10px] flex justify-center items-center rounded-full"
                >
                  <FontAwesomeIcon icon={faXmark} className="text-black text-xl hover:text-cyan-700" />
                </button>
              </div>  
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-[#f3f3f3] p-4 mt-5 overflow-y-auto scroll-smooth sm:text-sm text-xs">
              <div className="flex flex-col gap-4">
                {messages.map((msg, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div
                      className={`max-w-[80%] lg:mt-3 flex items-start gap-3 ${
                        msg.sender === "user"
                          ? "self-end justify-end"
                          : "self-start justify-start"
                      }`}
                    >
                      {msg.sender === "bot" && (
                        <img
                          src='Untitled.png'
                          alt="Bot"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      )}
                      <div
                        className={`p-3 pl-6 pr-6 rounded-xl text-xl lg:text-[17px] sm:text-base ${
                          msg.sender === "user"
                            ? "bg-[#131313] text-white"
                            : "bg-[#ececec] text-[#272727]  tracking-wide"
                        }`}
                      >
                        {msg.text !== null ? msg.text : <TypingDots />}
                      </div>
                    </div>

                    {step <= 1 &&
                      ((step === 0 &&
                        msg.text === "Please select a service.") ||
                        (step === 1 &&
                          msg.text === "Is it for a Car or Bike?")) && (
                        <div className="flex text-2xl flex-wrap ml-11 gap-3 self-start">
                          {options[step].map((opt) => (
                            <OptionCard
                              key={opt}
                              option={opt}
                              selected={selectedOptions.includes(opt)}
                              onClick={() =>
                                setSelectedOptions((prev) =>
                                  prev.includes(opt)
                                    ? prev.filter((o) => o !== opt)
                                    : [...prev, opt]
                                )
                              }
                            />
                          ))}
                        </div>
                      )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Footer Input */}
            <div className="p-4 border-t border-gray-200">
              {showForm ? (
                <div className="flex gap-3 items-center">
                  <div className="flex items-center justify-center border border-gray-300 rounded-xl h-10 w-30">
                    <img
                      src="data:image/png;base64,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"
                      alt="Indian Flag"
                      className="w-6 h-4 mr-2"
                    />
                    <span className="text-gray-600">+91</span>
                  </div>
                  {showForm && (
              <div className="relative gap-5 flex justify-center items-center ">
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={chatData.mobile}
                  onChange={(e) =>
                    setChatData({ ...chatData, mobile: e.target.value })
                  }
                  className=" px-4 py-2 rounded-xl text-gray-800"
                />
                <button
                  onClick={handleSubmitForm}
                  className={` text-black rounded-full flex items-center gap-2 ${
                    !isMobileNumberValid ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={!isMobileNumberValid}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            )}
                </div>
              ) : (
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    className={`flex-1 px-4 py-2 border rounded-xl text-sm ${
                      step <= 1
                        ? "bg-gray-200 cursor-not-allowed text-gray-500"
                        : "focus:outline-none focus:border-black"
                    }`}
                    placeholder={
                      step <= 1
                        ? "Select an option above..."
                        : "Enter vehicle model..."
                    }
                    disabled={step <= 1}
                  />
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    onClick={handleSend}
                    className="p-3 cursor-pointer rounded-full hover:opacity-90 transition-opacity"
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full text-white flex justify-center items-center z-50 shadow-lg"
      >
        <img
          src='Untitled.png'
          alt="Chat"
          className="w-full h-full object-cover rounded-full"
        />
      </button>
    </div>
    </div>
  );
};

export default ChatBox;
