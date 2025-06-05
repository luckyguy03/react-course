import { Review } from "./review";

export const Reviews = ({reviews}) => {
  return (
    <>
      { reviews.length === 0 ? (
        <h4 style={{ color: "burlywood" }}>Отзывов пока нет</h4>
      ) : (
        <>
          <h3 style={{ color: "ButtonText" }}>Отзывы:</h3>
          <ul>
            {reviews.map((id) => (
              <li style={{ listStyleType: "none", color: "green" }} key={id}>
                <Review reviewId={id}/>  
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};