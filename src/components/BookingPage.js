import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes }) => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <BookingForm availableTimes={availableTimes} />
      <Footer />
    </>
  );
};

export default BookingPage;
