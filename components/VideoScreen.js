import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TouchableOpacity, Image } from "react-native";
import { Video } from "expo-av";

const { width, height } = Dimensions.get("window");
const HEADER_HEIGHT = 70; // Height of the header
const BOTTOM_CONTAINER_HEIGHT = 70; // Height of the bottom container

const VideoScreen = ({ route }) => {
  const [text, setText] = useState(route.params.text);
  const [vedioUrl, setVedioUrl] = useState(route.params.vedioUrl);

  const clearText = () => {
    setText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.videoTitle}>{text}</Text>
        <TouchableOpacity onPress={clearText} style={styles.clearButton}>
          <Image
            source={require("../assets/Close.png")} // Use your own close icon
            style={styles.clearIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: vedioUrl }}
          isMuted={false}
          resizeMode="contain"
          shouldPlay={true}
          useNativeControls
          style={styles.video}
          onError={(error) => console.log("Video Error:", error)}
        />
      </View>
      <View style={styles.feedbackContainer}>
        <View style={styles.feedbackContent}>
          <Text style={styles.feedbackText}>Is this helpful?</Text>
          <View style={styles.feedbackButtons}>
            <TouchableOpacity style={[styles.feedbackButton, styles.yesButton]}>
              <Text style={styles.feedbackButtonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.feedbackButton, styles.noButton]}>
              <Text style={styles.feedbackButtonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
    height: HEADER_HEIGHT, // Set height of the header
  },
  videoTitle: {
    fontSize: width * 0.05,
    color: "#fff",
  },
  clearButton: {
    padding: 5,
  },
  clearIcon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: "contain",
  },
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: height - HEADER_HEIGHT - BOTTOM_CONTAINER_HEIGHT, // Set height dynamically
  },
  video: {
    width: width * 0.9,
    height: "100%", 
  },
  feedbackContainer: {
    padding: 20,
    backgroundColor: "#EFEFF9",
  },
  feedbackContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: BOTTOM_CONTAINER_HEIGHT, // Set height of the bottom container
  },
  feedbackText: {
    fontSize: width * 0.045,
    marginRight: 10,
  },
  feedbackButtons: {
    flexDirection: "row",
  },
  feedbackButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  yesButton: {
    backgroundColor: "#007BFF",
    color: "#fff",
  },
  noButton: {
    backgroundColor: "#fff",
    borderColor: "#007BFF",
    borderWidth: 1,
  },
  feedbackButtonText: {
    fontSize: width * 0.04,
    // color: "#fff",
  },
});

export default VideoScreen;
