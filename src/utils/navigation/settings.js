import React from "react";
import { SettingsScreen } from "../../screens/Settings/SettingsScreen";
import { FavoritesScreen } from "../../screens/Settings/FavoritesScreen";
import { CameraScreen } from "../../screens/Settings/CameraScreen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "screen",
      }}
    >
      <SettingsStack.Screen
        options={{ headerShown: false, headerTitle: "Settings" }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
