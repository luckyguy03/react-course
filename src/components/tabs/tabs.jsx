import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Tab } from "./components/tab";


export const Tabs = () => {
    const [activeTab, setActiveTab] = useState(restaurants[0].id);

    const handleTabClick = (restaurantId) => {
        console.log("Clicked tab: " + restaurantId);
        setActiveTab(restaurantId);
    };

    return (
        <div className="tabs-container">
            <div className="tabs">
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
                Tab {activeTab} is Active
            </div>
        </div>
    );
};