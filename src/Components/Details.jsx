import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Details = () => {

  const carDetails = useLoaderData()
  const { user } = useContext(AuthContext)
  const { _id, model, image, price, availability, description, registration, features, } = carDetails || {}

  // console.log(_id, user)

  const myBooking = () => {
    const booking = {
      car_id: _id,
      booker_email: user.email,
    }
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }


  return (
    <div
      key={_id}
      className="max-w-sm mx-auto mb-16 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
    >
      {/* Image */}
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={model}
      />
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
        <button onClick={myBooking} className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-1 px-20 rounded shadow hover:shadow-lg transform hover:scale-105 transition-all">Booking Now</button>
      </div>
    </div>
  );
  
};

export default Details;