import { useLoaderData } from "react-router-dom";
import AllCard from "../Components/AllCard";


const AvailableCars = () => {

  const cars = useLoaderData()
  console.log(cars)
  
  
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3">
      {
        cars && cars.map(car => <AllCard key={car._id} car={car}></AllCard>)
      }
    </div>
  );
};

export default AvailableCars;