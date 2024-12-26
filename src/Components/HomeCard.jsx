import { parse } from "date-fns";
import { Link } from "react-router-dom";


const HomeCard = ({ car }) => {
  const {_id, submissionDate, submissionTime, model, image, price, availability, } = car || {}





  // Combine the submission date and time into a single string and parse it
  const submissionDateTime = `${submissionDate} ${submissionTime}`;
  const parsedDate = parse(
    submissionDateTime,
    "dd/MM/yyyy hh:mm:ss a",
    new Date()
  );

  // Get the exact distance from now including hours, minutes, and seconds
  const now = new Date();
  const diffInSeconds = Math.floor((now - parsedDate) / 1000); 

  const hours = Math.floor(diffInSeconds / 3600); 
  const minutes = Math.floor((diffInSeconds % 3600) / 60); minutes
  const seconds = diffInSeconds % 60; 

  // Construct the time difference string
  const timeAgo = `${hours} hours, ${minutes} minutes`;






  return (
    <div className="transition-all duration-300 hover:scale-110 card bg-base-100 w-[350px] shadow-xl mb-10 mx-auto">
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
        <p>Posted {timeAgo} ago</p>
        <div className="card-actions justify-center">
          <Link to={`/details/${_id}`}>
          <button className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-1 px-20 rounded shadow hover:shadow-lg transform hover:scale-105 transition-all">Explore Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;