import React, { useState } from 'react'
import { Button, StatusBar, StyleSheet, View } from 'react-native'

const StatusBarScreen = () => {
  const [hide, setHide] = useState(false)
  const [barStyle, setBarStyle] = useState("default")
  return (
    <View style={styles.container}>
        <StatusBar 
        backgroundColor="red"
        barStyle= {barStyle}
        hidden={hide}
        />

        <Button title="Toggle Status Bar" onPress={()=> setHide(!hide)}/>
        <Button title="Update Style" onPress={()=> setBarStyle("dark-content")}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    }
})

export default StatusBarScreen
