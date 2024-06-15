import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("window");

const SeekhoScreen = ({navigation}) => {
  const [learn, setLearn] = useState([
    {
      id: 1,
      image: require("../assets/Skill-1.png"),
      name: "App Seekho",
      checked: false,
    },
    {
      id: 2,
      image: require("../assets/Skill-2.png"),
      name: "Cleaning",
      checked: false,
    },
    {
      id: 3,
      image: require("../assets/Skill-3.png"),
      name: "Warehouse",
      checked: false,
    },
    {
      id: 4,
      image: require("../assets/Skill-4.png"),
      name: "Event jobs",
      checked: false,
    },
  ]);

  const handleNavigation = ()=>{
    navigation.navigate('Seekho App')
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Coins</Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/coins.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/mainImage.png")}
          style={styles.mainImage}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.grid}>
          {learn.map((learnItem) => (
            <TouchableOpacity key={learnItem.id} style={styles.gridItem} onPress={handleNavigation}>
              <Image source={learnItem.image} style={styles.image} />
              <Text style={styles.gridText}>{learnItem.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.additionalImageContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/leaderboard.png")}
            style={styles.additionalImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: height * 0.01,
  },
  imageContainer: {
    backgroundColor: "#EFEFF9",
    height: height * 0.25,
    padding: width * 0.01,
  },
  headerText: {
    fontSize: width * 0.05,
    paddingBottom: height * 0.022,
  },
  icon: {
    resizeMode: "contain",
  },
  mainImage: {
    width: "100%",
    height: height * 0.15,
    resizeMode: "contain",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: -height * 0.15,
  },
  gridItem: {
    width: width * 0.4,
    height: height * 0.2,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    margin: width * 0.02,
    borderRadius: width * 0.04,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "60%",
    resizeMode: "contain",
  },
  gridText: {
    fontSize: width * 0.05,
    marginTop: height * 0.008,
    textAlign: "center",
  },
  additionalImageContainer: {
    position: "absolute",
    top: height * 0.65,
    right: 0,
    padding: width * 0.04,
    marginTop: height * 0.01,
  },
  additionalImage: {
    width: width * 0.33,
    height: height * 0.18,
    resizeMode: "contain",
  },
});

export default SeekhoScreen;
