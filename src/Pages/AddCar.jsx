

const AddCar = () => {

  const handelAddCar = (e) => {
    e.preventDefault();

    const model = e.target.model.value;
    const price = e.target.price.value;
    const availability = e.target.availability.value;
    const registration = e.target.registration.value;
    const features = e.target.features.value;
    const bookingCount = e.target.bookingCount.value;
    const image = e.target.image.value;
    const location = e.target.location.value;
    const description = e.target.description.value;

    console.log(model, price, availability, registration, features, bookingCount, image, location, description)
  }


  return (
    <div>
      <div className='lg:w-3/4 mx-auto mb-10'>
        <div className="text-center p-10">
          <h1 className="text-5xl font-bold">Add Your car!</h1>
          <p className="py-6">
            A game review page is a platform where users can explore detailed reviews and ratings of video games, helping them make informed decisions.
          </p>
        </div>
        <div className="card  w-full shrink-0 shadow-2xl bg-[#F4F3F0]">
          <form onSubmit={handelAddCar} className="card-body">
            {/* form first row */}
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Car Model</span>
                </label>
                <input type="text" name='model' placeholder="Model Name" className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Daily Rental Price
                  </span>
                </label>
                <input type="text" name='price' placeholder="Amount of Daily rent" className="input input-bordered" required />
              </div>
            </div>
            {/* form second row */}
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Availability</span>
                </label>
                <input type="text" name='availability' placeholder=" Yea or No" className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Vehicle Registration Number</span>
                </label>
                <input type="text" name='registration' placeholder="Car No" className="input input-bordered" required />
              </div>
            </div>
            {/* form third row */}
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Features</span>
                </label>
                <input type="text" name='features' placeholder="GPS, AC, etc." className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">BookingCount</span>
                </label>
                <input className="input input-bordered " name='bookingCount' placeholder="BookingCount" id="day" required>
                </input>

              </div>
            </div>
            {/* form forth row */}
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="text" name='image' placeholder="Image Url" className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input type="text" name='location' placeholder="Your location" className="input input-bordered" required />
              </div>
            </div>
            {/* Five row */}
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input type="text" name='description' placeholder="Write the description" className="input input-bordered" required />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-success text-white">Add Your Car</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;