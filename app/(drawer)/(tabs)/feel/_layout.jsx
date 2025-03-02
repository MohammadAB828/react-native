import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, Tabs, useRouter } from 'expo-router'
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function FeelLayout() {

     const router = useRouter();

  return (
    <Stack
     screenOptions={{
        headerStyle: {
            backgroundColor: "#636363" ,
          },
          headerTitleStyle:{
            color: '#fff',
          },
          headerTitleAlign: "center" ,
          headerTintColor: "#fff",
    }}
    >

        <Stack.Screen 
            name="index"
            options={{
                headerTitle: "Feel",
                headerRight: () => (<TouchableOpacity style={{flexWrap:"wrap"}} onPress={() => router.push('feel/new')}><Text className=" text-white " >Add New</Text>
                </TouchableOpacity>),
                headerLeft: () => (<TouchableOpacity>
                  <DrawerToggleButton tintColor="#fff" />
                </TouchableOpacity>)
            }}
        />
        <Stack.Screen 
            name="new"
            options={{
                headerTitle: "New Posts",
               // headerLeft: () => <DrawerToggleButton />
            }}
        />
    </Stack>
  )
}