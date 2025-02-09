import "./reserve.css";
import { Link } from "react-router-dom";

const Reserve = () => {
  return (
    <section id="Reserve">
      <div className="container reserve-container">
        <div className="reserve-left">
          <h1>Little Lemon</h1>
          <span>Chicago</span>
          <p>
            Savor the vibrant flavors of Mediterranean cuisine in the heart of
            Chicago. At Little Lemon, we bring you fresh ingredients, bold
            flavors, and a warm, inviting atmosphere. Whether you're here for a
            casual dinner or a special celebration, every bite is a taste of
            tradition and passion.
          </p>
          <Link to="/booking" className="btn btn-reserve">
            Reserve a Table
          </Link>
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
