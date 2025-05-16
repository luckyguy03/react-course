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
        <h3 style={{ color: "ButtonText" }}>Menu:</h3>
        <ul>
          {restaurant.menu.map((dish) => (
            <li style={{ listStyleType: "none", color: "green" }} key={dish.id}>
              {dish.name}
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);
