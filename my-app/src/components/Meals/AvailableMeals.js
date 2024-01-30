import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Hamburger",
    price: 250,
  },
  {
    id: "m2",
    name: "Fried chicken",
    price: 210,
    img: "https://images.app.goo.gl/bKrrKh7HXqBSEHtv7",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    price: 370,
    img: "https://images.app.goo.gl/bKrrKh7HXqBSEHtv7",
  },
  {
    id: "m4",
    name: "Panneer Pizza",
    price: 280,
    img: "https://images.app.goo.gl/bKrrKh7HXqBSEHtv7",
  },
  {
    id: "m5",
    name: "Momos",
    price: 90,
    img: "https://images.app.goo.gl/bKrrKh7HXqBSEHtv7",
  },
  {
    id: "m6",
    name: "Creamy Cheesy Pasta",
    price: 229,
    img: "https://images.app.goo.gl/bKrrKh7HXqBSEHtv7",
  },
  {
    id: "m7",
    name: "Chicken Biriyani",
    price: 250,
    img: "https://images.app.goo.gl/bKrrKh7HXqBSEHtv7",
  }
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      img={meal.img}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
