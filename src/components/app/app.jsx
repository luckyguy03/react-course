import { Layout } from "../layout/layout";
import { RestaurantPage } from "../pages/restaurant-page/restaurant-page";
import { ThemeContextProvider } from '../theme-context-provider/theme-context-provider';

import "./normalize.css";

export const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <RestaurantPage />
      </Layout>
    </ThemeContextProvider>
  );
};
