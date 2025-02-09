import "./index.css";

import Homepage from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </div>
  );
}

export default App;
