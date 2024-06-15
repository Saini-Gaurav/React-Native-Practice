import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RadioButton = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=> setSelectedRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadio === 1 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> setSelectedRadio(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadio === 2 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: "skyblue",
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioText: {
    fontSize: 25,
    color: "skyblue",
  },
  radioWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioBg: {
    height: 28,
    width: 28,
    backgroundColor: "skyblue",
    borderRadius: 20,
    margin: 4,
  },
});

export default RadioButton;
