import { ReviewForm } from "../../../review-form/review-form";
import { UserContext } from "../../../user-context-provider";
import { useContext } from "react";
import { Outlet, useParams } from "react-router";
import { NavLinkWrapper } from "../../../nav-link-wrapper/nav-link-wrapper";
import {
  useGetRestaurantsQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
} from "../../../../redux/api/index";

import styles from "../restaurant-page.module.css";

export const Restaurant = () => {
  const {
    auth: { isAuthorized, userId, name },
  } = useContext(UserContext);
  const { restaurantId } = useParams();
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find(({ id }) => id === restaurantId),
    }),
  });

  const [addReviewMutation, { isLoading }] = useAddReviewMutation();
  const [updateReviewMutation, { isLoading: isUpdateLoading }] =
    useUpdateReviewMutation();

  const handleReview = (review) => {
    if (review.reviewId != null) {
      updateReviewMutation({
        reviewId: review.reviewId,
        review: { rating: review.ratingCount, text: review.text },
      });
    } else {
      addReviewMutation({
        restaurantId: restaurant.id,
        review: {
          text: review.text,
          rating: review.ratingCount,
          userId: userId,
        },
      });
    }
  };

  return (
    <>
      <h2 className={styles.restaurantHeader}>{restaurant.name}</h2>
      <div className={styles.innerTabs}>
        <NavLinkWrapper path="menu" label={"Меню"} />
        <NavLinkWrapper path="reviews" label={"Отзывы"} />
      </div>
      <Outlet />
      {isAuthorized ? (
        <ReviewForm
          onSubmitForm={handleReview}
          isSubmitButtonDisabled={isLoading || isUpdateLoading}
          userName={name}
        />
      ) : null}
    </>
  );
};
