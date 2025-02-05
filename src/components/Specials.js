import React from "react";

const Specials = () => {
  const dishes = [
    {
      name: "Greek salad",
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      name: "Bruchetta",
      price: 5.99,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
      name: "Lemon Dessert",
      price: 5.0,
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];
  return (
    <section id="Specials">
      <div className="container">
        <div className="title">
          <h2>Specials</h2>
          <a href="/" className="btn specials__btn">
            Online Menu
          </a>
        </div>
        <div className="specials__cards">
          {dishes.map(({ name, price, description }) => {
            return (
              <Card
                key={name}
                dishName={name}
                price={price}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specials;

const Card = ({ dishName, price, description }) => {
  return (
    <div className="card">
      <div className="card__head"></div>
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
