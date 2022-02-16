import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Account } from "../../screens/Account/Account";
import { Login } from "../../screens/Account/Login";
import { Register } from "../../screens/Account/Register";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Main" component={Account} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);
