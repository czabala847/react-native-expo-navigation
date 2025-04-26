import { FontAwesome } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import React from "react"

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "indigo",
        // tabBarShowLabel: false, // Ocultar el label en todos los tabs
        headerShown: false,
        // headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          // tabBarShowLabel: false, //Ocultar el label
          title: "Stacks Screen",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          tabBarShowLabel: false, //Ocultar el label
          title: "Home Screen",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites Screen",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
