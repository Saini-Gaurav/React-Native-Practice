import { StatusBar } from "expo-status-bar";
import Login from "./components/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./components/SignUp";

import SkillScreen from "./components/SkillScreen";
import { SafeAreaView, View } from "react-native";
import CreateProfileScreen from "./components/CreateProfileScreen";
import MainNaivigator from "./navigate/MainNaivigator";
import SeekhoScreen from "./components/SeekhoScreen";
import BankDetailsScreen from "./components/BankDetailsScreen";
import TabNavigation from "./components/TabNavigation";
import Grid from "./practice/Grid";
import Section from "./practice/Section";
import ResponsiveLayout from "./practice/ResponsiveLayout";
import TouchableHighlightButton from "./practice/TouchableHighlightButton";
import RadioButton from "./practice/RadioButton";

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="SignUp">
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //     <Stack.Screen name="SkillScreen" component={SkillScreen} />
    //   </Stack.Navigator>
    //   <StatusBar style="auto" />
    // </NavigationContainer>
      // <SkillScreen />
      // <CreateProfileScreen />
      // <MainNaivigator />
      // <BankDetailsScreen />
      // <SeekhoScreen />
      // <TabNavigation />
      // <Grid />
      // <Section />
      // <ResponsiveLayout />
      // <TouchableHighlightButton />
      <RadioButton />

  );
}
