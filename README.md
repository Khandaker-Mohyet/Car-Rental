# Car Booking Platform

## Purpose
This project is a car booking platform where users can view detailed information about cars and make bookings. The application allows users to select a car, pick a booking date, and confirm their reservation.

## Live URL
https://car-rental-750a3.web.app

## How to look

![Car Rental Dashboard](./src/assets/Screenshot.png)

## Technologies Used
1. Frontend: React.js, TailwindCSS
2. Backend: Node.js, Express.js
3. Database: MongoDB
4. Authentication: Firebase, JWT
5. Other: RESTful APIs, Cloud Storage, Filtering & Sorting

## Key Features
- View detailed car information including model, price, availability, and features.
- Responsive UI design.
- Booking functionality with date selection using a calendar.
- User authentication with email-based booking tracking.
- Data persistence with a backend server.

## Dependencies Used
- react-router-dom (for navigation)
- axios (for API requests)
- jsonwebtoken (for secure authentication)
- dotenv (for environment variables)

## Installation
To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Khandaker-Mohyet/Car-Rental.git
   ```
2. Navigate to the project directory:
   ```bash
   cd car-booking-platform
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## NPM Packages Used

- `react`: A JavaScript library for building user interfaces.
- `react-router-dom`: For navigation and routing within the application.
- `react-datepicker`: For a user-friendly date selection calendar.
- `date-fns`: Utility library for handling dates.
- `sweetalert2`: For stylish and customizable alert popups.

## Backend Integration
The backend API is hosted on Vercel and handles booking data persistence. Key API endpoint:
- **POST `/booking`**: Saves booking information including car ID, user email, and booking date.

## Future Improvements
- Add user profile management.
- Implement advanced filtering and search options for cars.
- Integrate payment gateway for secure online payments.

---
Thank you for exploring this project! Feel free to contribute or provide feedback.
