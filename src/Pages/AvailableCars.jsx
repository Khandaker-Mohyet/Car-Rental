import { useLoaderData } from "react-router-dom";
import AllCard from "../Components/AllCard";


const AvailableCars = () => {

  const cars = useLoaderData()
  

  const trueCars = cars.filter(car => car.availability === true);
  
  
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3">
      {
        trueCars && trueCars.map(car => <AllCard key={car._id} car={car}></AllCard>)
      }
    </div>
  );
};

export default AvailableCars;