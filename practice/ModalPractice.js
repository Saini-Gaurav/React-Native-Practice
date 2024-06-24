import React, { useState } from "react";
import { SafeAreaView, Dimensions, ScrollView, FlatList } from "react-native";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Modal,
  TextInput,
} from "react-native";

const ModalPractice = () => {
  const { width, height } = Dimensions.get("window");
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const addItem = () => {
    const newItem = { id: Date.now(), text, email, address, password };
    setData([...data, newItem]);
    setModalVisible(false);
    setText("");
    setEmail("");
    setAddress("");
    setPassword("");
  };

  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <View style={{ ...styles.modal, margin: width * 0.1 }}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setModalVisible(!modalVisible)}
      >
        {!modalVisible ? (<Text style={styles.btnText}>Open Modal</Text>): (<Text style={{backgroundColor: "red", color: "white"}}>Close Modal</Text>)}
        {/* <Text style={styles.btnText}>{!modalVisible ? "Open Modal" : "Close Modal"}</Text> */}
      </TouchableOpacity>
      
        {data.map((item) => (
          <View key={item.id} style={styles.listItem}>
            <Text style={styles.itemText}>Name: {item.text}</Text>
            <Text style={styles.itemText}>Email: {item.email}</Text>
            <Text style={styles.itemText}>Address: {item.address}</Text>
            <TouchableOpacity style={styles.deleteBtn} onPress={()=>deleteItem(item.id)}>
              <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
    
      <View>
        <ScrollView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.modalCenterView}>
              <View
                style={{
                  ...styles.modalView,
                  width: width * 0.9,
                  height: height * 0.7,
                }}
              >
                <SafeAreaView>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Your Name"
                    onChangeText={(text) => setText(text)}
                    value={text}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Your Address"
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Your Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                  />
                </SafeAreaView>
                <TouchableOpacity
                  style={styles.closeBtn}
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.btnText}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addBtn} onPress={addItem}>
                  <Text style={styles.btnText}>Add Item</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    margin: 35,
  },
  btn: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
  },
  modalCenterView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  modalView: {
    margin: 20,
    height: "70%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  closeBtn: {
    backgroundColor: "red",
    height: 50,
    width: "100%",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "100%",
    margin: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      widht: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  addBtn: {
    backgroundColor: "green",
    width: "100%",
    height: 50,
    margin: 10,
    padding: 15,
    borderRadius: 5,
  },
  deleteBtn: {
    backgroundColor: "red",
    width: "100%",
    height: 50,
    margin: 10,
    padding: 15,
    borderRadius: 5,
  },
  listItem: {
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#f9f9f9",
    padding: 30,
    bottomBorderWidth: 1,
    borderColor: "#ddd",
    margin: 12,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
});

export default ModalPractice;
