import { useState } from "react";
import { restaurants } from "../../../constants/mock";
import { Tab } from "./components/tab";
import { Restautant } from "./components/restaurant";


export const RestaurantPage = () => {
    const [activeTab, setActiveTab] = useState(restaurants[0].id);

    const handleTabClick = (restaurantId) => {
        if(activeTab === restaurantId) return;
        setActiveTab(restaurantId);
    };

    const restautantActive = restaurants.find(({ id }) => id === activeTab);

    return (
        <div className="RestaurantPage-container">
            <div className="RestaurantPage">
                {restaurants.map(({ id, name }) => (
                    <Tab
                        key={id}
                        label={name}
                        onClick={() =>
                            handleTabClick(id)
                        }
                        isActive={id === activeTab}
                    />
                ))}
            </div>
            <div className="tab-content">
                <Restautant restaurant={restautantActive}/>
            </div>
        </div>
    );
};