import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs, useRouter } from 'expo-router'

export default function FeelLayout() {

     const router = useRouter();

  return (
    <Stack screenOptions={{
        headerStyle: {
            backgroundColor: "#636363" ,
          },
          headerTitleStyle:{
            color: '#fff',
          },
          headerTitleAlign: "center" ,
          headerTintColor: "#fff",
    }}>

        <Stack.Screen 
            name="index"
            options={{
                headerTitle: "Feel",
                headerRight: () => <Text className=" text-white pr-5" onPress={() => router.push('feel/new')} >Add New</Text>
            }}
        />
        <Stack.Screen 
            name="new"
            options={{
                headerTitle: "New Posts",
            }}
        />
    </Stack>
  )
}