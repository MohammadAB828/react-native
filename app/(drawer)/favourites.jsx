import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Favourit() {

    const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center">
      <Text>Favourit Page</Text>
      <Button onPress={() => router.back() } title='Back' />
    </View>
  )
}