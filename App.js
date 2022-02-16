import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import firebase from "firebase/compat/app";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/utils/theme";
import { Navigation } from "./src/utils/navigation";

import { AuthenticationContextProvider } from "./src/contexts/Authentication";

const firebaseConfig = {
  apiKey: "AIzaSyD0Node4ZL7SE-QgTvY0bhWTi29J_ALsA0",
  authDomain: "mealstogo-cb95b.firebaseapp.com",
  projectId: "mealstogo-cb95b",
  storageBucket: "mealstogo-cb95b.appspot.com",
  messagingSenderId: "864831929907",
  appId: "1:864831929907:web:6070043a6a7399bf4a6d46",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
