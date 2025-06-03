import { Dish } from "./dish";
import { ReviewForm } from "../../../review-form/review-form";
import { UserContext } from "../../../user-context-provider";
import { useContext } from "react";

export const Restautant = ({ restaurant }) => {
    const {isAuthorized} = useContext(UserContext);

    return (
        <>
            <h2 style={{ color: "cadetblue" }}>{restaurant.name}</h2>
            <h3 style={{ color: "ButtonText" }}>Меню:</h3>
            <ul>
                {restaurant.menu.map((dish) => (
                    <li style={{ listStyleType: "none", color: "green" }} key={dish.id}>
                        <Dish dish={dish} />
                    </li>
                ))}
            </ul>
            {restaurant.reviews.length === 0 ? <h4 style={{ color: "burlywood" }}>Отзывов пока нет</h4> : 
            <>
                <h3 style={{ color: "ButtonText" }}>Отзывы:</h3>
                <ul>
                    {restaurant.reviews.map((review) => (
                        <li style={{ listStyleType: "none", color: "green" }} key={review.id}>
                            {review.user} - <span style={{ color: "black" }}>{review.text} - Rating({review.rating})</span>
                        </li>
                    ))}
                </ul>
            </>
            }
            {isAuthorized ? <ReviewForm/> : null}
        </>
    );
};