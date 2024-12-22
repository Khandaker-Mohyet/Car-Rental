
import { FaCar, FaDollarSign, FaRegSmile, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <FaCar size={40} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Wide Variety of Cars
            </h3>
            <p className="text-gray-600 text-sm text-center">
              From budget-friendly options to luxury vehicles.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <FaDollarSign size={40} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Affordable Prices
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Competitive daily rates you can count on.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <FaRegSmile size={40} className="text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Easy Booking Process
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Seamlessly book your ride in just a few clicks.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <FaHeadset size={40} className="text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              24/7 Customer Support
            </h3>
            <p className="text-gray-600 text-sm text-center">
              We’re here to help with all your queries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
