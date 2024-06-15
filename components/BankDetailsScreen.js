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
} from "react-native";

const { width } = Dimensions.get("window");

const BankDetailsScreen = () => {
  const [bankAccount, setBankAccount] = useState("");
  const [reenterBankAccount, setReenterBankAccount] = useState("");
  const [bankName, setBankName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [isContinue, setIsContinue] = useState(true);

  useEffect(() => {
    if (bankAccount && reenterBankAccount && bankName && ifscCode) {
      setIsContinue(false);
    } else {
      setIsContinue(true);
    }
  }, [bankAccount, reenterBankAccount, bankName, ifscCode]);

  const validateData = ({
    bankAccount,
    reenterBankAccount,
    bankName,
    ifscCode,
  }) => {
    if (bankAccount !== undefined) {
      const isBankAccountValid = /^[0-9]{9,18}$/.test(bankAccount);
      if (!isBankAccountValid) return "Bank Account Number is not valid";
    }
    if (
      reenterBankAccount !== undefined &&
      reenterBankAccount !== bankAccount
    ) {
      return "Bank Account Numbers do not match";
    }
    if (bankName !== undefined) {
      const isBankNameValid = /^[A-Za-z ]{2,30}$/.test(bankName);
      if (!isBankNameValid) return "Bank Name is not valid";
    }
    if (ifscCode !== undefined) {
      const isIfscCodeValid = /^[A-Za-z]{4}[0][A-Za-z0-9]{6}$/.test(ifscCode);
      if (!isIfscCodeValid) return "IFSC Code is not valid";
    }
  };

  const handleContinue = () => {
    const errorMessage = validateData({
      bankAccount,
      reenterBankAccount,
      bankName,
      ifscCode,
    });
    if (errorMessage) {
      Alert.alert(errorMessage);
    } else {
    //   navigation.navigate("Seekho");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
        <View style={styles.topSection}>
          <Text style={styles.heading}>Create Your Profile</Text>
          <View style={styles.horizontalLineContainer}>
            <View style={styles.completedLine} />
            <View style={styles.remainingLine} />
            <Image
              source={require("../assets/Layer_1.png")}
              style={[styles.iconImage, styles.iconLeft]}
            />
            <Image
              source={require("../assets/Frame (1).png")}
              style={[styles.iconImage, styles.iconRight]}
            />
          </View>
          <View style={styles.profileImageContainer}>
            <Image
              source={require("../assets/Bank.png")}
              style={styles.profileImage}
            />
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.bottomSection}>
          <View style={styles.headingContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.sectionHeading}>
                Provide Your Bank Details
              </Text>
              <Text style={styles.sectionSubHeading}>
                Your earnings will be transferred to this bank account
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require("../assets/Vector.png")}
                style={styles.headingImage}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Account Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Account Number"
            value={bankAccount}
            onChangeText={setBankAccount}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Re-enter Account Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Re-enter Account Number"
            value={reenterBankAccount}
            onChangeText={setReenterBankAccount}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Bank Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Bank Name"
            value={bankName}
            onChangeText={setBankName}
          />
          <Text style={styles.label}>IFSC Code</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter IFSC Code"
            value={ifscCode}
            onChangeText={setIfscCode}
          />

          <TouchableOpacity
            style={[styles.button, isContinue && styles.disabledButton]}
            disabled={isContinue}
            onPress={handleContinue}
          >
            <Text style={styles.buttonText}>Verify bank details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    height: 290,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#EFEFF9",
    paddingTop: 30,
    width: "100%",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 60,
  },
  horizontalLineContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    marginBottom: 20,
    justifyContent: "space-between",
    position: "relative",
    height: 5,
  },
  completedLine: {
    position: "absolute",
    left: "10%",
    height: 5,
    backgroundColor: "#007BFF",
    width: "65%", // 65% width to represent progress bar at 65%
  },
  remainingLine: {
    position: "absolute",
    left: "75%",
    height: 5,
    backgroundColor: "#CCCCCC",
    width: "25%", // remaining 25% in gray
  },
  iconImage: {
    width: 40,
    height: 35,
    resizeMode: "contain",
  },
  iconLeft: {
    position: "absolute",
    left: "65%", // 65% from left to position it at 65% of the horizontal line
    bottom: 5,
  },
  iconRight: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  profileImageContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 200,
    height: 120,
    resizeMode: "cover",
  },
  bottomSection: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 16,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headingImage: {
    width: 30,
    height: 20,
    marginRight: 10,
    marginBottom: 40,
    resizeMode: "contain",
  },
  sectionSubHeading: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
  },
  label: {
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderWidth: 0,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 10,
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
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

export default BankDetailsScreen;
