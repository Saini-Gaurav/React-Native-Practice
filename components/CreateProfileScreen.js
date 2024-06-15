import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";

const { width } = Dimensions.get("window");

const CreateProfileScreen = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [isContinue, setIsContinue] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (name && state && pincode && address) {
      setIsContinue(false);
    } else {
      setIsContinue(true);
    }
  }, [name, state, pincode, address]);

  const selectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need camera roll permission to upload images."
      );
    } else {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        setProfileImage(result.uri);
      }
    }
    setModalVisible(false);
  };

  const captureImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need camera permission to take photos."
      );
    } else {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setProfileImage(result.uri);
      }
    }
    setModalVisible(false);
  };

  const validateData = ({ name, state, pincode, address }) => {
    if (name !== undefined) {
      const isNameValid = /^[A-Za-z ]{2,16}$/.test(name);
      if (!isNameValid) return "Name is not valid";
    }
    if (state !== undefined) {
      const isStateValid = /^[A-Za-z ]{2,16}$/.test(state);
      if (!isStateValid) return "State is not valid";
    }
    if (pincode !== undefined) {
      const isPincodeValid = /^[0-9]{6}$/.test(pincode);
      if (!isPincodeValid) return "Pincode is not valid";
    }
    if (address !== undefined) {
      const isAddressValid = /^[A-Za-z0-9\s,.'-]{8,100}$/.test(address);
      if (!isAddressValid) return "Address is not valid";
    }
  };

  const handleContinue = () => {
    const errorMessage = validateData({ name, state, pincode, address });
    if (errorMessage) {
      Alert.alert(errorMessage);
    } else {
      navigation.navigate('Seekho');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topSection}>
          <Text style={styles.heading}>Create Your Profile</Text>
          <View style={styles.horizontalLineContainer}>
            <Image
              source={require("../assets/Layer_1.png")}
              style={[styles.iconImage, styles.iconLeft]}
            />
            <View style={styles.horizontalLine} />
            <Image
              source={require("../assets/Frame (1).png")}
              style={[styles.iconImage, styles.iconRight]}
            />
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={styles.profileImageContainer}>
                <Image
                  source={
                    profileImage
                      ? { uri: profileImage }
                      : require("../assets/Ellipse 10.png")
                  }
                  style={styles.profileImage}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.addPhotoContainer}
            >
              <Text style={styles.addPhotoText}>Add Profile Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cameraButton}
              onPress={() => setModalVisible(true)}
            >
              <Icon name="photo-camera" size={25} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.label}>What's your Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name"
            value={name}
            onChangeText={setName}
          />
          <View style={styles.row}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>State</Text>
              <TextInput
                style={styles.input}
                placeholder="State"
                value={state}
                onChangeText={setState}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Pincode</Text>
              <TextInput
                style={styles.input}
                placeholder="Pincode"
                value={pincode}
                onChangeText={setPincode}
                keyboardType="numeric"
              />
            </View>
          </View>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />

          <TouchableOpacity
            style={[styles.button, isContinue && styles.disabledButton]}
            disabled={isContinue}
            onPress={handleContinue}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Choose an option</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={selectImage}
            >
              <Text style={styles.modalButtonText}>Upload Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={captureImage}
            >
              <Text style={styles.modalButtonText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  topSection: {
    height: 320,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#EFEFF9",
    paddingTop: 40,
    width: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  horizontalLineContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
    justifyContent: "space-between",
    position: "relative",
  },
  horizontalLine: {
    position: "absolute",
    bottom: 0,
    left: 25,
    right: 25,
    height: 5,
    backgroundColor: "#ccc",
  },
  iconImage: {
    width: 50,
    height: 45,
    resizeMode: "contain",
  },
  iconLeft: {
    marginBottom: 6,
  },
  iconRight: {
    marginBottom: -10,
  },
  imageContainer: {
    position: "absolute",
    bottom: -60,
    alignItems: "center",
    width: "100%",
  },
  profileImageContainer: {
    position: "relative",
    alignItems: "center",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  addPhotoContainer: {
    position: "absolute",
    bottom: -5,
    alignItems: "center",
    width: "100%",
  },
  addPhotoText: {
    alignItems: "center",
  },
  cameraButton: {
    position: "absolute",
    right: "25%",
    top: "50%",
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 8,
  },
  bottomSection: {
    marginTop: 100,
    width: "100%",
    paddingHorizontal: 16,
  },
  label: {
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputGroup: {
    flex: 1,
    marginRight: 8,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButton: {
    width: "100%",
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#007BFF",
    marginBottom: 10,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default CreateProfileScreen;
