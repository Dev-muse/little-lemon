import "./index.css";

import Homepage from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import { useEffect, useReducer } from "react";
import { fetchAPI } from "./Api";

function App() {
  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return fetchAPI(new Date(action.payload));
      default:
        return state;
    }
  };

  const initializeTimes = () => {
    return fetchAPI(new Date());
  };

  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

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
