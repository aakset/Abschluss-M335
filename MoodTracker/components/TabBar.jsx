import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MaIcon from "react-native-vector-icons/MaterialIcons";

import HomeScreen from "../app/HomePage";
import AboutScreen from "../app/AboutPage";
import MainScreen from "../app/MainPage";

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FDAE17",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#001D3E",
          borderTopWidth: 0,
          paddingTop: 10,
        },
      }}
    >
      <Tab.Screen
        name="Smiles"
        component={MainScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaIcon name="bookmark-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaIcon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaIcon name="info-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
