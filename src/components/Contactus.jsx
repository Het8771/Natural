import React, { useState } from "react";

const CheckoutTabs = () => {
  const [step, setStep] = useState("Personal");

  return (
    <div className="min-h-screen bg-white p-4 md:p-10 flex flex-col gap-6 justify-center items-center">
      {/* Contact Section */}
      <div className="bg-white rounded-md shadow-md w-full max-w-6xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#00685E] py-4 px-6 text-white font-semibold text-lg rounded-t-md">
          Get In Touch With Us
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-semibold text-[#00685E] mb-1">Phone Number</h4>
              <p className="text-sm text-gray-800">0012334566</p>
              <hr className="mt-2 border-gray-300" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#00685E] mb-1">Email Address</h4>
              <p className="text-sm text-gray-800">Johndoe@example.com</p>
              <hr className="mt-2 border-gray-300" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#00685E] mb-1">Location</h4>
              <p className="text-sm text-gray-800">Lorem Ipsum</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:col-span-2">
            <h3 className="text-[#00685E] font-semibold text-base mb-2">Send us a message</h3>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-[#04675C]"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-[#04675C]"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-[#04675C]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-[#04675C]"
              />
              <textarea
                placeholder="Message"
                className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-[#04675C] h-32 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-[#00685E] hover:bg-[#03564e] text-white text-sm font-semibold px-4 py-2 ml-[10px] rounded-full md:col-span-2 mx-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTabs;
