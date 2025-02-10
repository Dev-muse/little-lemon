import "./index.css";

import Homepage from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import { useReducer, useState } from "react";
function App() {
  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return initializeTimes(); // Currently returns the same times regardless of date
      default:
        return state;
    }
  };

  const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage availableTimes={state} setAvailableTimes={dispatch} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
