import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Tab } from "./components/tab";
import { TabContent } from "./components/tab-content";


export const Tabs = () => {
    const [activeTab, setActiveTab] = useState(restaurants[0].id);

    const handleTabClick = (restaurantId) => {
        if(activeTab === restaurantId) return;
        console.log("Clicked tab: " + restaurantId);
        setActiveTab(restaurantId);
    };

    const restautantActive = restaurants.find(({ id }) => id === activeTab);

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
                <TabContent restaurant={restautantActive}/>
            </div>
        </div>
    );
};