import { Link } from 'react-router-dom';
import banner from '../assets/Banner.jpg'

const Banner = () => {
  return (
    <div className="relative w-full h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Drive Your Dreams Today!
        </h1>
        <h1 className='text-white lg: w-6/12 md:8/12 mx-auto'>
          We are seeking a proficient Car Rental System Developer to lead the creation of a feature-rich, user-centric car rental platform. Your role involves designing and implementing responsive frontend and robust backend systems.
        </h1>
        <Link to={'/availableCars'}>
          <button
          className="mt-5 px-4 py-2 text-lg font-medium text-white bg-purple-700 rounded-md shadow-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          View Available Cars
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;