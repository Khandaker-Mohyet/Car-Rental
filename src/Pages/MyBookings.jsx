import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [bookes, setBookes] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/booking?email=${user.email}`)
      .then((res) => {
        setBookes(res.data);
      })
      .catch((error) => console.error(error));
  }, [user?.email]);

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
        fetch(`https://assignment-11-server-phi-seven.vercel.app/booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your car has been deleted.",
                icon: "success",
              });
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

  // Prepare data for the chart
  const chartData = bookes.map((book) => ({
    model: book.model,
    price: book.price || 0,
  }));

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">
        My Bookings ({bookes.length})
      </h2>

      {/* Show message if no bookings */}
      {bookes.length === 0 ? (
        <p className="text-center text-gray-500 font-semibold">
          You have no bookings yet.
        </p>
      ) : (
        <>
          {/* Table Section */}
          <div className="overflow-x-auto w-11/12 mx-auto mb-8">
            <table className="table w-full border rounded-lg shadow-md bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th>Car Image</th>
                  <th>Car Model</th>
                  <th>Booking Date</th>
                  <th>Total Price</th>
                  <th>Booking Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookes.map((book) => (
                  <tr key={book._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">
                      <img src={book.image} alt={book.model} className="w-16 h-16 rounded-md" />
                    </td>
                    <td className="px-4 py-2 font-semibold">{book.model}</td>
                    <td className="px-4 py-2 text-gray-600">
                      {book.submissionDate || "12/01/2025"}
                    </td>
                    <td className="px-4 py-2 text-green-500 font-semibold">
                      ${book.price || "0"}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`badge ${
                          book.bookingStatus === "Confirmed"
                            ? "badge-success"
                            : book.bookingStatus === "Pending"
                            ? "badge-warning"
                            : "badge-error"
                        }`}
                      >
                        {book.bookingStatus || "Pending"}
                      </span>
                    </td>
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

          {/* Chart Section */}
          <div className="w-11/12 mx-auto my-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Rental Prices Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="model" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="price" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default MyBookings;