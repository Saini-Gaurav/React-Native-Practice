import React from "react";
import { StyleSheet, View, Text } from "react-native";

const FeedScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Feed Screen</Text>
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

export default FeedScreen;
