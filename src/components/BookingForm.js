import { useState } from "react";
import { submitAPI } from "../Api";

const BookingForm = ({ availableTimes, setAvailableTimes, onSubmit }) => {
  const [formData, setformData] = useState({
    date: "",
    time: "",
    occasion: "",
    guests: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submitAPI(formData));
    onSubmit(formData);
  };

  const changeHandler = (e) => {
    if (e.target.name === "date") {
      setAvailableTimes({ type: "UPDATE_TIMES", payload: e.target.value });
    }
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="container" id="booking-form">
      <h1>Book Now</h1>
      <div className="container">
        <form
          style={{ display: "grid", maxWidth: 200, gap: 20 }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            name="date"
            id="res-date"
            onChange={changeHandler}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={formData.time}
            name="time"
            onChange={changeHandler}
          >
            {availableTimes &&
              availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder={1}
            min={1}
            max={10}
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={changeHandler}
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={changeHandler}
          >
            <option value={"Birthday"}>Birthday</option>
            <option value={"Anniversary"}>Anniversary</option>
          </select>
          <input
            type="submit"
            role="button"
            value="Make Your reservation"
            className="btn"
          />
        </form>
        {/* Table displaying available times */}

        {formData.date && availableTimes.length > 0 && (
          <div className="availability">
            <table border="1" cellPadding="10">
              <thead>
                <tr>
                  <th>Available times:</th>
                </tr>
              </thead>
              <tbody>
                {availableTimes.map((time) => (
                  <tr key={time}>
                    <td>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingForm;
