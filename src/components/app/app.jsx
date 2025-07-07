import { Layout } from "../layout/layout";
import { RestaurantsPage } from "../pages/restaurant-page/restaurant-page";
import { Restaurant } from "../pages/restaurant-page/components/restaurant";
import { ThemeContextProvider } from "../theme-context-provider/theme-context-provider";
import { UserContextProvider } from "../user-context-provider/user-context-provider";
import { ReviewContextProvider } from "../review-context-provider/review-context-provider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "../pages/home-page/home-page";
import { Menu } from "../pages/restaurant-page/components/menu";
import { Reviews } from "../pages/restaurant-page/components/reviews";
import { DishPage } from "../pages/dish-page/dish-page";

import "./normalize.css";

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <ReviewContextProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<HomePage />} />

                  <Route path="/restaurants" element={<RestaurantsPage />}>
                    <Route path=":restaurantId" element={<Restaurant />}>
                      <Route index element={<Navigate to="menu" />} />
                      <Route path="menu" element={<Menu />} />
                      <Route path="reviews" element={<Reviews />} />
                    </Route>
                  </Route>

                  <Route path="/dish/:dishId" element={<DishPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </ReviewContextProvider>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
