import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function Blog() {

    const {id , name} = useLocalSearchParams();

  return (
    <>
    <Stack.Screen options={{
        headerTitle: `Blog ${id}`
    }} />
    <View className="flex-1 justify-center items-center">
      <Text>About {id} Page {name}</Text>
    </View>
    </>
  )
}