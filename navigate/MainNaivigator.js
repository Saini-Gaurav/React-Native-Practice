import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SkillScreen from "../components/SkillScreen";
import CreateProfileScreen from "../components/CreateProfileScreen";
import SeekhoScreen from "../components/SeekhoScreen";
import AppSeekhoScreen from "../components/AppSeekhoScreen";
import VideoScreen from "../components/VideoScreen";
import SettingsScreen from "../components/SettingsScreen";
import ProfileScreen from "../components/ProfileScreen";
import CarsScreen from "../components/CarsScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Car Screen"
        screenOptions={{
          headerStyle: {
            // backgroundColor: "#EFEFF9",
            height: 90,
          },
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerMode: "screen",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },
        }}
      >
        {/* <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: "Settings",
          }}
        /> */}
        {/* <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile Settings",
          }}
        /> */}
        <Stack.Screen name="Car Screen" component={CarsScreen} />
        {/* <Stack.Screen name="Seekho" component={SeekhoScreen} />
        <Stack.Screen name="Seekho App" component={AppSeekhoScreen} />
        <Stack.Screen
          name="Vedio"
          component={VideoScreen}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
