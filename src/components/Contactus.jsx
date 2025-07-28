import React from "react";

const Contactus = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-10 flex flex-col items-center">
      <div className="bg-white rounded-md shadow-md w-full max-w-6xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#00685E] py-4 px-6 text-white font-semibold text-lg rounded-t-md">
          Get In Touch With Us
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Full Map */}
          <div className="h-80 md:h-auto w-full">
            <iframe
              title="Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609928143!2d72.74109867790184!3d19.082522317090732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b7f254b37%3A0x3d6b5cf5bcbdedb5!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1686302955555!5m2!1sen!2sin"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Right Column - Contact Form */}
          <div className="p-6">
            <h3 className="text-[#00685E] font-semibold text-base mb-2">
              Send us a message
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              We'd love to hear from you. Fill out the form and we’ll get back to you soon.
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
                className="bg-[#00685E] hover:bg-[#03564e] text-white text-sm font-semibold px-6 py-2 rounded-full md:col-span-2 mx-auto"
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

export default Contactus;
