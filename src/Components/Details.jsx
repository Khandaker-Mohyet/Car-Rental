import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Details = () => {

  const carDetails = useLoaderData()
  const {user}= useContext(AuthContext)
  const { _id, model, image, price, availability, description } = carDetails || {}
  
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
    <div className="card bg-base-100 w-[350px] shadow-xl mb-10 mx-auto">
      <figure>
        <img className="w-full h-44"
          src={image}
          alt={model} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {model}
          <div className={`${availability?"badge badge-secondary":"badge badge-ghost"}`}>{availability?"available":"not-available"}</div>
        </h2>
        <h2 className="font-medium">Daily Price {price} $</h2>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <button onClick={myBooking} className="btn btn-success text-white btn-sm mt-5 w-full">Booking Now</button>
        </div>
      </div>
    </div>
  );
};

export default Details;