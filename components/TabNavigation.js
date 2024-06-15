import React from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "./FeedScreen";
import TaskScreen from "./TaskScreen";
import JobsScreen from "./JobsScreen";
import SeekhoScreen from "./SeekhoScreen";
import ProfileScreen from "./ProfileScreen";

const { height, width } =  Dimensions.get("window");;

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;

            switch (route.name) {
              case "Feed":
                iconSource = require("../assets/Feed.png");
                break;
              case "Task":
                iconSource = require("../assets/Task.png");
                break;
              case "Jobs":
                iconSource = require("../assets/Jobs.png");
                break;
              case "Seekho":
                iconSource = require("../assets/Seekho.png");
                break;
              case "Profile":
                iconSource = require("../assets/Profile.png");
                break;
              default:
                break;
            }

            return (
              <Image
                source={iconSource}
                style={[
                  styles.icon,
                  { tintColor: focused ? "#007BFF" : "#888" },
                ]}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: width * 0.035, 
          },
          tabBarStyle: {
            height: height * 0.1, 
            paddingBottom: height * 0.02,
          },
          tabBarItemStyle: {
            paddingTop: height * 0.01,
          },
          headerShown: false,
        })}>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Task" component={TaskScreen} />
        <Tab.Screen name="Jobs" component={JobsScreen} />
        <Tab.Screen name="Seekho" component={SeekhoScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: width * 0.07, // Adjust icon size for responsiveness
    height: height * 0.035, // Adjust icon size for responsiveness
    resizeMode: "contain",
  },
});

export default TabNavigation;
