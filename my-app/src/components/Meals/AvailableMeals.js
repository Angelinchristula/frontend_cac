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
    price: 299,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    price: 370,
  },
  {
    id: "m4",
    name: "Panneer Pizza",
    price: 480,
  },
  {
    id: "m5",
    name: "Momos",
    price: 90,
  },
  {
    id: "m6",
    name: "Creamy Cheesy Pasta",
    price: 229,
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
