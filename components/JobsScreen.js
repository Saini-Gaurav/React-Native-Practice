import React from "react";
import { StyleSheet, View, Text } from "react-native";

const JobsScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Job Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default JobsScreen;
