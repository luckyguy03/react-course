import { useState } from "react";
import { RestaurantTab } from "./components/restaurant-tab";
import { Restautant } from "./components/restaurant";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../../redux/entities/restaurant/slice";

import styles from "./restaurant-page.module.css";

export const RestaurantPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeTabId, setActiveTab] = useState(restaurantIds[0]);

  const handleTabClick = (restaurantId) => {
    if (activeTabId === restaurantId) return;
    setActiveTab(restaurantId);
  };

  return (
    <div className={styles.restaurantPageContainer}>
      <div className={styles.restaurantPage}>
        {restaurantIds.map((id) => (
          <RestaurantTab
            key={id}
            onClick={() => handleTabClick(id)}
            isActive={id === activeTabId}
            restaurantId={id}
          />
        ))}
      </div>
      <div className="tab-content">
        <Restautant restaurantId={activeTabId} />
      </div>
    </div>
  );
};
