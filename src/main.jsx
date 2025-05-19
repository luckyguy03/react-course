// import { createElement } from "react";
import { createRoot } from "react-dom/client";
import {restaurants} from "../materials/mock";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <ul>
    {restaurants.map((restaurant) => (
      <li style={{ listStyleType: "none" }} key={restaurant.id}>
        <h2 style={{ color: "aqua" }}>{restaurant.name}</h2>
        <h3 style={{ color: "ButtonText" }}>Меню:</h3>
        <ul>
          {restaurant.menu.map((dish) => (
            <li style={{ listStyleType: "none", color: "green" }} key={dish.id}>
              {dish.name} - <span style={{ color: "black" }}>{dish.price}$</span> ( {dish.ingredients.join(", ")} )
            </li>
          ))}
        </ul>
        <h3 style={{ color: "ButtonText" }}>Отзывы:</h3>
        <ul>
          {restaurant.reviews.map((review) => (
            <li style={{ listStyleType: "none", color: "green" }} key={review.id}>
              {review.user} - <span style={{ color: "black" }}>{review.text} - Rating({review.rating})</span>
            </li>
          ))}
        </ul>
      <br/>  
      </li>
    ))}
  </ul>
);
