import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { submitAPI } from "../Little-lemon-Api";
import { useNavigate } from "react-router-dom";

const BookingPage = ({ availableTimes, setAvailableTimes }) => {
  const navigate = useNavigate();

  const handleSubmit = (value) => {
    const result = submitAPI(value);
    console.log("form submitted", result);
    if (result) navigate("/confirmation");
  };

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        onSubmit={handleSubmit}
      />
      <Footer />
    </>
  );
};

export default BookingPage;
