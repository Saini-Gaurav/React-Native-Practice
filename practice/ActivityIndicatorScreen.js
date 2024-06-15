import React, { useState } from 'react'
import { View, ActivityIndicator,StyleSheet, Button } from 'react-native'

const ActivityIndicatorScreen = () => {
  const [show, setShow] = useState(false)

  const displayLoader = ()=>{
    setShow(true);

    setTimeout(()=>{
      setShow(false);
    }, 4000);
  }
  return (
    <View style={styles.main}>
        <ActivityIndicator size={50} color="gold" animating={show}/>      
        {/* <ActivityIndicator size={50} color="gold" animating={false}/>       */}
        {show ? <ActivityIndicator size={50} color="gold" /> : null}
        <Button title="Show Loader" onPress={displayLoader} />
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
}) 

export default ActivityIndicatorScreen
