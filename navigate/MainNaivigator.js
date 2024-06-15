import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SkillScreen from "../components/SkillScreen";
import CreateProfileScreen from "../components/CreateProfileScreen";
import SeekhoScreen from "../components/SeekhoScreen";
import AppSeekhoScreen from "../components/AppSeekhoScreen";
import VideoScreen from "../components/VideoScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SkillScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#EFEFF9",
            height: 100,
          },
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
          },
        }}
      >
        <Stack.Screen
          name="SkillScreen"
          component={SkillScreen}
          options={{
            title: "Skills",
          }}
        />
        <Stack.Screen
          name="CreateProfileScreen"
          component={CreateProfileScreen}
          options={{
            title: "Create Profile",
          }}
        />
        <Stack.Screen name="Seekho" component={SeekhoScreen} />
        <Stack.Screen name="Seekho App" component={AppSeekhoScreen} />
        <Stack.Screen
          name="Vedio"
          component={VideoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
