import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";


const MyCars = () => {

  const { user } = useContext(AuthContext)
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/car?email=${user.email}`)
      .then(res => res.json())
      .then(data => setCars(data))
  }, [user.email])


  return (
    <div>
      This is my care page{cars.length}
      <div className="overflow-x-auto p-20 mx-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Car Image</th>
              <th>Car Model</th>
              <th>Daily Rental Price</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cars.map((car, index) => <tr key={car._id}>
                <th>{index + 1}</th>
                <th><img className="w-28 h-20 rounded-xl" src={car.image} alt="" /></th>
                <td>{car.model}</td>
                <td>{car.price}</td>
                <td>{car.availability}</td>
                <td>
                  {/* <Link to={`/viewApplication/${job._id}`}>
                                        <button className='btn btn-link'>View Applications</button>
                                    </Link> */}
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCars;