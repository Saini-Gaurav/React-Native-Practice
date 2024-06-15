import React from 'react'
import { SectionList, View, Text } from 'react-native'

const Section = () => {
    const users = [
        {
            id: 1,
            name: "Gaurav",
            data: ["Java", "React js", "React Native"]
        },
        {
            id: 2,
            name: "Peter",
            data: ["Java", "JS", "PHP"]
        },
        {
            id: 3,
            name: "Tony",
            data: ["C", "C++", "Python"]
        },
        {
            id: 4,
            name: "Thor",
            data: ["HTML", "CSS", "Bootstrap"]
        },

    ]
  return (
    <View>
      <SectionList
      section={users}
      renderItem={({item})=> <Text style={{fontSize: 20, marginTop: 40}}>{item}</Text>}

       />
    </View>
  )
}

export default Section
