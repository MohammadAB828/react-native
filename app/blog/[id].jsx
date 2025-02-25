import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function Blog() {

    const {id} = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center">
      <Text>About {id} Page</Text>
    </View>
  )
}