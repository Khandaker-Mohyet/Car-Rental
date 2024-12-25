import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const MyBookings = () => {
  const { user } = useContext(AuthContext)
  const [bookes, setBookes] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/booking?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBookes(data)
      })
  }, [user?.email])


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
        fetch(`http://localhost:5000/booking/${id}`, {
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
              const remainingCars = bookes.filter((car) => car._id !== id);
              setBookes(remainingCars);
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
      This is My booking page {bookes.length}
      <div className="overflow-x-auto w-11/12 mx-auto">
        <table className="table w-full border rounded-lg shadow-md bg-white">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Car Image</th>
              <th className="px-4 py-2">Car Model</th>
              <th className="px-4 py-2">Booking Date</th>
              <th className="px-4 py-2">Total Price</th>
              <th className="px-4 py-2">Booking Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {bookes.map((book) => (
              <tr key={book._id} className="border-b hover:bg-gray-50">
                {/* Car Image */}
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16">
                        <img
                          src={book.image}
                          alt={`${book.model} image`}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </td>

                {/* Car Model */}
                <td className="px-4 py-2 font-semibold">{book.model}</td>

                {/* Booking Date */}
                <td className="px-4 py-2 text-gray-600">{book.submissionDate || "12/01/2025"}</td>

                {/* Total Price */}
                <td className="px-4 py-2 text-green-500 font-semibold">
                  ${book.price || "0"}
                </td>

                {/* Booking Status */}
                <td className="px-4 py-2">
                  <span
                    className={`badge ${book.bookingStatus === "Confirmed"
                        ? "badge-success"
                        : book.bookingStatus === "Pending"
                          ? "badge-warning"
                          : "badge-error"
                      }`}
                  >
                    {book.bookingStatus || "Pending"}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-4 py-2">
                  <div className="flex justify-center items-center gap-2">
                    <button className="btn btn-warning btn-xs">Update</button>
                    <button
                      onClick={() => handelCarDelete(book._id)}
                      className="btn btn-error btn-xs"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default MyBookings;