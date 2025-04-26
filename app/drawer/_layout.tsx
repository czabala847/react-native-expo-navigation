import CustomDrawer from '@/components/shared/CustomDrawer'
import { FontAwesome } from "@expo/vector-icons"
import { Drawer } from "expo-router/drawer"
import React from "react"

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0,0,0,0.4)",
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
        sceneStyle: { backgroundColor: "white" },
        headerShown: false
      }}
    >
      <Drawer.Screen
        name="tabs"
        options={{
          drawerLabel: "Tabs",
          title: "Tabs",
          drawerIcon: ({ color, size }) => (
            <FontAwesome size={size} name="angle-double-up" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: "User",
          title: "Usuario",
          drawerIcon: ({ color, size }) => (
            <FontAwesome size={size} name="user" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: ({ color, size }) => (
            <FontAwesome size={size} name="calendar" color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
