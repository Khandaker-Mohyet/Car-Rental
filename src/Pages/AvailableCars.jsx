import { useLoaderData } from "react-router-dom";
import AllCard from "../Components/AllCard";
import { useState } from "react";

const AvailableCars = () => {
  const cars = useLoaderData(); 
  const [filteredCars, setFilteredCars] = useState(cars); 
  const [searchTerm, setSearchTerm] = useState("");


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

  return (
    <div>
      <div className="w-11/12 mx-auto flex justify-between mb-14">
        <div>
          <input
            type="text"
            placeholder="Search cars by model, brand, or location..."
            className="input input-bordered"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)} 
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredCars && filteredCars.map((car) => <AllCard key={car._id} car={car} />)}
        {filteredCars.length === 0 && (
          <p className="text-center col-span-full text-red-500">
            No cars found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default AvailableCars;
