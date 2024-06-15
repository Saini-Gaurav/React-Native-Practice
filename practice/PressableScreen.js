import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const PressableScreen = () => {
  return (
    <View style={styles.main}>
        <Pressable
        // onPress={()=> console.warn("Normal on press")}
        // onLongPress={()=> console.warn("Long Press")}
        onPressIn={()=> console.warn("Press on in")}
        onPressOut={()=> console.warn("Press on out")}
        >
            <Text style={styles.pressableBtn}>Pressable</Text>
        </Pressable> 
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent: "center",
        // alignItems: "center",
    },
    pressableBtn:{
        backgroundColor: "blue",
        color: "#fff",
        padding: 15,
        margin: 10,
        textAlign: "center",   
    }
})

export default PressableScreen
