import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import "./confirmation.css";

const ConfirmedBooking = () => {
  return (
    <div>
      <Header>
        <Nav />
      </Header>
      <section id="confirmation">
        <div className="container confirm-container">
          <h2>Congrats!</h2>
          <p>
            Your booking has been confirmed , we look forward to seeing you{" "}
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ConfirmedBooking;
