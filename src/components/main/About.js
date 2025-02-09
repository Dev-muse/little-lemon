import "./about.css";

const About = () => {
  return (
    <section id="About">
      <div className="container about-container">
        <div className="about__left">
          <h2 className="about__title">Little Lemon</h2>
          <span className="about__subtext">Chicago</span>
          <div className="about__content">
            Nestled in the heart of Chicago, Little Lemon is a family-owned
            Mediterranean restaurant dedicated to bringing authentic flavors to
            your table. Inspired by the rich culinary traditions of Greece and
            Italy, we craft every dish with fresh, locally sourced ingredients
            and a passion for bold, zesty flavors. From our signature
            lemon-infused seafood to hearty pastas and handcrafted mezze, every
            bite is a celebration of tradition and taste. Whether you're joining
            us for a cozy dinner, a festive gathering, or a quick bite, our warm
            hospitality and vibrant atmosphere will make you feel right at home.
            Come experience Mediterranean dining, reimagined!
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
