import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import CheckBox from "react-native-check-box";

const { width, height } = Dimensions.get("window");

const SkillScreen = ({ navigation }) => {
  const [skills, setSkills] = useState([
    { id: 1, image: require("../assets/EstatesCard.png"), name: "Shipping", checked: false },
    { id: 2, image: require("../assets/Vertical-Full.png"), name: "Cleaner", checked: false },
    { id: 3, image: require("../assets/Vertical-Full1.png"), name: "Picker", checked: false },
    { id: 4, image: require("../assets/Vertical-Full3.png"), name: "Forklift Operator", checked: false },
    { id: 5, image: require("../assets/EstatesCard.png"), name: "Shipping ", checked: false },
    { id: 6, image: require("../assets/Vertical-Full.png"), name: "Cleaner ", checked: false },
    { id: 7, image: require("../assets/Vertical-Full1.png"), name: "Picker ", checked: false },
    { id: 8, image: require("../assets/Vertical-Full3.png"), name: "Forklift Operator", checked: false },
  ]);

  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  useEffect(() => {
    const anyChecked = skills.some((skill) => skill.checked);
    setIsContinueDisabled(!anyChecked);
  }, [skills]);

  const handleCheckBoxClick = (id) => {
    const updatedSkills = skills.map((skill) =>
      skill.id === id ? { ...skill, checked: !skill.checked } : skill
    );
    setSkills(updatedSkills);
  };

  const handleContinuePress = () => {
    if (!isContinueDisabled) {
      navigation.navigate('CreateProfileScreen');
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/headerImage.png")}
        style={styles.headerImage}
      />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Select Your Skill</Text>
        <TouchableOpacity>
          <Image
            source={require("../assets/Vector.jpg")}
            style={styles.microphoneImage}
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.grid}>
          {skills.map((skill) => (
            <TouchableOpacity
              key={skill.id}
              style={[styles.gridItem, skill.checked && styles.gridItemSelected]}
              onPress={() => handleCheckBoxClick(skill.id)}
            >
              <Image source={skill.image} style={styles.image} />
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={skill.checked}
                  onClick={() => handleCheckBoxClick(skill.id)}
                  isChecked={skill.checked}
                  checkBoxColor={skill.checked ? "green" : undefined} 
                  style={{
                    backgroundColor: skill.checked ? "white" : "transparent", // Background color of the checkbox
                  }}
                />
              </View>
              <Text style={styles.gridText}>{skill.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[styles.button, isContinueDisabled && styles.disabledButton]}
        disabled={isContinueDisabled}
        onPress={handleContinuePress}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  headerImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridItem: {
    width: width * 0.4,
    height: height * 0.25,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "transparent",
  },
  gridItemSelected: {
    borderColor: "green",
    backgroundColor: "#fff", // Background color for the selected item
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "contain",
  },
  gridText: {
    fontSize: 18,
    marginTop: 8,
    textAlign: "center",
  },
  checkboxContainer: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
    marginBottom: 32,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#CCCCCC",
  },
});

export default SkillScreen;
