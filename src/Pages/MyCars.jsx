import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyCars = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
  
    axiosSecure.get(`/car?email=${user.email}`)
      .then(res => {
        setCars(res.data);
        
        if (res.data.length === 0) {
          Swal.fire({
            title: "No Cars Found!",
            text: "You don't have any cars added yet.",
            icon: "info",
            confirmButtonText: "Add Car",
          }).then(() => {
            navigate("/addCar"); // Redirect to /addCar
          });
        }
      });
  }, [user?.email]);



  const handleSort = (sortBy) => {
  if (sortBy === 'price') {
    const sorted = [...cars].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    setCars(sorted);
  } 
  else if (sortBy === 'date') {
    const sorted = [...cars].sort((a, b) => {
      const dateA = new Date(a.submissionDate.split('/').reverse().join('-'));
      const dateB = new Date(b.submissionDate.split('/').reverse().join('-'));
      return dateB - dateA; // Descending order: latest date first
    });
    setCars(sorted);
  }
};






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
      <div className="overflow-x-auto px-20 py-10 mx-auto">
        <div className="flex justify-between">
        <h1 className="text-xl font-bold mb-4">My Cars ({cars.length})</h1>
        <div className="mb-5 flex gap-4 jus">
        <button onClick={()=>handleSort('price')} className="btn btn-outline btn-accent btn-sm">Sort by Price</button>
        <button onClick={()=>handleSort('date')} className="btn btn-outline btn-accent btn-sm">Sort by date</button>
      </div>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Date</th>
              <th>Car Image</th>
              <th>Car Model</th>
              <th>Daily Rental Price</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car._id}>
                <td>{car.submissionDate}</td>
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