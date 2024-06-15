import React, { useState } from 'react'
import { StyleSheet, View, Modal, Button, Text } from 'react-native'

const ModalScreen = () => {
   
  const [showModal, setShowModal] = useState(false)
  return (
    <View style={styles.main}>
        <Modal
        transparent={true}
        visible={showModal}
        animationType='slide'
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Modal Screen</Text>
                    <Button title="Close Modal" onPress={()=> setShowModal(false)}/>
                </View>
            </View>
        </Modal>
        <View style={styles.buttonView}>
            <Button title="Show Modal" onPress={()=> setShowModal(true)}/>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    buttonView : {
        flex: 1,
        justifyContent: "flex-end",
        margin: 10,
        padding: 10,
    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    modalView: {
        backgroundColor: "#fff",
        padding: 100,
        shadowColor: "black",
        elevation: 5,
        borderRadius: 15,
    },
    modalText: {
        fontSize: 20,
        marginBottom: 20,
    }
})
export default ModalScreen
