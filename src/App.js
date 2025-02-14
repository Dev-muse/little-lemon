import "./index.css";

import Homepage from "./components/Homepage";
import { Route, Routes, useNavigate } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "./Little-lemon-Api";

export const initializeTimes = () => {
  const today = new Date();
  const times = fetchAPI(new Date());
  localStorage.setItem(today, JSON.stringify(times)); // Store in local storage
  return times;
};
// Reducer function to update available times
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      const newTimes = fetchAPI(new Date(action.payload)); // Fetch new times for selected date
      localStorage.setItem(action.payload, JSON.stringify(newTimes)); // Store in local storage
      return newTimes;
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    console.log("stored Bookings", storedBookings);

    // Check if the selected time is already booked
    const isBooked = storedBookings.some(
      (booking) =>
        booking.date === formData.date && booking.time === formData.time
    );

    if (isBooked) {
      alert("This time slot is already booked. Please select another time.");
      return false;
    }

    // Add new booking to local storage
    const updatedBookings = [
      ...storedBookings,
      { date: formData.date, time: formData.time },
    ];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    // Submit the form and redirect
    if (submitAPI(formData)) {
      navigate("/confirmation"); // Redirect after submission
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={state}
              setAvailableTimes={dispatch}
              handleSubmit={handleSubmit}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
