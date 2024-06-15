import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Grid = () => {
  return (
    <View>
      <Text style={{margin: 50, }}>Grid with Dynamic Data</Text>
      <View style={styles.gridContainer}>
        <Text style={styles.item}>Sam</Text>
        <Text style={styles.item}>Sam</Text>
        <Text style={styles.item}>Sam</Text>
        <Text style={styles.item}>Sam</Text>
        <Text style={styles.item}>Sam</Text>
        <Text style={styles.item}>Sam</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    gridContainer : {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        marginLeft: 30,
    },
    item: {
        fontSize: 16,
        backgroundColor: "blue",
        color: "#fff",
        margin: 20,
        padding: 5,
        width: 120,
        height: 120,
        textAlignVertical: "center",
        textAlign: "center"
    }
})

export default Grid;
