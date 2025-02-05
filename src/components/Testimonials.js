const Testimonials = () => {
  const testimonials = [
    {
      name: "Sara Lopez",
      avatar: "sara_lopez.png",
      quote: "Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!",
    },
    {
      name: "Jon Do",
      avatar: "jon_do.png",
      quote: "We had such a great time celebrating my grandmothers birthday!",
    },
    {
      name: "Jimmy Dore",
      avatar: "jimmy_dore.png",
      quote: "Best Feta Salad in town. Flawless everytime!",
    },
    {
      name: "Kwame toro",
      avatar: "kwame_toro.png",
      quote: "Such a chilled out atmosphere - love it!",
    },
  ];
  return (
    <section id="Testimonials">
      <div className="container">
        <h2 className="testimonial_heading">Testimonials</h2>
        <div className="testimonial-containers">
          {testimonials.map(({ name, avatar, quote }) => {
            return (
              <Card key={name} name={name} avatar={avatar} quote={quote} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Card = ({ name, avatar, quote }) => {
  return (
    <div className="testimonial-card">
      <div className="avatar-container">
        <img
          src={avatar}
          alt={name}
          className="avatar"
          width={"32px"}
          height={"32px"}
        />
        <p className="name">{name}</p>
      </div>
      <p className="testimonial">{`"${quote}"`} </p>
    </div>
  );
};

export default Testimonials;
