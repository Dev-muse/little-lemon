import "./about.css";

const About = () => {
  return (
    <section id="About">
      <div className="container about-container">
        <div className="about__left">
          <h2 className="about__title">Little Lemon</h2>
          <span className="about__subtext">Chicago</span>
          <div className="about__content">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.{" "}
          </div>
        </div>
        <div className="about__right">
          <img
            src="about__img1.png"
            alt="chef presenting meal"
            className="about__img1"
            width={"276px"}
            height={"338px"}
          />
          <img
            src="about__img2.png"
            alt="chef preparing meal"
            className="about__img2"
            width={"276px"}
            height={"338px"}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
