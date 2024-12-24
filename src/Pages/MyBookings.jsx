import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


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
  return (
    <div>
      This is My booking page {bookes.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              bookes.map(book=> <tr key={book._id}>
              <th>
                {/* <label>
                  <input type="checkbox" className="checkbox" />
                </label> */}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={book.image}
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                      <div className="font-bold">{book.model}</div>
                      <div className="text-sm opacity-50">{book.location}</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td>Purple</td>
              <th className="">
                <button className="mr-2 btn btn-warning btn-xs">Update</button>
                <button className="btn btn-error btn-xs">Delate</button>
              </th>
            </tr>)
            }
            
            
            
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default MyBookings;