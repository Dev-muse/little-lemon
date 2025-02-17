import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main />
      <Footer />
    </>
  );
};

export default Homepage;
