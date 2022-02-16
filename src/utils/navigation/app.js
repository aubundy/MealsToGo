import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants";
import { MapScreen } from "../../screens/Map/MapScreen";
// import { SettingsNavigator } from "./settings";
// import { CheckoutNavigator } from "./checkout";
import { CartContextProvider } from "../../contexts/Cart";
import { RestaurantsContextProvider } from "../../contexts/Restaurants";
import { LocationContextProvider } from "../../contexts/Location/";
import { FavoritesContextProvider } from "../../contexts/Favorites";
import { colors } from "../../utils/theme/colors";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Checkout: "md-cart",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: colors.brand.primary,
    tabBarInactiveTintColor: colors.brand.muted,
    tabBarStyle: [
      {
        display: "flex",
      },
      null,
    ],
  };
};

export const AppNavigator = () => (
  <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <CartContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            {/* <Tab.Screen name="Checkout" component={CheckoutNavigator} /> */}
            {/* <Tab.Screen name="Settings" component={SettingsNavigator} /> */}
          </Tab.Navigator>
        </CartContextProvider>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);
