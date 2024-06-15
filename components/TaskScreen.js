import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TaskScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Task Screen</Text>
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

export default TaskScreen;
