import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Home from "./components/List";
import Camera from "./components/Camera";
import Item from "./components/Item";

const Tab = createBottomTabNavigator();
const CameraStack = createStackNavigator();
const HomeStack = createStackNavigator();

function settingHome() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Accueil"
        component={Home}
        options={{ headerShown: false }}
      />
      <CameraStack.Screen
        name="Item"
        component={Item}
        options={{ title: "" }}
      />
    </HomeStack.Navigator>
  );
}

function settingCamera() {
  return (
    <CameraStack.Navigator screenOptions={{ headerShown: false }}>
      <CameraStack.Screen name="Camera" component={Camera} />
      <CameraStack.Screen name="Item" component={Item} />
    </CameraStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "orange",
        }}
      >
        <Tab.Screen
          name="Accueil"
          component={settingHome}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={settingCamera}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="camera" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
