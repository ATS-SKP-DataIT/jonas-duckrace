import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons'; 

import { HomeNavigator } from "./home.navigator";
import { BuyScreen } from "../../features/shop/buy.screen";
import { DucksScreen } from "../../features/ducks/ducks.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Hjem: "md-home",
  Shop: "md-cart",
  Ænder: "md-clipboard",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};


export const AppNavigator = () => (
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "black",
        }}
      >
        <Tab.Screen name="Hjem" component={HomeNavigator} />
        <Tab.Screen name="Shop" component={BuyScreen} />
        <Tab.Screen name="Ænder" component={DucksScreen} />
      </Tab.Navigator>
);
