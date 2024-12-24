import { Link } from "react-router-dom";


const AllCard = ({ car }) => {
  
  const { _id, model, image, price, availability, } = car || {}
  return (
    <div className="card bg-base-100 w-[350px] shadow-xl mb-10 mx-auto">
      <figure>
        <img className="w-full h-44"
          src={image}
          alt={model} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {model}
          <div className={`${availability?"badge badge-secondary":"badge badge-ghost"}`}>{availability?"available":"not-available"}</div>
        </h2>
        <h2 className="font-medium">Daily Price {price} $</h2>
        <div className="card-actions justify-center">
          <Link to={`/details/${_id}`}>
          <button className="btn btn-success text-white btn-sm mt-5 w-full">Explore Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllCard;