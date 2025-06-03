import { Layout } from "../layout/layout";
import { RestaurantPage } from "../pages/restaurant-page/restaurant-page";
import { ThemeContextProvider } from "../theme-context-provider/theme-context-provider";
import { UserContextProvider } from "../user-context-provider/user-context-provider";

import "./normalize.css";

export const App = () => {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Layout>
          <RestaurantPage />
        </Layout>
      </ThemeContextProvider>
    </UserContextProvider>
  );
};
