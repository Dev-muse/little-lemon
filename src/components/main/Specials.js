import "./specials.css";

const Specials = () => {
  const dishes = [
    {
      name: "Greek salad",
      price: 12.99,
      img: "greek-salad.jpg",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      name: "Bruchetta",
      price: 5.99,
      img: "bruchetta.jpg",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
      name: "Lemon Dessert",
      price: 5.0,
      img: "lemon-cake.png",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];
  return (
    <section id="Specials">
      <div className="container specials-container">
        <div className="title">
          <h2>Specials</h2>
          <a href="/" className="btn specials__btn">
            Online Menu
          </a>
        </div>

        <div className="specials__cards">
          {dishes.map(({ name, price, description, img }) => {
            return (
              <Card
                key={name}
                dishName={name}
                price={price}
                description={description}
                img={img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specials;

const Card = ({ dishName, price, description, img }) => {
  return (
    <div className="card">
      {/* card head */}
      <div className="card__head">
        <img src={img} alt={dishName} />
      </div>
      {/*body  */}
      <div className="card__body">
        <div className="card__heading">
          <h4 className="card__title">{dishName}</h4>
          <p className="card__price">${price}</p>
        </div>

        <p className="card__description">{description}</p>

        <div className="card__order">
          <p>Order a delivery</p>
          <img
            src="delivery-icon.png"
            alt="delivery icon"
            width={"17px"}
            height={"11px"}
          />
        </div>
      </div>
    </div>
  );
};
