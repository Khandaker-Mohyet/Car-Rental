import { Link, useLoaderData } from "react-router-dom";
import AllCard from "../Components/AllCard";
import { useState } from "react";

const AvailableCars = () => {
  const cars = useLoaderData();
  const [filteredCars, setFilteredCars] = useState(
    cars.filter((car) => car.availability === true)
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");


  const handleSearch = (term) => {
    setSearchTerm(term);
    const result = cars.filter(
      (car) =>
        car.availability === true &&
        (car.model.toLowerCase().includes(term.toLowerCase()) ||
          car.brand?.toLowerCase().includes(term.toLowerCase()) ||
          car.location.toLowerCase().includes(term.toLowerCase()))
    );
    setFilteredCars(result);
  };


  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  return (
    <div>
     
      <div className="w-11/12 mx-auto flex justify-between items-center mb-8 mt-2">
        <div>
          <input
            type="text"
            placeholder="Search cars by model, brand, or location..."
            className="input input-bordered border-purple-400"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
         <h1 className="text-3xl font-bold text-gray-800 text-center">All Available Cars</h1>
        <div>
          <button
            className={`btn btn-sm text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${viewMode === "grid"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                : "bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500"
              }`}
            onClick={toggleViewMode}
          >
            {viewMode === "grid" ? "Switch to List View" : "Switch to Grid View"}
          </button>
        </div>
      </div>


      <div
        className={
          viewMode === "grid"
            ? "grid md:grid-cols-2 xl:grid-cols-3 gap-4"
            : "space-y-4"
        }
      >
        {filteredCars.length > 0 ? (
          filteredCars.map((car) =>
            viewMode === "grid" ? (
              <AllCard key={car._id} car={car} />
            ) : (
              <div
                key={car._id}
                className="flex items-center justify-between border rounded-lg p-4 md:w-9/12 mx-auto shadow-sm bg-white"
              >
                <div className="flex items-center">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="w-32 h-24 rounded-lg mr-4"
                  />
                  <div>
                    <h2 className="font-bold text-lg">{car.model}</h2>
                    <p>Location: {car.location}</p>
                    <p>Price: ${car.price} / day</p>
                    <div
                      className={`${car.availability
                          ? "badge badge-success text-white"
                          : "badge badge-ghost"
                        }`}
                    >
                      {car.availability ? "Available" : "Not Available"}
                    </div>
                  </div>
                </div>
                <div className="ml-auto">
                  <Link to={`/details/${car._id}`}>
                    <button className="btn btn-sm text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500">
                      Explore Details
                    </button>
                  </Link>
                </div>
              </div>
            )
          )
        ) : (
          <p className="text-center col-span-full text-red-500">
            No cars found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default AvailableCars;
