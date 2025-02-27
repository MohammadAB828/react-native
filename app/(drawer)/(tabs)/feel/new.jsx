import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router';

export default function NewPage() {

    const router = useRouter();

  return (
    <>
    <Stack.Screen
        options={{
            headerTitle:"New Posts"
        }}
    />
    <View className="flex-1 justify-center items-center">
      <Text>New Page</Text>
      <Button onPress={() => router.back() } title='Back' />
    </View>
    </>
  )
}