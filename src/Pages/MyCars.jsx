import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCars = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/car?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [user.email]);

  const handelCarDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/car/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your car has been deleted.",
                icon: "success",
              });

              // Update the cars state after deletion
              const remainingCars = cars.filter((car) => car._id !== id);
              setCars(remainingCars);
            }
          })
          .catch((error) => {
            console.error("Error deleting car:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the car. Please try again.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto p-20 mx-auto">
        <h1 className="text-xl font-bold mb-4">My Cars ({cars.length})</h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Car Image</th>
              <th>Car Model</th>
              <th>Daily Rental Price</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={car._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    className="w-28 h-20 rounded-xl"
                    src={car.image}
                    alt={car.model}
                  />
                </td>
                <td>{car.model}</td>
                <td>{car.price}</td>
                <td>{car.availability ? "Available" : "Not Available"}</td>
                <td>
                  <Link to={`/update/${car._id}`}>
                    <button className="mr-2 btn btn-warning btn-xs">Update</button>
                  </Link>
                  <button
                    onClick={() => handelCarDelete(car._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCars;