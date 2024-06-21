import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const PlatformScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Platform : {Platform.OS}</Text>
      {Platform.OS === "android" ? (
        <View style={styles.box1}></View>
      ) : (
        <View style={styles.box2}></View>
      )}
      <Text style={styles.text}>Platform</Text>
      <Text>{JSON.stringify(Platform.constants.reactNativeVersion.patch)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
  box2: {
    height: 100,
    width: 100,
    backgroundColor: "green",
  },
  text: {
    color: Platform.OS == "android" ? "red" : "blue",
    fontSize: Platform.OS == "android" ? 20 : 30,
  }
});
export default PlatformScreen;
