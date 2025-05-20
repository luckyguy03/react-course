import { Counter } from "../../counter/counter";

export const TabContent = ({ restaurant }) => {
    return (
        <>
            <h2 style={{ color: "cadetblue" }}>{restaurant.name}</h2>
            <h3 style={{ color: "ButtonText" }}>Меню:</h3>
            <ul>
                {restaurant.menu.map((dish) => (
                    <li style={{ listStyleType: "none", color: "green" }} key={dish.id}>
                        <div className="dish-container"> 
                            <div className="dish-description">{dish.name} - <span style={{ color: "black" }}>{dish.price}$</span> ( {dish.ingredients.join(", ")} )</div> 
                            <div className="dish-counter"><Counter/></div>
                        </div>
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
        </>
    );
};