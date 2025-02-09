import "./index.css";

import Homepage from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import { useState } from "react";
function App() {
  const [availableTimes, setavailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={<BookingPage availableTimes={availableTimes} />}
        />
      </Routes>
    </div>
  );
}

export default App;
