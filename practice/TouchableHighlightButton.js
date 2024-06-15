import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const TouchableHighlightButton = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}>Button</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 40,
  },
  button: {
    backgroundColor: "#bbb",
    color: "#fff",
    textAlign: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: "black",
    elevation: 5,
    opacity: 1,
  },
  success : {
    backgroundColor: "green",
  },
  primary: {
    backgroundColor: "blue",
  },
});

export default TouchableHighlightButton;
