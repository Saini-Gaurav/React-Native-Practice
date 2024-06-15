import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RadioButton = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);

  const skills = [
    {
      id: 1,
      name: "Java",
    },
    {
      id: 2,
      name: "JS",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Python",
    },
    {
      id: 5,
      name: "SQL",
    },
  ];
  return (
    <View style={styles.main}>
      {skills.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => setSelectedRadio(item.id)}
          style={styles.radioContainer}
        >
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadio === item.id ? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  }
});

export default RadioButton;
