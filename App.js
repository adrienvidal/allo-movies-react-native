// App.js
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation/Navigation";
import { Provider } from "react-redux";
import Store from "./Store/configureStore";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <Navigation />
      </Provider>
    </NavigationContainer>
  );
}
