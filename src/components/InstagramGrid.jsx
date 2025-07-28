import React, { useState } from "react";
import {
  FaInstagram,
  FaArrowUp,
  FaRegComments,
  FaPaperPlane,
} from "react-icons/fa";

/* --- image imports --- */
import about1 from "../image/about1.svg";
import insta from "../image/insta.svg";
import insta2 from "../image/insta2.svg";
import insta3 from "../image/insta3.svg";
import about3 from "../image/about3.svg";

const thumbs = [about1, insta, insta2, insta3, about1, insta2, insta, about1];

export default function InstagramGrid() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      alert(`Message Sent: ${message}`);
      setMessage("");
    }
  };

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="mb-8 text-center text-2xl font-semibold text-emerald-800">
        @trifonjewels
      </h2>

      {/* Responsive Grid */}
      <div className="mx-auto grid grid-cols-4 grid-rows-4 gap-3 max-w-[680px] sm:gap-4">
        {[
          { row: 1, col: 2, img: thumbs[0] },
          { row: 1, col: 3, img: thumbs[1] },
          { row: 2, col: 1, img: thumbs[2] },
          { row: 2, col: 4, img: thumbs[3] },
          { row: 3, col: 1, img: thumbs[4] },
          { row: 3, col: 4, img: thumbs[5] },
          { row: 4, col: 2, img: thumbs[6] },
          { row: 4, col: 3, img: thumbs[7] },
        ].map(({ row, col, img }, i) => (
          <div
            key={i}
            className={`relative group row-start-${row} col-start-${col} aspect-square rounded-md overflow-hidden`}
          >
            <img
              src={img}
              alt={`thumb-${i}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#00715D]/40 cursor-pointer opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <FaInstagram className="text-white text-2xl" />
            </div>
          </div>
        ))}

        {/* Center Tile */}
        <div className="relative group col-start-2 row-start-2 col-span-2 row-span-2 overflow-hidden rounded-md aspect-square">
          <img
            src={about3}
            alt="center"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00715D]/40 cursor-pointer opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <FaInstagram className="text-white text-3xl" />
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-50">
        <button
          onClick={handleScrollTop}
          className="p-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white shadow-md transition"
        >
          <FaArrowUp />
        </button>
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="p-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white shadow-md transition"
        >
          <FaRegComments />
        </button>
      </div>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[90%] bg-white rounded-lg shadow-2xl border border-gray-200 z-50 overflow-hidden">
          <div className="bg-emerald-700 text-white px-4 py-3">
            <h3 className="font-bold text-lg">Chat With Us</h3>
            <p className="text-sm">
              Hi, message us with any questions. We're happy to help!
            </p>
          </div>

          {/* Message Input */}
          <div className="px-4 pt-4 pb-2">
            <div className="relative">
              <textarea
                rows="2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write Message"
                className="w-full border border-gray-300 rounded-xl p-3 pr-10 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button
                onClick={handleSendMessage}
                className="absolute right-3 top-3 text-emerald-700 hover:text-emerald-900"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>

          {/* Instant Answers */}
          <div className="px-4 pb-4">
            <p className="text-xs text-center text-gray-500 mb-2">
              Instant answers
            </p>
            <div className="space-y-2">
              <button className="w-full text-white bg-emerald-700 text-sm rounded-md py-2">
                What are your shipping details?
              </button>
              <button className="w-full bg-white border border-gray-300 text-sm rounded-md py-2">
                Track My Order
              </button>
              <button className="w-full bg-white border border-gray-300 text-sm rounded-md py-2">
                What is your return policy?
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
