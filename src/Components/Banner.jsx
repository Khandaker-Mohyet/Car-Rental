import banner from '../assets/Banner.jpg'

const Banner = () => {
  return (
    <div className="relative w-full h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Drive Your Dreams Today!
        </h1>
        <button
          className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          View Available Cars
        </button>
      </div>
    </div>
  );
};

export default Banner;