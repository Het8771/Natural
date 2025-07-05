import { FaShippingFast } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

export default function ServiceInfo() {
  return (
    <section className="bg-[#00715D] py-10 px-4 text-white">
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        
        {/* FREE SHIPPING */}
        <div className="flex flex-col items-center space-y-2">
          <FaShippingFast className="text-4xl text-white" />
          <h4 className="text-sm font-semibold uppercase">Free Shipping</h4>
          <p className="text-xs text-gray-200">Free shipping available in India.</p>
        </div>

        {/* SECURE PAYMENT */}
        <div className="flex flex-col items-center space-y-2">
          <MdPayment className="text-4xl text-white" />
          <h4 className="text-sm font-semibold uppercase">Secure Payment</h4>
          <p className="text-xs text-gray-200">100% Secure payment</p>
        </div>

        {/* SUPPORT */}
        <div className="flex flex-col items-center space-y-2">
          <MdSupportAgent className="text-4xl text-white" />
          <h4 className="text-sm font-semibold uppercase">Support</h4>
          <p className="text-xs text-gray-200">You can contact us with email</p>
        </div>
      </div>
    </section>
  );
}
