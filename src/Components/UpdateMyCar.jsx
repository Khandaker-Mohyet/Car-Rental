import { format } from "date-fns";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateMyCar = () => {

  const update = useLoaderData()

  const { _id, image, model, price, registration, features, location, description } = update


  const handelUpdateCar = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const carData = Object.fromEntries(formData.entries());

  const { features, availability, ...newCar } = carData;

  // Split features into an array
  const arr = features.split("\n");
  newCar.features = arr;

  // Convert availability to boolean
  newCar.availability = availability === "available";

  // Add submission date and time
  const now = new Date();
  newCar.submissionDate = format(now, "dd/MM/yyyy");
  newCar.submissionTime = format(now, "hh:mm:ss a");

  console.log("Updated Car Data:", newCar);

  
  fetch(`https://assignment-11-server-phi-seven.vercel.app/car/${_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCar),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to update car data. Please check your server.");
      }
      return res.json();
    })
    .then((data) => {
      console.log("Server Response:", data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success",
          text: "Car updated successfully!",
          icon: "success",
          confirmButtonText: "Cool",
        });
      } else {
        Swal.fire({
          title: "No Changes",
          text: "No updates were made.",
          icon: "info",
          confirmButtonText: "Okay",
        });
      }
    })
    .catch((error) => {
      console.error("Error updating car:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to update car. Please try again.",
        icon: "error",
        confirmButtonText: "Retry",
      });
    });
};



  return (
    <div>
      <div className='lg:w-3/4 mx-auto mb-10'>
        <div className="text-center p-10">
          <h1 className="text-5xl font-bold">Update Your car!</h1>
          <p className="py-6">
            A car is a platform where users can explore detailed reviews and ratings of video games, helping them make informed decisions.
          </p>
        </div>
        <div className="card  w-full shrink-0 shadow-2xl">
          <form onSubmit={handelUpdateCar} className="card-body">
            {/* form first row */}
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Car Model</span>
                </label>
                <input type="text" defaultValue={model} name='model' placeholder="Model Name" className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Daily Rental Price
                  </span>
                </label>
                <input type="text" name='price' defaultValue={price} placeholder="Amount of Daily rent" className="input input-bordered" required />
              </div>
            </div>
            {/* form second row */}
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Availability</span>
                </label>
                <select
                  name="availability"
                  id="availability"
                  className="select select-bordered w-full focus:ring-2 focus:ring-[#FF4C30]"
                  required
                >
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                </select>
                {/* <select defaultValue="Pick a Job type" name=" availability" className="input input-bordered w-full">
                  <option disabled>Pick to type</option>
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                  
                </select> */}
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Vehicle Registration Number</span>
                </label>
                <input type="text" name='registration' defaultValue={registration} placeholder="Car No" className="input input-bordered" required />
              </div>
            </div>
            {/* form third row */}
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Features</span>
                </label>
                <textarea type="text" name='features' defaultValue={features} placeholder="Each requermant in a new line" className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">BookingCount</span>
                </label>
                <input className="input input-bordered " name='bookingCount' value={0} readOnly placeholder="BookingCount" id="day" required>
                </input>

              </div>
            </div>
            {/* form forth row */}
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="text" defaultValue={image} readOnly name='image' placeholder="Image Url" className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input type="text" name='location' defaultValue={location} placeholder="Your location" className="input input-bordered" required />
              </div>
            </div>
            {/* Five row */}
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input type="text" name='description' defaultValue={description} placeholder="Write the description" className="input input-bordered" required />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-success text-white">Update Your Car</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMyCar;