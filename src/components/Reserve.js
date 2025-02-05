import React from "react";

const Reserve = () => {
  return (
    <section id="Reserve">
      <div className="container reserve-container">
        <div className="reserve-left">
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium rerum optio ducimus distinctio non fugit blanditiis
            quod, commodi doloribus sunt?
          </p>
        </div>
        <img
          src="reserve-img.png"
          alt="chef presenting a meal on plate"
          className="reserve-right"
          width={"375px"}
          height={"325px"}
        />
      </div>
    </section>
  );
};

export default Reserve;
