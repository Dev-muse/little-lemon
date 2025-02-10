import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, setAvailableTimes }) => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
      <Footer />
    </>
  );
};

export default BookingPage;
