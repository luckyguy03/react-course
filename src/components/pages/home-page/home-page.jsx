import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div>
      <h1>ДОМАШНЯЯ СТРАНИЦА</h1>
      <Link to="/restaurants">Наши рестораны</Link>
    </div>
  );
};
