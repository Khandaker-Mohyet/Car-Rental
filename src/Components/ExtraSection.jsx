import { FaStar } from "react-icons/fa";
import { useState } from "react";

const ExtraSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      profileImage: "https://img.freepik.com/premium-photo/3d-illustration-cartoon-business-man-character-avatar-profile_1183071-397.jpg",
      rating: 5,
      review: "Amazing service and great cars. Highly recommend!",
    },
    {
      name: "Jane Smith",
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlsXPsK0hT_RZe26TSQfv1banGWy_jX1C3xg&s",
      rating: 4,
      review: "Affordable prices and very easy booking process!",
    },
    {
      name: "Robert Brown",
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcv6fhB0nGAefUmrnK4kIA193F90H9X3wwEw&s",
      rating: 5,
      review: "The 24/7 support was really helpful. Loved it!",
    },
    {
      name: "Emily Clark",
      profileImage: "https://png.pngtree.com/png-clipart/20231001/original/pngtree-3d-illustration-avatar-profile-man-png-image_13026634.png",
      rating: 5,
      review: "Luxury cars at great prices. Will book again!",
    },
    {
      name: "Michael Lee",
      profileImage: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671151.jpg",
      rating: 4,
      review: "Easy to book and excellent service overall.",
    },
  ];

  const offers = [
    {
      title: "Get 15% off for weekend rentals!",
      description: "Enjoy exclusive discounts on weekend car rentals.",
      buttonText: "Book Now",
    },
    {
      title: "Luxury cars at $99/day this holiday season!",
      description: "Experience premium rides at unbeatable prices.",
      buttonText: "Learn More",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div>
      {/* User Testimonials Section */}
      <section className=" py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">User Testimonials</h2>
          <div className="relative overflow-hidden">
            <div
              className="transition-transform duration-700 transform flex"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className=" shadow-lg rounded-lg p-6 mx-auto flex flex-col items-center w-full gap-4 sm:max-w-sm"
                  style={{ flexShrink: 0 }}
                >
                  <img
                    src={testimonial.profileImage}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {testimonial.name}
                  </h3>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className=" text-sm text-center">
                    {testimonial.review}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 hidden sm:block"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 hidden sm:block"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>


      {/* Special Offers Section */}
      <section className=" py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold  mb-8">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map((offer, index) => (
              <div
                key={index}
                className=" shadow-lg rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{offer.title}</h3>
                <p className=" mb-6">{offer.description}</p>
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 px-4 rounded shadow hover:shadow-lg transform hover:scale-105 transition-all">
                  {offer.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSection;