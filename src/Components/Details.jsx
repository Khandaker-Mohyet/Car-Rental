import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Details = () => {
  const carDetails = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { _id, model, image, price, availability, description, registration, features } = carDetails || {};

  // State for Modal and Date Picker
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleBooking = () => {
    if (!selectedDate) {
      Swal.fire("Please select a date!", "", "warning");
      return;
    }

    const booking = {
      car_id: _id,
      booker_email: user.email,
      booking_date: selectedDate, // Include the selected date
    };

    fetch("https://assignment-11-server-phi-seven.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your booking is confirmed!",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsModalOpen(false); // Close the modal
          navigate("/myBookings");
        }
      });
  };

  return (
    <div
      key={_id}
      className="max-w-sm mx-auto mb-16 border border-gray-200 rounded-lg shadow-md overflow-hidden"
    >
      {/* Image */}
      <img className="w-full h-48 object-cover" src={image} alt={model} />
      {/* Details */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{model}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="text-gray-700 mb-4">
          <li>
            <strong>Price per Day:</strong> ${price}
          </li>
          <li>
            <strong>Registration:</strong> {registration}
          </li>
          <li>
            <strong>Availability:</strong>{" "}
            <span
              className={
                availability
                  ? "text-green-600 font-medium"
                  : "text-red-600 font-medium"
              }
            >
              {availability ? "Available" : "Unavailable"}
            </span>
          </li>
        </ul>
        <div>
          <h3 className="font-medium text-gray-700 mb-2">Features:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-1 px-20 rounded shadow hover:shadow-lg transform hover:scale-105 transition-all"
        >
          Booking Now
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-xl font-semibold mb-4">Select Booking Date</h2>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              className="w-full p-2 border rounded"
              placeholderText="Select a date"
            />
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleBooking}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
