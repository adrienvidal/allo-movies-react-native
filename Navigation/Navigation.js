import React from "react";
import { StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../Components/Search";
import FilmDetail from "../Components/FilmDetail";
import Favorites from "../Components/Favorites";
import News from "../Components/News"

const Stack = createStackNavigator();
function SearchStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ title: "Rechercher" }}
      />
      <Stack.Screen
        name="FilmDetail"
        component={FilmDetail}
        options={{ title: "Film Détails" }}
      />
    </Stack.Navigator>
  );
}

function FavoritesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: "Favoris" }}
      />
      <Stack.Screen
        name="FilmDetail"
        component={FilmDetail}
        options={{ title: "Film Détails" }}
      />
    </Stack.Navigator>
  );
}

function NewsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="News"
        component={News}
        options={{ title: "Les derniers films" }}
      />
      <Stack.Screen
        name="FilmDetail"
        component={FilmDetail}
        options={{ title: "Film Détails" }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MoviesTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let sourceImage;
          if (route.name === "Search") {
            sourceImage = require("../Images/ic_search.png");
          } else if (route.name === "Favorites") {
            sourceImage = require("../Images/ic_favorite.png");
          } else if (route.name === "News") {
            sourceImage = require("../Images/ic_news.png");
          }

          return <Image source={sourceImage} style={styles.favorite_image} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: '#DDDDDD',
        inactiveBackgroundColor: "#FFFFFF"
      }}
    >
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{ title: "Rechercher" }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackNavigator}
        options={{ title: "Favoris" }}
      />
      <Tab.Screen
        name="News"
        component={NewsStackNavigator}
        options={{ title: "News" }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  favorite_image: {
    width: 30,
    height: 30,
  },
});

export default MoviesTabNavigator;
