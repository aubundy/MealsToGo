import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../screens/Restaurants/RestaurantsScreen";
import { RestaurantDetailScreen } from "../../screens/Restaurants/RestaurantDetailScreen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetailScreen"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
