import { useState } from "react";

const BookingForm = ({ availableTimes }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(time);
    console.log(date);
    console.log(guests);
    console.log(occasion);
  };

  return (
    <section className="container" id="booking-form">
      <form
        style={{ display: "grid", maxWidth: 200, gap: 20 }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time "
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((time) => {
            return (
              <option key={time} value={time}>
                {time}
              </option>
            );
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder={1}
          min={1}
          max={10}
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value={"Birthday"}>Birthday</option>
          <option value={"Anniversary"}>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" className="btn" />
      </form>
    </section>
  );
};

export default BookingForm;
