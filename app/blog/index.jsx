import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Blog() {

    const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center">
      <Text>Blog Page</Text>
      <Button className="mx-3" onPress={() => router.push('/blog/1') } title='blog1' />
      <Button className="mx-3" onPress={() => router.push('/blog/2') } title='blog2' />
      <Button className="mx-3" onPress={() => router.push('/blog/3') } title='blog3' />
    </View>
  )
}