import { Dish } from "./dish";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3 style={{ color: "ButtonText" }}>Меню:</h3>
      <ul>
        {menu.map((id) => (
          <li style={{ listStyleType: "none", color: "green" }} key={id}>
            <Dish dishId={id} />
          </li>
        ))}
      </ul>
    </>
  );
};