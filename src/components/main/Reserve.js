import "./reserve.css";

const Reserve = () => {
  return (
    <section id="Reserve">
      <div className="container reserve-container">
        <div className="reserve-left">
          <h1>Little Lemon</h1>
          <span>Chicago</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium rerum optio ducimus distinctio non fugit blanditiis
            quod, commodi doloribus sunt?
          </p>
          <a href="/" className="btn btn-reserve">
            Reserve a Table
          </a>
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
